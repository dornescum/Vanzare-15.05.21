import {Button} from "react-bootstrap";

import './NotFound.css'

const NotFound =()=>{
    return <div className='error'>
        <div className='error-info'>
            <h1>Error</h1>
            <Button className='btn-error' href='./'>go home</Button>
        </div>
    </div>
}
export default NotFound
