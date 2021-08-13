import HouseCg13 from "../components/HouseCg13";
import Info from "../components/Info";

export const renderComponent = (componente) => {

    console.log(componente)

    if(componente === 'info'){
        return <Info />
    }else if(componente === 'HouseCg13'){
        return <HouseCg13 />
    }
}