import React from 'react';
import { Block } from './Block';
import './style.scss';

function App() {
  const [rates, setRates] = React.useState({});
  const [fromCurrency, setFromCurrency] = React.useState('RUB')


  React.useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        alert('Не удалось получить информацию');
      });
  }, []);

  return (
    <div className="App">
      <Block value={0} currency={fromCurrency} onChangeCurrency={setFromCurrency} />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default App;
