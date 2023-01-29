import {
  SearchInputContainer,
  SearchInputIcon,
  SearchInputValue,
} from "./style";
import { ISearchInput } from "@/utils/interfaces/searchInput";
import Icon from "@/components/icon";

const SearchInput = ({ children }: ISearchInput) => {
  return (
    <SearchInputContainer>
      <SearchInputIcon>
        <Icon data="AiOutlineSearch" size="xs" color="black" />
      </SearchInputIcon>
      {children}
    </SearchInputContainer>
  );
};

export default SearchInput;
