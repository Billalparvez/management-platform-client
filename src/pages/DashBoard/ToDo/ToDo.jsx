import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle"
import TodoCart from "../../../Components/TodoCart"
import Swal from "sweetalert2";
import { axiosPublic } from "../../../Hook/useAxiosPublic";
import useToDo from "../../../Components/useToDo";
const ToDo = () => {
    const [data, refetch] = useToDo()
    // const [data, setData] = useState()
    console.log(data)

    // useEffect(() => {
    //     fetch('https://management-platform-server.vercel.app/creatJob')
    //         .then(res => res.json())
    //         .then(data => setData(data))

    // }, [])
    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                console.log(result)
                if (result.isConfirmed) {
                    axiosPublic.delete(`/creatJob/${_id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }

                        })
                }
            });
    }
 
    return (
        <div className="mt-20">
            <Helmet>
                <title> Management ||  To-Do </title>
            </Helmet>
            <SectionTitle
                headings={'todo'}
                subHeading={'ToDo JOb List'}>
            </SectionTitle>
            <div className="px-10 mt-10">
                <div >
                    {
                        data?.map((data, index) =>
                            <TodoCart
                                key={index}
                                // handleUpdate={handleUpdate}
                                handleDelete={handleDelete}
                                data={data}>
                            </TodoCart>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ToDo;