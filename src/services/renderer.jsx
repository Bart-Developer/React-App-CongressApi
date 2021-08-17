import Congress113 from "../components/Congress113";
import Info from "../components/Info";
import Attendance from "../components/Attendance";

export const renderComponent = ( { comp , table } ) => {

    switch (comp) {
        case 'info':
            return <Info />;

        case 'Congress113':
            return <Congress113 typeFetch={ table } />;
 
        case 'Attendance':
            return <Attendance typeFetch={ table }/>;

        default: return <Info />;
    }

}