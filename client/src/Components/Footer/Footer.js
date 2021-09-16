import {
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import logo from '../../Images/journey-logo.png'

const useStyles = makeStyles(theme=>({
  container: {
    padding: '40px',
  },
  gridContainer: {
    borderTop: '.5px solid #ccc',
    paddingTop: '64px'
  },
  logoImg: {
    width: '50%'
  },
  nameSection: {
    marginBottom: '40px'
  },
  sectionHeader: {
    marginBottom: '32px',
  },
  sectionName: {
    marginBottom: '8px',
    fontWeight: '700'
  },
  link: {
    display: 'block',
    fontSize: '14px',
    color: '#000',
    marginBottom: '4px'
  }
}))

function Footer() {
  const classes = useStyles();

  return(
    <footer>
      <Container
        className={classes.container}
      >
        <Grid 
          container
          className={classes.gridContainer}
        >
          <Grid 
            item
            xs={12}
            md={3}
          >
            <img 
              src={logo} 
              alt="journey-logo"
              className={classes.logoImg}
            />
          </Grid>

          <Grid
            item
            xs={6}
            md={3}
          >
            <div
              className={classes.nameSection}
            >
              <Typography
                variant="body1"
                className={classes.sectionName}
              >
                Joe Christensen
              </Typography>
              <a
                href="https://github.com/ChristensenJoe"
                variant="body1"
                className={classes.link}
              >
                Github: ChristensenJoe
              </a>
              <a
                href="mailto: joe@gmail.com"
                variant="body1"
                className={classes.link}
              >
                Email: joe@gmail.com
              </a>
            </div>
          </Grid>
          
          <Grid
            item
            xs={12}
            md={3}
          >
            <div
              className={classes.nameSection}
            >
              <Typography
                variant="body1"
                className={classes.sectionName}
              >
                Isaac Segovia
              </Typography>
              <a
                href="https://github.com/IsaacCodes2021"
                variant="body1"
                className={classes.link}
              >
                Github: IsaacCodes2021
              </a>
              <a
                href="mailto: isaac@gmail.com"
                variant="body1"
                className={classes.link}
              >
                Email: isaac@gmail.com
              </a>
            </div>
        </Grid>

        <Grid 
          item
          xs={12}
          md={3}
        >            
          <div
            className={classes.nameSection}
          >
            <Typography
              variant="body1"
              className={classes.sectionName}
            >
              John Kim
            </Typography>
            <a
              href="https://github.com/jyk595"
              variant="body1"
              className={classes.link}
            >
              Github: jyk595
            </a>
            <a
              href="mailto: jyk595@gmail.com"
              variant="body1"
              className={classes.link}
            >
              Email: jyk595@gmail.com
            </a>
          </div>
        </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer;