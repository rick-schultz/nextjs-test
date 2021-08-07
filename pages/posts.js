import { useState } from 'react';
import Link from 'next/link';

function Posts() {
  return (
    <div>
      <Link href="/">
        <a>Home page</a>
      </Link>
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
