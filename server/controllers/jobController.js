const db = require('../Database/database');

// Get Jobs with Sorting and Filtering by employment_type
const getJobs = async (req, res) => {
  const jobId = req.query.id;  // Fetch specific job if job_id is provided
  const sortBy = req.query.sort_by || 'salary_range'; // Default sort by salary_range
  const order = req.query.order || 'ASC'; // Default order (ASC or DESC)
  const employmentType = req.query.employment_type; // Filter by employment_type (optional)

  try {
    let result;

    // Valid sort fields (employment_type, salary_range, etc.)
    const validSortFields = [
      'salary_range', 
      'employment_type', 
      'job_posted_date', 
      'experience_required'
    ]; 
    const validOrderFields = ['ASC', 'DESC'];
    
    // Employment type validation (valid values)
    const validEmploymentTypes = ['Part-time', 'Full-time', 'Contract', 'Internship'];

    // Validate sorting fields
    if (!validSortFields.includes(sortBy) || !validOrderFields.includes(order.toUpperCase())) {
      return res.status(400).json({ message: 'Invalid sort_by or order value' });
    }

    // Validate employment_type (if provided)
    if (employmentType && !validEmploymentTypes.includes(employmentType)) {
      return res.status(400).json({ message: 'Invalid employment_type value' });
    }

    if (jobId) {
      // Fetch a specific job by job_id (no sorting for individual job fetch)
      result = await db.query('SELECT * FROM job_vacancies WHERE job_id = $1', [jobId]);

      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Job not found' });
      }
    } else {
      // Base query to fetch all jobs
      let query = 'SELECT * FROM job_vacancies';
      let queryParams = [];

      // Add employment_type filter if provided
      if (employmentType) {
        query += ' WHERE employment_type = $1';
        queryParams.push(employmentType);
      }

      // Add sorting logic
      if (sortBy === 'employment_type') {
        const customEmploymentOrder = `
          CASE
            WHEN employment_type = 'Full-time' THEN 1
            WHEN employment_type = 'Part-time' THEN 2
            WHEN employment_type = 'Contract' THEN 3
            WHEN employment_type = 'Internship' THEN 4
            ELSE 5
          END
        `;
        query += ` ORDER BY ${customEmploymentOrder} ${order}`;
      } else {
        query += ` ORDER BY ${sortBy} ${order}`;
      }

      // Execute the query
      result = await db.query(query, queryParams);
    }

    // Send the filtered and sorted jobs
    res.json(result.rows);
  } catch (error) {
    console.error('Error occurred while getting jobs:', error.message);
    res.status(500).json({ msg: 'Error occurred while getting jobs' });
  }
};

module.exports = { getJobs };
