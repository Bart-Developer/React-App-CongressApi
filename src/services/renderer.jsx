import HouseAtd from "../components/HouseAtd";
import HouseCg13 from "../components/HouseCg13";
import Info from "../components/Info";
import SenateAtd from "../components/SenateAtd";
import SenateCg13 from "../components/SenateCg13";

export const renderComponent = ({ comp , table }) => {

    switch (comp) {
        case 'info':
            return <Info />;

        case 'HouseCg13':
            return <HouseCg13 typeFetch={table} />;

        case 'SenateCg13':
            return <SenateCg13 typeFetch={table} />;
        
        case 'SenateAtd':
            return <SenateAtd typeFetch={table}/>;

        case 'HouseAtd':
            return <HouseAtd typeFetch={table} />;

        default: return <Info />;
    }

}