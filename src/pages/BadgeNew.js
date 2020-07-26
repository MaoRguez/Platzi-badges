import React from 'react';

import '../components/styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
            <Badge
              firstName="Mauricio"
              lastName="Rodriguez"
              avatar="https://s.gravatar.com/avatar/0da71ed3cc10d039cbc04f8f6393d1b8?s=80"
              jobTitle="Frontend Engineer"
              twitter="Maorguez"
            />
            </div>

            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;