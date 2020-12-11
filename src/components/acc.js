import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckBoxes from './checkboxes';
import Button from '@material-ui/core/Button';
// import filter_icon from './filter_icon.png';
import SwitchButton from './switchButton';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Acc() {
  const classes = useStyles();

  return (
    <div className={classes.root} className="acc_spacing">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} dropdown>
            {/* <img src={filter_icon} style={{ width: 20, top: "5px" }} /> */}
            Filter
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <form style={{ marginLeft: "-15px" }}>
              <div className="dropdown">
                <CheckBoxes />
                <SwitchButton />
                <div _ngcontent-amb-c165 className="button-section">
                  <Button variant="outlined" size="small" color="#41418A" type="submit" className={classes.margin} >
                    Apply
                  </Button>
                  <Button href="#text-buttons" color="#41418A">
                    Reset
                  </Button>
                </div>
              </div>
            </form>
          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}
