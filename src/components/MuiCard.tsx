import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            eum esse expedita numquam in. Sint.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">
            Share
          </Button>
          <Button size="small" variant="outlined">
            Learn more
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
