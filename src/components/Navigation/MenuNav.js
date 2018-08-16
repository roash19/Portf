import React, { Component } from 'react';
import {scaleRotate as Menu} from 'react-burger-menu';

import menu from '../../images/menu.png';
import close from '../../images/close.png';
import Navigation from "./Navigation";

class MenuNav extends Component {
  //отображение бокового меню при повороте экрна
  state = {
    windowHeight: undefined,
    windowWidth: undefined
  };

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  //отображение бокового меню при повороте экрна

  renderMenu = () => {
    if (document.documentElement.clientWidth <= 1150) {
      return <Menu pageWrapId={"page-wrap"}
                   outerContainerId={"outer-container"}
                   width={'320px'}
                   customBurgerIcon={<img src={menu} alt="menu"/>}
                   customCrossIcon={<img src={close} alt="close"/>}>
        <Navigation/>
      </Menu>
    }
    return <Navigation/>
  };

  render() {
    return (
      this.renderMenu()
    )
  }
}

export default MenuNav;
