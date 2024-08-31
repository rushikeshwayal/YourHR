import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Lodder from '../Authentication/components/Lodding/LodderFile';
import { useAuth } from '../Authentication/components/firebase/firebase';

function JobDetails() {
  const { currentUser } = useAuth();
  const userEmail = currentUser?.email || '';
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const jobId = query.get('id'); // Extract job ID from query parameter
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    email: userEmail,
    resume: null, // Store file object here
    why_hired: '',
    job_id: jobId,
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      if (!jobId) {
        setError('Job ID is missing');
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`http://localhost:3000/job?id=${jobId}`);
        if (!response.ok) {
          throw new Error('Network Error');
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setValues({
        ...values,
        resume: e.target.files[0], // Update resume with selected file
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('email', values.email);
      formData.append('resume', values.resume);
      formData.append('why_hired', values.why_hired);
      formData.append('job_id', values.job_id);

      const response = await fetch("http://localhost:3000/post/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form submitted successfully:", data);
        // Reset form or display success message as needed
      } else {
        console.error("Error submitting form:", response.statusText);
        // Handle error response as needed
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle network or other errors
    }
    alert('Form Submitted');
  };
  console.log(job)

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Lodder />
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : job ? (
        <div>
        
          <div className="bg-white overflow-hidden shadow rounded-lg border">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {job[0].job_title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {job.company_name}
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <div className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Job Description
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job[0].job_description}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Education Required
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job[0].education_required}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Employment Type
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job[0].employment_type}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job[0].location}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Salary Range
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job[0].salary_range}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Job Status
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job[0].job_status}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Job Posted Date
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job[0].job_posted_date}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Application Deadline
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job[0].application_deadline}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Benefits
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job[0].benefits}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Experience Required
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {job[0].experience_required}
                  </dd>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <h1 className="font-bold mt-10 text-center text-xl">Fill Form To Apply</h1>
            <div className="mt-5">
              <div className="mb-5 ml-40 w-96">
                <label
                  htmlFor="resume"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-5 ml-40 w-96">
                <label
                  htmlFor="why_hired"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Why should we hire you?
                </label>
                <textarea
                  id="why_hired"
                  name="why_hired"
                  rows="4"
                  className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg"
                  placeholder="Write your answer here..."
                  value={values.why_hired}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <p>No job details available.</p>
      )}
    </div>
  );
}

export default JobDetails;
