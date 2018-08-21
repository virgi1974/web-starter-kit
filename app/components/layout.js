import React from 'react';
import Contact from './contact';
import data from './data';

import './layout.css'

class Layout extends React.Component {

  componentWillMount() {
    this.setState({
      contacts: data
    })
  }

  addContact = (e) => {
    e.preventDefault();

    const stateContacts = this.state.contacts
    const newId = stateContacts[stateContacts.length - 1].id + 1
    this.setState({
      contacts: stateContacts.concat(
        {
          id: newId,
          email: `${newId}@gmail.com`,
          name: `New contact ${newId}`})
    })
  }

  newContact = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className="pure-form">
          <fieldset>
            <legend>New Contact</legend>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />

            <button type="submit" className="pure-button pure-button-primary">Add</button>
          </fieldset>
        </form>
      </div>
    </div>; 
// must end using ; because is a function (like jsx)

  render() {
    return (
      <div id='Layout'>
        {this.newContact()}
        <a href='#' className='pure-button' onClick={this.addContact}>Add Contact</a>
        <div id='Layout' className='pure-g'>
          {this.state.contacts.map(info =>
            <Contact key={info.id} {...info}/>
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
