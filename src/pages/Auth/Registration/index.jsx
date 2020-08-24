import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import AuthLayout from '../../../layouts/AuthWrapper';

// styles
import './index.scss';

// actions
import { register } from '../../../store/modules/auth';

// import RegistrationImage from '../../../assets/images/png/ODIO-LADY.png';

class Registration extends React.Component {
  state = {
    email: '',
    password: '',
    confirm_password: '',
    type: 'customer',
    first_name: '',
    last_name: '',
    businessName: '',
  };

  handleInputChange = e => {
    const {
      target: { name, value },
    } = e;
    console.log(name, value);
    this.setState(previousState => ({
      ...previousState,
      [name]: value,
    }));
  };

  handleInputBlur = e => {
    const {
      target: { name, value },
    } = e;
    return name, value;
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const { history } = this.props;
    const redirectUrl = '/register';
    // return console.log('state', this.state);

    if (this.state.password !== this.state.confirm_password) return;
    await this.props.register(this.state, history, redirectUrl);
    await this.setState({
      password: '',
      confirm_password: '',
    });
  };

  render() {
    const {
      email,
      password,
      confirm_password,
      first_name,
      last_name,
      businessName,
      type,
    } = this.state;
    return (
      <AuthLayout>
        <section className="main-container">
          <div className="side-image-container" />
          <form
            className="form"
            autoComplete="false"
            onSubmit={this.handleFormSubmit}
          >
            <p className="title">Lorem ipsum dolor sit amet</p>
            <p className="subtitle">Lorem ipsum dolor sit amet</p>
            <div className="form-control-div">
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
                value={email}
                required
              />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-control-div">
              <select
                className="form-control"
                onChange={this.handleInputChange}
                value={type}
                name="type"
                id="exampleFormControlSelect1"
              >
                <option value="customer">Customer</option>
                <option value="merchant">Merchant</option>
                <option value="buisness">Business</option>
              </select>
            </div>

            <div className="form-control-div">
              <input
                className="form-control"
                type="text"
                id="first_name"
                name="first_name"
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
                value={first_name}
                minLength="3"
                required
              />
              <label htmlFor="first_name">First Name</label>
            </div>

            <div className="form-control-div">
              <input
                className="form-control"
                type="text"
                id="last_name"
                name="last_name"
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
                value={last_name}
                minLength="3"
                required
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
            <div className="form-control-div">
              <input
                className="form-control"
                type="text"
                id="businessName"
                name="businessName"
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
                value={businessName}
                minLength="3"
              />
              <label htmlFor="businessName">Business Name</label>
            </div>
            <div className="form-control-div">
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
                value={password}
                pattern="/^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/"
                minLength="6"
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-control-div">
              <input
                className="form-control"
                type="password"
                id="confirm_password"
                name="confirm_password"
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
                value={confirm_password}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                required
              />
              <label htmlFor="confirm_password">Confirm Password</label>
            </div>
            <button type="submit" className="btn reg-btn">
              Sign Up
            </button>
            <div className="info-div">
              <p className="info">
                Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
                dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
                ametLorem ipsum dolor sit amet
              </p>
            </div>
          </form>
        </section>
      </AuthLayout>
    );
  }
}

export default connect(null, { register })(Registration);
