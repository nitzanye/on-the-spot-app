'use client'

const Toggle = () => {

  return (
    <div className="fixed bg-black/50 w-full h-full z-20 left-0 top-0">
      <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col gap-6">
        <h2 className="text-xl">Are you sure you want to delete this ticket?</h2>
        <h3 className="text-red-600 text-sm ">Pressing the delete button will permenantly delete your ticket </h3>
        <button>Delete Ticket</button>
      </div>
    </div>
  );
};

export default Toggle;