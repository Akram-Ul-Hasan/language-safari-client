import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import img from "../../assets/Banner/3.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ClassCard from "./ClassCard";
import { AuthContext } from "../../Providers/AuthProvider";
const Classes = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  const handleEnrollClass = (item) => {
    console.log(item);
    if (user) {
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div>
      <Helmet>
        <title>All Classes | Language Safari</title>
      </Helmet>
      <div
        className="hero  h-[500px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <SectionTitle title="All Classes"></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-3 my-5">
        {classes.map((item) => (
          <ClassCard
            key={item._id}
            item={item}
            handleEnrollClass={handleEnrollClass}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
