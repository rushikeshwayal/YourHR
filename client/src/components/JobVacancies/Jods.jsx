import { useEffect, useState, useCallback } from "react";
import { auth } from "../Authentication/components/firebase/firebase";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../Authentication/components/firebase/firebase";
import Lodder from "../Authentication/components/Lodding/LodderFile";
import NavBar from "../Home/NavToHome";
import Footer from "../Home/Footer";

// Helper function to debounce input
function useDebouncedCallback(callback, delay) {
  const debouncedFn = useCallback(
    (...args) => {
      const handle = setTimeout(() => callback(...args), delay);
      return () => clearTimeout(handle);
    },
    [callback, delay]
  );
  return debouncedFn;
}

function Jobs() {
  const navigate = useNavigate();
  const currentUser = useAuth();
  const [vacancies, setVacancies] = useState([]);
  const [filteredVacancies, setFilteredVacancies] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [salaryOrder, setSalaryOrder] = useState(''); // Set default as empty
  const [jobType, setJobType] = useState('');

  const fetchVacancies = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        employment_type: jobType,
        sort_by: 'salary_range',
        order: salaryOrder ? (salaryOrder === 'high-to-low' ? 'DESC' : 'ASC') : '',
      });

      const response = await fetch(`https://your-hr-rosy.vercel.app/job?${queryParams}`);
      if (!response.ok) {
        throw new Error("Network Error");
      }
      const data = await response.json();
      setVacancies(data);
      setFilteredVacancies(data); // Initially set filtered vacancies to all vacancies
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    fetchVacancies();
  }, [jobType, salaryOrder]); // Fetch vacancies whenever jobType or salaryOrder changes

  const handleSalaryOrderChange = (order) => {
    setSalaryOrder(order);
  };

  const handleJobTypeChange = (type) => {
    setJobType(type);
  };

  const handleSearchChange = useDebouncedCallback((searchValue) => {
    const filtered = vacancies.filter((vacancy) =>
      vacancy.job_title.toLowerCase().includes(searchValue) ||
      vacancy.company_name.toLowerCase().includes(searchValue) ||
      vacancy.skills_required.toLowerCase().includes(searchValue)
    );
    setFilteredVacancies(filtered);
  }, 300);

  const onInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    handleSearchChange(value);
  };

  const handleApply = (id) => {
    if (id) {
      navigate(`/job?id=${id}`);
    } else {
      console.error("Invalid job ID");
    }
  };

  const resetFilters = () => {
    setSalaryOrder('');
    setJobType('');
    fetchVacancies(); // Reset by fetching all vacancies again
  };

  return (
    <div>
      {currentUser ? (
        <div>
          {loading ? (
            <div className="flex justify-center items-center min-h-screen">
              <Lodder />
            </div>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="bg-gradient-to-b from-green-500 to-green-0 h-40">
              <NavBar />
              <div className="space-y-5 flex flex-wrap flex-col justify-around items-center min-h-screen w-full">
                <div>
                  <div className="relative flex mt-20">
                    <input
                      type="search"
                      className="peer block min-h-[auto] w-full rounded bg-transparent px-20 border-black border-2 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear"
                      placeholder="Search"
                      aria-label="Search"
                      onChange={onInputChange}
                      value={search}
                    />
                    <button
                      className="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-8 text-xs font-medium uppercase leading-normal text-white bg-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300"
                      type="button"
                    >
                      {/* Search Icon */}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between flex-wrap">
                  <div className="w-80  fixed ">
                  <div className="gap-40">
                    <h1 className="font-bold">Salary Range</h1>
                    <div className="flex flex-wrap flex-col">
                      <label>
                        <input
                          type="radio"
                          name="salaryOrder"
                          value="low-to-high"
                          checked={salaryOrder === 'low-to-high'}
                          onChange={() => handleSalaryOrderChange('low-to-high')}
                        />
                        Low to High
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="salaryOrder"
                          value="high-to-low"
                          checked={salaryOrder === 'high-to-low'}
                          onChange={() => handleSalaryOrderChange('high-to-low')}
                        />
                        High to Low
                      </label>
                    </div>
                    <div>
                      <h1 className="font-bold mt-4 mb-2">Job Type</h1>
                      <select
                        className="border w-40 rounded-md px-4 py-2 bg-gray-800 text-white"
                        onChange={(e) => handleJobTypeChange(e.target.value)}
                        value={jobType}
                      >
                        <option value="" disabled>Job Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Internship">Internship</option>
                        <option value="Contract">Contract</option>
                      </select>
                    </div>
                    <div>
                      <button
                        onClick={resetFilters}
                        className="mt-4 text-white bg-red-500 px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                      >
                        Remove Filters
                      </button>
                    </div>
                    </div>
                  </div>

                  <div className="ml-80">
                    {filteredVacancies.map((vac) => (
                      <div key={vac.job_id}>
                        <div className="m-0 flex flex-wrap">
                          <div>
                            <div className="group relative mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition-shadow duration-300 hover:shadow-lg sm:mx-auto">
                              <div className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                                <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                                  <img src="https://img.freepik.com/premium-vector/job-logo-design-icon-vector_999827-645.jpg?w=1380" alt="" className="h-full w-full object-cover text-gray-700" />
                                </div>
                              </div>
                              <div className="col-span-10 flex flex-col space-y-4 pr-10 sm:col-span-8 sm:pr-0 lg:col-span-6">
                                <h2 className="w-full text-2xl font-bold text-gray-700">{vac.job_title}</h2>
                                <div className="flex flex-col space-y-1 text-gray-700 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
                                  <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-500">{vac.company_name}</a>
                                  <p className="text-sm text-gray-500">{vac.salary_range}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">{vac.skills_required}</p>
                                </div>
                              </div>
                              <div className="order-1 col-span-1 mr-2 text-right sm:order-2 lg:col-span-2">
                                <button
                                  onClick={() => handleApply(vac.job_id)}
                                  className="mr-4 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-green-500"
                                >
                                  Apply Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
                <div className="mt-40">
                    <Footer />
                </div>
            </div>
          
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <p>Please log in to view job listings.</p>
        </div>
      )}

    </div>
  );
}

export default Jobs;
