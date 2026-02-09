import { useList, useNavigation, useDelete } from "@refinedev/core";

export const UserList = () => {
  const { query, result } = useList({
    resource: "users",
  });



  const { show, edit, create } = useNavigation();
  const { mutate: deleteOne } = useDelete();

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Users</h2>

      <button onClick={() => create("users")}>
        Create User
      </button>

      <ul>
        {result.data?.map((user: any) => (
          <li key={user.id}>
            {user.name ?? "No name"}
            <br />
            {user.email ?? "No email"}
            <br />

            <button onClick={() => show("users", user.id)}>
              View
            </button>

            <button onClick={() => edit("users", user.id)}>
              Edit
            </button>

            <button onClick={() => deleteOne({resource: "users", id: user.id})}>
            delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
