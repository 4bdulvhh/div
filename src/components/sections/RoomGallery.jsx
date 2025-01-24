import React from "react";

const RoomGallery = () => {
  const rooms = [
    { id: 1, src: "/images/room1.jpg", alt: "Room 1" },
    { id: 2, src: "/images/room2.jpg", alt: "Room 2" },
    { id: 3, src: "/images/room3.jpg", alt: "Room 3" },
    { id: 4, src: "/images/room4.jpg", alt: "Room 4" },
    { id: 5, src: "/images/room5.jpg", alt: "Room 5" },
    { id: 6, src: "/images/room6.jpg", alt: "Room 6" },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Dərs alacağın otaqlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={room.src}
                alt={room.alt}
                className="w-[100%] h-[220px] object-cover" // Şəkilləri daha da genişləndirdik
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomGallery;
