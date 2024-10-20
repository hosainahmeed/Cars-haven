import SectionTitle from "../../../component/sectionheader/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Team() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className=" md: flex items-center justify-between flex-col gap-12">
      <SectionTitle
        subTitle="Team"
        title="Meet Our Team"
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
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="mySwiper"
      >
        {members.map((members) => (
          <SwiperSlide key={members._id}>
            <div className="card bg-base-100 border-2 min-w-72 md:w-96 shadow-xl">
              <figure className="p-2 ">
                <img
                  src={members.image}
                  alt={members.title}
                  className="rounded-xl w-full object-cover  h-56"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-start text-2xl font-bold">
                  {members.name}
                </h2>
                <div className="flex flex-col gap-2 items-start w-full justify-between">
                  <div>
                    <h1>{members.name}</h1>
                    <p>{members.facility}</p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <a href={members.facebook}>
                      <FaFacebook></FaFacebook>
                    </a>
                    <a href={members.twitter}>
                      <FaTwitter></FaTwitter>
                    </a>
                    <a href={members.linkedin}>
                      <FaLinkedin></FaLinkedin>
                    </a>
                    <a href={members.instagram}>
                      <FaInstagram></FaInstagram>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Team;
