import React, { useState, useEffect } from 'react';
import styles from './styles';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import TabPanel from '../../components/tabPanel/tabPanel';
import PersonalInfo from '../../components/personalInfo/personalInfo';
import Availability from '../../components/availability/availability';

// Material-UI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

const Profile = (props) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [value, setValue] = React.useState(0);

    const auth = useAuth();

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const fetchUser = async () => {
        axios.get(`/users/me`).then(res => {
            console.log(res.data)
            setUser(res.data);
            setIsLoading(false);
        }
        ).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        
        fetchUser();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div style={{ width: '100%' }}>
            <div style={{ borderBottom: '1px solid #cdcdcf' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Personal Info" {...a11yProps(0)} />
                    <Tab label="Calendar" {...a11yProps(1)} />
                    <Tab label="Transactions" {...a11yProps(2)} />
                </Tabs>
            </div>
            <TabPanel value={value} index={0}>
                <PersonalInfo user={user}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Calendar
            </TabPanel>
            <TabPanel value={value} index={2}>
                Transactions
            </TabPanel>
        </div>
    )
}

export default Profile;