import {
  FaUsers,
  FaTruck,
  FaHeadset,
  FaWrench,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import SectionTitle from "../../../component/sectionheader/SectionTitle";
import { useState } from "react";

function Feature() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: FaUsers,
      title: "Expert Team",
    },
    {
      id: 2,
      icon: FaClock,
      title: "Timely Delivery",
    },
    {
      id: 3,
      icon: FaHeadset,
      title: "24/7 Support",
    },
    {
      id: 4,
      icon: FaWrench,
      title: "Best Equipment",
    },
    {
      id: 5,
      icon: FaShieldAlt,
      title: "100% Guarantee",
    },
    {
      id: 6,
      icon: FaTruck,
      title: "Timely Delivery",
    },
  ];

  const handleMouseEnter = (id) => {
    setActiveFeature(id);
  };

  const handleMouseLeave = () => {
    setActiveFeature(null);
  };

  return (
    <div className=" md: flex items-center justify-between flex-col gap-12">
      <SectionTitle
        subTitle="Core Features"
        title="Why Choose Us?"
        details="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionTitle>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-6 py-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            onMouseEnter={() => handleMouseEnter(feature.id)}
            onMouseLeave={handleMouseLeave}
            className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg shadow-lg transition-all duration-300 ${
              activeFeature === feature.id
                ? "bg-red-500 text-white"
                : "bg-white text-black"
            }`}
          >
            <div>
              {/* Render icon dynamically */}
              <feature.icon
                size={40}
                className={`transition-colors duration-300 ${
                  activeFeature === feature.id ? "text-white" : "text-red-500"
                }`}
              />
            </div>
            <h3 className="mt-2 font-bold text-lg">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
