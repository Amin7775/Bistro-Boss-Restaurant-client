import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const axiosPublic = useAxiosPublic()

  const handleGoogleSignIn = () => {
    googleLogin().then((result) => {
      // console.log(result.user);
      const name = result.user.displayName;
      const email = result.user.email;
      const userInfo = {
        name, email
      }
      axiosPublic.post('/users', userInfo)
      navigate(from,{replace:true})
    });
  };

  return (
    <div className="-m-4 mx-auto">
      {/* <div className="divider"></div> */}
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="btn  border bg-neutral-800 text-white"
        >
          <FaGoogle className="mr-2"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
