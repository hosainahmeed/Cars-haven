import image from "../../assets/images/banner/4.jpg";

function PagesBanner({ title }) {
  return (
    <div
      className="relative flex items-center justify-start pt-48 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <h1 className="text-white text-4xl font-bold text-center">
        {title}
      </h1>
    </div>
  );
}

export default PagesBanner;
