import React from 'react';

const MyClass = () => {
    return (
        <div>
      <Helmet>
        <title>Add Class | Language Safari</title>
      </Helmet>
      
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

export default MyClass;