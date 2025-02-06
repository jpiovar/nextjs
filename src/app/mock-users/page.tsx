import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default async function MockUsers() {

  const authObj = await auth();
  const currentUserObj = await currentUser();

  console.log({authObj, currentUserObj});

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://67618fab46efb37323722c8d.mockapi.io/users");
  const users = await res.json();

  async function addUser(formData: FormData) {
    "use server"
    const name = formData.get('name');
    const res = await fetch(`https://67618fab46efb37323722c8d.mockapi.io/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ',
        // 'API-Key': 'key',
      },
      body: JSON.stringify({name})
    });
    const user = await res.json();
    revalidatePath("/mock-users");
    console.log(user);
    // return {
    //   user
    // };
  }

  return <>
  <div className="py-10">
    <form className="mb-10" action={addUser}>
      <input type="text" placeholder="Search by name" name="name" required/>
      <button type="submit">Add user</button>
    </form>
  <ul className="p-4 space-y-4">
    {users.map((user: User) => {
      return <li key={user.id}>{user.name}</li>
    })}
  </ul>
  </div>
  </>
}