import { MdDelete,  } from "react-icons/md";

const TodoCart = ({ data, handleDelete }) => {
    console.log(data)
    const { title, description, dateLine, priority, _id } = data
 
    return (
        <div className="card w-full bg-base-100 shadow-xl my-5">
            <div className="card-body">
                <div className="flex justify-between">
                    <div>
                        <h2 className="card-title">Title: {title}</h2>
                        <p>{description}</p>
                    </div>
                    <div>
                        <p><span className="font-bold">Date Line: </span>{dateLine}</p>
                        <p><span className="font-bold">Priority:</span> {priority}</p>
                    </div>
                    <div className="card-actions ">
                       
                        <button onClick={() => handleDelete(_id)} className="text-red-700 btn btn-sm hover:bg-[#f2af3c] bg-[#e19b22]"><MdDelete /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TodoCart;