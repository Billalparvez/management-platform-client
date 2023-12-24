import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosPublic from "../../Hook/UseAxiosPublic"
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import UseAuth from "../../Hook/UseAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const [passwordShow, setPasswordShow] = useState()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const { createUser, signInWithGoogle } = UseAuth()
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(res => {
                reset()
                const logger = res.user
                console.log(logger)
                Swal.fire({
                    title: "Your Register success!",
                    text: "User update success!",
                    icon: "success"
                });
                navigate('/login')
            })
            .catch(error => { console.log(error) })

    }
    const handleGoogle = () => {
        console.log('google')
        signInWithGoogle()
            .then(res => {
                console.log(res.user)
                 navigate('/dashBoard/creatNewJob')
            });
    }
    return (
        <div className="hero min-h-screen bg-white">
            <Helmet>
                <title>Management || SignUp</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/xJsNc8D/credit-card-concept-illustration-114360-98.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <p className='text-[#D48E18] font-bold text-center'>Create an Account</p>
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
                            {errors.password?.type === "minLength" && (
                                <p className="">Password must be 6 chareter</p>
                            )}

                        </div>

                        <div className="form-control ">
                            <button className="btn bg-[#BB7B10] text-white rounded-full hover:bg-[#b77416]  border-none">Create An Account</button>
                        </div>
                    </form>
                    <p className='text-center'>Already registered? <Link to={'/login'} className='text-[#BB7B10]  font-bold'>Login Now</Link> </p>
                    <p className='text-center font-bold my-3'>Or sign up with</p>
                    <div className='flex gap-4 justify-center mb-5'>
                        <a className='border-r border-orange-500 p-5 rounded-2xl text-2xl hover:border-s hover:border-b '> <SiFacebook /> </a>
                        <a onClick={handleGoogle} className='border-l border-r border-orange-500 hover:border-b cursor-pointer  p-5 rounded-2xl text-2xl '> <FcGoogle /> </a>
                        <a onClick={""} className='border-l border-orange-500 hover:border-e hover:border-b cursor-pointer p-5 rounded-2xl text-2xl' ><AiFillGithub></AiFillGithub></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;