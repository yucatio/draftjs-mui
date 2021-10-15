import React, { useState } from "react"
import {EditorState} from "draft-js"
import Box from '@mui/material/Box'
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import { blue, grey } from "@mui/material/colors"
import GitHubIcon from "@mui/icons-material/GitHub"

import DraftjsMUI from "./components/DraftjsMUI"

function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  )

  return (
    <Box>
      <CssBaseline />
      <Box sx={{backgroundColor:blue[50]}}>
        <Container sx={{p:2, minHeight: 400}}>
          <Paper sx={{p:2}}>
            <Typography variant="h4" gutterBottom component="div">
              Draft.js with MUI
            </Typography>
            <DraftjsMUI editorState={editorState} onChange={setEditorState} />
          </Paper>
        </Container>
      </Box>
      <Box sx={{backgroundColor:grey[600], color: "white"}}>
        <Container sx={{p:2}}>
          <Tooltip title="GitHub">
            <IconButton component={Link} href="https://github.com/yucatio/draftjs-mui">
              <GitHubIcon fontSize="large" sx={{color: "white"}} />
            </IconButton>
          </Tooltip>
        </Container>
      </Box>
    </Box>
  )
}

export default App
