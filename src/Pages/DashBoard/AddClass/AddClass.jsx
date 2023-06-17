import React, { useContext, useState } from "react";
import background from "../../../assets/login/login1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let img;
    const formData = new FormData();
    formData.append("image", data.photo[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((photoResponse) => {
        if (photoResponse.success) {
          img = photoResponse.data.display_url;
          console.log(img);
        }
      });
    const newClass = {
      name: data.name,
      image: `${img}`,
      instructor_email: user.email,
      instructor_name: user.displayName,
      price: data.price,
      available_seat: data.available_seat,
    };
    console.log(newClass);

    fetch("https://language-safari-server-jade.vercel.app/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "New Classes Has been created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add Class | Language Safari</title>
      </Helmet>

      <div
        className="hero min-h-screen w-full"
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
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Class name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Class Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  {...register("price", {
                    required: true,
                  })}
                  placeholder="Price"
                  className="input input-bordered"
                />
                {errors.price && (
                  <span className="text-red-600">Phone Number is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Seat</span>
                </label>
                <input
                  type="number"
                  {...register("available_seat", { required: true })}
                  placeholder="Total seat no"
                  className="input input-bordered"
                />
                {errors.available_seat && (
                  <span className="text-red-600">Seat number is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="file" {...register("photo", { required: true })} />
                {errors.photo && (
                  <span className="text-red-600">Image is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Add Class"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
