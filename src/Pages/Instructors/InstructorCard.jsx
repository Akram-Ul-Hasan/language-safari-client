import React from "react";

const InstructorCard = ({ item }) => {
  const { name, image, email } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Email: {email}</p>
        
        <div className="card-actions justify-center">
          <button className="btn btn-primary">See all classes</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
