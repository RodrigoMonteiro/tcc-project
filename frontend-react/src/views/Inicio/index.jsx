import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./styles.css";
import { GlobalContext } from "../../providers/globalProps";
import { fontSize } from "@mui/system";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "1.25rem", color: "#1976d2" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export function Inicio() {
  const { globalProps } = useContext(GlobalContext);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="inicio-container">
      <h2 className="inicio-title">Otimize seu tempo aqui!</h2>
      <div className="inicio-subtitle">
        <h3>Tentamos otimizar seus estudos e maximizar resultados!</h3>
      </div>
      <div className="inicio-body">
        <Accordion
          sx={{
            color: globalProps.isLightTheme ? "#191919" : "#c4c4c4",
            backgroundColor: globalProps.isLightTheme ? "#c4c4c4" : "#191919",
            letterSpacing: "0.05rem",
          }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{
              color: globalProps.isLightTheme ? "#191919" : "#c4c4c4",
              backgroundColor: globalProps.isLightTheme ? "#c4c4c4" : "#191919",
            }}
          >
            <Typography className="accordion-title">
              Qual o objetivo desta aplicação?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography
              className="accordion-content"
              sx={{
                // letterSpacing: "0.08rem",
              }}
            >
              Esta aplicação tem como objetivo auxiliar estudantes
              universitarios em suas atividades acadêmicas, trazendo uma maior
              ....
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            color: globalProps.isLightTheme ? "#191919" : "#c4c4c4",
            backgroundColor: globalProps.isLightTheme ? "#c4c4c4" : "#191919",
          }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            sx={{
              color: globalProps.isLightTheme ? "#191919" : "#c4c4c4",
              backgroundColor: globalProps.isLightTheme ? "#c4c4c4" : "#191919",
            }}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography className="accordion-title">
              Quais funcionalidades a aplicação apresenta?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{
            color: globalProps.isLightTheme ? "#191919" : "#c4c4c4",
            backgroundColor: globalProps.isLightTheme ? "#c4c4c4" : "#191919",
          }}
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            sx={{
              color: globalProps.isLightTheme ? "#191919" : "#c4c4c4",
              backgroundColor: globalProps.isLightTheme ? "#c4c4c4" : "#191919",
            }}
          >
            <Typography className="accordion-title">
              Quais tecnologias foram utilizadas para o desenvolvimento?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{
            color: globalProps.isLightTheme ? "#191919" : "#c4c4c4",
            backgroundColor: globalProps.isLightTheme ? "#c4c4c4" : "#191919",
          }}
        >
          <AccordionSummary
            aria-controls="panel4d-content"
            id="panel4d-header"
            sx={{
              color: globalProps.isLightTheme ? "#191919" : "#c4c4c4",
              backgroundColor: globalProps.isLightTheme ? "#c4c4c4" : "#191919",
            }}
          >
            <Typography className="accordion-title">
              Quais tecnologias foram utilizadas para o desenvolvimento?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
