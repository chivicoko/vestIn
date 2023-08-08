import styled from "styled-components";

const UserEarningStyle = styled.div`
    margin: 40px 0 50px;
    display: flex;
    justify-content: space-between;

    .container {
        margin: 0;
        padding: 0;
    }

    .container section {
        display: flex;
        justify-content: space-between;    
    }
    
    .depositeContainer {
        color: white;
        margin: 0 20px 20px;
        border-radius: 15px;
    }
    
    .depositeContainer h1 {
        color: #F08;
        margin: 10px 15px 20px 15px;
        font-size: 40px;
    }
    
    .depositeContainer .p {
        text-align: start;
    }
    
    .depo {
        border-radius: 15px;
        border : 1px solid white;
        padding: 20px;
        margin-bottom: 50px;
        width: 650px;
    }

    .depo p {
        text-align: center;
    }

    .depositeContainer-item1 {
        border-bottom: 1px solid #F08;
        padding: 15px 10px;
        margin: 5px;
        color: #F08;
        display: flex;
        justify-content: space-between;    
    }

    .depositeContainer-item2 {
        display: flex;
        justify-content: space-between;    
        padding: 20px 0 0;
        text-align: start;
    }

    .depositeContainer-item1- p {
        text-align: start;
    }

    .depositeContainer-item2- {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 300px;
        padding: 5px;
    }

    .depo .no-depo {
        font-size: 11px;
        text-align: start;
        margin: 15px;
    }

`;

// mobile
const MobileUserEarningStyle = styled.div`
    margin: 0;
    text-align: center;
    font-size: 11px;

    .container section {
        color: white;
        margin: 60px 2px 150px;
    }

    .depositeContainer h1 {
        color: #F08;
        margin: 10px 0 20px 0;
    }

    .depositeContainer .p {
        text-align: start;
    }

    .depo {
        border-radius: 7px;
        border : 1px solid white;
        padding: 7px 4px;
        margin-bottom: 20px;
    }

    .depo p {
        text-align: center;
    }

    .depositeContainer-item1 {
        border-bottom: 1px solid #F08;
        margin: 5px;
        padding: 10px 0;
        color: #F08;
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-column-gap: 35px;
    }

    .depositeContainer-item2 {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-column-gap: 30px;
        padding: 10px 0 0;
    }

    .depositeContainer-item1- p {
        text-align: start;
    }

    .depositeContainer-item2- {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 45px;
        padding: 5px;
    }

`;

export { UserEarningStyle, MobileUserEarningStyle };