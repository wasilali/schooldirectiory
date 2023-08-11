import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Videos from './Videos';
import Loading from "../Headers/Loading"
import { useDispatch, useSelector } from 'react-redux';
import { getAllReport } from '../../actions/reportAction';

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
  const dispatch=useDispatch()
  const {error,loading,allLinks}=useSelector(st=>st.report)

  const [class1,setClass1]=React.useState(allLinks&&allLinks.filter((ele=>ele.classes==1)))
  const [class2,setClass2]=React.useState(allLinks&&allLinks.filter((ele=>ele.classes==2)))
  const [class3,setClass3]=React.useState(allLinks&&allLinks.filter((ele=>ele.classes==3)))
  const [class4,setClass4]=React.useState(allLinks&&allLinks.filter((ele=>ele.classes==4)))
  const [class5,setClass5]=React.useState(allLinks&&allLinks.filter((ele=>ele.classes==5)))
  const [class6,setClass6]=React.useState(allLinks&&allLinks.filter((ele=>ele.classes==6)))
  const [class7,setClass7]=React.useState(allLinks&&allLinks.filter((ele=>ele.classes==7)))
  const [class8,setClass8]=React.useState(allLinks&&allLinks.filter((ele=>ele.classes==8)))
  const [class9,setClass9]=React.useState(allLinks&&allLinks.filter((ele=>ele.classes==9)))
  const [class10,setClass10]=React.useState(allLinks&&allLinks.filter((ele=>ele.classes==10)))


  React.useEffect(() => {

    dispatch(getAllReport())


    
      }, [dispatch]);


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    {
      loading?<Loading/>:<>

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
        <Videos allLinks={class1&&class1} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Videos allLinks={class2&&class2} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Videos allLinks={class3&&class3} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Videos allLinks={class4&&class4} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Videos allLinks={class5&&class5} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Videos allLinks={class6&&class6} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Videos allLinks={class7&&class7} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Videos allLinks={class8&&class8} />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Videos allLinks={class9&&class9} />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <Videos allLinks={class10&&class10} />
      </TabPanel>
    </Box>

    </>
    }
    </>

  );
}