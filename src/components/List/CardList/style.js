import styled from 'styled-components';

export const StyledCardList = styled.li`
  .entrada {
    height: 100%;

    padding: 0rem 1.313rem;
    margin: 10px 0px;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;

    background-color: #f8f9fa;
    border-left: 10px solid #03b898;
  }

  .despesa {
    height: 100%;

    padding: 0rem 1.313rem;
    border-radius: 0.5rem;
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;

    background-color: #f8f9fa;
    border-left: 10px solid #f8f9fa;
  }

  .card {
    height: 100%;
    padding-bottom: 1.188rem;
    padding-left: 1.313rem;
    padding-right: 1.313rem;
    margin-bottom: 1rem;
    border-radius: 0.125rem;

    background-color: #f8f9fa;
  }

  .card_left {
    padding-bottom: 0.5rem;
  }

  .description {
    padding: 10px 0px;

    font-size: 1rem;
    color: #212529;
  }
  .typeValue {
    margin: 5px 0px;

    font-size: 0.75rem;
    color: #343a40;
  }

  .card_right {
    padding-bottom: 1rem;
  }

  .money {
    margin: 10px 0px;

    font-size: 0.75rem;
    color: #212529;
  }

  .card-delet_button {
    padding: 5px 10px;
    margin: 5px 0px;
    border-radius: 0.125rem;

    font-size: 0.75rem;
    background-color: #e9ecef;
    color: #212529;
  }

  .card-delet_button:hover {
    border: solid 1px #e9ecef;
  }

  @media (min-width: 800px) {
    .card {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .card_right {
      justify-content: center;
      padding-bottom: 1rem;
    }
    .money {
      margin-bottom: 10px;
    }
  }
`;
