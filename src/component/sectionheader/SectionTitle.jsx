
function SectionTitle({subTitle,title,details}) {
  return (
    <div className="w-full md:w-1/2 md:mx-auto flex flex-col gap-2 text-center">
      <h3 className="text-[#ff3811]">{subTitle}</h3>
      <h2 className="text-2xl md:text-5xl font-black">{title}</h2>
      <p className="text-base">{details}</p>
    </div>
  );
}

export default SectionTitle;
