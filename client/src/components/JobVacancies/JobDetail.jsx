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
  const [apply, setApply] = useState([]); // Initialize apply as an empty array
  const [values, setValues] = useState({
    email: userEmail,
    resume: null, // Store file object here
    why_hired: '',
    job_id: jobId,
  });

  // Fetch job details
  useEffect(() => {
    const fetchJobDetails = async () => {
      if (!jobId) {
        setError('Job ID is missing');
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`https://your-hr-rosy.vercel.app/job?id=${jobId}`);
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

  // Fetch apply details
  useEffect(() => {
    const fetchApplyDetails = async () => {
      try {
        const response = await fetch(`https://your-hr-rosy.vercel.app/apply`);
        if (!response.ok) {
          throw new Error('Network Error');
        }
        const data = await response.json();
        setApply(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchApplyDetails();
  }, [jobId]); // Add jobId as a dependency to trigger on jobId change

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

      const response = await fetch("https://your-hr-rosy.vercel.app/post/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form submitted successfully:", data);
        alert('Form Submitted');
        // Reset form or display success message as needed
      } else {
        console.error("Error submitting form:", response.statusText);
        alert('Error submitting form');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert('Error submitting form');
    }
   window.location.reload(false);
  };

  // Check if the current user has already applied for this job
  const hasApplied = apply.some(
    (applyItem) => applyItem.email === userEmail && applyItem.job_id.toString() === jobId
  );

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
          {!hasApplied && ( // Show form only if user hasn't applied
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mt-8">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                    readOnly
                  onChange={handleChange}

                  required
                  className="mt-1 block w-full rounded-md  shadow-sm  border-none focus:border-none sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                  Resume (PDF)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf"
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="why_hired" className="block text-sm font-medium text-gray-700">
                  Why Should You Be Hired?
                </label>
                <textarea
                  id="why_hired"
                  name="why_hired"
                  value={values.why_hired}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Apply
                </button>
              </div>
            </form>
          )}
          {hasApplied && (
            <p className="mt-6 text-green-600">You have already applied for this job.</p>
          )}
        </div>
      ) : (
        <p>No job details found.</p>
      )}
    </div>
  );
}

export default JobDetails;
