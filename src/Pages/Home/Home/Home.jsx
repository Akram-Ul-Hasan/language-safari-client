import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassCard from "../../Classes/ClassCard";
import InstructorCard from "../../Instructors/InstructorCard";
import ChooseUs from "./ChooseUs";
import { AuthContext } from "../../../Providers/AuthProvider";

const Home = () => {
  const [classes, setClasses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:5000/classes?search=popular`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        console.log(classes);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/instructors?search=popular`)
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        console.log(instructors);
      });
  }, []);


  const handleEnrollClass = (item) => {
    console.log(item);
    const { image, name, instructor_name, price } = item;
    const newItem = {
      image, name, price, instructor_name,
      email: user.email
    }
    if (user) {
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newItem),
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
        <title>Home | Language Safari</title>
      </Helmet>
      <Banner></Banner>

      <SectionTitle title={"Our Popular Classes"}></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-5">
        {classes.map((item) => (
          <ClassCard
            key={item._id}
            item={item}
            handleEnrollClass={handleEnrollClass}
          ></ClassCard>
        ))}
      </div>


      <SectionTitle title="Our Popular Instructors">
        
      </SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-3 my-5">
      {
        instructors.map(item => <InstructorCard key={item._id} item={item}></InstructorCard> )
      }
      </div>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
