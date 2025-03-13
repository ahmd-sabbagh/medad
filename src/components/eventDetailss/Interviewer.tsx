"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Interviewer = ({ lang }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Fetch data with the "lang" header
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/axis/1`, {
        headers: {
          "Accept-Language": lang, // Use the "lang" prop dynamically
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [lang]); // Re-fetch data when "lang" changes

  const items = data?.data || [];

  useEffect(() => {
    if (items.length > 0) {
      setSelectedItem(items[0]); // Set default selected item after data loads
    }
  }, [items]);

  if (loading) {
    return <p className="text-center text-gray-600">جار التحميل...</p>;
  }

  if (!items.length) {
    return <p className="text-center text-red-600">لم يتم العثور على بيانات.</p>;
  }

  return (
    <>
      <div className="mt-8">
        <h3 className="font-bold text-xl lg:text-3xl text-right">محاور الفعالية</h3>
        {/* Large Display Box */}
        <div className="p-6 rounded-xl mt-6 shadow-md bg-[linear-gradient(293.41deg,_rgba(237,221,197,0.2)_15.1%,_rgba(204,173,122,0.174)_99.94%)]">
          <h4 className="font-bold text-lg lg:text-2xl text-[#8b6f4b]">محور الفعالية</h4>
          <h4 className="font-bold text-lg lg:text-xl mt-2">{selectedItem?.title}</h4>
          <p className="mt-2 text-gray-700">{selectedItem?.description}</p>
        </div>

        {/* Small Clickable Boxes */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl h-[150px] md:h-[200px] flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md ${
                selectedItem?.title === item.title
                  ? "bg-[linear-gradient(293.41deg,_rgba(237,221,197,1)_15.1%,_rgba(204,173,122,1)_99.94%)] text-[#53432e] font-bold"
                  : "bg-[#f3e7d6] hover:bg-[#e2d0b9]"
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <p className="text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Interviewer;