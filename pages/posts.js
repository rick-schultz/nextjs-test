import { useState } from 'react';

function Posts() {
  return (
    <div>
      <a href="./index.js">Home page</a>
      <h2>Posts</h2>
      <Contador />
    </div>
  );
}

function Contador() {
  const [contador, setContador] = useState(1);
  function adicionarContador() {
    setContador(contador + 1);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  );
}

export default Posts;
