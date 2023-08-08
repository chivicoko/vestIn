import styled from "styled-components";

const SidebarStyle = styled.aside`
    background-color: #F08;
    padding: 5px 20px 20px 30px;
    margin: 120px 40px 20px 0;
    border-radius: 15px;
    height: 550px;
    width: 210px;

    .container1 {
        margin: 40px 0;
        text-align: start;
        font-size: 13px;
        // padding: 0 10px;
    }

    .container1 .pa {
        text-decoration: none !important;
    }

`;

// mobile
const MobileSidebarStyle = styled.aside`
    font-size: 11px;

    .container {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 5px;
        width: 90vw;
        padding: 0 2px;
        margin-top: 10px;
    }

    .container .container1 {
        background-color: #F08;
        border: 1px solid rgb(36, 35, 35);
        border-radius: 4px;
        // margin: 3px 0;
        // padding: 3px;
        text-align: center;
        font-size: 13px;
        // text-decoration: underline;
        display: table;
    }
`;


export { SidebarStyle, MobileSidebarStyle};