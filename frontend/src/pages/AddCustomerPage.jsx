import { MainNav } from "../components/MainNav";
import { navigationLinks } from "../config/navigationLinks";
import { UserNav } from "./CustomersPage/components/UserNav";
import { useState } from "react";

export const AddCustomerPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const HandleSubmitForm = async (e) => {
    e.preventDefault();
    if (name === "") return;
    if (email === "") return;
    if (phoneNumber === "" || phoneNumber.length !== 9) return;

    const customerData = {
      name: name,
      surname: surname,
      email: email,
      phone_number: phoneNumber,
    };

    const response = fetch("http://127.0.0.1:8000/customers", {
      method: "POST",
      body: JSON.stringify(customerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setName("");
    setSurname("");
    setEmail("");
    setPhoneNumber("");
  };
return (
  
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#bb2169' }}>Add customer</h2>
        </div>
        <div className="hidden flex-1 flex-col space-y-8 md:flex"></div>
      </div>
      <form onSubmit={HandleSubmitForm} className="addCustomerForm">
        <div className="flex flex-col space-y-4">
          <label className="text-pink-500 font-bold" style={{ color: '#bb2169' }}>Name</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            onChange={handleNameChange}
            value={name}
            placeholder="Leonardo"
            type="text"
          />
          <label className="text-pink-500 font-bold" style={{ color: '#bb2169' }}>Surname</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            onChange={handleSurnameChange}
            value={surname}
            placeholder="DiCaprio"
            type="text"
          />
          <label className="text-pink-500 font-bold" style={{ color: '#bb2169' }}>E-mail</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            onChange={handleEmailChange}
            value={email}
            placeholder="ilovestarbucks@example.com"
            type="text"
          />
          <label className="text-pink-500 font-bold" style={{ color: '#bb2169' }}>Phone Number</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            onChange={handlePhoneChange}
            value={phoneNumber}
            placeholder="999-999-999"
            type="text"
          />
          <button className="bg-pink-500 text-white py-2 px-4 rounded-md" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );  
}