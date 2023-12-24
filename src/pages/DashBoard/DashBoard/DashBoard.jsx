import { Helmet } from "react-helmet-async";

import { NavLink, Outlet } from "react-router-dom";
import Container from "../../../Shard/Container";


const DashBoard = () => {
    return (
        <div>
            <Container>
                <Helmet>
                    <title> Management ||  DashBoard </title>
                </Helmet>
                <div className="flex flex-col md:flex-row gap-5 ">
                    <div className="w-64 min-h-screen bg-[#c98819]">
                        <ul className="menu mt-10">
                            <h1 className="text-4xl p-2 mb-4">Management Platform</h1>
                            <div className="divider"></div>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'creatNewJob'}> Creat New Tasks</NavLink></li>
                            <li><NavLink to={'seePrevious'}> See Previous Tasks</NavLink></li>
                            <li><NavLink to={'toDoList'}> To-Do List</NavLink></li>
                            <li><NavLink to={'onGoing'}> On going List</NavLink></li>
                            <li><NavLink to={'completed'}>Completed</NavLink></li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <Outlet></Outlet>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DashBoard;