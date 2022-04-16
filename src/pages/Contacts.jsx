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
      <div className="items-center justify-center rounded-sm w-full sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 flex-col flex">
        {/* mapping all contacts */}

        {contacts?.length > 0 && contacts ? (
          contacts?.map((contact) => (
            <div
              key={contact.id}
              className="bg-gray-800 border-b-2 flex gap-3 flex-col justify-center items-center w-64 h-72 border-yellow-900 text-white"
            >
              <div className="uppercase bg-yellow-400 rounded-full text-2xl col px-4 py-2">
                {contact?.name
                  .split(" ")
                  .map(function (item) {
                    return item[0];
                  })
                  .join("")}
              </div>
              <div className="capitalize col">{contact?.name}</div>
              <div className="col text-yellow-100">
                <a href={`tel:${contact?.number}`}>{contact?.number}</a>
              </div>
              <div className="col w-11/12 text-center">
                <a
                  className="break-all w-full block"
                  href={`mailto:${contact?.email}`}
                >
                  {contact?.email}
                </a>
              </div>
              <div className="col flex gap-5">
                <Link
                  className={`p-2 text-gray-900 bg-red-200 rounded-sm capitalize`}
                  to={`/edit/${contact?.id}`}
                >
                  edit
                </Link>
                <button
                  className={`p-2 bg-red-600 text-gray-900 rounded-sm capitalize`}
                  onClick={() => deleteContact(contact?.id)}
                >
                  remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <>
            <p className="text-lg capitalize text-yellow-50 w-full font-light">
              no contacts found
            </p>
            <Link
              to="/add"
              className="hover:bg-yellow-500 transitional  p-2 capitalize bg-yellow-400 w-max rounded-sm text-gray-900 text-xl shadow-sm"
            >
              add new conatct
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Contacts;
