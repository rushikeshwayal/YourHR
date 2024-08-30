const db = require('../database/database');

const getJobs = async (req, res) => {
  const jobId = req.query.id;

  try {
    let result;
    if (jobId) {
      result = await db.query('SELECT * FROM job_vacancies WHERE job_id = $1', [jobId]);

      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Job not found' });
      }
    } else {
      result = await db.query('SELECT * FROM job_vacancies');
    }

    res.json(result.rows);
  } catch (error) {
    console.error('Error occurred while getting jobs:', error.message);
    res.status(500).json({ msg: 'Error occurred while getting jobs' });
  }
};

module.exports = { getJobs };
