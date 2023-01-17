const appEntry = document.getElementById('app');

const html = (strings, ...values) => {
  let result = '';
  console.log(strings);
  console.log(values);
  strings.forEach((string, i) => {
    const value = values[i];
    if (typeof value === 'function') {
      result += string + value();
    } else {
      result += string + (value || '');
    }
  });
  return result;
};

const rafa = 'Rafa';

const appContent = html`
  <h1>Hello ${rafa}</h1>
  <p>My name is ${rafa}</p>
`;

appEntry.innerHTML = appContent;

export {}