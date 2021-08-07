import { useState } from 'react';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Link href="/posts">
        <a>Posts page</a>
      </Link>
      <h2>Home</h2>
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

export default Home;
