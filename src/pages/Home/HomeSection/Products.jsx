import { useEffect, useState } from "react";
import SectionTitle from "../../../component/sectionheader/SectionTitle";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
function Products() {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <div
      id="products"
      className=" py-28 flex items-center justify-between flex-col gap-12"
    >
      <SectionTitle
        subTitle="Popular Products"
        title="Browse Our Products"
        details="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {parts.map((part) => (
          <div
            key={part._id}
            className="card bg-base-100 border-2 min-w-72  md:w-92 shadow-xl"
          >
            <figure className="p-2 ">
              <img
                src={part.image}
                alt={part.title}
                className="rounded-xl w-full object-cover  h-56"
              />
            </figure>
            <div className="card-body">
              <ReactStars count={part.rating} size={24} color="#ffd700" />
              <h2 className="text-start text-2xl font-bold">{part.name}</h2>
              <div className="flex flex-col gap-2 items-start w-full justify-between">
                <p className="text-red-400">price: ${part.price}</p>
              </div>
            </div>
            <Link className="text-center w-full" to={`/product/${part._id}`}>
              <button className="btn w-full  btn-xl bg-[#ff3811] text-white uppercase">
                Add to cart
              </button>
            </Link>
          </div>
        ))}
      </div>
      <button className="btn hover:bg-[#ff3811] border-[#ff3811] bg-transparent text-[#ff3811]  hover:text-[#fff]">
        More Products
      </button>
    </div>
  );
}

export default Products;
