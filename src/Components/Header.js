import React from 'react';
import { Row, Col } from "react-bootstrap";

// HOC (High order component)
const Header = React.memo(({title}) => { // destructuring de props.title
    
    return ( 
        <Row>
            <Col>
                <h1 className="text-center">{title}</h1>
            </Col>
      </Row>
     );
});
 
export default Header;