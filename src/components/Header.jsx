import React from 'react'
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';


function Header() {
    return (
        <div className="header">
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
                <div className="header_logo">
                    <IconButton>
                        <img className="logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo"/>
                    </IconButton>
                </div>
                <IconButton>
                    <ChatBubbleIcon fontSize="large" className="header__icon" />
                </IconButton>
        </div>
    )
}

export default Header
