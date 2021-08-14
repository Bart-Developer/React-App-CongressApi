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
            return <HouseCg13 house={table} />;

        case 'SenateCg13':
            return <SenateCg13 />;
        
        case 'SenateAtd':
            return <SenateAtd />;

        case 'HouseAtd':
            return <HouseAtd />;

        default: return <Info />;
    }

}