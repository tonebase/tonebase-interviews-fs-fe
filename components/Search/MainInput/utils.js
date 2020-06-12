// remove below later, sets mock cached searches
const setMockPropositionsToLocalStorage = (localPropositions) => {
  localStorage.setItem(
    'cashedValues',
    JSON.stringify([
      'mock search from localstorage 1',
      'mock search from localstorage 2',
      'mock search from localstorage 3',
      'mock search from localstorage 1234567890-=+',
      'mock search from localstorage qwertyuiop[]',
      'mock search from localstorage asdfghjkl;',
      'mock search from localstorage zxcvbnm,./',
      'mock search from localstorage QWERTYUIOP',
      'mock search from localstorage ASDFGHJKL',
      'mock search from localstorage ZXCVBNM',
    ])
  );
};
// remove above later

export const getPropositionsFromLocalStorage = () => {
  let cashedValues = [];
  try {
    cashedValues = JSON.parse(localStorage.getItem('cashedValues'));

    // remove below later, sets mock cached searches
    if (!cashedValues || !cashedValues.length)
      setMockPropositionsToLocalStorage(cashedValues);
    // remove above later
  } catch (error) {
    localStorage.setItem('cashedValues', JSON.stringify(propositionsCashed));
  }
  return cashedValues;
};

export const saveUniqueSearchToLocalStorage = (value) => {
  const propositionsCached = getPropositionsFromLocalStorage();
  if (!propositionsCached.includes(value)) {
    const uniques = [...propositionsCached, value];
    localStorage.setItem('cashedValues', JSON.stringify(uniques));
  }
};
