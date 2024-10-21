import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper/modules";

export default function Banner() {
  const slideContent = (
    <>
      <h1 className="text-2xl  md:text-4xl lg:text-5xl text-white font-black text-center md:text-left">
        Affordable Price For Car Servicing
      </h1>
      <p className="text-sm md:text-lg lg:text-xl text-white text-center md:text-left">
        There are many variations of passages available, but the majority have suffered alteration in some form.
      </p>
      <div className="flex gap-2 mt-4 justify-center md:justify-start">
        <button className="btn bg-[#ff3811] text-white hover:text-[#ff3811] hover:bg-white">
          Discover More
        </button>
        <button className="btn text-[#fff] bg-transparent hover:text-white hover:bg-[#ff3811]">
          Latest Project
        </button>
      </div>
    </>
  );

  return (
    <>
      <div id="banner" className="relative w-full">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {/* First Slide */}
          <SwiperSlide>
            <div className="relative w-full overflow-hidden shadow-lg h-[60vh] md:h-[80vh] lg:h-[70vh]">
              <img src={img1} alt="Banner 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute -translate-y-1/2 top-1/2 left-4 md:left-10 lg:left-20 z-[999] w-11/12 md:w-1/2 flex flex-col items-center md:items-start gap-4">
                {slideContent}
              </div>
            </div>
          </SwiperSlide>
          {/* Second Slide */}
          <SwiperSlide>
            <div className="relative w-full overflow-hidden shadow-lg h-[60vh] md:h-[80vh] lg:h-[70vh]">
              <img src={img2} alt="Banner 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute -translate-y-1/2 top-1/2 left-4 md:left-10 lg:left-20 z-[999] w-11/12 md:w-1/2 flex flex-col items-center md:items-start gap-4">
                {slideContent}
              </div>
            </div>
          </SwiperSlide>
          {/* Third Slide */}
          <SwiperSlide>
            <div className="relative w-full overflow-hidden shadow-lg h-[60vh] md:h-[80vh] lg:h-[70vh]">
              <img src={img3} alt="Banner 3" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute -translate-y-1/2 top-1/2 left-4 md:left-10 lg:left-20 z-[999] w-11/12 md:w-1/2 flex flex-col items-center md:items-start gap-4">
                {slideContent}
              </div>
            </div>
          </SwiperSlide>
          {/* Fourth Slide */}
          <SwiperSlide>
            <div className="relative w-full overflow-hidden shadow-lg h-[60vh] md:h-[80vh] lg:h-[70vh]">
              <img src={img4} alt="Banner 4" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute -translate-y-1/2 top-1/2 left-4 md:left-10 lg:left-20 z-[999] w-11/12 md:w-1/2 flex flex-col items-center md:items-start gap-4">
                {slideContent}
              </div>
            </div>
          </SwiperSlide>
          {/* Fifth Slide */}
          <SwiperSlide>
            <div className="relative w-full overflow-hidden shadow-lg h-[60vh] md:h-[80vh] lg:h-[70vh]">
              <img src={img5} alt="Banner 5" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute -translate-y-1/2 top-1/2 left-4 md:left-10 lg:left-20 z-[999] w-11/12 md:w-1/2 flex flex-col items-center md:items-start gap-4">
                {slideContent}
              </div>
            </div>
          </SwiperSlide>
          {/* Sixth Slide */}
          <SwiperSlide>
            <div className="relative w-full overflow-hidden shadow-lg h-[60vh] md:h-[80vh] lg:h-[70vh]">
              <img src={img6} alt="Banner 6" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute -translate-y-1/2 top-1/2 left-4 md:left-10 lg:left-20 z-[999] w-11/12 md:w-1/2 flex flex-col items-center md:items-start gap-4">
                {slideContent}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
