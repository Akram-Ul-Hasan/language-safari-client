import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import TableRow from "./TableRow";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const MyCart = () => {
    const {user} = useContext(AuthContext);
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
            fetch(`https://language-safari-server-jade.vercel.app/carts/${id}`, {
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

  const handlePay = () =>{
    const order = {
        name: user?.displayName,
        email: user?.email,
        amount: total
    }
    fetch('https://language-safari-server-jade.vercel.app/order',{
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        window.location.replace(result.url);
    })
  }


  return (
    <div>
      <Helmet>
        <title>My Cart | Language Safari</title>
      </Helmet>
      <div>
        <h3>Total Enrolled Class: {cart.length}</h3>
        <h3>Total Price: ${total}</h3>
        <button onClick={handlePay} className="btn btn-primary ">Pay</button>
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
