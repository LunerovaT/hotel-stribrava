import React, { useState } from 'react';

export default function FormSection({ room }) {
  if (!room) return null;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="light">
      <div className="container">
        <h2>
          Pokoj {room.name}, {room.price} kč na osobu za noc
        </h2>
        <div className="columns-2">
          <div className="column">
            <img src={`http://localhost:4000${room.image}`} alt={room.name} />
            <p>{room.description}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-fields">
              <label htmlFor="field1" className="field-label">
                Od:
              </label>
              <input id="field1" className="field-input" type="text" />

              <label htmlFor="field2" className="field-label">
                Do:
              </label>
              <input id="field2" className="field-input" type="text" />

              <label htmlFor="field3" className="field-label">
                Počet osob:
              </label>

              <input id="field4" className="field-input" type="text" />

              <label htmlFor="select" className="field-label">
                Stravování:
              </label>
              <select id="select" className="field-input">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>

              <label htmlFor="check1" className="field-label">
                Domácí mazlíček:
              </label>
              <input id="check1" className="field-input" type="checkbox" />
              <label htmlFor="check2" className="field-label">
                Přistýlka pro dítě:
              </label>
              <input id="check2" className="field-input" type="checkbox" />
              <label htmlFor="check3" className="field-label">
                Bezbariérový přístup:
              </label>
              <input id="check4" className="field-input" type="checkbox" />

              <input id="field5" className="field-input" type="text" />
              <label htmlFor="field5" className="field-label">
                E-mail:
              </label>

              <input id="field6" className="field-input" type="text" />

              <label htmlFor="field6" className="field-label">
                Telefon:
              </label>
            </div>
            <button className="wide" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
