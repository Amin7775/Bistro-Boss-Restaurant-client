import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa6";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  // tanskack query
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

//   handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            }).then(() => {
              refetch();
            });
          } else {
            Swal.fire({
              title: "Couldn't Delete!",
              text: "There has been an error deleting your cart item",
              icon: "error",
            });
          }
        });
      }
    });
  };
//   handle make admin
  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be set as an admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${id}`).then((res) => {
          if (res.data.modifiedCount > 1) {
            Swal.fire({
              title: "Success!",
              text: "This user is now an admin",
              icon: "success",
            }).then(() => {
              refetch();
            });
          } else {
            console.log(res)
            Swal.fire({
              title: "User is already an admin!",
              icon: "error",
            });
          }
        });
      }
    });
  };


  console.log(users);
  return (
    <div className="pt-12">
      <div className="flex justify-between mb-5">
        <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn bg-orange-400 btn-lg"
                  >
                    <FaUsers className=""></FaUsers>
                  </button>
                </td>
                <td>
                <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt></FaTrashAlt>
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
