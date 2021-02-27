import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Submenu = ({item}) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => {
        return setSubnav(!subnav)
    }

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {
                        item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null
                    }
                </div>
            </SidebarLink>
            {
                subnav && item.subNav.map((item, index) => {
                    return (
                        <DropdownLink to={item.path} key={index}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    )
                })
            }
        </>
    )
}

export default Submenu;

const SidebarLink = styled(Link)`
display: flex;
color: #fff;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
text-decoration: none;
font-size: 18px;
transition: all 2s ease;

&:hover {
    background: #fff;
    color: #3ab3eb;
    border-left: 4px solid #000;
    cursor: pointer;
}
`;

const SidebarLabel = styled.span`
margin-left: 16px;
`;

const DropdownLink = styled(Link)`
background: #0b648d;
height: 60px;
padding-left: 3rem;
display: flex;
align-items: center;
text-decoration: none;
color: #fff;
font-size: 16px;

&:hover {
   background: #19536e;
   border-left: 4px solid #fff;
   cursor: pointer;
}
`;