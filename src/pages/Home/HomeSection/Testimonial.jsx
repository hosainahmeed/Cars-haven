import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./reviewStyle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
import SectionTitle from "../../../component/sectionheader/SectionTitle";

function Testimonial() {
  const [reviewsData, setReviewsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviewsData(data));
  }, []);
  return (
    <div id="Testimonial" className="my-12 md:my-28 flex items-center justify-between flex-col gap-12">
      <SectionTitle
        subTitle="Testimonial"
        title="What Customer Says"
        details="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionTitle>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
        }}
        className="mySwiper"
      >
        {reviewsData.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex items-start justify-around space-x-5 px-12">
              <div className="review-card min-h-48 text-start">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="ring-primary w-12 rounded-full border-2 border-[#07332F]">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="leading-4 text-nowrap">{review.name}</h3>
                      <p className="leading-4">{review.review}</p>
                    </div>
                  </div>
                  <FaQuoteLeft className="text-5xl md:block hidden" />
                </div>
                <p>{review.review_text}</p>
                <div className="flex items-center">
                  <h1 className="text-xl font-semibold">Rating:</h1>
                  <ReactStars count={review.rating} size={24} color="#ffd700" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
