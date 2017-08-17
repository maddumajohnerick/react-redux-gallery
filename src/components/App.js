import React from 'react';

const App = ({children}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="site-header col-lg-8 col-lg-offset-2 text-center"><h1>Vector x Vexel</h1></div>
      <div className="col-lg-8 col-lg-offset-2">
        {children}
      </div>
    </div>
  </div>
);

export default App;
