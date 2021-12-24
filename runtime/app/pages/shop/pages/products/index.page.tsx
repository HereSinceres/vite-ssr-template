import React from 'react';
import type {Movie} from '../types';

export {Page};

function Page({movies}: {movies: Movie[]}) {
    return (
        <>
            <h1>电影列表</h1>
            <ol>
                {movies.map(({id, title, release_date}) => (
                    <li key={id}>
                        <a href={`/product/${id}`}>{title}</a> ({release_date})
                    </li>
                ))}
            </ol>
            <p>
                Source: <a href="https://star-wars.brillout.com">star-wars.brillout.com</a>.
            </p>
            <p>
                Data can be fetched by using the <code>onBeforeRender()</code> hook.
            </p>
        </>
    );
}
