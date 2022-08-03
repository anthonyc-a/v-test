import React, { useState } from "react";
import ButtonSm from "../../Common/Buttons/ButtonSm";
import ContainerSm from "../../Common/Containers/Container";
import Logo from "../../Common/Logo/Logo";
import Signin from "../SignIn/Signin";
import Avatar from "./Avatar/Avatar";
import Nav from "./Nav/Nav";
import Navbar from "./Nav/Navbar";
import NavButton from "./Nav/NavButton";
import Search from "./Search/Search";
import Searchbar from "./Search/Searchbar";
import SearchButton from "./Search/SearchButton";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const [signInActive, setSignInActive] = useState(false);

  return (
    <header className="border-b-2 md:border-none">
      <ContainerSm>
        {!searchActive && (
          <div className="header-inner flex justify-between items-center w-full h-14 md:h-20">
            <div className="header-l">
              <Logo />
              <Navbar />
            </div>
            <Searchbar />

            <div className="header-r flex items-center">
              <SearchButton
                setSearchActive={setSearchActive}
                searchActive={searchActive}
                setNavActive={setNavActive}
              />
              <div className="nav relative">
                <NavButton setNavActive={setNavActive} navActive={navActive} />
                <Nav navActive={navActive} />
              </div>

              <ButtonSm buttonType="signIn" setSignInActive={setSignInActive} />
              <ButtonSm buttonType="signUp" />
              <Avatar />
            </div>
          </div>
        )}

        {searchActive && (
          <div className="header-inner flex justify-between items-center w-full h-14">
            <Search
              setSearchActive={setSearchActive}
              searchActive={searchActive}
            />
          </div>
        )}

        {signInActive && <Signin setSignInActive={setSignInActive} />}
      </ContainerSm>
    </header>
  );
};

export default Header;
