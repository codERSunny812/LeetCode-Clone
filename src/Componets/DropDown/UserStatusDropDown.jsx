import { useEffect } from "react";
import { auth } from "../../supabase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserStatusDropDown = () => {
  const [name, setUserName] = useState("");
  const homeNavigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  // const getUserData = async () => {
  //   const {
  //     data: { user },
  //   } = await auth.getUser();
  //   console.log(user?.user_metadata?.name);
  //   setUserName(user?.user_metadata?.name);
  // };

  const getUserData = async()=>{
   const data = await auth.getSession();
   console.log(data.data.session.user.user_metadata.name);
    setUserName(data.data.session.user.user_metadata.name);
  }

  const handleSignOut = async () => {
    try {
      // Step 1: Sign Out from Supabase
      await auth.signOut();


      // Step 2: Remove from Local Storage
      localStorage.removeItem("supabase.auth.token");
      localStorage.removeItem("supabase.auth.expires_at");
      localStorage.removeItem("supabase.auth.refresh_token");

      homeNavigate('/');

      // Optionally, you can redirect the user to a sign-in page or another route
      // based on your application's logic.

      console.log("User signed out successfully.");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  return (
    <>
      <div className=" text-white  absolute  h-fit w-56 right-1 top-14 bg-[#282828] px-3 py-3 capitalize shadow-4xl" style={{zIndex:1000}}>
        <p className=" px-2 py-1 hover:bg-[#3E3D3D]">hello , {name}</p>
        <Link to="/profile">
          <p className="px-2 py-1 hover:bg-[#3E3D3D]">show profile</p>
        </Link>

        <button
          className="px-2 py-1 hover:bg-[#3E3D3D] capitalize border-none outline-none w-full bg-black text-white"
          onClick={handleSignOut}
        >
          sign out
        </button>
      </div>
    </>
  );
};

export default UserStatusDropDown;
