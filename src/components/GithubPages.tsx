import React from 'react'
import Project from './Project'
import useGist from '../helpers/useGist'

interface GhPage {
    pages: {src: string, title: string}[]
}

export default function GithubPages() {
    const [files, loading, error] = useGist<{'gh-pages.json': GhPage}>('https://api.github.com/gists/efab797a351d6bfd966698799a74c65c')
    if(loading) return <div>fetching Json</div>
    if(error) return <div>{JSON.stringify(error)}</div>
    if(!files || typeof files !== 'object') return <div>files not populated</div>
    const json = files['gh-pages.json']
    return (
        <>
            {json?.pages?.map((project, idx) => <Project index={idx} {...project} />)}
        </>
    )
}