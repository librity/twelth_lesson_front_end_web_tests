import React, { useState, useEffect } from 'react';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const storedTechs = localStorage.getItem('techs');

    if (storedTechs) {
      setTechs(JSON.parse(storedTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  function handleAddTech() {
    setTechs([...techs, newTech]);

    setNewTech('');
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input
        id="tech"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />

      <button onClick={handleAddTech} type="button">
        Adicionar
      </button>
    </form>
  );
}
