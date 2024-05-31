import "./authentication.css";
import loginImg from './../../assets/others/authentication2.png'

const Login = () => {
  return (
    <div className="min-h-screen background-img p-36 flex">
      <div className="border-4 border-neutral-200 flex-grow drop-shadow-2xl shadow-2xl shadow-neutral-400 p-14 flex items-center">
        <div className="hero px-20">
          <div className="hero-content flex-col lg:flex-row justify-around  w-full">
            <div className="w-[40%]">
             <img src={loginImg} className="mx-auto w-full" alt="" />
            </div>
            <div className="card shrink-0 flex-1 ">
            <h1 className="text-4xl font-bold text-center">Login now!</h1>
              <form className="card-body w-3/4 mx-auto">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-lg">Email</span>
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
                    <span className="label-text font-medium text-lg">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  
                </div>
                {/* captcha */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-lg">Email</span>
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
                    <span className="label-text font-medium text-lg">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#D1A054B3] text-white py-2 h-full text-lg hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-105">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
