import { useState } from 'react';
import { StyledForm } from './style';

export const Form = ({ types, addInfoToCardList }) => {
  const [formData, setFormData] = useState({
    description: '',
    money: '',
    typeValue: '',
  });

  const submit = (event) => {
    event.preventDefault();
    addInfoToCardList(formData);
  };

  const empty =
    formData.description === '' ||
    formData.money === '' ||
    formData.typeValue === '';

  return (
    <StyledForm>
      <form onSubmit={submit}>
        <label htmlFor='description'>Descrição</label>
        <input
          type='text'
          placeholder='Digite a descrição aqui'
          value={formData.description}
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
          required
        />
        <small> Ex: compra de roupas</small>
        <label htmlFor='money'>Valor(R$)</label>
        <input
          type='number'
          placeholder='Digite o valor aqui'
          value={formData.money}
          onChange={(event) =>
            setFormData({ ...formData, money: event.target.value })
          }
          required
          min={0}
        />
        <label htmlFor='typeValue'>Tipo de valor</label>
        <select
          value={formData.typeValue}
          onChange={(event) =>
            setFormData({ ...formData, typeValue: event.target.value })
          }
          required
        >
          <option value=''>Selecione um tipo</option>
          {types.map((type) => (
            <option key={type.slug} value={type.slug}>
              {type.label}
            </option>
          ))}
          ;
        </select>
        <button
          className='form_submit-button'
          type='submit'
          disabled={empty ? true : false}
        >
          {' '}
          Inserir Valor
        </button>
      </form>
    </StyledForm>
  );
};
