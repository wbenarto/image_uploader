import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function Navbar() {


    return (
        <nav className='menu' style={{ position: 'fixed', zIndex: 5, width: '100%'}}>
            <div className='menu_container'>
                <Menu>
                    <Menu.Item>
                        <a href='/'>Home</a>
                    </Menu.Item>
                    <SubMenu title={<span>Menu</span>}>
                        <MenuItemGroup title='Item1'>
                            <Menu.Item key='setting:1'>Option 1</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title='Item2'>
                            <Menu.Item key='setting:2'>Option 1</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key='app'>
                        <a href='/about'>About Coco</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href='/'>Friends</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href='/'>Comments</a>
                    </Menu.Item>
                </Menu>
            </div>
        </nav>
    )
}

export default Navbar
