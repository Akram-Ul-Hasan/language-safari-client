import React, { useEffect, useState } from 'react';
import img from "../../assets/Banner/3.jpg";
import InstructorCard from './InstructorCard';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Instructors = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      })
  }, [])

    return (
        <div>
      <Helmet>
        <title>All Instructors | Language Safari</title>
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

      <SectionTitle title="All Instructors">
        
      </SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-3 my-5">
      {
        instructors.map(item => <InstructorCard key={item._id} item={item}></InstructorCard> )
      }
      </div>
    </div>
    );
};

export default Instructors;