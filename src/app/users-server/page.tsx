
type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return <>
  <ul className="p-4 space-y-4">
    {users.map((user: User) => {
      return <li key={user.id}>{user.name}</li>
    })}
  </ul>
  </>
}