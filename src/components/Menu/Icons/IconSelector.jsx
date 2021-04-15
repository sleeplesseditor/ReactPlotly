import React from 'react';
import { ReactComponent as ArrowIcon } from './arrow.svg';
import { ReactComponent as BasicIcon } from './basic.svg';
import { ReactComponent as CubeIcon } from './cube.svg';
import { ReactComponent as DynamicIcon } from './dynamic.svg';
import { ReactComponent as GlobalisationIcon } from './globalisation.svg';
import { ReactComponent as GlobeIcon } from './globeIcon.svg';
import { ReactComponent as LineIcon } from './lineGraph.svg';
import { ReactComponent as MapIcon } from './mapIcon.svg';
import { ReactComponent as MountainIcon } from './mountains.svg';
import { ReactComponent as PieIcon } from './pieIcon.svg';
import { ReactComponent as StockIcon } from './stock.svg';
import { ReactComponent as SwitchIcon } from './switch.svg';

const getIcon = (icon) => {
    const iconSelection = {
        arrowIcon: () => <ArrowIcon/>,
        basicIcon: () => <BasicIcon/>,
        cubeIcon: () => <CubeIcon/>,
        dynamic: () => <DynamicIcon/>,
        globalisation: () => <GlobalisationIcon/>,
        globeIcon: () => <GlobeIcon/>,
        lineIcon: () => <LineIcon/>,
        mapIcon: () => <MapIcon/>,
        mountainIcon: () => <MountainIcon/>,
        pieIcon: () => <PieIcon/>,
        stock: () => <StockIcon/>,
        switchIcon: () => <SwitchIcon/>,
        default: () => null
    }

    return (iconSelection[icon] || iconSelection.default)()
}

export const IconSelector = (icon) => {
    const iconClass = getIcon(icon);
    return (
      <>
        {iconClass}
      </>
    );
};