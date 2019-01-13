import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Logo = styled.h1`
  color: ${(props) => (props.hovered ? props.theme.red : 'black')};
  transition: all 0.2s ease-in-out;
`;

const NavList = styled.ul`
  padding: 2rem 0;
  opacity: ${(props) => (props.hovered ? 1 : 0)};
  position: absolute;
  bottom: -5.6rem;
  left: -50%;
  visibility: ${(props) => (props.hovered ? 'visible' : 'hidden')};
  display: flex;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;

  li {
    :not(:last-child) {
      margin-right: 5.6rem;
    }

    a {
      color: ${(props) => props.theme.grey};
      transition: all 0.2s ease-in-out;

      :hover,
      :active {
        color: ${(props) => props.theme.red};
      }
    }
  }
`;

class Nav extends Component {
  state = {
    isNavListHovered: false,
  };

  handleMouseEnter = () => {
    this.setState({ isNavlistHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isNavlistHovered: false });
  };

  render() {
    return (
      <NavContainer
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        hovered={this.state.isNavListHovered}
      >
        <Logo hovered={this.state.isNavListHovered}>ar-chive</Logo>
        <NavList hovered={this.state.isNavlistHovered}>
          <li>
            <a href="www.ar-chivesouvenirshop">Store</a>
          </li>
          <li>
            <a href="www.instagram.com/ar_chive.studio">Instagram</a>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </NavList>
      </NavContainer>
    );
  }
}

export default Nav;
