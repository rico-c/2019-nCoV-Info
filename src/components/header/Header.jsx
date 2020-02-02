import React from 'react';
import headerImg from '../../imgs/header.jpg';
import logoImg from '../../imgs/logo.jpeg';
import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <span className="header-icon"><img src={logoImg}/>银河系草鱼</span>
            <span className="header-title">2019-nCoV<br/>新型冠状病毒肺炎信息</span>
            <img className="header-img" src={headerImg}/>
        </div>
    );
}
