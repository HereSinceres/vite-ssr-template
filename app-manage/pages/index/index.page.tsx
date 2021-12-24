import React from 'react';
import {Counter} from '@ProjectName/lib-common/components/Counter.tsx';
import type {Movie} from '../types';


function Page({movies}: {movies: Movie[]}) {
    return (
        <>
            <Counter />
            <h1>Star War2s Mo2vies</h1>
            <ol>
                {movies.map(({id, title, release_date}) => (
                    <li key={id}>
                        <a href={`/manage/movie/${id}`}>{title}</a> ({release_date})
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

export {Page};