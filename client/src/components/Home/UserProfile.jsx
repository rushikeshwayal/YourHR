
import { useAuth } from "../Authentication/components/firebase/firebase"; // Import useAuth
import LogOutBtn from "./LogOutBtn";
import UserDetailForm from "./UserDetailsForm";
// import ResetPassword from "../Authentication/components/ResetPassword";
function Profile() {
  const { currentUser } = useAuth(); // Access currentUser
// console.log(currentUser)
  return (
    <div>
    <div className="absolute pt-5"><a className="ml-10 font-bold text-xl" href="/home">← Home</a></div>
    <div className="profile-page flex flex-wrap flex-col justify-center items-center min-h-screen ">
      {currentUser ? (
        <div className=" w-[600px]  p-10 rounded-lg flex flex-col items-center">
          <img
            src={currentUser.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
          />
          <h1 className="text-2xl font-semibold mb-2">
             {currentUser.displayName || currentUser.email}
          </h1>
          <p className="text-gray-600 mb-4">{currentUser.email}</p>
          <p className="text-gray-600 ">{currentUser.phoneNumber}</p>
            <LogOutBtn />
          <p className="font-bold m-5  ">Joined On : {currentUser.metadata.creationTime}</p>
        
          <a href="/reset-password" className="text-blue-700 ">Change Password</a>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">No user is logged in</p>
      )}
<UserDetailForm/>
    </div>
    </div>
  );
}

export default Profile;
