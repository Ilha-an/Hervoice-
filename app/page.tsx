// app/page.tsx
"use client";

import { useState } from "react";
import AuthModal from "@/components/AuthModal"; // Import the AuthModal component

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Button to open the modal */}
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login / Sign Up
      </button>

      {/* Render the AuthModal only if it's open */}
      {isModalOpen && <AuthModal onClose={closeModal} />}

      <h1 className="text-4xl font-bold mb-6">Welcome to Ilha-an</h1>
    </div>
  );
}
