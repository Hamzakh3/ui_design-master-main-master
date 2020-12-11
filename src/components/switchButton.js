import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function SwitchButton() {
    return (
        <FormControl component="fieldset" style={{display:'flex', justifyContent:'center', alignItems:'flex-start'}}>
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="Completed"
                    control={<Switch color="#414141" />}
                    label="Completed"
                    labelPlacement="Completed"
                />
                <FormControlLabel
                    value="Audited"
                    control={<Switch color="#414141" />}
                    label="Audited"
                    labelPlacement="Audited"
                />
                <FormControlLabel
                    value="Suspicious"
                    control={<Switch color="#414141" />}
                    label="Suspicious"
                    labelPlacement="Suspicious"
                />

            </FormGroup>
        </FormControl>
    );
}
