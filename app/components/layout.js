import React from 'react';
import Contact from './contact';
import data from './data';

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

  render() {
    return (
      <div id='Layout'>
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
