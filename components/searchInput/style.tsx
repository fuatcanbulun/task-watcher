import styled from "styled-components";

const SearchInputContainer = styled.div`
  width: 100%;
  height: 28px;
  position: relative;
  border: 1px solid gray;

  input {
    height: 26px;
    width: -webkit-fill-available;
    maxwidth: -webkit-fill-available;
    padding-left: 30px;
    background-color: white;
    outline: none !important;
    border: none !important;
  }
`;

const SearchInputValue = styled.div`
  width: -webkit-fill-available;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
`;

const SearchInputIcon = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 5px;
  left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { SearchInputContainer, SearchInputValue, SearchInputIcon };
