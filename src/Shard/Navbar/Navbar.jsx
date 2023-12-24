import { NavLink } from 'react-router-dom'
import Container from '../Container'
import './Css/style.css'
import UseAuth from '../../Hook/UseAuth';
const Navbar = () => {
    const { user ,logOut} = UseAuth()
    const NavLinks = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">SignIn</NavLink>
        <NavLink to="/signUp">SignUp</NavLink>

    </>
    const handleLogOut = () => {
        logOut()
            .then({})
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Container>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <img className='w-28 object-cover h-20' src="https://i.postimg.cc/nrwWcF4V/bird-2-removebg-preview.png" alt="" />
                    {/* <img className='w-20 object-cover h-20' src="https://i.postimg.cc/VLphxNsD/Plarform-removebg-preview.jpg" alt="" /> */}
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                    {
                        user ? <>
                            <button onClick={handleLogOut} className='btn btn-success'>Logout</button>
                        </>
                            :
                            ""
                        // <>
                        //     <NavLink to="/login">Login</NavLink>
                        // </>
                    }
                </div>
            </div>
        </Container>
    );
};

export default Navbar;

// <Container>
// <div className="navbar text-white">
//     <div className="navbar-start">
//         <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//             </div>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                 {NavLinks}
//             </ul>
//         </div>
//         <img className='w-28 object-cover h-20' src="https://i.postimg.cc/nrwWcF4V/bird-2-removebg-preview.png" alt="" />
//         <img className='w-20 object-cover h-20' src="https://i.postimg.cc/VLphxNsD/Plarform-removebg-preview.jpg" alt="" />
//     </div>
//     <div className="navbar-end hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//             {NavLinks}
//         </ul>
//         {
//             user ? <>
//                 <button className='btn btn-success'>Logout</button>
//             </>
//                 :
//                 <>
//                     <button className='btn btn-success'>Logout</button>
//                 </>
//         }
//     </div>
// </div>
// </Container>