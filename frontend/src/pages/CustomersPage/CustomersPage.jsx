import { MainNav } from "@/components/MainNav";
import { UserNav } from "./components/UserNav";
import { navigationLinks } from "../../config/navigationLinks";
import { useEffect, useState } from "react";

export const CustomersPage = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/customers")
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      console.log(data)
    });
  }, []);

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
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#bb2169' }}>Customers</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex"> 
          <ul className="customersList">
              {data.map((i) => (
                <li key={i.id}>
                  <p>
                    Name: {i.name}
                  </p>
                  <p>
                    Surname: {i.surname}
                  </p>
                  <p>
                    Email: {i.email}
                  </p>
                  <p>
                    Phone number: {i.phone_number}
                  </p>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
};
