import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible, AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [passwordShow, setPasswordShow] = useState()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { signInWithGoogle, signIn } = UseAuth()
    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then(res => {
                const logger = res.user
                console.log(logger)
                reset()
                Swal.fire({
                    title: "Your Login success!",
                    text: "User update success!",
                    icon: "success"
                });
                navigate('/dashBoard/creatNewJob')
            })
    }
    const handleGoogle = () => {
        console.log('google')
        signInWithGoogle()
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    title: "Your Login success!",
                    text: "User update success!",
                    icon: "success"
                });
                navigate('/dashBoard/creatNewJob')
            });
    }
    return (
        <div className="hero min-h-screen bg-white">
             <Helmet>
                <title>Management || SignIn</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/xJsNc8D/credit-card-concept-illustration-114360-98.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <p className='text-[#BB7B10] font-bold text-center'>SignIn User</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                        <div className="form-control">

                            <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered rounded-full" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">

                            <input type="email" {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered rounded-full" />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">

                            <input type={passwordShow ? "text" : "password"} {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^[A-Za-z]+$/i })} name="password" placeholder="Your Password" className="input input-bordered rounded-full relative" />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            <p className='text-xl absolute top-[182px] right-12 ' onClick={() => setPasswordShow(!passwordShow)}>
                                {passwordShow ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                            </p>


                        </div>

                        <div className="form-control ">
                            <button className="btn bg-[#BB7B10] text-white rounded-full hover:bg-[#bc791c]  border-none">LOgin</button>
                        </div>
                    </form>
                    <p className='text-center'>Have a New Account? <Link to={'/signUp'} className='text-[#BB7B10] font-bold'>registered</Link> </p>
                    <p className='text-center font-bold my-3'>Or sign up with</p>
                    <div className='flex gap-4 justify-center mb-5'>
                        <a className='border-r border-b border-orange-500 p-5 rounded-2xl text-2xl '> <SiFacebook /> </a>
                        <a onClick={handleGoogle} className='border-l border-r hover:border-b-2  border-orange-500 cursor-pointer  p-5 rounded-2xl text-2xl '> <FcGoogle /> </a>
                        <a onClick={""} className='border-l border-b border-orange-500 cursor-pointer p-5 rounded-2xl text-2xl' ><AiFillGithub></AiFillGithub></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;