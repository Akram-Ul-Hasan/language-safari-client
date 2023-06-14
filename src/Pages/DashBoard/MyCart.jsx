import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import TableRow from "./TableRow";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete this class from cart!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/carts/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                      Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                });
        }
      })
      
    
  };

  return (
    <div>
      <Helmet>
        <title>My Cart | Language Safari</title>
      </Helmet>
      <div>
        <h3>Total Enrolled Class: {cart.length}</h3>
        <h3>Total Price: ${total}</h3>
        <button className="btn btn-primary ">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Class Name</th>
                <th>Instructor's Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <TableRow
                  key={item._id}
                  item={item}
                  handleDelete={handleDelete}
                ></TableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
