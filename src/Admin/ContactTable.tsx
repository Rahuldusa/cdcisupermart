import { useEffect, useState } from "react";
import Navbar from "./AdminNavbar";
import { baseURL } from "@/Api/Baseurl";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

const ContactTable = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  // Datatable states
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${baseURL}/api/get-contacts`);
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("❌ Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter logic
  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.toLowerCase().includes(search.toLowerCase()) ||
      c.message.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredContacts.length / entries);
  const paginatedData = filteredContacts.slice(
    (page - 1) * entries,
    page * entries
  );

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  return (
    <>
      <Navbar />

      <div className="pt-28 px-6 md:px-12">
        {/* Header with Count */}
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-2xl font-semibold">Contact Messages</h1>
          <span className="bg-[#850E35] text-white px-3 py-1 rounded-full text-sm font-medium">
            {filteredContacts.length}
          </span>
        </div>

        {/* Top Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
          {/* Show Entries */}
          <div className="flex items-center space-x-2">
            <span>Show</span>
            <select
              value={entries}
              onChange={(e) => {
                setEntries(Number(e.target.value));
                setPage(1);
              }}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span>entries</span>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded px-3 py-2 w-full md:w-64"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {/* Loader */}
        {loading ? (
          <div className="text-center text-lg py-10">Loading...</div>
        ) : (
          <div className="overflow-x-auto shadow-lg rounded-xl bg-white dark:bg-neutral-900">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 dark:bg-neutral-800">
                <tr>
                  <th className="px-6 py-3 text-left font-medium">S.No</th>
                  <th className="px-6 py-3 text-left font-medium">Name</th>
                  <th className="px-6 py-3 text-left font-medium">Email</th>
                  <th className="px-6 py-3 text-left font-medium">Phone</th>
                  <th className="px-6 py-3 text-left font-medium">Message</th>
                  <th className="px-6 py-3 text-left font-medium">Date</th>
                </tr>
              </thead>

              <tbody>
                {paginatedData.map((contact, index) => (
                  <tr
                    key={contact.id}
                    className="border-b border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
                  >
                    <td className="px-6 py-3">
                      {(page - 1) * entries + index + 1}
                    </td>
                    <td className="px-6 py-3">{contact.name}</td>
                    <td className="px-6 py-3">{contact.email}</td>
                    <td className="px-6 py-3">{contact.phone}</td>
                    <td className="px-6 py-3 max-w-xs truncate">
                      {contact.message}
                    </td>
                    <td className="px-6 py-3">
                      {new Date(contact.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}

                {paginatedData.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-6 text-gray-500 dark:text-gray-400"
                    >
                      No messages found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm">
            Showing{" "}
            <strong>
              {(page - 1) * entries + 1} -{" "}
              {Math.min(page * entries, filteredContacts.length)}
            </strong>{" "}
            of <strong>{filteredContacts.length}</strong> entries
          </p>

          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              disabled={page === 1}
              onClick={() => changePage(page - 1)}
            >
              Previous
            </button>

            <span className="px-3">{page} / {totalPages}</span>

            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              disabled={page === totalPages}
              onClick={() => changePage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactTable;