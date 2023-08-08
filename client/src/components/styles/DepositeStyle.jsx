import styled from "styled-components";

const DepositStyle = styled.div`
    margin: 40px 0 50px;
    display: flex;
    justify-content: space-between;
    
    .container {
        margin: 0;
        padding: 0;
    }
    
    .depositeContainer {
        color: white;
        margin: 0 20px 20px;
        border-radius: 15px;
    }
    
    .depositeContainer .head {
        margin: 0 0 20px;
    }
    
    .depositeContainer h1 {
        color: #F08;
        margin: 10px 15px 7px 15px;
        font-size: 40px;
    }
    
    .depositeContainer .p {
        text-align: start;
    }
    
    .depo {
        border-radius: 15px;
        border : 1px solid white;
        padding: 10px;
        margin-bottom: 50px;
    }
    
    .depo .depo-proposal {
        padding: 10px 15px 0;
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
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
        padding: 20px 17px 10px;
    }
    
    .depositeContainer-item1- {
        border: 1px solid #F08;
        border-radius: 15px;
        padding: 25px 10px;
        margin: 25px;
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 300px;
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

    .currencies {
        border-bottom: 1px solid #F08;
        border-top: 1px solid #F08;
        margin: 5px;
        padding: 10px 0;
        color: #F08;
    }

    .currency {
        // box-shadow: 0 2px 5px 0 rgb(0, 0, 0), 0 2px 5px 0 rgb(197, 196, 196);
        margin: 20px 120px;
        text-align: start;
        border-bottom: 1px solid grey;
        padding-bottom: 15px;

        display: flex;
        justify-content: space-between;
    }

    .currency input {
        margin-right: 50px;
    }

    .spendBtn {
        text-align: start;
    }

    .buyGoldBtn {
        padding: 15px 40px;
        margin-bottom: 40px;
        margin-top: 0;
        border-radius: 30px;
        font-size: 25px;
    }
    
    .btn {
        margin: 25px 0 10px;
        font-size: 20px;
        border-radius: 5px;
        padding: 10px 20px;
        width: 760px;
    }

`;

// mobile
const MobileDepositStyle = styled.div`
    margin: 0;
    text-align: center;

    .container section {
        margin-top: 50px;
    }

    .depositeContainer {
        color: white;
        margin: 0 3px 40px;
    }

    .depositeContainer h1 {
        color: #F08;
        margin: 10px 0 0 0;
        font-size: 17px;
    }

    .depositeContainer small {
        font-size: 11px;
    }

    .depo {
        border-radius: 11px;
        // border : 1px solid white;
        background-color: rgba(175, 174, 174, 0.096);
        padding: 7px;
        margin-bottom: 20px;
        margin-top: 20px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(197, 196, 196, 0.568);
    }

    .depo-proposal {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    // .depo:hover {
    //     background-color: rgba(175, 174, 174, 0.479);
    // }
    
    .depositeContainer .p {
        text-align: start;
    }

    .depositeContainer-item1 {
        border-bottom: 1px solid #F08;
        margin: 5px;
        padding: 10px 0;
        color: #F08;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 45px;
    }

    .currencies {
        border-bottom: 1px solid #F08;
        border-top: 1px solid #F08;
        margin: 5px;
        padding: 10px 0;
        color: #F08;
    }

    .currency {
        // box-shadow: 0 2px 5px 0 rgb(0, 0, 0), 0 2px 5px 0 rgb(197, 196, 196);
        margin: 20px 20px;
        text-align: start;
        border-bottom: 1px solid grey;
        padding-bottom: 15px;
    }

    .currency input {
        margin-right: 50px;
    }
    
    .depo p {
        // text-align: center;
    }

    .depositeContainer-item2 {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 45px;
        padding: 10px 0 0;
    }

    .depositeContainer-item1- {
        border: 1px solid #F08;
        border-radius: 7px;
        padding: 10px 5px;
        margin: 15px 5px;
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 45px;
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

    .btn {
        margin: 25px 0 10px;
        font-size: 15px;
        border-radius: 5px;
        padding: 10px 20px;
        width: 300px;
    }
`;

export { DepositStyle, MobileDepositStyle };