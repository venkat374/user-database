import { useList, useNavigation } from "@refinedev/core";

export const UserList = () => {
  const { query, result } = useList({
    resource: "users",
  });

  const { show, edit, create } = useNavigation();

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
            <strong>{user.name ?? "No name"}</strong>
            <br />
            {user.email ?? "No email"}
            <br />

            <button onClick={() => show("users", user.id)}>
              View
            </button>

            <button onClick={() => edit("users", user.id)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
