import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Abouttext() {
  return (
    <Stack spacing={2} sx={{ width: 400 }}>
     
      <TextField
        label="About Me"
        variant="outlined"
        multiline
        rows={4}
        placeholder="Write something about yourself......"
        className="about-textfield"
      />

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 1 }}
      >
        Submit
      </Button>

      
    </Stack>
  );
}
