import React from 'react';
import Contact from './contact';
import data from './data';

class Layout extends React.Component {
  render() {
    return (
      <div id='Layout' className='pure-g'>
      {data.map(info =>
        // Mapping each property in props 
        // <Contact id={info.id} name={info.name} email={info.email} />

        // splat operator to pass the props
        <Contact key={info.id} {...info}/>
      )}
      </div>
    );
  }
}

export default Layout;
