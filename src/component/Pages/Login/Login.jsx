import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useTitel from "../../UseTitel/UseTitle";

const Login = () => {
    const [open, setOpen] = useState(false)
    useTitel('Login Page')
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState('')
    const { logInEmail, signinGoogel, signinGithub } = useContext(AuthContext)

    // ============ signIn email password ===========
    const loginPage = event => {
        event.preventDefault()

        setError('')

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInEmail(email, password)
            .then(result => {
                navigate(from, { replace: true });
                form.reset()

            })
            .catch(error => setError(error.message))
    }

    // ============ signIn google ===========
    const googeLogin = () => {
        setError('')
        signinGoogel()
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(error => { setError(error.message) })
    }


    // ============ signIn github ===========
    const githubLogin = () => {
        setError('')
        signinGithub()
            .then(result => {
                console.log(result)
                navigate(from, { replace: true });
            })
            .catch(error => { setError(error.message) })
    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="py-20">
                    <div className="card w-[370px] lg:w-[700px] shadow-2xl bg-base-100">
                        <h1 className="text-center pt-8 text-3xl font-bold">Welcome to Login Form</h1>
                        <form onSubmit={loginPage} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type={open ? "text" : "password"} required name="password" placeholder="password" className="input input-bordered" />
                                <div className="w-8 h-8 flex justify-center items-center md:ml-[590px] ml-[270px] mt-[-40px]" onClick={() => setOpen(!open)}>
                                    <span>{open === true ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt mt-5 link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className="mt-5 ml-3">{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn text-black border-none hover:text-white bg-gray-300">Login</button>
                            </div>
                            <div className=" mt-5">
                                <button onClick={googeLogin} className="w-[100%] rounded btn text-black border-none hover:text-white bg-gray-300 mb-3"><FaGoogle className="mr-3"></FaGoogle> Sign in with Google</button>
                                <button onClick={githubLogin} className="w-[100%] rounded btn text-black border-none hover:text-white bg-gray-300"><FaGithub className="mr-3"></FaGithub> Sign in with Github</button>
                            </div>
                            <Link className="mt-5 text-center hover:underline" to={'/signUp'}><p >New user to create a account <span className="font-bold text-blue-900">Sign up</span></p></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;