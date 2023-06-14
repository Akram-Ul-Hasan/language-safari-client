import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import TableRow from "./TableRow";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

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
                  key={cart._id}
                  item={item}
                //   handleDelete={handleDelete}
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
