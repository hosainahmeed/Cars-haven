import { FaCalendar, FaMobile } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

function ContactInfo() {
  const contactData = [
    {
      _id: "1",
      title: "We are open Monday-Friday",
      starttime: "7:00 am",
      endtime: "9:00 pm",
      icon: <FaCalendar />,
    },
    {
      _id: "2",
      title: "Have a question?",
      phonenumber: "+2546 251 2658",
      icon: <FaMobile />,
    },
    {
      _id: "3",
      title: "Need a repair? Our address",
      place: "Liza Street, New York",
      icon: <FaMapLocation />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-28">
      <h1 className="text-center my-12 text-2xl md:text-5xl md:font-black font-semibold">Contact Information</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-black shadow-lg text-white p-8 lg:p-12 rounded-lg">
        {contactData.map((data) => (
          <div
            key={data._id}
            className="flex flex-col md:flex-row items-center text-center md:text-left p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl md:text-5xl text-[#ff3811] mb-4 md:mb-0 md:mr-6">
              {data.icon}
            </div>
            <div>
              <div className="text-lg font-semibold mb-2">
                {data.title}
              </div>
              <div className="text-base">
                {data.starttime && data.endtime && (
                  <p className="text-sm md:text-base">
                    {data.starttime} - {data.endtime}
                  </p>
                )}
                {data.phonenumber && (
                  <p className="text-sm md:text-base">{data.phonenumber}</p>
                )}
                {data.place && (
                  <p className="text-sm md:text-base">{data.place}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
