import React from 'react'
import {Education} from '../types'
interface Props {
    education: Education[];
}

export default function EducationComponent(props: Props){
    const {education} = props
    return(
        <div className="row education">

        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
            {education.map(edu => <RowItem {...edu}/>)}
        </div>

      </div>
    )
}

export function RowItem(props: Education){
    let {courses} = props
    const lastCourse = courses.pop()
    return(
        <div className="row item">

        <div className="twelve columns">

          <h3>{props.institution}</h3>
          <p className="info">{props.area} <span>&bull;</span> <em className="date">{props.startDate} - {props.endDate}</em></p>

          <p>
              Completed {props.studyType} {courses.length > 0 && <>in {courses.join(', ')} and {lastCourse} </>} with {props.gpa} {Number(props.gpa) <= 10 ? 'gpa' : ''}.
            </p>
        </div>

      </div>
    )
}