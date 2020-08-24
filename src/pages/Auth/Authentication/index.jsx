import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import AuthLayout from '../../../layouts/AuthWrapper';

// styles
import './index.scss';

// actions
import { authenticate } from '../../../store/modules/auth';

class Authentication extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = e => {
    const {
      target: { name, value },
    } = e;
    this.setState(previousState => ({
      ...previousState,
      [name]: value,
    }));
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const { history } = this.props;
    let redirectUrl;

    localStorage.getItem('redirectUrl')
      ? (redirectUrl = localStorage.getItem('redirectUrl'))
      : (redirectUrl = '/');

    await this.props.authenticate(this.state, history, redirectUrl);
    await this.setState(previousState => ({
      ...previousState,
      password: '',
    }));
  };

  render() {
    const { email, password } = this.state;
    return (
      <AuthLayout>
        <section className="main-container login">
          <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Customer
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <form className="form" onSubmit={this.handleFormSubmit}>
                  <p className="title">Lorem Ipsum</p>
                  <div className="form-control-div">
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control"
                      type="text"
                      id="email"
                      name="email"
                      onChange={this.handleInputChange}
                      value={email}
                      required
                    />
                  </div>
                  <div className="form-control-div">
                    <label htmlFor="password">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="passord"
                      name="password"
                      onChange={this.handleInputChange}
                      value={password}
                      pattern="(?=.*\d)(?=.*[a-z]).{6,}"
                      minLength="6"
                      required
                    />
                  </div>
                  <button type="submit" className="btn reg-btn">
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </AuthLayout>
    );
  }
}

export default connect(null, { authenticate })(Authentication);
