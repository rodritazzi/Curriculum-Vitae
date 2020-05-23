 import React from 'react';
 import H2Styled from '../styled/H2Styled'
 import H3Styled from '../styled/H3Styled'
 import PStyled from '../styled/PStyled'


// const Education = () =>(
//      <div className="Education">
//          <div className="Education-container">
//                          <div className="Education-item">
//                              <h3>MIT</h3>
//                              <p>Aprendi diseño web full stack</p>
//                          </div>
//          </div>
//      </div>
//  )


const Education = props => (
     <div className="Education">
         <H2Styled name= "Education"/>
         <div className="Education-container">
             {  
                props.data.map((edu, index) => (
                    <div className="Education-item" key={`Edu-${index}`}>
                        <H3Styled>{edu.degree} {edu.institucion}
                <span>{edu.startDate} - {edu.endDate}</span>
                        </H3Styled>
                        <PStyled name={edu.description}/>
                    </div>

                )
            )
        }
    </div>
</div>
)


 export default Education;