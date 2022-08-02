import Search from "./Search";

const SearchButton = ({ setSearchActive, searchActive, setNavActive }: any) => {
  return (
    <div className="cursor-pointer mr-6 lg:hidden" onClick={()=> {
        setSearchActive(!searchActive)
        setNavActive(false)
    }}>
      Search
    </div>
  );
};

export default SearchButton;
