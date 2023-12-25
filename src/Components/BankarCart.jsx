

const BankarCart = () => {
    return (

        <div className="grid my-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
            <div data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="3000"
                className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className=' h-20 w-20 lg:h-40 lg:w-40 rounded-full' src="https://i.postimg.cc/6pgpjRcM/images-5.jpg" alt="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Bankar</h2>
                    <p>Does he choose Bankar propession?</p>
                </div>
            </div>
            <div data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-anchor-placement="bottom-bottom" className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className=' h-20 w-20 lg:h-40 lg:w-40 rounded-full' src="https://i.postimg.cc/8zd03bk4/download-10.jpg" alt="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Bankar</h2>
                    <p>Does he choose Bankar propession?</p>
                </div>
            </div>
            <div data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="3000" className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className=' h-20 w-20 lg:h-40 lg:w-40 rounded-full' src="https://i.postimg.cc/vTFnpkvS/download-11.jpg" alt="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Bankar</h2>
                    <p>Does he choose Bankar propession?</p>
                </div>
            </div>


        </div>
    );
};

export default BankarCart;