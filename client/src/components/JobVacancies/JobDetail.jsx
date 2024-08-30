import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Lodder from '../Authentication/components/Lodding/LodderFile';
function JobDetails() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const jobId = query.get('id'); // Extract job ID from query parameter
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      if (!jobId) {
        setError("Job ID is missing");
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
        console.log(data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  return (
    <div>
      {loading ? (
      <div className="flex justify-center items-center min-h-screen">
              <Lodder />
            </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : job ? (
       <div className=''>
  <div className="bg-white overflow-hidden shadow rounded-lg border">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        {job[0].job_title}
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        {job[0].company_name}
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

  <form>
   <h1 className='font-bold mt-10 text-center text-xl'>Fill Form To Apply</h1>
  <div className=' mt-5'>
     <div className="mb-5  ml-40 w-96">
              <label
                htmlFor="resume"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Upload Your Resume (PDF)
              </label>
              <input
                type="file"
                name="resume"
                id="resume"
                accept=".pdf" // Restrict file input to PDFs only
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
               <div className="mb-5  ml-40">
            <label
              htmlFor="college"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Why should you be hired for this role?
            </label>
            <input
              type="text"
              name="college"
              id="college"
              placeholder="Enter here"
              className="w-[600px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
            </div>
            <div className='flex justify-center'>
            <button className='bg-black text-white mb-10 px-5 py-2 rounded-lg '>Submit</button>
            </div>
            </div>
  </form>
</div>

      ) : (
        <p>No job found</p>
      )}
    </div>
  );
}

export default JobDetails;
