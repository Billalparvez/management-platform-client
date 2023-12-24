import { Link } from 'react-router-dom';
import './CSS/style.css'
const Bannar = () => {
    return (
        <div className="hero min-h-screen object-cover bg-image " >
            {/* <div className="hero min-h-screen object-cover bg-image" style={{ backgroundImage: 'url(https://i.postimg.cc/66mwQt5G/standard-quality-control-concept-m.jpg)' }}> */}
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Management <span className='text-[#BB7B10]'>Platform</span></h1>
                    <p className="mb-5"> Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="join">
                        <input className="input input-bordered join-item rounded-full" placeholder="Search" />
                        <Link to='/login' className="btn join-item rounded-r-full border-none hover:bg-[#9d6321] text-white bg-[#BB7B10]">Let's Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;