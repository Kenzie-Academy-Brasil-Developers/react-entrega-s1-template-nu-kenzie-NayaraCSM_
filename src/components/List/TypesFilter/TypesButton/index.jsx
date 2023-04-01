import { StyledTypesButton } from './styled';

export const TypesButton = ({ setFilter, slug, label }) => {
  return (
    <StyledTypesButton>
      <button onClick={() => setFilter(slug)}>{label}</button>
    </StyledTypesButton>
  );
};
