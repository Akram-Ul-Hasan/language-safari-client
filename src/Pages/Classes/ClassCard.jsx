import React from "react";

const ClassCard = ({ item }) => {
  const { image, name, instructor_name, available_seat, price } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Instructor Name: {instructor_name}</p>
        <p>Available Seat: {available_seat}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Enroll now</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
