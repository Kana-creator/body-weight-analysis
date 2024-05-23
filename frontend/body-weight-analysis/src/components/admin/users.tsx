import React, { useEffect, useState } from "react";
import { UserModel } from "./user-model";
import axios from "axios";

interface Props {}
const Users: React.FC<Props> = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  const handleMouseOver = (element: HTMLTableRowElement) => {
    element.classList.add("active");
  };

  const handleMouseOut = (element: HTMLTableRowElement) => {
    element.classList.remove("active");
  };

  useEffect(() => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => error.response
    );

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/fetch-users`)
      .then((res) => {
        if (res.data.status && res.data.status !== "OK") {
          setUsers([]);
          // window.alert(res.data.message);
        } else {
          setUsers(res.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  // FUNCTION FOR DELETING A USER
  const handleDeleteUser = (user_id: number | undefined) => {
    const current_user = JSON.parse(localStorage.getItem("user") as string);

    const prompt = window.prompt("Enter 'DELETE' to confirm.");

    if (prompt && prompt === "DELETE") {
      axios.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response) {
            return error.response;
          }
          return Promise.reject(error.response);
        }
      );

      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/api/delete-user/${user_id}/${current_user.role}`
        )
        .then((res) => {
          setUsers(users.filter((user) => user.userId != user_id));
          window.alert(res.data.message);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className=" w-full flex flex-wrap justify-between">
      <div className="1ee">
        <h1>Users</h1>
      </div>
      <div className="2ee">
        <h1>{users.length}</h1>
      </div>
      <div className="mb-5 w-1/3">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          className="w-full border-2 border-white rounded-sm outline-none p-2"
        />
      </div>
      {users.length < 1 ? (
        <div className="mb-32 text-red-900  w-full h-full text-center text-sm">
          No user found
        </div>
      ) : (
        <table className="mb-32 border-2 border-red-900 text-red-900  w-full h-full text-center text-sm">
          <thead>
            <tr className="border-2 border-red-900">
              <th>No.</th>
              <th>Role</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="p-20 hover:bg-red-200 hover:text-red-900"
                onMouseOver={(e: React.MouseEvent<HTMLTableRowElement>) =>
                  handleMouseOver(e.currentTarget)
                }
                onMouseOut={(e: React.MouseEvent<HTMLTableRowElement>) =>
                  handleMouseOut(e.currentTarget)
                }
              >
                <td>{index + 1}</td>
                <td>{user.role}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  {user.role !== "admin" ? (
                    <button
                      className="bg-red-500 mx-2 text-white font-bold px-3 p-1"
                      onClick={() => handleDeleteUser(user.userId)}
                    >
                      Delete
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-2 border-red-900">
              <th>No.</th>
              <th>Role</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Users;
