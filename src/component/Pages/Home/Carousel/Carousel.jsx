
const Carousel = () => {
    return (
        <div className="px-4 md:px-0">
            <div className="carousel w-full h-[300px] md:h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://nextwhatbusiness.com/wp-content/uploads/2018/03/electronic-toys-making.jpg" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center space-y-10 h-full pl-5 md:pl-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
                        <div className="flex justify-center">
                            <div className='text-white'>
                                <h1 className='text-[30px] md:text-[60px] w-[300px] md:w-[400px] font-bold'>world wide famouse dron hd Camera</h1>
                                <p className='text-[15px] md:text-[25px] w-[300px] md:w-[620px] mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <button className='btn btn-outline border-blue-50 text-white'>Thanks</button>
                                <button className='btn btn-outline border-blue-50 text-white'>Welcome</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/02/DSLR-camera-DSLRSLR-1-1-1024x680.jpg" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center space-y-10 h-full pl-5 md:pl-16 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
                        <div className='text-white'>
                            <h1 className='text-[30px] md:text-[60px] w-[300px] md:w-[400px] font-bold'>world wide famouse dslr hd Camera</h1>
                            <p className='text-[15px] md:text-[25px] w-[300px] md:w-[620px] mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn btn-outline border-blue-50 text-white'>Thanks</button>
                            <button className='btn btn-outline border-blue-50 text-white'>Welcome</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.verizon.com/about/sites/default/files/news-media/Drone-IoT-1280x720.jpg" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center space-y-10 h-full pl-5 md:pl-16 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
                        <div className='text-white'>
                            <h1 className='text-[30px] md:text-[60px] w-[300px] md:w-[400px] font-bold'>world wide famouse dron hd Camera photo shoot</h1>
                            <p className='text-[15px] md:text-[25px] w-[300px] md:w-[620px] mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn btn-outline border-blue-50 text-white'>Thanks</button>
                            <button className='btn btn-outline border-blue-50 text-white'>Welcome</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://cdn.mos.cms.futurecdn.net/9gQsUZJsBkyjnsiFNZdthc.jpg" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center space-y-10 h-full pl-5 md:pl-16 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
                        <div className='text-white'>
                            <h1 className='text-[30px] md:text-[60px] w-[300px] md:w-[400px] font-bold'>world wide famouse dslr hd Camera photo shoot</h1>
                            <p className='text-[15px] md:text-[25px] w-[300px] md:w-[620px] mb-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn btn-outline border-blue-50 text-white'>Thanks</button>
                            <button className='btn btn-outline border-blue-50 text-white'>Welcome</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Carousel;