import { TypesButton } from './TypesButton';
import { StyledTypesFilter } from './style';

export const TypesFilter = ({ types, filter, setFilter }) => {
  return (
    <>
      <StyledTypesFilter>
        <TypesButton
          filter={filter}
          setFilter={setFilter}
          label='Todos'
          slug=''
        />
        {types.map((typeValue) => (
          <TypesButton
            key={typeValue.slug}
            filter={filter}
            setFilter={setFilter}
            label={typeValue.label}
            slug={typeValue.slug}
          />
        ))}
      </StyledTypesFilter>
    </>
  );
};
