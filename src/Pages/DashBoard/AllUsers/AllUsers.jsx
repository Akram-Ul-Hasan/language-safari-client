import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(
      "https://language-safari-server-jade.vercel.app/users"
    );
    return res.json();
  });

  const handleDelete = (user) => {};

  return (
    <div>
      <Helmet>
        <title>All Users | Language Safari</title>
      </Helmet>
      {<h2 className="text-3xl font-semibold">Total Users: {users.length}</h2>}

      <div className="overflow-x-auto w-full">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>Role</th>
              <th>|Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>Blue</td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-sm btn-error btn-outline"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
