import React from 'react';
import {Grid,Box,Typography} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

//mudar endereço do LinkedIn
function Footer() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className="box1">
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{color: "white"}}>
                            Siga-me nas redes sociais
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/Andherline" target="_blank">
                            <GitHubIcon className="redes"/>
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                            <LinkedInIcon className="redes"/>
                        </a>
                    </Box>
                </Box>
                <Box className="box2">
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className="textos">© 2021 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://brasil.generation.org">
                            <Typography variant="subtitle2" gutterBottom className="textos" align="center">brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Footer
