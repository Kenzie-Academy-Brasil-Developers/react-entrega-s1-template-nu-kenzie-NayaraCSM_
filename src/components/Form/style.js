import styled from 'styled-components';

export const StyledForm = styled.section`
  form {
    margin-top: 1.813rem;
    margin-bottom: 1.188rem;
    margin-left: 1.313rem;
    margin-right: 1.313rem;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.125rem;
  }

  label {
    display: flex;
    margin: 12px 0px;

    font-size: 0.75rem;
    color: #212529;
  }

  input {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-radius: 0.5rem;

    font-size: 1rem;
    background-color: #f8f9fa;
    color: #343a40;
    font-family: "Nunito", sans-serif;
  }

  small {
    display: flex;
    margin-top: 4px;
    margin-bottom: 8px;

    font-size: 0.75rem;
    color: #343a40;
  }

  select {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;

    font-size: 0.75rem;
    background-color: #f8f9fa;
    color: #343a40;
    font-family: "Nunito", sans-serif;
  }

  .form_submit-button {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;
    margin-top: 1.813rem;
    margin-bottom: 1.188rem;
    border-radius: 0.5rem;

    font-size: 0.75rem;
    background-color: #fd377e;
  }

  .form_submit-button:hover {
    background-color: white;
    color: #fd377e;
  }
`;
