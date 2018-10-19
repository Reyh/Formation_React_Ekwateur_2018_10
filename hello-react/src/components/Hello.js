import React from 'react';
import { desactivable } from '../hocs/desactivable';

// stateless component
function Hello({name = 'Jean'}) {
  return (
    <div>Hello {name}</div>
  );
}

// const Hello = ({name = 'Jean'}) => <div>Hello {name}</div>;

// autre possibilité pour les valeurs par défaut
// Hello.defaultProps = { name: 'Jean' };

export default desactivable(Hello);
