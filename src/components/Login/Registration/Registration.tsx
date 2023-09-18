import React, { useState } from 'react';
import Header from '../Header';
import Input from '../../Input';
import Radio from '../../Radio';
import RadioGroup from '../../RadioGroup';
import DropDown from '../../DropDown';
import Checkbox from '../../Checkbox';
import Button from '../../Button';
import { ErrorMessageTypes } from '../types';
import { useLoginContext } from '../Login';
import { dateList, monthList, getYearList } from '../../../utils/dates';
import './Registration.scss';

const Registration = () => {
  const { errorMessage, backToPrev, handleRegister } = useLoginContext();
  const [agreedTerm, setAgreedTerm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {fullname, gender,date, month, year, phone, password, repassword } = e.target;

    const payload = {
      fullname: fullname.value,
      gender: gender.value,
      date: date.value,
      month: month.value,
      year: year.value,
      phone: phone.value,
      password: password.value,
      repassword: repassword.value
    }

    handleRegister(payload);
  }

  return (
    <div className='registration__background'>
      <div className='registration__box'>
        <Header isModal={true} showBackBtn={true} onBackBtnClick={() => backToPrev('login')} />
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <div className='field__text'>
              <Input
                name="fullname"
                type="text"
                inputMode='text'
                placeholder='Nama Lengkap'
                onChange={() => { }}
                size="md"
                error={errorMessage && errorMessage.fullname}
              />
            </div>
          </div>

          <div className='field'>
            <label htmlFor="gender" className='gender__label'>Jenis Kelamin</label>
            <RadioGroup id="radio__group__wrap" groupAlignment='horizontal'>
              <Radio
                id="gender"
                name="gender"
                labelName='Pria'
                value="MALE"
                handleOnChange={() => { }}
              />
              <Radio
                id="gender"
                name="gender"
                labelName='Wanita'
                value="FEMALE"
                handleOnChange={() => { }}
              />
            </RadioGroup>
            {errorMessage && errorMessage.gender && <span className='error-msg'>{errorMessage.gender}</span>}
          </div>

          <div className='field'>
            <label htmlFor="birthdate" className='birthdate__label'>Tanggal Lahir</label>
            <div className='field__birthdate'>
              <DropDown
                id="date"
                name="date"
                list={dateList}
              />
              <DropDown
                id="month"
                name="month"
                list={monthList}
              />
              <DropDown
                id="year"
                name="year"
                list={getYearList()}
              />
            </div>
          </div>

          <div className='field'>
            <div className='field__text'>
              <Input
                name="phone"
                type="tel"
                inputMode='tel'
                placeholder='Nomor Telepon'
                onChange={() => { }}
                size="md"
                error={errorMessage && errorMessage.phoneNumber}
              />
            </div>
          </div>

          <div className='field'>
            <div className='field__text'>
              <Input
                name="password"
                type="password"
                inputMode='text'
                placeholder='Password'
                onChange={() => { }}
                size="md"
                error={errorMessage && errorMessage.password}
              />
            </div>
          </div>

          <div className='field'>
            <div className='field__text'>
              <Input
                name="repassword"
                type="password"
                inputMode='text'
                placeholder='Konfirmasi Password'
                onChange={() => { }}
                size="md"
                error={errorMessage && errorMessage.password}
              />
            </div>
          </div>

          <div className="field">
            <div className="field__term">
              <Checkbox
                id='tc_checkbox'
                labelName=''
                labelHidden={false}
                onChange={() => setAgreedTerm(!agreedTerm)}
              />
              <span>Saya setuju dengan <a href="/ketentuan/">Kebijakan Pengunaan</a>  Lifepal </span>
            </div>
          </div>

          <Button
            variant='primary'
            id='regis-btn'
            type='submit'
            isBlock={true}
            disabled={!agreedTerm}
            className='action-button bottom-16p'
            onClick={() => { }}
          >
            Masuk
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Registration;