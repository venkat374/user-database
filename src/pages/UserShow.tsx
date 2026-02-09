import { useOne, useDelete, useNavigation } from "@refinedev/core";
import { useParams } from "react-router";

export const UserShow = () => {
  const { id } = useParams();
  const { data, isLoading } = useOne({
    resource: "users",
    id: id!,
  });

  const { mutate } = useDelete();
  const { list } = useNavigation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const user = data?.data;

  const handleDelete = () => {
    if (!confirm("Delete this user?")) return;

    mutate(
      {
        resource: "users",
        id: id!,
      },
      {
        onSuccess: () => {
          list("users");
        },
      }
    );
  };

  return (
    <div>
      <h2>User Details</h2>

      <p>
        <strong>Name:</strong> {user?.name}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
