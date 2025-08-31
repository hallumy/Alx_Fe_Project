import React, { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "******",
    };
    setUser(storedUser);
  }, []);

  const saveUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const handleEditClick = () => {
    if (editing) {
      saveUser(form);
      setEditing(false);
    } else {
      setForm(user);
      setEditing(true);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>

      {user && !editing && (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Password:</strong> ********</p>
        </div>
      )}

      {editing && (
        <div className="space-y-2">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
        </div>
      )}

      <div className="mt-4 flex space-x-2">
        <button
          onClick={handleEditClick}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          {editing ? "Save" : "Edit"}
        </button>
        {editing && (
          <button
            onClick={() => setEditing(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
