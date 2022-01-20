import React from 'react'
import {Work} from '../types'

interface Props {
    experience: Work[]
}

export default function Experience(props: Props){
    return(
        <div className="row work">

        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
            {props.experience.map(ex => <RowItem {...ex}/>)}

        </div>

      </div>
    )
}

export function RowItem(props: Work){
    return(
        <div className="row item">

        <div className="twelve columns">

          <h3>{props.company}</h3>
          <p className="info">{props.position} <span>&bull;</span> <em className="date">{props.startDate} - {props.endDate || 'Present'}</em></p>
          <ul>
          {props.highlights.map(p=><li>{p}</li>)}
          </ul>
        </div>

      </div>
    )
}