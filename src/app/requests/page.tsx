"use client";

import { useEffect, useState } from "react";
import { getEnquiries } from "../../lib/getEnquiries";
import { markEnquiryCompleted } from "../../lib/updateEnquiry";
import { deleteEnquiry } from "../../lib/deleteEnquiry";

interface Enquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt?: { seconds: number; nanoseconds: number };
  completed?: boolean;
}

export default function Requests() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getEnquiries()
      .then((data) => {
        const enquiriesData = data as Enquiry[];
        setEnquiries(
          enquiriesData
            .filter((item) => item.name && item.email && item.message)
            .map((item) => ({
              id: item.id,
              name: item.name || "(No Name)",
              email: item.email || "(No Email)",
              message: item.message || "(No Message)",
              createdAt: item.createdAt,
              completed: item.completed || false,
            }))
        );
      })
      .catch(() => setError("Failed to fetch enquiries"))
      .finally(() => setLoading(false));
  }, []);

  const handleMarkCompleted = async (id: string, completed: boolean) => {
    await markEnquiryCompleted(id, completed);
    setEnquiries((prev) =>
      prev.map((enq) => (enq.id === id ? { ...enq, completed } : enq))
    );
  };

  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    setPendingDeleteId(id);
  };

  const confirmDelete = async () => {
    if (!pendingDeleteId) return;
    await deleteEnquiry(pendingDeleteId);
    setEnquiries((prev) => prev.filter((enq) => enq.id !== pendingDeleteId));
    setPendingDeleteId(null);
  };

  const cancelDelete = () => setPendingDeleteId(null);



  const activeEnquiries = enquiries.filter((enq) => !enq.completed);
  const completedEnquiries = enquiries.filter((enq) => enq.completed);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Enquiries</h1>
        {loading && <div className="text-center">Loading...</div>}
        {error && <div className="text-center text-red-600">{error}</div>}

        {/* Delete Confirmation Modal */}
        {pendingDeleteId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full border border-gray-200">
              <h3 className="text-lg font-bold mb-4 text-gray-800 text-center">Confirm Deletion</h3>
              <p className="text-gray-700 mb-6 text-center">Are you sure you want to delete this request? This action cannot be undone.</p>
              <div className="flex justify-center gap-4">
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 font-semibold"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-semibold"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-6 mb-10">
          {activeEnquiries.map((enquiry) => (
            <div
              key={enquiry.id}
              className="bg-white shadow rounded-lg p-6 border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold text-lg text-gray-800">{enquiry.name}</div>
                <div className="text-xs text-gray-500">
                  {enquiry.createdAt
                    ? new Date(enquiry.createdAt.seconds * 1000).toLocaleString()
                    : ""}
                </div>
              </div>
              <div className="text-gray-600 mb-1">{enquiry.email}</div>
              <div className="text-gray-700 whitespace-pre-line mb-4">{enquiry.message}</div>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                  onClick={() => handleMarkCompleted(enquiry.id, true)}
                >
                  Mark as Completed
                </button>
                <button
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                  onClick={() => handleDelete(enquiry.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {!loading && activeEnquiries.length === 0 && (
            <div className="text-center text-gray-500">No active enquiries found.</div>
          )}
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Completed Enquiries</h2>
        <div className="grid gap-6">
          {completedEnquiries.map((enquiry) => (
            <div
              key={enquiry.id}
              className="bg-gray-100 shadow rounded-lg p-6 border border-gray-200 opacity-80"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold text-lg text-gray-800">{enquiry.name}</div>
                <div className="text-xs text-gray-500">
                  {enquiry.createdAt
                    ? new Date(enquiry.createdAt.seconds * 1000).toLocaleString()
                    : ""}
                </div>
              </div>
              <div className="text-gray-600 mb-1">{enquiry.email}</div>
              <div className="text-gray-700 whitespace-pre-line mb-4">{enquiry.message}</div>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 text-sm"
                  onClick={() => handleMarkCompleted(enquiry.id, false)}
                >
                  Mark as Active
                </button>
                <button
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                  onClick={() => handleDelete(enquiry.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {!loading && completedEnquiries.length === 0 && (
            <div className="text-center text-gray-400">No completed enquiries found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

