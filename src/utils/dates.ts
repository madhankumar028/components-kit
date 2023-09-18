
// this return a list of days from 01 - 31
export const dateList = [...new Array(31)].map((_, index) => {
  const paddedDay = String(`${"0" + (index + 1)}`).slice(-2);
  return {
    label: paddedDay,
    value: paddedDay,
  }
});

export const getYearList = (person = 'adult') => {
  const adultYear = new Date().getFullYear() - 17;

  const yearByPerson = {
    'child': () => yearList.filter(d => d.value >= adultYear),
    'adult': () => yearList.filter(d => d.value <= adultYear),
  };

  return yearByPerson[person]();
};

const normalizeYearValues = (additional) => ({
  label: new Date().getFullYear() + additional,
  value: new Date().getFullYear() + additional,
});

export const yearList = [...new Array(80)].map((_, index) => normalizeYearValues(-index));

export const monthList = [
  { label: 'Januari', value: '01' },
  { label: 'Februari', value: '02' },
  { label: 'Maret', value: '03' },
  { label: 'April', value: '04' },
  { label: 'Mei', value: '05' },
  { label: 'Juni', value: '06' },
  { label: 'Juli', value: '07' },
  { label: 'Agustus', value: '08' },
  { label: 'September', value: '09' },
  { label: 'Oktober', value: '10' },
  { label: 'November', value: '11' },
  { label: 'Desember', value: '12' },
];
