import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import framesxTheme from "./theme";
import IconButton from "@mui/joy/IconButton";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import {
  Divider,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Typography,
} from "@mui/joy";
import Project from "./components/project/project";
import { PROJECTS, JOBS } from "./data/projects";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Resume from "./assets/files/resume.pdf";

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme('dark');
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 999,
        top: "0rem",
        width: "100%",
        backgroundColor: "background.surface"
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"} padding={1}>
        <Typography fontSize="xl4" fontWeight="xl" width={"70%"}>
          Peter Sadek
        </Typography>
        <IconButton
          id="toggle-mode"
          size="lg"
          variant="soft"
          color="neutral"
          width="100%"
          onClick={() => {
            if (mode === "light") {
              setMode("dark");
            } else {
              setMode("light");
            }
          }}
          sx={{
            borderRadius: "30%",
            boxShadow: "sm",
          }}
        >
          {mode === "light" ? (
            <DarkModeRoundedIcon />
          ) : (
            <LightModeRoundedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <>
      <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
        <CssBaseline />
        <ColorSchemeToggle />
        <Box marginTop='100px'>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'} padding={1} gap={2}>
            <Typography minWidth={'100px'} fontSize="lg" fontWeight="lg">
              Personal Links:
            </Typography>
            <IconButton
              size="md"
              variant="soft"
              color="neutral"
              width="100%"
              sx={{
                borderRadius: "30%",
                boxShadow: "sm",
              }}
            >
              <a href={'https://github.com/peternabil/'} target={"_blank"} style={{textDecoration: 'none'}}>
                <GitHubIcon color={'primary'} />
              </a>
            </IconButton>
            <IconButton
              size="md"
              variant="soft"
              color="neutral"
              width="100%"
              sx={{
                borderRadius: "30%",
                boxShadow: "sm",
              }}
            >
              <a href={'https://www.linkedin.com/in/peternabil/'} target={"_blank"} style={{textDecoration: 'none'}}>
                <LinkedInIcon color={'primary'} />
              </a>
            </IconButton>
            <a href={Resume} download={'peter-sadek-resume.pdf'} target={"_blank"} style={{textDecoration: 'none'}}>
            <IconButton
              size="md"
              variant="soft"
              color="neutral"
              width="100%"
              sx={{
                borderRadius: "10px",
                boxShadow: "sm",
              }}
            >
                Download Resume
                <FileDownloadIcon color={'primary'} />
            </IconButton>
            </a>
          </Box>
          <Tabs
            aria-label="Vertical tabs"
            orientation="horizontal"
            sx={{ minWidth: 300, height: '100%' }}
            marginTop={"100px"}
          >
            <TabList tabFlex={1}>
              <Tab>
                <Typography fontSize="lg" fontWeight="lg">
                  Past Projects
                </Typography>
              </Tab>
              <Tab>
                <Typography fontSize="lg" fontWeight="lg">
                  Professional Experience
                </Typography>
              </Tab>
            </TabList>
            <TabPanel value={0}>
              <Box>
                <Box>
                  {PROJECTS.map((project) => {
                    return (
                      <Box marginBottom={1}>
                        <Project
                          type={"Project"}
                          technologies={project.technologies}
                          title={project.title}
                          description={project.description}
                          image={project.image}
                          link1={project.link1}
                          link2={project.link2}
                          fitImg={'fill'}
                        />
                        <Divider />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={1}>
              <Box>
                <Box>
                  {JOBS.map((job) => {
                    return (
                      <Box marginBottom={1}>
                        <Project
                          titleLink={job.titleLink}
                          type={job.type}
                          technologies={job.technologies}
                          title={job.title}
                          description={job.description}
                          image={job.image}
                          fitImg={'contain'}
                        />
                        <Divider />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </TabPanel>
          </Tabs>
        </Box>
      </CssVarsProvider>
    </>
  );
}

export default App;
