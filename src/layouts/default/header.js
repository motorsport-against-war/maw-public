import * as React from 'react';
import ResponsiveAppBar from "./responsiveAppBar";

export default function Header({menu,meta}) {

    return (
        <>
            <ResponsiveAppBar menu={menu}/>
        </>
    );
};