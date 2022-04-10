import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Contacts = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    return toast.success("Contact Removed Successfully");
  };

  return (
    <div className="flex flex-col gap-9 p-10 relative">
      <h1 className="text-white text-5xl">Your Contacts</h1>
      {/* contacts table */}
      <table className=" rounded-sm  table w-max table-auto">
        {/* table headdings */}
        <tr className="row text-white uppercase font-bold bg-gray-700 rounded-sm gap-5 p-3">
          <th className="col px-5 py-1 border-r-2 border-yellow-900">s.no</th>
          <th className="col px-5 py-1 border-r-2 border-yellow-900">name</th>
          <th className="col px-5 py-1 border-r-2 border-yellow-900">number</th>
          <th className="col px-5 py-1 border-r-2 border-yellow-900">email</th>
          <th className="col px-5 py-1">actions</th>
        </tr>
        {/* mapping all contacts */}
        {contacts.map((contact) => (
          <tr className="row bg-gray-800 border-t-2 border-yellow-900 text-white">
            <td className="text-yellow-300 col px-5 py-2">{contact.id}</td>
            <td className="capitalize col px-5 py-2">{contact.name}</td>
            <td className="col px-5 py-2">
              <a href={`tel:${contact.number}`}>{contact.number}</a>
            </td>
            <td className="col px-5 py-2">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </td>
            <td className="col px-5 py-2 flex gap-5">
              <Link
                className="p-2 px-6 text-gray-900 bg-red-200 rounded-sm capitalize"
                to={`/edit/${contact.id}`}
              >
                edit
              </Link>
              <button
                className="p-2 bg-red-600 text-gray-900 rounded-sm capitalize"
                onClick={() => deleteContact(contact.id)}
              >
                remove
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Contacts;
