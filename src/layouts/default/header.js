import * as React from 'react';
import ResponsiveAppBar from "./ResponsiveAppBar";

export default function Header({menu}) {

    return (
        <>
            <ResponsiveAppBar menu={menu}/>
        </>
    );
};