/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Logo from "../../assets/LeetCode_logo.png";
import { FaGithub } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./responsive.css";
import { auth } from "../../supabase";
import { SessionContext } from "../../Context/AuthContext";
import   {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Signup = ({ handleStatus }) => {
  // state variables
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [userName, setUserName] = useState("");

  // button state
  const[isDisable,setIsDisable] = useState(true);

  // function to enable/disable the sign-up button
  const handleButtonDisable = () => {
    setIsDisable(!(userEmail && userPassword && reEnterPassword && userName));
  };

  

  // hooks for navigation 
  const HomeNaigate = useNavigate();
  
  // function to change the state of the component
  const handleAuthState = () => {
    handleStatus();
  };


  // function for user signUp
  const AuthStateHandle = () => {
    console.log("user sign up button is clicked");
    
    // function defination of user signup with  mail
    const signUpNewUser = async () => {
      try {
        // login logic
        const { data, session, error } = await auth.signUp({
          email: userEmail,
          password: userPassword,
          options: {
            data: {
              name: userName,
            },
          },
        });

        if (error) {
          console.log(`sign up error ${error}`);
        } else {
          console.log("no error");
          console.log(data);
          console.log(session);
        }
      } catch (error) {
        console.log(error);
      }
    };

    //function call for signup and state change
    signUpNewUser();
    handleAuthState();
  }

  // signup using github
  const signUpUsingGitHub = async () => {
    try {
      //login using github
      const {data , error} = auth.signInWithOAuth({
        provider:'github',
      });

      if(!error){
        console.log("successfully login using github");
      }else{
        console.log("error in the signing up of the function")
      }

      console.log(data);

      HomeNaigate('/home');
       

    } catch (error) {
      // error handle 
      console.log(error)
    }

  };

  // signUp Using Twitter 
  const signUpUsingTwitter = async() =>{
    try {
      //login using github
      const { data, error } = auth.signInWithOAuth({
        provider: 'twitter',
      });

      if (!error) {
        console.log("successfully login using github");
      } else {
        console.log("error in the signing up of the function")
      }
      HomeNaigate('/home')


    } catch (error) {
      // error handle 
      console.log(error)
    }

  }

  const signUpState = useContext(SessionContext);
  console.log(signUpState);

  return (
    <>
      <div className="h-fit w-full  bg-[#eceff1] flex justify-center">
        <div className=" signUpCont  flex flex-col gap-3 items-center bg-white w-[400px] h-full ">
          <Link to="/">
            <img src={Logo} alt="leetcode logo" className="h-20 my-6" />
          </Link>

          <h1 className="font-mono text-lg capitalize">leetcode</h1>

          <input
            type="text"
            placeholder="enter your leetcode username"
            className="my-2 p-2 w-[340px] h-[41px]  border border-slate-200 hover:border-black  rounded-md outline-orange-300 outline-offset-2 placeholder:capitalize"
            id="username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              handleButtonDisable();
            
            }}
          />
          <input
            type="email"
            placeholder="enter your email"
            className="my-2 p-2 w-[340px] h-[41px] border border-slate-200 rounded-md hover:border-black outline-orange-300 outline-offset-2
            placeholder:capitalize
            "
            value={userEmail}
            onChange={(e) => {
              setEmail(e.target.value);
              handleButtonDisable();
            }}
            id="email"
          />
          <input
            type="password"
            placeholder=" enter your password"
            className=" my-2 p-2 w-[340px] h-[41px]  border border-slate-200 rounded-md hover:border-black  outline-orange-300 outline-offset-2
            placeholder:capitalize
            "
            value={userPassword}
            onChange={(e) => {
              setPassword(e.target.value);
              handleButtonDisable();
            
            }}
            id="password"
          />
          <input
            type="password"
            placeholder="confirm password"
            className="my-2 p-2 w-[340px] h-[41px]  border border-slate-200 rounded-md hover:border-black outline-orange-300 outline-offset-2
            placeholder:capitalize
            "
            value={reEnterPassword}
            onChange={(e) => {
              setReEnterPassword(e.target.value);
              handleButtonDisable();
            }}
            id="confirmPassword"
          />
          <ToastContainer/>
        
          <button
            className="capitalize  w-[340px] h-[42px] bg-gradient-to-r from-gray-600 via-slate-500 to-gray-400 text-white my-2 py-2 rounded-sm"
            onClick={() => {
              // Check if passwords match
              if (userPassword !== reEnterPassword) {
                // Show Toastify notification for password mismatch
                toast.warn("Passwords don't match", {
                  position: 'bottom-left',
                  autoClose: 3000,
                  theme: 'dark',
                  hideProgressBar:false,
                  draggable:true,
                 
                });
                return; // Stop further execution
              }

              // Proceed with signup logic
              AuthStateHandle();
            }}
            disabled={isDisable}
          >
            sign up
          </button>

      

          <h3 className=" text-gray-400 my-2 ">
            Have an account?{" "}
            <Link to="/login">
              <span className="text-blue-500 capitalize">sign in</span>
            </Link>
          </h3>

          <h4 className="text-gray-400 my-2">our you can sign in with </h4>
          <div className="flex gap-5 ">
            <FaGithub
              className="h-7 w-7 icon-1 text-gray-600 hover:text-black my-2"
              onClick={signUpUsingGitHub}
            />
            <FaGooglePlus className="h-7 w-7 text-gray-600 hover:text-red-500 my-2" />
            <FaTwitter className="h-7 w-7 text-gray-600 hover:text-blue-400 my-2" 
            onClick={signUpUsingTwitter} />
          </div>

          <h3 className="capitalize  text-gray-400 flex-wrap text-center text-sm ">
            This site is protected by re{" "}
            <span className="uppercase">captcha</span> and the google privacy
            policy and term of service apply
          </h3>
        </div>
      </div>
    </>
  );
};

export default Signup;
