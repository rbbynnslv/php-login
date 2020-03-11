import React, { useState } from 'react';
import { List } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { StyledHeader } from '../styles/styles';
import Logo from './header-assets/boom-logo.png';

export default function Header(props) {
  const [height, setHeight] = useState(false);

  return (
    <StyledHeader>
      <div className={height ? 'main-header collapse' : 'main-header'}>
        <div className="header-div">
          <div className="left-header">
            <span className="left-span">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://boom.camp"
              >
                Boom Camp
              </a>
              <img src={Logo} alt="php" className="header-logo" />
            </span>
          </div>
          <div className="right-header">
            <span>
              <a href="#home" onClick={() => props.handleProps('#home')}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home
              </a>
            </span>
            <span>
              <a href="#about" onClick={() => props.handleProps('#about')}>
                About Us
              </a>
            </span>
            <span>
              <a href="#team" onClick={() => props.handleProps('#team')}>
                Our Team
              </a>
            </span>
            <span>
              <a href="#related" onClick={() => props.handleProps('#related')}>
                &nbsp;Related
              </a>
            </span>
          </div>
          <div className="right-header-toggle">
            <MenuOutlined
              onClick={() => setHeight(!height)}
              className="toggle-menu"
            />
          </div>
          <div className="menu-toggle">
            <List
              className="main-list"
              dataSource={[
                { page: '#home', name: 'Home' },
                { page: '#about', name: 'About us' },
                { page: '#team', name: 'Our Team' },
                { page: '#related', name: 'Related' }
              ]}
              renderItem={item => (
                <List.Item
                  onClick={() => props.handleProps(item.page)}
                  className="list-item"
                >
                  <a href={item.page}>{item.name}</a>
                </List.Item>
              )}
            ></List>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}
