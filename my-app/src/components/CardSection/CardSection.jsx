import React, { useState, useEffect } from 'react';
import FormSection from '../FormSection/FormSection';

export default function CardSection() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    async function fetchRooms() {
      const response = await fetch('http://localhost:4000/api/rooms');
      const data = await response.json();
      setRooms(data.data);
    }
    fetchRooms();
  }, []);

  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
          {rooms.map((room) => {
            const imageUrl = `http://localhost:4000${room.image}`;
            return (
              <div
                key={room.id}
                className="card"
                onClick={() => setSelectedRoom(room)}
              >
                <img className="card__image" src={imageUrl} alt={room.name} />
                <div className="card__title">{room.name}</div>
                <div className="card__price">{room.price} kč na osobu</div>
              </div>
            );
          })}
        </div>

        {selectedRoom && <FormSection room={selectedRoom} />}
      </div>
    </section>
  );
}
