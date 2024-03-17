import banner from '../../assets/banner.jpeg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[600px] min-w-screen rounded-3xl mt-12" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="mt-4">
                        <h1 className="mb-8 text-5xl font-bold text-white">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-7 opacity-90">Dive into our extensive collection of recipes spanning various cuisines from around the globe. Whether you are craving <br /> hearty comfort food, exotic Asian dishes, or elegant French cuisine, we got you covered with <br /> easy-to-follow recipes for every occasion.</p>
                        <div className='flex justify-center gap-8'>
                            <button
                                className="btn bg-green-400 rounded-full font-semibold text-lg border-none">Explore Now
                            </button>
                            <button
                                className="btn btn-outline text-white font-semibold rounded-full text-lg">Our Feedback
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;