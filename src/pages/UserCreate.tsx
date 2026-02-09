import { useCreate, useNavigation } from "@refinedev/core";
import { useState } from "react";

export const UserCreate = () => {
  const { mutate } = useCreate();
  const { list } = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    mutate(
      {
        resource: "users",
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
      <h2>Create User</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <button onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};
