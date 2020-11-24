import React, {PureComponent} from 'react';

const withAuthorization = (Component) => {

  class WithAuthorization extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {email: ``, password: ``};
      this._handleEmailChange = this._handleEmailChange.bind(this);
      this._handlePasswordChange = this._handlePasswordChange.bind(this);
    }

    _handleEmailChange(email) {
      this.setState({email});
    }

    _handlePasswordChange(password) {
      this.setState({password});
    }

    render() {
      // eslint-disable-next-line react/prop-types
      const {email, password} = this.state;

      return (
        <Component
          {...this.props}
          email={email}
          password={password}
          onEmailChange={this._handleEmailChange}
          onPasswordChange={this._handlePasswordChange}
        />
      );
    }
  }

  return WithAuthorization;
};

export default withAuthorization;
