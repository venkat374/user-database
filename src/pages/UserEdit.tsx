import { useOne, useUpdate, useNavigation } from "@refinedev/core";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export const UserEdit = () => {
  const { id } = useParams();

  const { query } = useOne({
    resource: "users",
    id: id!,
  });

  const { mutate } = useUpdate();
  const { list } = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized && query.data?.data) {
      setName((query.data.data as any).name ?? "");
      setEmail((query.data.data as any).email ?? "");
      setInitialized(true);
    }
  }, [query.data, initialized]);

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = () => {
    mutate(
      {
        resource: "users",
        id: id!,
        values: {
          name,
          email,
        },
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
      <h2>Edit User</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <button onClick={handleSubmit}>
        Update
      </button>
    </div>
  );
};
