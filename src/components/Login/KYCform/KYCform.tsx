import React, { useState } from 'react';
import Radio from '../../Radio';
import RadioGroup from '../../RadioGroup';
import Input from '../../Input';
import Button from '../../Button';
import { useLoginContext } from '../Login';
import './KYCform.scss';

const KYCform = () => {
  const [isPassport, setIsPassport] = useState(false);

  const { errorMessage, handleIDverification } = useLoginContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { ktp, passport, annualIncome, sourceOfFund } = e.target;

    const payload = {
      ktp: ktp ? ktp.value : "",
      passport: passport ? passport.value : "",
      annualIncome: annualIncome.value,
      sourceOfFund: sourceOfFund.value
    }

    handleIDverification(payload);
  }

  return (
    <div className='kyc__background'>
      <div className='kyc__box'>
        <p>Verifikasi ID</p>
        <RadioGroup id="radio__group__wrap" groupAlignment='horizontal'>
          <Radio
            id="id_type"
            name="id_type"
            labelName='KTP'
            value="KTP"
            isChecked={!isPassport}
            handleOnChange={() => setIsPassport(false)}
          />
          <Radio
            id="id_type"
            name="id_type"
            labelName='Passport'
            value="Passport"
            isChecked={isPassport}
            handleOnChange={() => setIsPassport(true)}
          />
        </RadioGroup>

        <form onSubmit={handleSubmit}>
          <Input
            name={isPassport ? "passport" : "ktp"}
            type="numeric"
            inputMode='numeric'
            placeholder={isPassport ? "No.Passport" : "No. KTP"}
            maxLength={16}
            onChange={() => { }}
            size="md"
            error={errorMessage && (errorMessage.passport || errorMessage.ktp)}
          />

          <Input
            name="annualIncome"
            type="numeric"
            inputMode='numeric'
            isCurrency={true}
            placeholder="Pendapatan Dalam Setahun"
            onChange={() => { }}
            size="md"
            error={errorMessage && errorMessage.annualIncome}
          />

          <Input
            name="sourceOfFund"
            type="text"
            inputMode='text'
            placeholder="Sumber Pendapatan"
            onChange={() => { }}
            size="md"
            error={errorMessage && errorMessage.sourceOfFund}
          />

          <Button
            variant='primary'
            id='regis-btn'
            type='submit'
            isBlock={true}
            className='action-button bottom-16p'
            onClick={() => { }}
          >
            Simpan
          </Button>
        </form>
      </div>
    </div>
  )
}

export default KYCform;