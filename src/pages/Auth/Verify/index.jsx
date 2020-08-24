import React from 'react';
import { connect } from 'react-redux';

// components
import AuthLayout from '../../../layouts/AuthWrapper';

// styles
import './index.scss';

// actions
import { verify, resendVerificationCode } from '../../../store/modules/auth';

class Verify extends React.Component {
  state = {
    pins: {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin5: '',
      pin6: '',
    },
  };

  handleInputChange = async e => {
    const {
      target: { name, value, maxLength },
    } = e;
    if (/^[0-9]*$/g.test(value)) {
      this.setState(previousState => ({
        ...previousState,
        pins: {
          ...previousState.pins,
          [name]: value.slice(0, maxLength),
        },
      }));
      const pinNumber = Number(name.split('n')[1]);
      const nextPinInput = document.querySelector(`#pin${pinNumber + 1}`);
      if (nextPinInput) {
        return nextPinInput.focus();
      }
      if (name === 'pin6' && value !== '') {
        const pins = { ...this.state.pins };
        pins.pin6 = value.slice(0, maxLength);
        let code = '';
        for (let pin in pins) {
          code += pins[pin];
        }
        const { history } = this.props;
        let redirectUrl;

        localStorage.getItem('redirectUrl')
          ? (redirectUrl = localStorage.getItem('redirectUrl'))
          : (redirectUrl = '/welcome');
        return await this.props.verify(code, history, redirectUrl);
      }
      return;
    }
    return;
  };

  render() {
    const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state;
    const { unverifiedEmail } = this.props;
    return (
      <AuthLayout>
        <section className="main-container verify">
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
                  Finish Line
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
                <p className="success-text">
                  You did it. Now upload it on Netlify or vercel app and send us
                  a link to view
                </p>
                <p className="email">Email:</p>
                <p className="email-text">hello@intraverse.com.ng</p>
              </div>
            </div>
          </div>
        </section>
      </AuthLayout>
    );
  }
}

const mapStateToProps = ({ auth: { unverifiedEmail } }) => ({
  unverifiedEmail,
});

export default connect(mapStateToProps, { verify, resendVerificationCode })(
  Verify,
);
