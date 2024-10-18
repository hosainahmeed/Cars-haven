import { useState } from "react";
import { useForm } from "react-hook-form";

const FormComponent = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    reset();
  };

  return (
    <div className="bg-[#13232f]/90 p-10 max-w-3xl mx-auto rounded-lg shadow-lg">
      {/* Tab Navigation */}
      <ul className="flex mb-10">
        <li
          className={`w-1/2 text-center p-4 cursor-pointer ${
            activeTab === "signup"
              ? "bg-[#1ab188] text-white"
              : "bg-gray-400/25 text-gray-400"
          }`}
          onClick={() => handleTabClick("signup")}
        >
          Sign Up
        </li>
        <li
          className={`w-1/2 text-center p-4 cursor-pointer ${
            activeTab === "login"
              ? "bg-[#1ab188] text-white"
              : "bg-gray-400/25 text-gray-400"
          }`}
          onClick={() => handleTabClick("login")}
        >
          Log In
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "signup" ? (
          <div>
            <h1 className="text-center text-white font-light text-3xl mb-10">
              Sign Up for Free
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex space-x-4 mb-10">
                <div className="relative w-1/2">
                  <label className="text-white/50 text-lg">First Name</label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    className="text-xl w-full p-2 bg-transparent border border-gray-400 text-white focus:outline-none focus:border-[#1ab188]"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="relative w-1/2">
                  <label className="text-white/50 text-lg">Last Name</label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    className="text-xl w-full p-2 bg-transparent border border-gray-400 text-white focus:outline-none focus:border-[#1ab188]"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative mb-10">
                <label className="text-white/50 text-lg">Email Address</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="text-xl w-full p-2 bg-transparent border border-gray-400 text-white focus:outline-none focus:border-[#1ab188]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="relative mb-10">
                <label className="text-white/50 text-lg">Set A Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 5,
                      message: "Password must be at least 5 characters",
                    },
                  })}
                  className="text-xl w-full p-2 bg-transparent border border-gray-400 text-white focus:outline-none focus:border-[#1ab188]"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#1ab188] text-white p-4 text-2xl font-bold hover:bg-[#18977b] transition-all"
              >
                Get Started
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h1 className="text-center text-white font-light text-3xl mb-10">
              Welcome Back!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mb-10">
                <label className="text-white/50 text-lg">Email Address</label>
                <input
                  type="email"
                  {...register("loginEmail", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="text-xl w-full p-2 bg-transparent border border-gray-400 text-white focus:outline-none focus:border-[#1ab188]"
                />
                {errors.loginEmail && (
                  <p className="text-red-500 text-sm">
                    {errors.loginEmail.message}
                  </p>
                )}
              </div>

              <div className="relative mb-10">
                <label className="text-white/50 text-lg">Password</label>
                <input
                  type="password"
                  {...register("loginPassword", {
                    required: "Password is required",
                    minLength: {
                      value: 5,
                      message: "Password must be at least 5 characters",
                    },
                  })}
                  className="text-xl w-full p-2 bg-transparent border border-gray-400 text-white focus:outline-none focus:border-[#1ab188]"
                />
                {errors.loginPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.loginPassword.message}
                  </p>
                )}
              </div>

              <p className="text-right text-white mb-4">
                <a href="#" className="hover:text-[#1ab188]">
                  Forgot Password?
                </a>
              </p>

              <button
                type="submit"
                className="w-full bg-[#1ab188] text-white p-4 text-2xl font-bold hover:bg-[#18977b] transition-all"
              >
                Log In
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormComponent;
