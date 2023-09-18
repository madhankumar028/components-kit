import React from 'react';
import "./MobileProfileIcon.scss";

interface MobileProfileIconProps {
  isAuthenticated: boolean;
  isAgent: boolean;
  initialName: string;
  handleLogin: () => void;
  handleLogout: () => void;
  NextLink: any;
}

const MobileProfileIcon = (props: MobileProfileIconProps) => {
  const { isAuthenticated, isAgent, initialName, handleLogin, handleLogout, NextLink } = props;

  const [showList, setShowList] = React.useState(false);

  if (isAuthenticated && isAgent) {
    return (
      <>
        <button
          className="mobileProfileIcon__icon--initialName"
          type="button"
          onClick={() => setShowList(!showList)}
        >
          {initialName}
        </button>
        {
          showList && (
            <div className='mobileProfileIcon__menu'>
              {
                NextLink
                  ? (
                    <NextLink href="/agents/profile/">
                      <a title="Lifepal Agents">Profil</a>
                    </NextLink>
                  )
                  : (
                    <a title="Lifepal Agents" href="/agents/profile/">Profil</a>
                  )
              }
                <a onClick={()=> handleLogout()}>Keluar</a>
            </div>
          )
        }
      </>
    );
  } else if (!isAuthenticated) {
    if (NextLink) {
      return (
        <NextLink href="/account/login/">
          <a
            className="mobileProfileIcon__icon"
            title="Login"
          >
            <i className="lifepal__icon lifepal__icon--profile" />
          </a>
        </NextLink>
      );
    } else {
      return (
        <a
          className="mobileProfileIcon__icon"
          title="Login"
          onClick={handleLogin}
        >
          <i className="lifepal__icon lifepal__icon--profile" />
        </a>
      )
    }
  } else {
    return <></>
  }
}

export default MobileProfileIcon;
