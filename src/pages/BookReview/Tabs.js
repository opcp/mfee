import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="文學小說"/>
          <Tab label="商業理財"/>
          <Tab label="藝術設計"/>
          <Tab label="人文史地"/>
          <Tab label="社會科學"/>
          <Tab label="自然科普"/>
          <Tab label="心理勵志"/>
          <Tab label="醫療保健"/>
          <Tab label="飲食"/>
          <Tab label="生活風格"/>
          <Tab label="旅遊"/>
          <Tab label="宗教命理"/>
          <Tab label="親子教養"/>
          <Tab label="童書/青少年文學"/>
          <Tab label="輕小說"/>
          <Tab label="漫畫"/>
          <Tab label="語言學習"/>
          <Tab label="考試用書"/>
          <Tab label="電腦資訊"/>
        </Tabs>
      </AppBar>
    </div>
  );
}