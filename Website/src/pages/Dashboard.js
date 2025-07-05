import React, { useEffect, useState } from 'react';
import { database, ref, set, onValue } from '../firebase';
import './Dashboard.css';

function Dashboard() {
  const [bombaLigada, setBombaLigada] = useState(false);
  const [status, setStatus] = useState(false);
  const [temp, setTemp] = useState(0);
  const [umid, setUmid] = useState(0);

  useEffect(() => {
    const statusRef = ref(database, 'bomba/status');
    onValue(statusRef, (snapshot) => {
      const data = snapshot.val();
      setStatus(data === true);
    });

    onValue(ref(database, 'status/temperatura'), (snapshot) => {
      setTemp(snapshot.val());
    });

    onValue(ref(database, 'status/umidade'), (snapshot) => {
      setUmid(snapshot.val());
    });
  }, []);

  // Alterna o estado da bomba
  const toggleBomba = () => {
    const newState = !status;
    set(ref(database, 'bomba/status'), newState);
    setStatus(newState);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🌱 Germinah</h1>
        <p>Temperatura: {temp}°C</p>
        <p>Umidade: {umid}%</p>
        <p>Status da bomba: <strong>{status ? "Ligada" : "Desligada"}</strong></p>
        <button onClick={toggleBomba} className={bombaLigada ? 'button-off' : 'button-on'}>
          {status ? "Desligar" : "Ligar"} bomba
        </button>
      </div>
    </div>
  );
}

export default Dashboard;