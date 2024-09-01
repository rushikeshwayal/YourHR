import { useEffect, useState, useCallback } from "react";
import { auth } from "../Authentication/components/firebase/firebase";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../Authentication/components/firebase/firebase";
import Lodder from "../Authentication/components/Lodding/LodderFile";
import NavBar from "../Home/NavToHome";

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch('https://your-hr-rosy.vercel.app/job');
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

    fetchApiData();
  }, []);

  const handleSearchChange = useDebouncedCallback((searchValue) => {
    if (!searchValue) {
      setFilteredVacancies(vacancies); // Show all vacancies if search is empty
    } else {
      const filtered = vacancies.filter((vacancy) =>
        vacancy.job_title.toLowerCase().includes(searchValue) ||
        vacancy.company_name.toLowerCase().includes(searchValue) ||
        vacancy.skills_required.toLowerCase().includes(searchValue)
      );
      setFilteredVacancies(filtered);
    }
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
                  <div className="relative flex mt-20" data-twe-input-wrapper-init data-twe-input-group-ref>
                    <input
                      type="search"
                      className="peer block min-h-[auto] w-full rounded bg-transparent px-20 border-black border-2 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-gray-800 dark:text-gray-600 dark:placeholder:text-gray-600 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      placeholder="Search"
                      aria-label="Search"
                      id="exampleFormControlInput"
                      aria-describedby="basic-addon1"
                      onChange={onInputChange}
                      value={search}
                    />
                    <label
                      htmlFor="exampleFormControlInput"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-600 dark:peer-focus:text-primary"
                    >
                      Search
                    </label>
                    <button
                      className="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-8 text-xs font-medium uppercase leading-normal text-white bg-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      type="button"
                      id="button-addon1"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      <span className="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                {filteredVacancies.map((vac) => (
                  <div key={vac.job_id}>
                    <div className="m-0 flex flex-wrap">
                      <div>
                        <div className="group relative mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition-shadow duration-300 hover:shadow-lg sm:mx-auto">
                          <a href="#" className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                            <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                              <img src="https://img.freepik.com/premium-vector/job-logo-design-icon-vector_999827-645.jpg?w=1380" alt="" className="h-full w-full object-cover text-gray-700" />
                            </div>
                          </a>
                          <div className="col-span-10 flex flex-col space-y-4 pr-10 sm:col-span-8 sm:pr-0 lg:col-span-6">
                            <h2 className="w-full text-2xl font-bold text-gray-700 transition-colors duration-300 group-hover:text-gray-900">{vac.job_title}</h2>
                            <div className="flex flex-col space-y-1 text-gray-700 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
                              <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-500">{vac.company_name}</a>
                              <div className="hidden h-1 w-1 rounded-full bg-gray-500 sm:block"></div>
                              <p className="text-sm text-gray-500">{vac.salary_range}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">{vac.skills_required}</p>
                            </div>
                          </div>
                          <div className="order-1 col-span-1 mr-2 text-right sm:order-2 lg:col-span-2">
                            <button
                              onClick={() => handleApply(vac.job_id)}
                              className="mr-4 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-green-500 shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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
          )}
        </div>
      ) : (
        <div>
          <p>User not authenticated</p>
        </div>
      )}
    </div>
  );
}

export default Jobs;
