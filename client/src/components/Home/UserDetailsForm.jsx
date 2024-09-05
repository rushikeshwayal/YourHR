import { useAuth } from "../Authentication/components/firebase/firebase";
import { useState, useEffect } from "react";
import SkillsInput from "./SkillSetInput";
import UserInfo from "./UserInfo"; // Import the corrected component
// import Lodder from "../Authentication/components/Lodding/LodderFile";
import Lodder from "../Lodding/LodderFile";
function UserDetailForm() {
  const { currentUser } = useAuth();
  const userEmail = currentUser?.email || ''; // Safeguard against undefined currentUser

  // State to store form values
  const [values, setValues] = useState({
    full_name: '',
    phone: '',
    email: '', // Initialize email to an empty string
    college: '',
    collegeStatus: 'Pursuing', // Default value for the dropdown
    area: '',
    city: '',
    state: '',
    postCode: '',
    skills: '', // Assume SkillsInput updates this value
  });

  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch('https://your-hr-rosy.vercel.app/applicant');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, []);

  useEffect(() => {
    if (currentUser) {
      setValues((prevValues) => ({
        ...prevValues,
        email: currentUser.email || '', // Update email from currentUser
      }));
    }
  }, [currentUser]);

  // Handle form input changes
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check for empty required fields
    if (!values.full_name || !values.email) {
      alert("Please fill out all required fields.");
      return;
    }

    // Make a POST request to the API
    try {
      const response = await fetch("https://your-hr-rosy.vercel.app/post/applicant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), // Send the form data as JSON
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
    window.location.reload(false)
  };

  if (loading) {
    return <Lodder/>; // Display a loading message or spinner
  }

  if (error) {
    return <p>Error: {error}</p>; // Display an error message
  }

  // Find the matching user
  const matchingUser = user.find(userItem => 
    userItem.email_address.trim().toLowerCase() === userEmail.trim().toLowerCase()
  );

  return (
    <div>
      {matchingUser ? (
        <UserInfo />
     
      ) : (
 <div>
            <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full max-w-[550px] bg-white">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label htmlFor="full_name" className="mb-3 block text-base font-medium text-[#07074D]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      placeholder="Full Name"
                      value={values.full_name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone number"
                      value={values.phone}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      readOnly
                      className="w-full rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="college" className="mb-3 block text-base font-medium text-[#07074D]">
                      College Name
                    </label>
                    <input
                      type="text"
                      name="college"
                      id="college"
                      placeholder="Enter your college name"
                      value={values.college}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="college-status" className="mb-3 block text-base font-medium text-[#07074D]">
                      College Status
                    </label>
                    <div className="relative inline-flex self-center">
                      <select
                        name="collegeStatus"
                        value={values.collegeStatus}
                        onChange={handleChange}
                        className="text-sm font-semibold rounded border-[1px] border-[#e0e0e0] text-gray-500 h-10 w-[550px] pl-5 pr-10 bg-white hover:border-purple-600 focus:outline-none appearance-none"
                      >
                        <option value="Pursuing">Pursuing</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-5 pt-3">
                    <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                      Address Details
                    </label>
                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            type="text"
                            name="area"
                            id="area"
                            placeholder="Enter area"
                            value={values.area}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="City"
                            value={values.city}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            type="text"
                            name="state"
                            id="state"
                            placeholder="State"
                            value={values.state}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            type="text"
                            name="postCode"
                            id="postCode"
                            placeholder="Postal Code"
                            value={values.postCode}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <SkillsInput
                      name="skills"
                      value={values.skills}
                      onChange={(e) => setValues({ ...values, skills: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#6A64F1] px-8 py-3 text-base font-semibold text-white outline-none hover:bg-primary hover:shadow-md focus:ring-4 focus:ring-primary"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
      )}
    </div>
  );
}

export default UserDetailForm;
