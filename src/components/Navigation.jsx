import { Link } from 'react-router-dom';
import Container from './Container';

import logo from '../assets/logoipsum.svg';
import UserProfile from './UserProfile';
import { AlignJustify } from 'lucide-react';

const Navigation = () => {
  return (
    <header className="nav__header">
      <Container>
        <div className="toolbar">
          <button
            className="menu_icon md:hidden"
            aria-haspopup="true"
          >
            {/* Mobile Hamburger menu */}
            <AlignJustify />
          </button>
          <Link className="logo__link" to={'/'}>
            <img src={logo} />
          </Link>

          <UserProfile />
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
