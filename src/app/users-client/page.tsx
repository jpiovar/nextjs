"use client"
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response?.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err){
        setError("Failed to fetch users");
        if (err instanceof Error) {
          setError("Failed to fetch users: " + err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users ...</div>
  }
  if(error) {
    return <div>Error: {error}</div>
  }
  return <>
  <ul className="p-4 space-y-4">
    {users.map((user) => {
      return <li key={user.id}>{user.name}</li>
    })}
  </ul>
  </>
}