import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/logo-black.svg';
import { Form } from '../../components/Form';
import { TotalMoney } from '../../components/TotalMoney';
import { List } from '../../components/List';
import { Footer } from '../../components/Footer';
import { StyledHomePage } from './style';

export const HomePage = ({ setLogin }) => {
  const [infoList, setInfoList] = useState([]);
  const [filter, setFilter] = useState('');

  const types = [
    {
      slug: 'entrada',
      label: 'Entrada',
    },
    {
      slug: 'despesa',
      label: 'Despesa',
    },
  ];

  const filterList = infoList.filter((card) => card.typeValue === filter);

  const totalValue = infoList.reduce((accumulator, currentValue) => {
    if (currentValue.typeValue === 'despesa') {
      return accumulator - Number(currentValue.money);
    } else {
      return accumulator + Number(currentValue.money);
    }
  }, 0);

  const addInfoToCardList = (formData) => {
    const newCard = {
      ...formData,
      id: uuidv4(),
      value: Number(formData.value),
    };
    setInfoList([...infoList, newCard]);
  };

  const removeCardFromList = (cardId) => {
    const newCardList = infoList.filter((card) => card.id !== cardId);
    setInfoList(newCardList);
  };

  return (
    <StyledHomePage>
      <header>
        <img className='logo' src={logo} alt='logo do site' />
        <nav>
          <button
            className='button_redirect-landing'
            onClick={() => setLogin(false)}
          >
            Inicio
          </button>
        </nav>
      </header>
      <div className='container'>
        <div className='form'>
          <Form types={types} addInfoToCardList={addInfoToCardList} />
          <TotalMoney totalValue={totalValue} infoList={infoList} />
        </div>
        <div className='list'>
          <List
            types={types}
            filter={filter}
            setFilter={setFilter}
            filterList={filterList}
            infoList={infoList}
            removeCardFromList={removeCardFromList}
          />
        </div>
      </div>
      <Footer />
    </StyledHomePage>
  );
};
