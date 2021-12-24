import React from 'react';
import logo from './logo.svg';

import {Link} from '../Link';
interface Props {}
function Sidebar({children}: {children: React.ReactNode}) {
    return (
        <div
            style={{
                padding: 20,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                lineHeight: '1.8em',
                borderRight: '2px solid #eee'
            }}
        >
            {children}
        </div>
    );
}

function Logo() {
    return (
        <div
            style={{
                marginTop: 20,
                marginBottom: 10
            }}
        >
            <a href="/">
                <img src={logo} height={64} width={64} />
            </a>
        </div>
    );
}

export const TestNav = (props: Props) => {
    return (
        <Sidebar>
            <Logo />
            shop 路由
            <Link href="/">店铺主页</Link>
            <a className="navitem" href="/about">
                About
            </a>
            <Link href="/products">Products</Link>
            <hr />
            商家路由
            <Link href="/manage">manage</Link>
            运营
            <Link href="/mis">mis</Link>
            <hr />
            Doc 路由没有启用 ，只是放了一个mdx 的demo，用于以后的文档或者blog
            <Link href="/doc">Doc</Link>
            <hr />
            auth 登陆注册 是单独界面 还是 直接弹窗
            <a className="navitem" href="/auth/login">
                Login
            </a>
            <a className="navitem" href="/auth/signup">
                Signup
            </a>
        </Sidebar>
    );
};
