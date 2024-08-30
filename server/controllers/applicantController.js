const db = require('../Database/database');

const getApplicants = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM user_details');
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No applicants found' });
    }
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: 'Error occurred while fetching data' });
  }
};

const postApplicant = async (req, res) => {
  const { full_name, phone, email, college, collegeStatus, area, city, state, postCode, skills } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const result = await db.query(
      'INSERT INTO user_details (full_name, phone_number, email_address, college_name, college_status, address_area, address_city, address_state, post_code, skills) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', 
      [full_name, phone, email, college, collegeStatus, area, city, state, postCode, skills]
    );
    res.status(201).json(result);
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Error inserting data' });
  }
};

module.exports = { getApplicants, postApplicant };
