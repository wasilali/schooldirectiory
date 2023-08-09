import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Videos from './Videos';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

      <h1 className=" text-center text-primary md:text-[2rem] text-[2rem] font-bold py-2">
          {"Resourcess for class 1"}
        </h1>
      <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',backgroundColor:"#f3f4f6" }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',height:'90vh',marginTop:"2rem",width:"10rem" }}
      >
        <Tab label="Class One" {...a11yProps(0)} />
        <Tab label="Class Two" {...a11yProps(1)} />
        <Tab label="Class Three" {...a11yProps(2)} />
        <Tab label="Class Four" {...a11yProps(3)} />
        <Tab label="Class Five" {...a11yProps(4)} />
        <Tab label="Class Six" {...a11yProps(5)} />
        <Tab label="Class Seven" {...a11yProps(6)} />
        <Tab label="Class Eight" {...a11yProps(7)} />
        <Tab label="Class Nine" {...a11yProps(8)} />
        <Tab label="Class Ten" {...a11yProps(9)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Videos/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Class Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Class Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Class Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Class Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Class Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Class Seven
      </TabPanel>
      <TabPanel value={value} index={6}>
        Class Eight
      </TabPanel>
      <TabPanel value={value} index={6}>
        Class Nine
      </TabPanel>
      <TabPanel value={value} index={6}>
        Class Ten
      </TabPanel>
    </Box>

    </>
  );
}