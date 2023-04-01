import styled from 'styled-components';

export const StyledLandingPage = styled.div`
  margin: auto;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: black;
  color: white;

  header {
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo {
    margin-top: 20px;
    margin-bottom: 15px;
  }

  .title_landing-page {
    margin-bottom: 10px;
    text-align: center;

    font-size: 1.5rem;
  }

  .info_landing-page {
    margin-bottom: 10px;

    font-size: 0.75rem;
  }

  .button_redirect-home {
    margin-bottom: 10px;
    padding: 0.313rem 3.125rem;
    border-radius: 0.313rem;

    background-color: #fd377e;
    color: white;
  }

  .button_redirect-home:hover {
    background-color: white;
    color: #fd377e;
  }

  .conatiner_image {
    width: 50%;

    padding-top: 20px;
    padding-bottom: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 800px) {
    margin: auto;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    header {
      width: 50%;
      padding-bottom: 50px;

      align-items: center;
    }

    .button_redirect-home {
      padding: 0.613rem 6.125rem;
    }

    .container_image {
      width: 50%;

      padding-top: 0px;
      padding-bottom: 0px;
    }

    .image_right {
      width: 50%;

      padding-top: 0px;
      padding-bottom: 0px;
    }
  }
`;
