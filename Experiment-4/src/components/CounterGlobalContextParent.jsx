import { useContext } from "react";
import { CounterContext } from "./context/CounterGlobalContextAPI";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function CounterContextParent(props) {
  const { count, setCount } = useContext(CounterContext);

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mt: 2,
          textAlign: "center",
          borderRadius: 2,
          backgroundColor: "#955398",
          color: "white",
        }}
      >
        <Typography variant="subtitle1" fontWeight={600}>
          {props.cno} : Global State (Context API) Count
        </Typography>

        <Typography
          variant="h6"
          sx={{ my: 1, fontWeight: "bold", color: "#ffeb3b" }}
        >
          {count}
        </Typography>

        <Stack direction="row" spacing={1.5} justifyContent="center">
          <Button
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "#d81b60",
              "&:hover": { backgroundColor: "#ad1457" },
            }}
            onClick={() => setCount(count + 1)}
          >
            Increase
          </Button>

          <Button
            size="small"
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                borderColor: "#ffeb3b",
                color: "#ffeb3b",
              },
            }}
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
