import Project from './Project'
import useGist from '../helpers/useGist'

interface Project {
    image: string,
    title: string,
    subTitle: string,
    detailedTitle: string,
    description: string,
    categories: string[],
    href : string,
}

export default function Projects() {
    const [files, loading, error] = useGist<{'projects.json': {projects: Project[]}}>('https://api.github.com/gists/efab797a351d6bfd966698799a74c65c')
    if(loading) return <div>fetching Json</div>
    if(error) return <div>{JSON.stringify(error)}</div>
    if(!files || typeof files !== 'object') return <div>files not populated</div>
    const json = files['projects.json']
    return (
        <>
            {json?.projects?.map((project, idx) => <Project index={idx} {...project} />)}
        </>
    )
}