import React, { useState, useEffect } from 'react';
import Header from './Header';
import { handlePhoneNumber } from '../../utils/handlePhoneNumber';
import { useLoginContext } from '.';
import { Button } from '../..';

interface OTPFormProps {
  previous?: string;
  isModal: boolean;
}

export const OTPForm = (props: OTPFormProps) => {
  const { previous, isModal } = props;
  const { phoneNumber, verificationOtp, resendOtp, timeLeft, buttonResendId, backToPrev } = useLoginContext();
  const [otpCode, setOtpCode] = useState<string[]>([]);
  const [resend, setResend] = useState<boolean>(false);
  const [time, setTime] = useState<number>(timeLeft || 30);

  const autoTab = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const tabIndex = e.currentTarget.tabIndex || 0;
    const BACKSPACE_KEY = 8;
    const DELETE_KEY = 46;
    let tabindex = Number(tabIndex);
    if (e.keyCode === BACKSPACE_KEY) {
      tabindex -= 1;
    } else if (e.keyCode !== DELETE_KEY) {
      tabindex += 1;
    }
    const elem = document.getElementsByClassName(`inputs-${tabindex}`);
    if (elem[0]) {
      const nextElem = elem[0] as HTMLInputElement;
      nextElem.focus();
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const otp = otpCode;
    otp[idx] = e.target.value;
    setOtpCode(otp);
  };

  const getOtp = async () => {
    try {
      await resendOtp(handlePhoneNumber(phoneNumber));
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    setTime(timeLeft || 30);
    if (!resend) {
      const secondsLeft = setInterval(() => {
        setTime((c) => {
          if (c <= 1) {
            setResend(true);
          }
          return c - 1;
        });
      }, 1000);
      return () => { clearInterval(secondsLeft); };
    }
  }, [resend]);

  return (
    <>
      {!isModal && <Header showBackBtn={true} isModal={isModal} onBackBtnClick={()=> backToPrev(previous)} />}
      <div className={isModal ? 'form--modal' : 'form'}>
        {isModal && <Header showBackBtn={true} isModal={isModal} onBackBtnClick={()=> backToPrev(previous)} />}
        <div className='verification bottom-13p'>
          <span>Verifikasi Nomor Telepon</span>
          <span>Masukkan 6-digit code yang dikirim </span>
        </div>
        <div className='otp-verification bottom-13p'>
          {[...Array(6)].map((_, idx) => {
            return (
              <input
                className={`inputs-${idx}`}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onInputChange(e, idx); }}
                tabIndex={idx}
                key={idx}
                maxLength={1}
                onKeyUp={autoTab}
              />
            );
          })}
        </div>
        {resendOtp &&
          <div className='text-center register-now bottom-24p'>
            <span className={!resend ? 'hidden' : ''}>Tidak Menerima OTP?</span>
            <span
              className={!resend ? 'hidden' : ''} id={buttonResendId || 'resend-otp'}
              onClick={() => { if (resend) { getOtp().then(() => { setResend(false); }); } }}
            > Kirim Ulang.</span>
            {!resend &&
              <span className='text-disabled'>{`Kirim ulang OTP ${time} Detik lagi`}</span>
            }
          </div>
        }
        <Button
          id='button-verification'
          className='action-button'
          onClick={() => { verificationOtp(otpCode.join('')); }}
        >
          Verifikasi
        </Button>
      </div>
    </>
  );
};
