import styled from 'styled-components';

export const StyledHomePage = styled.div`
    header{
        padding: 20px;

        display: flex;
        justify-content: space-between;

        background-color: #F8F9FA;
        box-shadow: -7px 0px 7px 0px; #343A40;
    }

    .logo{
        margin-left: 100px;
    }

    .button_redirect-landing{
        margin-right: 100px;
        padding: 0.313rem 2.125rem;
        border-radius: 0.313rem;

        background-color: #FD377E;
        color: white;
    }

    .button_redirect-landing:hover{
        background-color: white;
        color: #FD377E;
    }

    @media (min-width: 800px){


        .container{
            width: 90%;
            display: flex;
        }

        .form{
            width: 35%;
            margin-left: 100px;
        }

        .list{
            width: 62%;
            margin-top: 30px;
            margin-left: 90px;
        }
    }
`;