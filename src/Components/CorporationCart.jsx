

const CorporationCart = () => {
    return (
        <div className="grid my-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
            <div data-aos="flip-down"
             data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom" className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className=' h-20 w-20 lg:h-40 lg:w-40 rounded-full' src="https://i.postimg.cc/vTFnpkvS/download-11.jpg" alt="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Corporater</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div data-aos-duration="1000" 
             data-aos-anchor-placement="center-bottom" data-aos="flip-down" className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className=' h-20 w-20 lg:h-40 lg:w-40 rounded-full' src="https://i.postimg.cc/xCjDg4KL/images-4.jpg" alt="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Corporater</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div data-aos-duration="1000" 
             data-aos-anchor-placement="center-bottom"data-aos="flip-down" className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className=' h-20 w-20 lg:h-40 lg:w-40 rounded-full' src="https://i.postimg.cc/85X34PkV/download-9.jpg" alt="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Corporater</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>

        </div>
    );
};

export default CorporationCart;