import React, { useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import "./Home.css";
import { Box } from "@mui/material";
import Logo from "../../assets/img/logos/Amazon-Web-Services-AWS-Logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  return (
    <>
      <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ paddingBottom:"40px" }}
            >
                <Grid alignItems="center" item xs={6}>
                    <Box padding="60px 0 0 160px">
                        <Typography
                            variant="h6"
                            gutterBottom
                            color="textPrimary"
                            component="p"
                            align="center"
                        >
                            Quem somos e o que buscamos
                        </Typography>
                        <Typography
                            variant="h6"
                            gutterBottom
                            color="textPrimary"
                            component="p"
                            align="justify"
                            style={{ marginTop: "20px"}}
                        >
                            No atual cenário digital em rápida evolução, muitos profissionais

estão considerando uma transição de carreira para a nuvem.

Essa transição oferece inúmeras oportunidades de crescimento e avanço.

Adquirindo o conhecimento necessário, obtendo certificações

relevantes, estabelecendo network e mantendo-se atualizado

com as tendências do setor, podemos navegar com

sucesso nessa transição e prosperar no campo da computação em nuvem. 
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} style={{ padding: "30px 0 30px 0" }}>
                   <Box display="flex" justifyContent="center" width="100%"><img width="500px" src={Logo} alt="Logo do home" /></Box> 
                </Grid>
                <Grid xs={12}></Grid>
            </Grid>
    </>
  );
}

export default Home;
