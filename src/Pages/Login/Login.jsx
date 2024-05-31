import "./authentication.css";
import loginImg from './../../assets/others/authentication2.png'

// react simple captcha
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

  const {loginUser}=useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
    const [disabled,setDisabled] = useState(true)

    const captchaRef = useRef()

    useEffect(()=>{
        loadCaptchaEnginge(4); 
    },[])

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(email,password)
        loginUser(email,password)
        .then(res=>{
          console.log(res.user)
          navigate(from,{replace:true})
        })
    }

    const handleValidate = () =>{
        const user_captcha_value = captchaRef.current.value
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }

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
              <form className="card-body w-3/4 mx-auto" onSubmit={handleLogin}>
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
                  name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  
                </div>
                {/* captcha */}
                <div className="form-control mt-4">
                
                  <LoadCanvasTemplate />
                  <input
                  ref={captchaRef}
                    type="text"
                    placeholder="Type the captcha above"
                    className="input input-bordered mt-2"
                    required
                  />
                <div>
                    <button onClick={handleValidate} className="btn btn-outline w-full mt-3">Validate Captcha</button>
                </div>
                </div>
                <div className="form-control mt-6">
                  <button  disabled={disabled} className="btn bg-neutral-800 text-white py-2 h-full text-lg hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-105">Login</button>
                  <p className="mt-6">Not a member? <Link to={'/register'} className="font-medium"> Register</Link></p>
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
