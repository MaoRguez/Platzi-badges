import React from 'react';

import '../components/styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = { form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  } };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
            <Badge
              firstName={this.state.form.firstName}
              lastName={this.state.form.lastName}
              avatar="https://s.gravatar.com/avatar/0da71ed3cc10d039cbc04f8f6393d1b8?s=80"
              jobTitle={this.state.form.jobTitle}
              twitter={this.state.form.twitter}
              email={this.state.form.email}
            />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;