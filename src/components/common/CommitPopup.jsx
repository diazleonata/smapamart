// src/components/common/CommitPopup.jsx
import React, { useEffect, useState } from "react";

const CommitPopup = () => {
  const [show, setShow] = useState(true);
  const [commits, setCommits] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/diazleonata/smapamart/commits?per_page=100"
        );
        const data = await res.json();
        setCommits(data); // tampilkan semua commit yang diambil
        setVisible(true);
      } catch (error) {
        setCommits([
          {
            sha: "error",
            commit: { message: "Gagal mengambil data commit.", author: { date: "" } },
          },
        ]);
        setVisible(true);
      }
    };

    fetchCommits();
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setShow(false), 200);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 flex justify-center items-center transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-md p-5 w-96 max-w-[90%] text-sm text-black space-y-4 transform transition duration-200 ${
          visible ? "scale-100" : "scale-95"
        }`}
      >
        <h2 className="text-lg font-bold">🚧 Website dalam tahap pengembangan</h2>
        <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {commits.map((commit) => (
            <div key={commit.sha} className="border-b border-black/10 pb-1">
              <p className="text-black/90 font-medium">{commit.commit.message}</p>
              <p className="text-xs text-black/50">
                {new Date(commit.commit.author.date).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={handleClose}
          className="px-4 py-1 bg-black text-white text-sm rounded-md hover:bg-black/80 transition"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default CommitPopup;