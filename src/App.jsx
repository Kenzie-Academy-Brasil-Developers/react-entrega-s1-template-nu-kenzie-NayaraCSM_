import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DefaultTemplate } from './template/DefaultTemplate';
import { Form } from './components/Form';
import { TotalMoney } from './components/TotalMoney';
import { List } from './components/List';

function App() {
  const [infoList, setInfoList] = useState([]);

  const types =[
    {
      slug: 'entrada',
      label: 'Entrada',
    },
    {
      slug: 'despesa',
      label: 'Despesa',
    },
  ];

  const totalValue = infoList.reduce((accumulator, currentValue) => {
    if(currentValue.typeValue === 'despesa'){
      return accumulator - Number(currentValue.money)
    } 
    else {
      return accumulator + Number(currentValue.money)
    }
  }, 0);

  const addInfoToCardList = (formData) => {
    const newCard = { ...formData, id: uuidv4(), value: Number(formData.value)};
    setInfoList([...infoList, newCard]);
  };

  const removeCardFromList = (cardId) => {
    const newCardList = infoList.filter((card) => card.id !== cardId);
    setInfoList(newCardList);
  }

  return (
    <DefaultTemplate>
        <div className='container'>
          <Form types={types} addInfoToCardList={addInfoToCardList}/>
          <TotalMoney totalValue={totalValue} infoList={infoList}/>
        </div>
        <List infoList={infoList} removeCardFromList={removeCardFromList}/>
    </DefaultTemplate>
  )
}

export default App;
