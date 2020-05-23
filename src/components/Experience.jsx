import React from 'react';
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

//  const Experience = () => (
//      <div className="Experience">
//          <div className="Experience-container">
//              <div className="Experience-item">
//                  <h3>Acamica</h3>
//                  <p>Aprendi diseño web full stack</p>
//              </div>
//          </div>
//      </div>
//  )
 const Experience = props => (
     <div className="Experience">
                  <H2Styled name= "Experience"/>
         <div className="Experience-container">
             {  
            props.data.map((exp, index) => (
                <div className="Experience-item" key={`Exp-${index}`}>
                    <H3Styled>{exp.jobTitle} at {exp.company} </H3Styled>
                    <span>{exp.startDate} - {exp .endDate}</span>
                    <PStyled name={exp.jobDescription}/>
                </div>

            )
        )
    }
</div>
</div>
)


export default Experience;