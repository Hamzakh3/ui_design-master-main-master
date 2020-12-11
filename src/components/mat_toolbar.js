import React from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export default function Mat_toolbar() {
    return (

        <div>
            <div className="app__titlebar__txt" >
                <span style={{ width: "95%", display: "inline-block" }}>
                    Cube.js OS Analytics
                  </span>
                <a className="mat-button-wrapper" tabindex="0" href="#">
                    <span >
                        <InfoOutlinedIcon mattooltip="Cube.js start page" routerlink="/hub/cubejs-order/start" aria-label="Info about this app" mat-button className="info_icon" />
                    </span>
                </a>
            </div>
        </div >

    );
}