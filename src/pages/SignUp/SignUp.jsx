import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosPublic from "../../Hook/UseAxiosPublic"
import { useState } from "react";
import { AiFillEye ,AiFillEyeInvisible,AiFillGithub} from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";
import { SiFacebook} from "react-icons/si";

const SignUp = ({createUser,signInWithGoogle}) => {
    const [passwordShow,setPasswordShow]=useState()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const navigate=useNavigate()

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(res => {
                const logger = res.user
                console.log(logger)
                // const userInfo = {
                //     email: data?.email,
                //     name: data?.name
                // }
                // axiosPublic.post('/api/h2/users', userInfo)
                //     .then(res => {
                //         if (res.data.insertedId) {
                //             console.log('user adding data base')
                //             reset()
                //             Swal.fire({
                //                 title: "Your Register success!",
                //                 text: "User update success!",
                //                 icon: "success"
                //             });
                //             navigate('/')
                //         }
                //     })
                //     .catch(error => {
                //         console.log(error)
                //     })

            })
    }
    const handleGoogle = () => {
        console.log('google')
        signInWithGoogle()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    email: res.user?.email,
                    name: res?.user?.displayName,
                }
                axiosPublic.post('/api/users', userInfo)
                    .then(res => {
                        console.log(res.user)
                    })
                navigate('/')
            });
    }
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/xJsNc8D/credit-card-concept-illustration-114360-98.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <p className='text-info font-bold text-center'>Create an Account</p>
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
                            <button className="btn btn-info text-white rounded-full hover:bg-green-500 hover:text-black border-none">Create An Account</button>
                        </div>
                    </form>
                    <p className='text-center'>Already registered? <Link to={'/login'} className='hover:text-emerald-500 text-info font-bold'>Login Now</Link> </p>
                    <p className='text-center font-bold my-3'>Or sign up with</p>
                    <div className='flex gap-4 justify-center mb-5'>
                        <a className='border p-5 rounded-2xl text-2xl '> <SiFacebook /> </a>
                        <a onClick={handleGoogle} className='cursor-pointer border p-5 rounded-2xl text-2xl '> <FcGoogle /> </a>
                        <a onClick={""} className='border cursor-pointer p-5 rounded-2xl text-2xl' ><AiFillGithub></AiFillGithub></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;