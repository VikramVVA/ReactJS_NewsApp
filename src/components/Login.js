import React from 'react'
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

const clientId="528072669011-3uqpfh7lun7fkcs85u80ek50cd0rsk7a.apps.googleusercontent.com"

function Login() {

  const onSuccess =(res) =>{
    console.log("Successful",res.profileObj)
  }
  const onFailure =(res) => {
    console.log("Failed",res)
  }
  return (
    <>
  
<body className="bg-slate-300 ">
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
    <div><img src="/assets/images/logo3.png" alt="News App" /></div>
        <h1 className="mt-3 text-4xl font-serif font-medium text-center mb-6 text-blue-800">Login</h1>
        <p className=" text-center text-slate-500">Hi, Welcome back 👋</p>

        <div className="my-5">
            <GoogleLogin 
            clientId={clientId}
             onSuccess={onSuccess} 
             onFailure={onFailure} 
             cookiePolicy={'single_host_origin'} 
             isSignedIn={true} 
             className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <span>Login with Google</span>
            </GoogleLogin>
        </div>
        <form action="" className="my-10">
            <div className="flex flex-col space-y-5">
                <label for="email">
                    <p className="font-medium text-red-900 pb-2">Email address</p>
                    <input id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address"/>
                </label>
                <label for="password">
                    <p className="text-red-900 font-medium  pb-2">Password</p>
                    <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password"/>
                </label>
                <div className="flex flex-row justify-between">
                    <div>
                        <label for="remember" className="">
                            <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600"/>
                            Remember me
                        </label>
                    </div>
                    <div>
                        <a href="/" className="font-medium text-indigo-600">Forgot Password?</a>
                    </div>
                </div>
                <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Login</span>
                </button>
                <p className="text-center">Not registered yet? <Link to="/signup" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></Link></p>
            </div>
        </form>
    </div>
    
</body>
  </>
  )
}

export default Login