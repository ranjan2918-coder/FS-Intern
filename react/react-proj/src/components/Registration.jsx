import { useState } from "react";

const EMPTY_FORM = { username: "", email: "", number: "" };

const FIELDS = [
  { name: "username", label: "Username", type: "text", autoComplete: "name", placeholder: "Enter username", validate: (v) => v.trim().length >= 3 || "Enter at least 3 characters." },
  { name: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "Enter email", validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Enter a valid email address." },
  { name: "number", label: "Number", type: "tel", autoComplete: "tel", placeholder: "Enter number", validate: (v) => /^[0-9]{10}$/.test(v.trim()) || "Enter exactly 10 digits." },
];

const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

function Registration() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setEditingUserId(null);
    setFormData(EMPTY_FORM);
    setErrors({});
  };

  function handleChange({ target: { name, value } }) {
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = Object.fromEntries(
      FIELDS.map((f) => [f.name, f.validate(formData[f.name])]).filter(([, res]) => res !== true),
    );
    if (Object.keys(nextErrors).length > 0) return setErrors(nextErrors);

    setUsers((current) =>
      editingUserId
        ? current.map((u) => (u.id === editingUserId ? { ...u, ...formData } : u))
        : [...current, { id: crypto.randomUUID(), ...formData }],
    );
    resetForm();
  }

  function handleEdit(user) {
    setFormData({ username: user.username, email: user.email, number: user.number });
    setEditingUserId(user.id);
    setErrors({});
  }

  function handleDelete(userId) {
    setUsers((current) => current.filter((u) => u.id !== userId));
    if (editingUserId === userId) resetForm();
  }

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Registration Form</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {FIELDS.map(({ name, label, type, autoComplete, placeholder }) => (
              <div key={name}>
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
                  {label}
                </label>
                <input
                  id={name}
                  type={type}
                  autoComplete={autoComplete}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className={inputClass}
                />
                {errors[name] && <span role="alert" className="block text-sm text-red-600 mt-1">{errors[name]}</span>}
              </div>
            ))}

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200">
              {editingUserId ? "Update User" : "Register"}
            </button>
            {editingUserId && (
              <button type="button" onClick={resetForm} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded-lg transition duration-200">
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Registered Users</h2>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              {users.length} {users.length === 1 ? "User" : "Users"}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  {FIELDS.map((f) => <th key={f.name} scope="col" className="p-4 border-b">{f.label}</th>)}
                  <th scope="col" className="p-4 border-b text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr><td colSpan="4" className="text-center p-8 text-gray-500">No users registered yet.</td></tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 transition">
                      {FIELDS.map((f) => <td key={f.name} className="p-4 border-b text-gray-700">{user[f.name]}</td>)}
                      <td className="p-4 border-b">
                        <div className="flex justify-center gap-2">
                          <button type="button" onClick={() => handleEdit(user)} className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm transition">
                            Edit
                          </button>
                          <button type="button" onClick={() => handleDelete(user.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
