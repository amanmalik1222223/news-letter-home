import logo from '../assets/logo.svg';
import hamburger from '../assets/icon-menu.svg';
import hamburgerClose from '../assets/icon-menu-close.svg';

function Header() {
  const openNavBar = () => {
    document.getElementById('hamburger').classList.add('hidden');
    document.getElementById('hamburgerClose').classList.remove('hidden');
    document.getElementById('hamburgerClose').classList.add('flex');
    document.getElementById('hamburgerClose').classList.add('flex-col');
  };

  const closeNavBar = () => {
    document.getElementById('hamburger').classList.remove('hidden');
    document.getElementById('hamburgerClose').classList.add('hidden');
  };

  return (
    <div className="relative">
      <div className="flex flex-row  md:px-[200px] md:pt-[120px] md:pb-[50px] px-[20px] py-[20px] justify-between item-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="md:hidden">
          <img id="hamburger" src={hamburger} onClick={openNavBar} alt="" />
          <div
            id="hamburgerClose"
            className="hidden bg-white shadow shadow-lg absolute right-0 top-0 w-[250px] px-[20px] py-[20px]"
          >
            <div className="w-full flex justify-end ">
              <img src={hamburgerClose} onClick={closeNavBar} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-softOrange">
                Home
              </a>
              <a href="#" className="hover:text-softOrange">
                New
              </a>
              <a href="#" className="hover:text-softOrange">
                Popular
              </a>
              <a href="#" className="hover:text-softOrange">
                Trending
              </a>
              <a href="#" className="hover:text-softOrange">
                Categories
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-row gap-4 mt-[10px]">
          <a href="#" className="hover:text-softOrange">
            Home
          </a>
          <a href="#" className="hover:text-softOrange">
            New
          </a>
          <a href="#" className="hover:text-softOrange">
            Popular
          </a>
          <a href="#" className="hover:text-softOrange">
            Trending
          </a>
          <a href="#" className="hover:text-softOrange">
            Categories
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
