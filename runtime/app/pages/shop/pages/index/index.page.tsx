import React from 'react';
import {Counter} from '@ProjectName/lib-common/components/Counter.tsx';
import c from './index.module.css';
export {Page};

function Page(props) {
    console.log(props);
    return (
        <div className={c.red}>
            <Counter />
            PC 的 Welcome, TODO：需要根据ua 切不同的界面
            <pre>{JSON.stringify(props)}</pre>
        </div>
    );
}
