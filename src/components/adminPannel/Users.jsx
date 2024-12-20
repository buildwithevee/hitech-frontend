import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaEdit, FaTrash } from "react-icons/fa"; // Added more icons for actions
import AddMember from "../../modals/AddMember";

function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddMember = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Dummy data for users
  const usersData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      department: "IT",
      status: "Active",
    },
    
  ];

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lg:px-24 md:px-10 px-4 pb-5">
      <h1 className=" pl-3 sm:pl-0 text-xl md:text-2xl xl:text-3xl font-bold mb-5 mt-8 sm:mt-12 md:mt-14 lg:mt-16">
        Users List
      </h1>

      {/* Search Input */}
      <div className="mb-4 flex flex-row justify-between ">
      <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-100 h-10  text-gray-800 p-2 rounded-lg w-1/3 focus:outline-none focus:bg-gray-200 transition duration-300"
        />
        <div className="justify-center items-center flex flex-col gap-y-4">
          <button
            type="button"
            className="px-4 py-2 text-sm sm:text-base text-white rounded-lg bg-[#022213] hover:bg-[#72A10F] transition duration-300"
          >
            Add Member
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs text-zinc-600 font-extralight ">
            <tr className="h-14">
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-900 font-medium">
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className="bg-zinc-50 mt-2 border">
                <th scope="row" className="px-6 py-4 font-medium text-white">
                  {index + 1}
                </th>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">{user.department}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex space-x-4">
                  <button className="text-blue-600 hover:text-blue-900">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button className="text-white bg-custom-blue hover:bg-table-color py-2 px-4 rounded-lg">
          <FaChevronLeft />
        </button>
        <span className="text-white">Page 1 of 2</span>
        <button className="text-white bg-custom-blue hover:bg-table-color py-2 px-4 rounded-lg">
          <FaChevronRight />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <AddMember
          closeModal={closeModal}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          setShowConfirmPassword={setShowConfirmPassword}
          showConfirmPassword={showConfirmPassword}
        />
      )}
    </div>
  );
}

export default Users;

