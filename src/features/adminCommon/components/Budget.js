import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import MoneyIcon from "@material-ui/icons/Money";
import { red } from "@material-ui/core/colors";

const Budget = (props) => (
  <Card sx={{ height: "100%" }} {...props}>
    <CardContent>
      <div>
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              방문자수
            </Typography>
            <Typography color="textPrimary" variant="h4">
              389
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: red[600],
                height: 56,
                width: 56,
              }}
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </div>
    </CardContent>{" "}
  </Card>
);

export default Budget;
