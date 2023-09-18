export const handlePhoneNumber = (phone: string) => {
  return {
    format: phone,
    number: phone.split(' ').join('').replace('+62', '0'),
    value: phone.split(' ').join(''),
  };
};
