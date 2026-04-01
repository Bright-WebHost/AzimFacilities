import React from 'react';
import Components from './components/Components';
import ScrolToTop from './components/Elements/ScrolToTop';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
      <div className="App">
        <Components />
        <ScrolToTop/>
      </div>
    </HelmetProvider>
  );
}

export default App;