import Star from "../components/Star";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


export default function Contact() {
  return (
    <Stack
      spacing={3}
      alignItems="center"
      justifyContent="center"
      sx={{ marginTop: 4 }}
    >
      <Typography variant="h5" fontWeight="bold" >
        Contact Page
      </Typography>

      
      <Stack direction="row" spacing={1} alignItems="center">
        
        <Typography variant="h6">1800-234-666</Typography>
      </Stack>
       
      <Star />
    </Stack>
  );
}
