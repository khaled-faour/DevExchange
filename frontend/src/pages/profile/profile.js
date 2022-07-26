import React, { useState, useEffect } from 'react';
import styles from './styles';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import TabPanel from '../../components/tabPanel/tabPanel';

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

    useEffect(() => {
        const fetchUser = async () => {
            axios.get(`/users/${auth.user._id}`).then(res => {
                console.log(res.data)
                setUser(res.data);
                setIsLoading(false);
            }
            ).catch(err => {
                console.log(err);
            });
        }
        fetchUser();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <h2>{user.first_name} {user.last_name}</h2>
                <div style={{ width: '100%' }}>
                    <div style={{ borderBottom: '1px solid #cdcdcf' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Personal Info" {...a11yProps(0)} />
                            <Tab label="Calendar" {...a11yProps(1)} />
                            <Tab label="Transactions" {...a11yProps(2)} />
                        </Tabs>
                    </div>
                    <TabPanel value={value} index={0}>
                        Personal Info
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Calendar
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Transactions
                    </TabPanel>
                </div>
            </div>
        </div>
    )
}

export default Profile;