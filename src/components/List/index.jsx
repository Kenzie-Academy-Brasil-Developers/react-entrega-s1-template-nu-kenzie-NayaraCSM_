import { TypesFilter } from './TypesFilter';
import { CardList } from './CardList';
import listEmpty from '../../assets/card-empty.png';
import { StyledList } from './style';

export const List = ({
  types,
  filter,
  setFilter,
  filterList,
  infoList,
  removeCardFromList,
}) => {
  const listFilter = filter !== '' ? filterList : infoList;

  return (
    <StyledList>
      <div>
        <h2 className='list_title'>Resumo financeiro</h2>
        <nav>
          <TypesFilter types={types} filter={filter} setFilter={setFilter} />
        </nav>
      </div>
      {listFilter.length > 0 ? (
        <ul className='list'>
          {listFilter.map((card) => {
            return (
              <CardList
                key={card.id}
                card={card}
                removeCardFromList={removeCardFromList}
              />
            );
          })}
        </ul>
      ) : (
        <div className='list_empty'>
          <p>Você ainda não possui nenhum lançamento</p>
          <img
            src={listEmpty}
            alt='Lista de balões imitando uma lista com conteúdo.'
          />
        </div>
      )}
    </StyledList>
  );
};
