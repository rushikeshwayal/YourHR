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
    const validEmploymentTypes = ['Per Hour', 'Per Project'];

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
            WHEN employment_type = 'Per Project' THEN 1
            WHEN employment_type = 'Per Hour' THEN 2
            ELSE 3
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

const postJob = async (req, res) => {
    // Destructure request body
    const {
        jobTitle,
        companyName,
        location,
        employmentType,
        jobDescription,
        salaryRange,
        skillsRequired,
        experienceRequired,
        educationRequired,
        benefits,
        applicationDeadline,
        jobStatus,
        contactEmail,
        applicationUrl
    } = req.body;

    let deadline;

    // Validate applicationDeadline
    if (applicationDeadline) {
        const parsedDate = new Date(applicationDeadline);
        if (!isNaN(parsedDate.getTime())) {
            // If valid, convert to ISO format
            deadline = parsedDate.toISOString();
        } else {
            // If invalid, return an error response
            return res.status(400).json({ success: false, msg: 'Invalid application deadline format' });
        }
    } else {
        // Handle case where applicationDeadline is not provided
        return res.status(400).json({ success: false, msg: 'Application deadline is required' });
    }

    try {
        const result = await db.query(
            `INSERT INTO job_vacancies (
                job_title, company_name, location, employment_type, job_description, 
                salary_range, skills_required, experience_required, education_required, 
                benefits, application_deadline, job_posted_date, job_status, contact_email, 
                application_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), $12, $13, $14) 
            RETURNING *`,
            [
                jobTitle,
                companyName,
                location,
                employmentType,
                jobDescription,
                salaryRange,
                skillsRequired,
                experienceRequired,
                educationRequired,
                benefits,
                deadline,
                jobStatus,
                contactEmail,
                applicationUrl
            ]
        );

        res.status(201).json({ success: true, job: result.rows[0] });
    } catch (error) {
        console.error('Error occurred while posting job:', error.message);
        res.status(500).json({ success: false, msg: 'Error occurred while posting job', error: error.message });
    }
};



module.exports = { getJobs, postJob };
