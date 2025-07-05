import React from 'react';
import { Link } from 'react-router-dom';
//import './Landing.css'; // opcional se quiser estilizar separado

function Landing() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f0fff0', minHeight: '100vh' }}>
      <img src="/logo192.png" alt="Logo Germinah" style={{ width: '80px' }} />
      <h1 style={{ fontSize: '2rem', margin: '1rem 0' }}>Germinah Edu</h1>
      <p>
        Uma iniciativa educacional para ajudar escolas e comunidades a criarem seus próprios sistemas de irrigação automática com Arduino e Firebase.
      </p>

      <section style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '700px', marginInline: 'auto' }}>
        <h2>🌱 Como funciona?</h2>
        <p>O sistema utiliza sensores de umidade, um Arduino e uma bomba d’água para irrigar as plantas apenas quando necessário.</p>

        <h2>📦 O que está incluso?</h2>
        <ul>
          <li>Aplicativo web em React + Firebase</li>
          <li>Controle remoto da bomba</li>
          <li>Documentação e esquemas de montagem</li>
        </ul>

        <h2>🌍 Impacto</h2>
        <p>Germinah Edu promove educação tecnológica e sustentabilidade através de um projeto replicável, acessível e de código aberto.</p>
      </section>

      <Link to="/dashboard">
        <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1rem', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '12px' }}>
          Acessar o controle
        </button>
      </Link>
    </div>
  );
}

export default Landing;