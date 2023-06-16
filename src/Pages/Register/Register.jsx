import React, { useContext, useState } from "react";
import background from "../../assets/login/login1.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const Register = () => {
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, setUserPhotoAndName } = useContext(AuthContext);

  const handlePasswordHide = () => {
    setHide(!hide);
  };

  const onSubmit = (data) => {
    let photo;
    const formData = new FormData();
    formData.append("image", data.photoURL[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((photoResponse) => {
        if (photoResponse.success) {
          photo = photoResponse.data.display_url;
          data.photoURL = photo;
        }
      });

    if (data.password === data.confirmPassword) {
      createUser(data.email, data.password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(data.name, data.photoURL);
          console.log(loggedUser);

          setUserPhotoAndName(data.name, data.photoURL).then(() => {
            const saveUser = {
              name : data.name,
              email: data.email,
            }
            fetch("https://language-safari-server-jade.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Has been created successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          });
          navigate("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "password not matched",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-content ">
        <div className="card w-full shadow-2xl bg-base-100 bg-opacity-70 ">
          <h3 className="text-3xl ml-8 mt-8">Please Sign Up</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select
                {...register("gender", { required: true })}
                className="input input-bordered"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <span className="text-red-600">Gender is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                {...register("phoneNumber", {
                  required: true,
                  pattern: /^[0-9]{11}$/,
                })}
                placeholder="Phone Number"
                className="input input-bordered"
              />
              {errors.phoneNumber && (
                <span className="text-red-600">
                  Phone Number is required and must be 11 digits
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                {...register("address", { required: true })}
                placeholder="address"
                className="input input-bordered"
              />
              {errors.address && (
                <span className="text-red-600">Address is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex input input-bordered items-center justify-between">
                <input
                  type={hide ? "password" : "text"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*?[0-9])/,
                  })}
                  placeholder="password"
                />

                <button onClick={handlePasswordHide}>
                  {hide ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>

              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase and one number
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="flex input input-bordered items-center justify-between">
                <input
                  type={hide ? "password" : "text"}
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*?[0-9])/,
                  })}
                  placeholder="confirm password"
                />

                <button onClick={handlePasswordHide}>
                  {hide ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>

              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.confirmPassword?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.confirmPassword?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase and one number
                </p>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="ml-8">
            Don't have an account? <Link to="/sign-up">Sign Up</Link>{" "}
          </p>

          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
