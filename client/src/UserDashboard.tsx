import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "./config/config";

type TUser = {
  _id: string;
  username: string;
  email: string;
  password: string;
};

export const UserDashboard = () => {
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const { data } = await axios.get<TUser[]>(`${API_ENDPOINT}/users`);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <ul>
        {users.map((user) => (
          <li>{user._id}</li>
        ))}
      </ul>
    </div>
  );
};
