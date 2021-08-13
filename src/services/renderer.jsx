import HouseCg13 from "../components/HouseCg13";
import Info from "../components/Info";
import SenateCg13 from "../components/SenateCg13";

export const renderComponent = (componente) => {

    console.log(componente)

    if(componente === 'info'){
        return <Info />
    }else if(componente === 'HouseCg13'){
        return <HouseCg13 />
    }else if(componente === 'SenateCg13'){
        return <SenateCg13 />
    }
}