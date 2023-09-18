import React, { useState, ReactNode, createContext, useContext } from 'react';
import { LoginForm } from './loginForm';
import { LoginEmailForm } from './LoginEmailForm';
import { OTPForm } from './OTPForm';
import Registration from './Registration';
import KYCform from './KYCform';
import { ErrorMessageTypes } from './types';
import './Login.scss';

interface PhoneFormatTypes {
  format: string;
  number: string;
  value: string;
}

interface LoginProps {
  isRegister?: boolean;
  isIDverification?: boolean;
  isModal?: boolean;
  backIconSrc?: string;
  emailIconSrc?: string;
  googleIconSrc?: string;
  showPasswordIcon?: ReactNode;
  hidePasswordIcon?: ReactNode;
  goToRegister?: () => void;
  handleRegister?: (val) => void;
  handleIDverification?: (val) => void;
  goToForgetPassword?: () => void;
  resendOtp?: (phone: PhoneFormatTypes) => void;
  sendOtp: (phone: PhoneFormatTypes) => boolean;
  loginWithEmail: (payload: ErrorMessageTypes) => void;
  verificationOtp: (otp: string) => void;
  errorMessage?: ErrorMessageTypes;
  timeLeft?: number;
  title?: string;
  loginWithGoogle: () => void;
  buttonNextId?: string;
  buttonResendId?: string;
  googleButtonLoading?: boolean;
  nextButtonLoading?: boolean;
  defaultPage?: 'login' | 'login-email' | 'otp';
  phoneNumber?: string;
  onPageChange?: (page: string) => void;
  closeModalClick?: () => void;
}

interface LoginContextType {
  backIconSrc?: string;
  emailIconSrc?: string;
  googleIconSrc?: string;
  backToPrev: (path: string) => void;
  phoneNumber: string;
  showPasswordIcon?: ReactNode;
  hidePasswordIcon?: ReactNode;
  goToRegister?: () => void;
  goToForgetPassword?: () => void;
  resendOtp?: (phone: PhoneFormatTypes) => void;
  sendOtp: (phone: PhoneFormatTypes) => boolean;
  loginWithEmail: (payload: ErrorMessageTypes) => void;
  verificationOtp: (otp: string) => void;
  errorMessage?: ErrorMessageTypes;
  timeLeft?: number;
  title?: string;
  loginWithGoogle: () => void;
  buttonNextId?: string;
  buttonResendId?: string;
  googleButtonLoading?: boolean;
  nextButtonLoading?: boolean;
  closeModalClick?: () => void;
  handleRegister?: (val) => void;
  handleIDverification?: (val) => void;
}

const LoginContext = createContext<LoginContextType>({} as LoginContextType);
export const useLoginContext = () => useContext(LoginContext);

export const Login = (props: LoginProps) => {
  const {
    isRegister, isIDverification, isModal, backIconSrc, emailIconSrc, googleIconSrc, goToRegister, goToForgetPassword, errorMessage,
    loginWithEmail, verificationOtp, resendOtp, sendOtp, showPasswordIcon,
    hidePasswordIcon, timeLeft, title, loginWithGoogle, buttonNextId,
    buttonResendId, googleButtonLoading, nextButtonLoading,
    defaultPage, phoneNumber: defaultPhoneNumber, onPageChange,
    closeModalClick, handleRegister, handleIDverification
  } = props;
  const [page, setPage] = useState<string>(defaultPage || 'login');
  const [phoneNumber, setPhoneNumber] = useState<string>(defaultPhoneNumber || '');

  const backToPrev = (path: string) => {
    setPage(path);
    if (onPageChange) {
      onPageChange(path);
    }
  };

  const NormalLoginPage = () => {
    return (
      <div className='login'>
        <div className='top'></div>
        <div className='center'>
          {page === 'login-email' ?
            <LoginEmailForm previous='login' isModal={isModal} />
            : page === 'otp' ?
              <OTPForm previous='login' isModal={isModal} />
              :
              <LoginForm isModal={isModal} />
          }
        </div>
        <div className='bottom'></div>
      </div>
    )
  }

  const ModalLoginPage = () => {
    return (
      <div className='login__modal'>
        <div className='center'>
          {page === 'login-email' ?
            <LoginEmailForm previous='login' isModal={isModal} />
            : page === 'otp' ?
              <OTPForm previous='login' isModal={isModal} />
              :
              <LoginForm isModal={isModal} />
          }
        </div>
      </div>
    )
  }

  const LoginPage = () => {
    return (
      <LoginContext.Provider
        value={{
          showPasswordIcon,
          hidePasswordIcon,
          backIconSrc,
          emailIconSrc,
          googleIconSrc,
          backToPrev,
          phoneNumber,
          goToRegister,
          goToForgetPassword,
          loginWithEmail,
          verificationOtp,
          resendOtp,
          sendOtp,
          errorMessage,
          timeLeft,
          title,
          loginWithGoogle,
          buttonNextId,
          buttonResendId,
          googleButtonLoading,
          nextButtonLoading,
          closeModalClick,
          handleRegister,
          handleIDverification
        }}
      >
        {isIDverification ? <KYCform /> :
          isRegister ? <Registration /> :
            isModal ? <ModalLoginPage /> : <NormalLoginPage />}
      </LoginContext.Provider>
    );
  }


  return <LoginPage />;
};
