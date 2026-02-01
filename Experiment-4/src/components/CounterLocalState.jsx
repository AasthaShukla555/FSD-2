import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function LocalStateCounter({ cno }) {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          p: 2,               
          mt: 2,              
          textAlign: "center",
          borderRadius: 2,    
          background: "linear-gradient(135deg, #4f8fc0, #9cc9e8)",
        }}
      >
        <Typography variant="subtitle1" fontWeight={600}>
          {cno} : Local State Count
        </Typography>

        <Typography
          variant="h5"        
          sx={{ my: 1, color: "#1565c0", fontWeight: "bold" }}
        >
          {count}
        </Typography>

        <Stack direction="row" spacing={1.5} justifyContent="center">
          <Button
            size="small"     
            variant="contained"
          >
            Increase
          </Button>

          <Button
            size="small"
            variant="outlined"
            color="error"
          >
            Decrease
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
