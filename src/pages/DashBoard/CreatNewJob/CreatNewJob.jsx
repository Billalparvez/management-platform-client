import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { axiosPublic } from "../../../Hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";




const CreatNewJob = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const navigate=useNavigate()
    const onSubmit = async (data) => {
        console.log(data)
        const createJob = {
            title: data.title,
            priority: data.priority,
            description: data.description,
            dateLine: data.dateLine

        }
        const res = await axiosPublic?.post('/creatJob', createJob)
        console.log(res?.data)
        if (res?.data?.insertedId) {
            reset()
            Swal.fire({
                title: "Create a New Job store mongodb Success!",
                text: "You clicked the button!",
                icon: "success"
            });
            navigate('/dashBoard/toDoList')
        }
    }
    return (
        <div className="mt-20">
            <Helmet>
                <title>Management || New JOb</title>
            </Helmet>
            <SectionTitle
                headings={'New Job'}
                subHeading={'Creating New Job'}>
            </SectionTitle>
            <div className="px-10 mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <div className="flex flex-col md:flex-row gap-5">
                        <label className="form-control  w-full">
                            <div className="label">
                                <span className="label-text">Title</span>
                            </div>
                            <input {...register("title", { required: true })} name="title" type="text" placeholder="Your Title" className="input input-bordered w-full input-warning" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <input type="text" {...register("description", { required: true })} placeholder="Your Description" className="input input-bordered w-full input-warning" />
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <label className="form-control  w-full">
                            <div className="label">
                                <span className="label-text">DateLine</span>
                            </div>
                            <input {...register("dateLine", { required: true })} name="dateLine" type="number" placeholder="Your DateLine" className="input input-bordered w-full input-warning" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Priority</span>
                            </div>
                            <select {...register("priority", { required: true })} className="select select-warning w-full ">
                                <option disabled selected>Priority</option>
                                <option>High</option>
                                <option>Low</option>
                                <option>Moderate</option>
                            </select>
                        </label>
                    </div>
                    <button className="btn bg-[#BB7B10] hover:bg-[#d19c40] w-full text-white">Creat New Job</button>
                </form>
            </div>
        </div>
    );
};

export default CreatNewJob;