import { useState, useEffect } from 'react';
import NavToHomeBlack from '../Home/NavToHomeBlack';
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
        // jobSalary: '',
        salary_range: '',
        skills_required: '',
        experience_required: '',
        education_required: '',
        benefits: '',
        application_url: '',
        application_deadline: '',
        contact_email: userEmail,
    });

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const handleChange = (event) => {
        const { id, value } = event.target;
        setValue((prevValue) => ({
            ...prevValue,
            [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitting job data:', value);

        // Validate required fields
        const requiredFields = [
            'job_title',
            'company_name',
            'location',
            'employment_type',
            'job_description',
            'salary_range',
            'experience_required',
            'education_required',
            'skills_required',
            'application_url',
            'application_deadline'
        ];
        for (const field of requiredFields) {
            if (!value[field]) {
                setMessage(`Please fill in all required fields: ${field}`);
                return;
            }
        }

        setIsLoading(true); // Set loading state

        try {
            const response = await fetch('https://your-hr-rosy.vercel.app/post/job', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(value), // Sending job data
            });

            if (!response.ok) {
                // Server returned a non-200 response code
                const errorData = await response.json();
                throw new Error(errorData.msg || 'Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);

            // Check if the server returned a success message
            if (data.success) {
                setValue({
                    job_title: '',
                    company_name: '',
                    location: '',
                    employment_type: '',
                    job_description: '',
                    salary_range: '',
                    skills_required: '',
                    experience_required: '',
                    education_required: '',
                    benefits: '',
                    application_url: '', // Make sure to reset this field
                    application_deadline: '',
                    job_posted_date: '', // Additional fields, if necessary
                    job_status: '', // Additional fields, if necessary
                    contact_email: userEmail, // Reset email to current user
                });
                setMessage('Job posted successfully!');
            } else {
                // Server returned a failure message
                setMessage(data.msg || 'Something went wrong, please try again.');
            }
        } catch (error) {
            // Handle error here
            console.error('Error:', error);
            setMessage(error.message || 'An error occurred while posting the job. Please try again.');
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <div>
            <div className='bg-gradient-to-b from-green-500 to-green-0 h-40'>
                <NavToHomeBlack />
            </div>
            {message && (
                <p className="mt-4 text-green-700 bg-green-100 border border-green-400 rounded-lg p-2">
                    {message}
                </p>
            )}

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
                        <form className="p-6 bg-white rounded-lg shadow-inner" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="job_title" className="block text-sm font-medium text-gray-900">
                                        Job Title
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="job_title"
                                        value={value.job_title}
                                        onChange={handleChange}
                                        placeholder="Enter Title"
                                        className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company_name" className="block text-sm font-medium text-gray-900">
                                        Company Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="company_name"
                                        value={value.company_name}
                                        onChange={handleChange}
                                        placeholder="Enter Company Name"
                                        className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-900">
                                        Job Location
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="location"
                                        value={value.location}
                                        onChange={handleChange}
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
                                        onChange={handleChange}
                                        className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                                    ><option value="">Select Job Type</option>
                                        <option value="Per Hour">Per Hour</option>
                                        <option value="Per Project">Per Project</option>

                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <label htmlFor="experience_required" className="block text-sm font-medium text-gray-900">
                                        Experience Required
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="experience_required"
                                        value={value.experience_required}
                                        onChange={handleChange}
                                        placeholder="Enter Experience Required"
                                        className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="salary_range" className="block text-sm font-medium text-gray-900">
                                        Salary
                                    </label>
                                    <input
                                        required
                                        type="number"
                                        id="salary_range"
                                        value={value.salary_range}
                                        onChange={handleChange}
                                        placeholder="Enter Salary Range"
                                        className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact_email" className="block text-sm font-medium text-gray-900">
                                        Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        id="contact_email"
                                        readOnly
                                        value={value.contact_email}
                                        placeholder="Enter Email"
                                        className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="job_status" className="block text-sm font-medium text-gray-900">
                                        Job Status
                                    </label>
                                    <select
                                        required
                                        id="job_status"
                                        value={value.job_status}
                                        onChange={handleChange}
                                        className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                                    >
                                        <option value="">Select Job Status</option>
                                        <option value="Open">Open</option>
                                        <option value="Closed">Closed</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="application_url" className="block text-sm font-medium text-gray-900">
                                        Website Link
                                    </label>
                                    <input
                                        required
                                        type="url"
                                        id="application_url"
                                        value={value.application_url}
                                        onChange={handleChange}
                                        placeholder="Enter url"
                                        className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="application_deadline" className="block text-sm font-medium text-gray-900">
                                        Deadline
                                    </label>
                                    <input
                                        required
                                        type="date"
                                        id="application_deadline"
                                        value={value.application_deadline} // Make sure you're using formData.application_deadline here
                                        onChange={handleChange}
                                        className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="job_description" className="block text-sm font-medium text-gray-900">
                                    Job Description
                                </label>
                                <textarea
                                    required
                                    id="job_description"
                                    placeholder="Enter Description"
                                    rows="5"
                                    value={value.job_description}
                                    onChange={handleChange}
                                    className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="education_required" className="block text-sm font-medium text-gray-900">
                                    Education Required
                                </label>
                                <textarea
                                    required
                                    id="education_required"
                                    value={value.education_required}
                                    onChange={handleChange}
                                    placeholder="Enter Education Required"
                                    rows="5"
                                    className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                            <div className="mt-6">
                                <label htmlFor="skills_required" className="block text-sm font-medium text-gray-900">
                                    Skills Required
                                </label>
                                <textarea
                                    required
                                    id="skills_required"
                                    value={value.skills_required}
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    placeholder="Enter Benefits"
                                    rows="3"
                                    className="mt-1 p-3 w-full border border-gray-300 bg-gray-100 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500"
                                />
                            </div>

                            <div className="mt-6 flex justify-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    {isLoading ? 'Uploading...' : 'Upload Job'}
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
