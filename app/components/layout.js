import React from 'react';

const data = [
  {id: 1, name: "Virgi", email: "virgi@gmail.com"},
  {id: 2, name: "Pepe", email: "pepe@gmail.com"},
  {id: 3, name: "Toni", email: "toni@gmail.com"},
];

// Component gets props as parameter
const Contact = props =>
  <div className='pure-u-1-3'>
    <h2>{props.name}</h2>
    <p>{props.email}</p>
  </div>

class Layout extends React.Component {
  render() {
    return (
      <div id='Layout' className='pure-g'>
      {data.map(info =>
        // Mapping each property in props 
        // <Contact id={info.id} name={info.name} email={info.email} />

        // splat operator to pass the props
        <Contact {...info}/>
      )}
      </div>
    );
  }
}

export default Layout;
