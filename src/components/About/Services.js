// components/LeadershipService.js
import Img1 from "../../assets/butterservice1.jpeg";
import Img2 from "../../assets/butterservice2.jpeg";
import Img3 from "../../assets/butterservice3.jpeg";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiButter } from "react-icons/gi";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";

const LeadershipService = () => {
  const services = [
    {
      id: 1,
      title: "Where Moisture Meets Magic",
      imageUrl: Img1,
      icon: <FaHandHoldingWater />, // Replace with your icon/image
    },
    {
      id: 2,
      title: "Pure Shea, Pure Care",
      imageUrl: Img2,
      icon: <GiButter />,
    },
    {
      id: 3,
      title: "Butter Up Your Beauty, Naturally",
      imageUrl: Img3,
      icon: <MdOutlineFaceRetouchingNatural />,
    },
  ];

  return (
    <div className="py-12 font">
      <div className="text-center mb-12">
        <p className="text-yellow font-medium tracking-wide text-2xl md:text-2xl">
          « OUR BEST SERVICES »
        </p>
        <h2 className="text-3xl md:text-4xl my-4 md:my-6 font-bold text-gray-800">
          We Lead This Industry
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden group w-[80%] md:w-full mx-auto"
          >
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-[60%] mx-auto md:w-full h-84 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 bg-yellow bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-24 w-[60%] mx-auto md:w-full">
              <div className="text-white text-5xl mb-4">{service.icon}</div>
              <p className="text-white text-lg font-semibold">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipService;
