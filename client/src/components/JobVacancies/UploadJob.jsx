import { useState } from 'react';
import NavToHome from '../Home/NavToHomeBlack';
import Footer from '../Home/Footer';
import { useAuth } from '../Authentication/components/firebase/firebase';

function UploadJob() {
     const { currentUser } = useAuth();
  const userEmail = currentUser?.email || '';
const [value, setValue] = useState({
    job_title: '',
    company_name: '',
    location: '',
    employment_type: '',
    job_description: '',
    jobSalary: '',
    salary_range: '',
    skills_required: '',
    experience_required: '',
    education_required: '',
    benefits: '',
   application_url: '',
   contact_email: userEmail,
});   

  return (
    <div>
    <div className='bg-gradient-to-b from-green-500 to-green-0 h-40'>
      <NavToHome />
      </div>
      <div className="max-w-screen-lg mx-auto p-6 md:p-8 bg-gray-200 rounded-lg shadow-md mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 p-10 text-gray-900">
            <p className="mt-4 text-sm font-medium uppercase tracking-wider">
              Post a Job
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Upload <span className="text-indigo-600">Job</span>
            </h3>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              Use this form to provide the necessary details for the job posting. Fill in all the fields accurately to make the job listing more appealing to potential candidates.
            </p>
          </div>
          <div className="md:col-span-8 mt-5 md:mt-0">
            <form className="p-6 bg-white rounded-lg shadow-inner">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-900">
                    Job Title
                  </label>
                  <input
                    required
                    type="text"
                    id="jobTitle"
                  value={value.job_title}
                    placeholder="Enter Title"
                    className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-900">
                    Company Name
                  </label>
                  <input
                    required
                    type="text"
                    id="companyName"
                    value={value.company_name}
                    placeholder="Enter Company Name"
                    className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="jobLoc" className="block text-sm font-medium text-gray-900">
                    Job Location
                  </label>
                  <input
                    required
                    type="text"
                    id="jobLoc"
                    value={value.location}
                    placeholder="Enter Location"
                    className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="employment_type" className="block text-sm font-medium text-gray-900">
                    Job Type
                  </label>
                  <select
                    required
                    id="employment_type"
                    value={value.employment_type}

                    className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                  >
                    <option>Per Hour</option>
                    <option>Per Project</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="jobExp" className="block text-sm font-medium text-gray-900">
                    Experience Required
                  </label>
                  <input
                    required
                    type="number"
                    id="jobExp"
                    placeholder="Enter Experience Required"
                    className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="jobSalary" className="block text-sm font-medium text-gray-900">
                    Salary
                  </label>
                  <input
                    required
                    type="number"
                    id="jobSalary"
                    value={value.salary_range}
                    placeholder="Enter Salary Range"
                    className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                 <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                     readOnly
                    value={value.contact_email}
                    placeholder="Enter Email"
                    className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                    <div>
                  <label htmlFor="jobStatus" className="block text-sm font-medium text-gray-900">
                    Job Status
                  </label>
                  <select
                    required
                    id="jobStatus"
                    value={value.job_status}
                    className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                  >
                    <option>Open</option>
                    <option>Closed</option>
                  </select>
                </div>

              </div>
              <div className="mt-6">
                <label htmlFor="jobDesc" className="block text-sm font-medium text-gray-900">
                  Job Description
                </label>
                <textarea
                  required
                  id="jobDesc"
                  placeholder="Enter Description"
                  rows="5"
                  value={value.job_description}
                  className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                />
              </div>
                <div className="mt-6">
                <label htmlFor="jobEdu" className="block text-sm font-medium text-gray-900">
                  Education Required
                </label>
                <textarea
                  required
                  id="jobEdu"
                  value={value.education_required}
                  placeholder="Enter Education Required"
                  rows="5"
                  className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mt-6">
                <label htmlFor="jobSkills" className="block text-sm font-medium text-gray-900">
                  Skills Required
                </label>
                <textarea
                  required
                  id="jobSkills"
                  value={value.skills_required}
                  placeholder="Enter Required Skills"
                  rows="3"
                  className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mt-6">
                <label htmlFor="benefits" className="block text-sm font-medium text-gray-900">
                  Benefits
                </label>
                <textarea
                  required
                  id="benefits"
                  value={value.benefits}
                  placeholder="Enter Benefits"
                  rows="3"
                  className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                />
              </div>
               <div>
                  <label htmlFor="weblink" className="block text-sm font-medium text-gray-900">
                    Website Link
                  </label>
                  <input
                    required
                    type="url"
                    id="weblink"
                    value={value.application_url}
                    placeholder="Enter url"
                    className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Upload Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="max-w-screen-lg mx-auto mt-8" />
      <Footer />
    </div>
  );
}

export default UploadJob;
