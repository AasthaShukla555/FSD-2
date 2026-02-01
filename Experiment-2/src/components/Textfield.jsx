import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

export default function Textfield() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <TextField
        label="Enter Your Name"
        variant="outlined"
        
        placeholder="Name"
         slotProps={{
          input: {
            sx: {
              bgcolor: "white",
            },
          },
        }}
      />

      <TextField
        label="Age"
        variant="outlined"
        
        placeholder="Age"
        slotProps={{
          input: {
            sx: {
              bgcolor: "white",
            },
          },
        }}
      />

      <TextField
        
        type="date"
       
         slotProps={{
          input: {
            sx: {
              bgcolor: "white",
            },
          },
        }}
      />

      <TextField
        select
        label="Your Role"
        variant="outlined"
        defaultValue=""
      >
        <MenuItem value="">Select an option</MenuItem>
        <MenuItem value="student">Student</MenuItem>
        <MenuItem value="developer">Developer</MenuItem>
        <MenuItem value="designer">Designer</MenuItem>
      </TextField>

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
