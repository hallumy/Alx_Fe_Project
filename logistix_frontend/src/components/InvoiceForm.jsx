import React from "react";

function InvoiceForm() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Create Invoice</h3>

      <form className="space-y-4">
        <select className="w-full border p-2 rounded" defaultValue="">
          <option value="" disabled>
            Select Trip
          </option>
        </select>

        <select className="w-full border p-2 rounded" defaultValue="">
          <option value="" disabled>
            Trip Type
          </option>
          <option>Daily Route</option>
          <option>Intercreamery</option>
        </select>

        <textarea
          placeholder="To Customer Name, Vehicle Number, Origin, Destination, Date..."
          rows="6"
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Invoice Details (Delivery Note, Unit Price, Amount, Tax, Total...)"
          rows="6"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-[#2F539B] text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Generate Invoice
        </button>
      </form>
    </div>
  );
}
export default InvoiceForm;