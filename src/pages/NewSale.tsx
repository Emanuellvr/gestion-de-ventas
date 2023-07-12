import DetailsTable from "../components/DetailsTable";
import Sidebar from "../components/Sidebar";
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { Autocomplete, Button, Input, TextField } from "@mui/material";
import api from "../services/api";
import { AxiosResponse } from "axios";

export interface IFormData {
  client: string;
  office: string;
  currency: string;
  details:
    | [
        {
          id: number;
          name: string;
          quantity: string;
          price: string;
          subtotal: string;
        }
      ]
    | [];
}

interface IBrancheOffices {
  id: number;
  name: string;
  currency: string;
}

const NewSale = () => {
  const [formData, setFormData] = useState<IFormData>({
    client: "",
    office: "",
    currency: "",
    details: [],
  });
  const [selectedBranchOffice, setSelectedBranchOffice] =
    useState<IBrancheOffices | null>();
  const [branchOffices, setBranchOffices] = useState<[IBrancheOffices]>();
  const [clients, setClients] = useState<[{ id: string; name: string }]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offices = await api.get<{ data: [IBrancheOffices] }>(
          "http://localhost:8000/branch_offices"
        );

        const users = await api.get("http://localhost:8000/users");
        setClients(users.data);
        setBranchOffices(offices.data.map((branch) => branch));
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    void fetchData();
  }, []);

  const handleOptionChange = (name: string, value: string | null) => {
    if (name === "clients") {
      const selectedClients = clients?.find((client) => client.name === value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        client: selectedClients?.name ?? "",
      }));
    } else {
      const selectedOffice = branchOffices?.find(
        (office) => office.name === value
      );
      setSelectedBranchOffice(selectedOffice);
      setFormData((prevFormData) => ({
        ...prevFormData,
        office: selectedOffice?.name ?? "",
        currency: selectedOffice?.currency ?? "",
      }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform form submission logic
    console.log("Form submitted:", formData);
    // Reset form fields
    setSelectedBranchOffice(null);
    setFormData({
      client: "",
      office: "",
      currency: "",
      details: [],
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex bg-[#f6f7fa] pb-24">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex flex-col flex-grow pl-16">
        {/* Page title */}
        <div className="flex flex-row items-center mx-24 my-16">
          <span className=" w-16 h-16 flex items-center justify-center text-white rounded-md">
            <img src="../../newsale_person.png" />
          </span>
          <div className="w-full ml-4 pb-4 border-b-4 border-[#cedded]">
            <h1 className="text-4xl">New Sale</h1>
          </div>
        </div>
        <div className="flex flex-row items-center mx-24 mt-8">
          <div className="w-full ml-4 pb-2 border-b-2 border-[#8c8c8c]">
            <h3 className="text-3xl">Document</h3>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-between w-full"
        >
          <div className="flex w-full items-center mx-24 my-4">
            {/* First column */}
            <div className="w-full md:w-2/5 px-4 mb-4">
              <label className="block mb-1 ml-1" htmlFor="name">
                Client
              </label>
              <div className="flex flex-row">
                <Autocomplete
                  disablePortal
                  className="w-full"
                  onChange={(_, value) => handleOptionChange("clients", value)}
                  id="combo-box-demo"
                  options={
                    clients?.map((client) => client.name) as readonly string[]
                  }
                  renderInput={(params) => (
                    <TextField
                      variant="standard"
                      name="client"
                      {...params}
                      className="bg-white h-10"
                    />
                  )}
                />
                {/*    <input
                     className="w-full md:w-5/6 px-3 py-2"
                       type="text"
                       id="client"
                       value={formData.client}
                       onChange={handleChange}
                       name="client"
                     /> */}

                <button className="w-full md:w-auto px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold ml-2">
                  +
                </button>
              </div>
            </div>

            {/* Second column */}
            <div className="w-full md:w-2/5 px-4 mb-4">
              <label className="block mb-1 ml-1" htmlFor="email">
                Branch office
              </label>
              <Autocomplete
                value={selectedBranchOffice?.name}
                disablePortal
                className="w-full"
                onChange={(_, value) =>
                  handleOptionChange("branchOffices", value)
                }
                id="combo-box-demo"
                options={
                  branchOffices?.map(
                    (branch) => branch.name
                  ) as readonly string[]
                }
                renderInput={(params) => (
                  <TextField
                    variant="standard"
                    {...params}
                    className="bg-white h-10"
                  />
                )}
              />
            </div>

            {/* Third column */}
            <div className="w-full md:w-1/5 px-4 mb-4">
              <label className="block mb-1 ml-1" htmlFor="phone">
                Currency
              </label>
              <input
                className="w-full px-3 py-2"
                type="text"
                id="currency"
                value={formData.currency}
                onChange={handleChange}
                name="currency"
              />
            </div>
          </div>

          <div className="flex flex-row w-full items-center mx-24 my-8">
            <div className="w-full ml-4 pb-2 border-b-2 border-[#8c8c8c]">
              <h3 className="text-3xl">Details</h3>
            </div>
          </div>

          <DetailsTable
            formData={formData}
            handleChange={handleChange}
            setFormData={setFormData}
          />

          <div className="flex w-full items-center mx-24 mt-8">
            <div className="ml-4 pb-2 w-full border-b-2 border-[#8c8c8c]">
              <div className="w-full flex flex-row float-right md:w-1/4 mx-12 pr-16 mb-4">
                <label className="block mb-1 mr-4" htmlFor="phone">
                  Total
                </label>
                <input
                  className="w-full px-3 py-2"
                  type="text"
                  id="total"
                  name="total"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full items-center mx-24 my-4 justify-end">
            <div className="px-4 py-2">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 "
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
        {/* Form */}
      </main>
    </div>
  );
};

export default NewSale;
