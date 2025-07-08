import React from 'react';

function MenuButton({ open, setAction }) {
  return (
    <div className="flex items-center">
      <button
        onClick={() => setAction(!open)}
        className="lg:hidden text-white mr-4 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  );
}

export default MenuButton;