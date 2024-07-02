import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminModal = ({ show, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === import.meta.env.VITE_ADMIN &&
      password === import.meta.env.VITE_PASS
    ) {
      onClose();
      setError("");
      navigate("/dashboard");
    } else {
      setError("invalid credentials");
    }
  };

  if (!show) return null;

  return (
    <div className="mx-4 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="group p-5 md:p-8 pb- w-full md:w-[50vw] mx-auto text-center  bg-gradient-to-r from-gray-950 to-teal-950 hover:to-teal-900 duration-500 rounded-md shadow shadow-gray-400 ">
        <h2 className="text-xl font-bold mb-4 text-center ">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              required
              placeholder="Email"
              className="p-3 w-full rounded-lg bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              required
              placeholder="Password"
              className="p-3 w-full rounded-lg bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4 font-semibold ">Error: {error}</p>}
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-3 w-full px-4 font-semibold text-gray-100 bg-teal-700 hover:bg-teal-600 rounded-md duration-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AdminModal;