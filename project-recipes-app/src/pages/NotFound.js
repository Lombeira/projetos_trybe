import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="user-email">Not Found</h1>
      <h3 className="user-email">Você está perdido?</h3>
      <h3 className="user-email">
        <Link className="link" to="/explorar/bebidas">
          Clique aqui
        </Link>
        {' '}
        para voltar
      </h3>
    </div>
  );
}
