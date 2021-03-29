import React from 'react';

import MainHeader from '../../theme/components/Header';



export default {
    title : "Header",
    component : MainHeader

}


export const Workplaces = () => <MainHeader title="Workplaces" description="Workplaces are the main part of ARLEM Panel" buttonText="Create Workplaces" />
export const Configurables = () => <MainHeader title="Configurables" description="Configurables are the physical objects present within the workplace. These objects are used / required to complete the activity." buttonText="Create Configurable" />
export const Tangibles = () => <MainHeader title="Tangibles" description="Tangibles are the physical objects present within the workplace. These objects are used / required to complete the activity." buttonText="Create Tangibles" />