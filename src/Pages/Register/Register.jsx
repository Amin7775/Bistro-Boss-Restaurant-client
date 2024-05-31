import "./../Login/authentication.css";
import loginImg from "./../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const {createUser} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createUser(email,password)
    .then(res =>{
      console.log(res)
      navigate(from,{replace:true})
    })
  };

  return (
    <div className="min-h-screen background-img p-36 flex">
      <div className="border-4 border-neutral-200 flex-grow drop-shadow-2xl shadow-2xl shadow-neutral-400 p-14 flex items-center">
        <div className="hero px-20">
          <div className="hero-content flex-col lg:flex-row justify-around  w-full">
            <div className="w-[40%]">
              <img src={loginImg} className="mx-auto w-full" alt="" />
            </div>
            <div className="card shrink-0 flex-1 ">
              <h1 className="text-4xl font-bold text-center">Register now!</h1>
              {/* form */}
              <form className="card-body w-3/4 mx-auto" onSubmit={handleLogin}>
                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-lg">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-lg">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-lg">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-black hover:bg-black text-white py-2 h-full text-lg  transition-all duration-300 ease-in-out transform hover:scale-105">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
