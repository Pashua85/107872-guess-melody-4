import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getAuthStatus} from '../../store/reducers/userReducer/selectors';
import UserOperation from '../../store/operations/user-operation/user-operation';

const AuthorizationScreen = (props) => {
  const {authStatus, onLoginClick} = props;

  const [login, setLogin] = useState(``);
  const [password, setPassword] = useState(``);

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (authStatus === `AUTH`) {
    return (
      <Redirect to="/dev-result" />
    );
  }

  return (
    <section className="login">
      <div className="login__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="login__title">Вы настоящий меломан!</h2>
      <p className="login__text">Хотите узнать свой результат? Представтесь!</p>
      <form className="login__form" action="">
        <p className="login__field">
          <label className="login__label" htmlFor="name">Логин</label>
          <input
            autoComplete="email"
            className="login__input"
            type="email"
            name="name"
            id="name"
            onChange={handleLoginChange}
          />
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input
            autoComplete="off"
            className="login__input"
            type="password"
            name="password"
            id="password"
            onChange={handlePasswordChange}
          />
          <span className="login__error">Неверный пароль</span>
        </p>
        <button
          className="login__button button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onLoginClick({
              login,
              password
            });
          }}
        >
          Войти
        </button>
      </form>
      <button className="replay" type="button">Сыграть ещё раз</button>
    </section>
  );
};

AuthorizationScreen.propTypes = {
  authStatus: PropTypes.string.isRequired,
  onLoginClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoginClick: (authData) => {
    dispatch(UserOperation.login(authData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationScreen);
