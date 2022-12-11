import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const DashLayout = () => {
    return (
       /*//fragment */
       /*<Outlet /> - wrapped in div so we can aplly css styles*/
       <> 
            
            <DashHeader /> 
            <div className="dash-container">
                <Outlet /> 
            </div>
            <DashFooter />
        </>
    )
    /*protected Layout*/
}
export default DashLayout