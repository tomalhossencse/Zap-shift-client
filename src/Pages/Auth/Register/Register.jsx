import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import Container from "../../../Utility/Container";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Register = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const { registerUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    // console.log("after register", data.photo[0]);
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // store img  and get the url
        const formData = new FormData();
        formData.append("image", profileImg);
        const img_API_URL_Key = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_img_API_URL_Key
        }`;
        axios.post(img_API_URL_Key, formData).then((res) => {
          console.log("after img uplaod", res.data);
          // update profile

          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              const userInfo = {
                email: data.email,
                displayName: data.name,
                photoURL: res.data.data.url,
              };
              axiosSecure.post("/users", userInfo).then((res) => {
                if (res.data.insertedId) {
                  console.log("user created in the database");
                }
              });
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Succesfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(location?.state || "/");
            })
            .catch((error) => {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: error.message,
                showConfirmButton: false,
                timer: 1500,
              });
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container className="my-12 flex justify-center items-center">
      <div className="card w-full max-w-lg bg-base-100 shadow-sm border border-accent-content rounded-2xl p-6 hover:shadow-xl transition duration-300">
        <h1 className="text-center text-4xl font-bold text-primary mb-6">
          Have a Nice Day!
        </h1>
        <p className="text-center text-accent mb-6">
          Register to join our Community
        </p>
        <div className="card-body">
          <form
            onSubmit={handleSubmit(handleRegistration)}
            className="fieldset"
          >
            <fieldset className="fieldset">
              {/* name */}
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">Name Required!</p>
              )}
              {/* photo */}
              <label className="label font-semibold">Photo</label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-500">Photo Required!</p>
              )}
              {/* email */}
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email Required!</p>
              )}

              {/* password */}

              <div className="relative">
                <label className="label font-semibold">Password</label>
                <input
                  type={show ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                  })}
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your password"

                  // ref={passwordRef}
                  // onChange={handlePassworldChange}
                />
                <div className="absolute top-[30px] right-4 text-primary-content">
                  {show ? (
                    <FaEye size={16} onClick={() => setShow(!show)} />
                  ) : (
                    <FaEyeSlash size={16} onClick={() => setShow(!show)} />
                  )}
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is Required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password must be 8 characters or longers
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must contain at least one uppercase letter, one
                    lowercase letter, one number, and one special character.
                  </p>
                )}
              </div>

              <button className="btn w-full bg-primary text-white font-bold text-md rounded-md shadow-md hover:bg-black transition-transform hover:scale-102">
                Register
              </button>
            </fieldset>
          </form>
          <div className="divider text-gray-400">OR</div>
          {/* google */}
          <SocialLogin />
          <div className="text-center ">
            <p className="">
              Already have an account? Please{" "}
              <NavLink
                className="text-primary font-medium hover:underline"
                state={location?.state}
                to={"/login"}
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
