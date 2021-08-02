import React from 'react';
import {Card, Container} from "react-bootstrap";
import {ECard} from "../email-upload/card";

function ListMailChecker(props) {
    return (
       <React.Fragment>
           <Card>
               <br/>
               <Container>
                   <div className="Row">
                       <div className="col">
                           <ECard />
                       </div>
                   </div>
                   <div className="Row">
                       <div className="col">


                       </div>
                   </div>

               </Container>
               <br/>
           </Card>
       </React.Fragment>
    );
}

export default ListMailChecker;
