import { Link } from 'react-router-dom';
import './CSS/style.css'
const Bannar = () => {
    return (
        <div className="hero min-h-screen object-cover bg-image " >
            {/* <div className="hero min-h-screen object-cover bg-image" style={{ backgroundImage: 'url(https://i.postimg.cc/66mwQt5G/standard-quality-control-concept-m.jpg)' }}> */}
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="2000" className="mb-5 text-5xl font-bold">Management <span className='text-[#ebc934]'>Platform</span></h1>
                    <p className="mb-5" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="2000"> Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div data-aos="fade-right" data-aos-duration="3000" className="join ">
                        <input className="w-[180px] md:w-[220px] input input-bordered join-item rounded-full" placeholder="Search" />
                        <Link to='/login' className="btn join-item rounded-r-full border-none hover:bg-[#e1e129]  bg-[#ebc934]">Let's Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;