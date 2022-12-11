import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const DashLayout = () => {
    return (
        <> //fragment 
            <DashHeader />
            <div className="dash-container">
                <Outlet /> //wrapped in div so we can aplly css styles
            </div>
            <DashFooter />
        </>
    )
}
export default DashLayout