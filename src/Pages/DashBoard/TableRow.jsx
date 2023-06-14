import React from "react";

const TableRow = ({ item, handleDelete }) => {
  const { _id,image, name, price, instructor_name } = item;
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-20 h-20">
            {image && (
              <img
                className=""
                src={image}
                alt="Avatar Tailwind CSS Component"
              />
            )}
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{instructor_name}</td>
      <td>${price}</td>

      <th>
        <button
            onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-error btn-outline"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default TableRow;
