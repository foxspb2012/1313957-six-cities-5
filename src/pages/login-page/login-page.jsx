import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import * as Type from '../../prop-types';
import Header from '../../components/header/header';
import {getActiveCity} from '../../store/app/selectors';
import {Operation as UserOperation} from '../../store/user/user';

const LoginPage = (props) => {

  const {activeCity, onLoginPageSubmit} = props;

  const [dataAuth, setUpdate] = useState({
    email: ``,
    password: ``
  });

  const {email, password} = dataAuth;

  const onEmailChange = () => {
    setUpdate(email);
  };

  const onPasswordChange = () => {
    setUpdate(password);
  };

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={(evt) => {
                evt.preventDefault();
                onLoginPageSubmit({email, password});
              }}>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  required
                  onChange={(evt) => onEmailChange(evt.target.value)} />
              </div>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  required
                  onChange={(evt) => onPasswordChange(evt.target.value)} />
              </div>

              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={`${AppRoute.MAIN}`} className="locations__item-link">
                <span>{activeCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

LoginPage.propTypes = {
  activeCity: Type.CITY_NAME,
  email: Type.EMAIL,
  password: Type.PASSWORD,
  onEmailChange: Type.FUNCTION,
  onPasswordChange: Type.FUNCTION,
  onLoginPageSubmit: Type.FUNCTION,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoginPageSubmit: (authorizationData) => dispatch(UserOperation.login(authorizationData)),
});


export {LoginPage};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
