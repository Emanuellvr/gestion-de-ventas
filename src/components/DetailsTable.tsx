import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { IFormData } from "../pages/NewSale";

interface TableRow {
  id: number; // Unique identifier for each row
  name: string;
  quantity: string;
  price: string;
  subtotal: string;
}

interface TableProps {
  formData: IFormData;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setFormData: Dispatch<SetStateAction<IFormData>>;
}

const DetailsTable: React.FC<TableProps> = ({ formData, setFormData }) => {
  const [counter, setCounter] = useState(3);

  const generateUniqueId = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleAddRow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newDetail = {
      id: counter,
      name: "",
      quantity: "",
      price: "",
      subtotal: "",
    };
    generateUniqueId();
    setFormData((prevFormData) => {
      const { details } = prevFormData;
      const newDeatails = [...details, newDetail];
      return { ...prevFormData, details: newDeatails } as IFormData;
    });
  };

  const handleDeleteRow = (id: number) => {
    setFormData((prevFormData) => {
      const newDetails = prevFormData.details.filter((row) => row.id !== id);
      return { ...prevFormData, details: newDetails } as IFormData;
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
    field: keyof TableRow
  ) => {
    const { value } = e.target;
    setFormData((prevState) => {
      const newDetails = prevState.details.map((detail) => {
        return detail.id === id ? { ...detail, [field]: value } : detail;
      });
      return { ...prevState, details: newDetails } as IFormData;
    });
  };

  return (
    <>
      <div className="flex flex-row w-full items-center mx-24 my-4">
        {/* Table */}
        <table className="w-full border-collapse mx-4">
          <thead>
            <tr>
              <th className="text-start md:w-2/5 mb-1 pl-1">Name</th>
              <th className="text-start md:w-1/5 mb-1 pl-5">Quantity</th>
              <th className="text-start md:w-1/5 mb-1 pl-5">Price</th>
              <th className="text-start md:w-1/5 mb-1 pl-5">Subtotal</th>
              <th className="text-start md:w-1/5 mb-1 pl-1"></th>
            </tr>
          </thead>
          <tbody>
            {formData.details.map((detail) => (
              <tr key={detail.id}>
                <td className="py-2">
                  <input
                    className="w-full py-2"
                    type="text"
                    name="name"
                    value={detail.name}
                    onChange={(e) => handleInputChange(e, detail.id, "name")}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    className="w-full px-3 py-2"
                    type="text"
                    name="quantity"
                    value={detail.quantity}
                    onChange={(e) =>
                      handleInputChange(e, detail.id, "quantity")
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    className="w-full px-3 py-2"
                    type="text"
                    name="price"
                    value={detail.price}
                    onChange={(e) => handleInputChange(e, detail.id, "price")}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    className="w-full px-3 py-2"
                    type="text"
                    name="subtotal"
                    value={detail.subtotal}
                    onChange={(e) =>
                      handleInputChange(e, detail.id, "subtotal")
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <button
                    className="w-full md:w-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold ml-2"
                    onClick={() => handleDeleteRow(detail.id)}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Row button */}
      </div>

      <div className="flex w-full items-center mx-24 my-4">
        <div className="px-4 py-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6"
            onClick={handleAddRow}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailsTable;
