import React, { useEffect, useState } from "react";
import { UserModel } from "./user-model";
import { ActivityModel } from "./activity-model";

interface Props {}
const Activities: React.FC<Props> = () => {
  const [activities, setActivities] = useState<ActivityModel[]>([]);

  const handleMouseOver = (element: HTMLTableRowElement) => {
    element.classList.add("active");
  };

  const handleMouseOut = (element: HTMLTableRowElement) => {
    element.classList.remove("active");
  };

  useEffect(() => {
    setActivities([
      {
        user_name: "Kuwebwa Anatoli",
        activity_details: "Login",
        date_time: new Date().toISOString(),
      },

      {
        user_name: "Kuwebwa Anatoli",
        activity_details: "Login",
        date_time: new Date().toISOString(),
      },

      {
        user_name: "Kuwebwa Anatoli",
        activity_details: "Login",
        date_time: new Date().toISOString(),
      },
      {
        user_name: "Kuwebwa Anatoli",
        activity_details: "Login",
        date_time: new Date().toISOString(),
      },
      {
        user_name: "Kuwebwa Anatoli",
        activity_details: "Login",
        date_time: new Date().toISOString(),
      },
      {
        user_name: "Kuwebwa Anatoli",
        activity_details: "Login",
        date_time: new Date().toISOString(),
      },
    ]);
  }, []);
  return (
    <div className=" w-full flex flex-wrap justify-between">
      <div className="1ee">
        <h1>Activities</h1>
      </div>
      <div className="2ee">
        <h1>{activities.length}</h1>
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
      <table className="mb-32 border-2 border-red-900 text-red-900  w-full h-full text-center text-sm">
        <thead>
          <tr className="border-2 border-red-900">
            <th>No.</th>
            <th>User Name</th>
            <th>Activity</th>
            <th>Date and Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
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
              <td>{activity.user_name}</td>
              <td>{activity.activity_details}</td>
              <td>{activity.date_time}</td>
              <td>
                <button className="bg-red-500 mx-2 text-white font-bold px-3 p-1">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-2 border-red-900">
            <th>No.</th>
            <th>User Name</th>
            <th>Activity</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Activities;
