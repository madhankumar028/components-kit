import React, { useState } from 'react';
import { Login as LoginPage } from '../index';
import { withKnobs, boolean } from "@storybook/addon-knobs";
import googleIcon from '../assets/google-icon.svg';
import mailIcon from '../assets/mail.svg';

export default {
  title: "Login",
  decorators: [withKnobs],
};

export const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isIDverification, setIsIDverification] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [googleLoading, setGoogleLoading] = useState(false);
  const [onNextClick, setNextClick] = useState(false);

  const isModalLabel = 'is Login Modal Component';
  const isModalDefault = false;

  let isModal = boolean(isModalLabel, isModalDefault);
  

  const sendOtp = (phone) => {
    setNextClick(true);
    const errors = errorMessage;
    if (phone.value === '') {
      setErrorMessage({ ...errors, ...{ phoneNumber: 'Nomor Telepon tidak boleh kosong' } });
      setNextClick(false);
      return;
    }
    delete errors.phoneNumber;
    setErrorMessage({ ...errors });
    return true;
  };

  const resendOtp = (phone) => {
    console.log(phone);
    return phone;
  };

  const verificationOtp = (otp) => {
    console.log(otp);
    return otp;
  };

  const loginWithEmail = (payload) => {
    const errors = {};
    if (!payload.email) {
      errors.email = 'Email tidak boleh kosong';
    }
    if (!payload.password) {
      errors.password = 'Password tidak boleh kosong';
    }
    setErrorMessage(errors);
    if (Object.keys(errors).length) {
      return;
    }
  }

  const goToRegister = () => {
    setIsRegister(true);
  };

  const handleRegister = (val) => {
    console.log("REgistration data: ", val);
    setIsRegister(false);
    setIsIDverification(true);
  }

  const handleIDverification = (val) => {
    console.log("ID verification data: ", val);
    setIsIDverification(false);
  }

  const goToForgetPassword = () => {
    console.log('to forget password');
    return;
  };

  const loginWithGoogle = () => {
    console.log('open google pop up');
    return;
  };

  return (
    <LoginPage
      title="Masuk ke Lifepal"
      isRegister={isRegister}
      isIDverification={isIDverification}
      isModal={isModal}
      onPageChange={(page) => {
        console.log(page);
        setIsRegister(false);
        return page;
      }}
      backIcon={<i className='lifepal__icon lifepal__icon--arrow-left-blue' />}
      showPasswordIcon='show'
      hidePasswordIcon='hide'
      emailIconSrc={mailIcon}
      googleIconSrc={googleIcon}
      goToRegister={goToRegister}
      goToForgetPassword={goToForgetPassword}
      loginWithEmail={loginWithEmail}
      verificationOtp={verificationOtp}
      timeLeft={60}
      resendOtp={resendOtp}
      sendOtp={sendOtp}
      errorMessage={errorMessage}
      loginWithGoogle={loginWithGoogle}
      googleButtonLoading={googleLoading}
      nextButtonLoading={onNextClick}
      closeModalClick={()=> console.log('close modal')}
      handleRegister={handleRegister}
      handleIDverification={handleIDverification}
    />
  )
}
