import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React from 'react';

const FaqS = () => {
      return (
            <Box sx={{mt:2}}>
                  <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                              <Typography>
                                    How to live a healthy lifestyle?
                              </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                              <Typography>
                                    How to balanced diet?
                              </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                              <Typography>
                                    Why you have to conscious about taking sugar?
                              </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                              <Typography>
                                    Which food you have ate during Diabatese?
                              </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                              <Typography>
                                    What are the major ways to make your kideny purify?
                              </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                        
            </Box>
           
      );
};

export default FaqS;