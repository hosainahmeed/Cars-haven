import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import SectionTitle from "../../../component/sectionheader/SectionTitle";
function Services() {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);
  if (!services) {
    return <p>...loading</p>;
  }
  return (
    <div id="services" className="px-3 py-28 flex flex-col items-center gap-12">
      <SectionTitle
        subTitle="Service"
        title="Our Service Area"
        details="the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable."
      ></SectionTitle>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((services) => (
          <div key={services._id}>
            <div className="card bg-base-100 border-2 md:w-72 shadow-xl">
              <figure className="p-2">
                <img
                  src={services.img}
                  alt={services.title}
                  className="rounded-xl h-56"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-start text-2xl font-bold">
                  {services.title}
                </h2>
                <div className="flex items-center w-full justify-between">
                  <p className="text-start text-red-500">
                    Price : ${services.price}
                  </p>
                  <FaArrowCircleRight
                    style={{ fontSize: "40px", color: "red" }}
                  ></FaArrowCircleRight>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn hover:bg-[#ff3811] border-[#ff3811] bg-transparent text-[#ff3811]  hover:text-[#fff]">
        More Services
      </button>
    </div>
  );
}

export default Services;
