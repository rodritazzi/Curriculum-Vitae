import React from 'react';
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

// const Certificates = () => (
//     <div className="Certificates">
//         <div className="Certificates-container">
//             <div className="Certificates-item">
//                 <h3>Acamica</h3>
//                 <p>Aprendi diseño web full stack</p>
//                 <h3>Quilmes High School</h3>
//                 <p>CAE (Certificate Advance of English)</p>
//             </div>
//         </div>
//     </div>
// )

const Certificates = props => (
    <div className="Certificates">
            <H2Styled name= "Certificates"/>
        <div className="Certificates-container">
            {
                props.data.map((Cer, index) => (
                    <div className="Certificates-item" key={`Cer-${index}`}>
                        <H3Styled>{Cer.name} {Cer.date} at {Cer.institution}</H3Styled>
                        <PStyled name={Cer.description}/>
                    </div>
                )
            )
        }
    </div>
    </div>
    )



export default Certificates;