import React, { useState, useEffect } from 'react';
import styles from './styles';
import TutorCard from '../../components/tutorCard/tutorCard';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import TagSelect from 'react-select'
import axios from 'axios';

// Material UI
import {Grid, Select, MenuItem} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';


const Tutors = () => {
    const classes = styles();
    const [isLoading, setIsLoading] = useState(true);
    const [tutors, setTutors] = useState([]);
    const [tagOptions, setTagOptions] = useState([]);
    const [filters, setFilters] = useState({
        tags: [],
        search: '',
        sort: 'most-voted'
    })

   

    const onFilterChange = (e) => {
        setFilters({
            ...filters,
             [e.target.name]: e.target.value
        })
    }

    const onSortChange = (e) => {
        setFilters({
            ...filters,
            sort: e.target.value
        })
    }

    const onTagsChange = (e) => {
        let tags = [...e.map(item => item.value)];
        setFilters({
            ...filters,
            tags
        });
    }

    const sortTutors = (a, b)=>{
        if (filters.sort === 'most-voted') {
            return a.average > b.average ? -1 : 1;
        } else if (filters.sort === 'least-voted') {
            return a.average < b.average ? -1 : 1;
        }else if(filters.sort === 'price-lth'){
            return a.hourly_rate < b.hourly_rate ? -1 : 1;
        }else if(filters.sort === 'price-htl'){
            return a.hourly_rate > b.hourly_rate ? -1 : 1;
        }
    }
    
    const resetFilters = () => {
        setFilters({
            tags: [],
            search: '',
            sort: 'most-voted',
            isAnswered: null,
        })
    }

    const fetchTags= async () => {
        await axios.get('/tags').then(res=>{
            setTagOptions(res.data);
            console.log(res.data);
        })
    }

    const fetchTutors = async () => {
        axios.get('/tutorDetails')
        .then(res => {
            console.log(res.data)
            setTutors(res.data);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchTutors()
        fetchTags()
    }, []);


    return (
        isLoading ? <div>Loading...</div> : 
        <Grid container spacing={3} direction="row-reverse">
            
            {/* Sort */}
            <Grid item xs={12}>
                <Select
                    value={filters.sort}
                    onChange={onSortChange}
                    style={{backgroundColor: "#fff"}}
                    >
                    <MenuItem key={1} value={"most-voted"}>Most voted</MenuItem>
                    <MenuItem key={1} value={"least-voted"}>Least voted</MenuItem>
                    <MenuItem key={1} value={"price-lth"}>Price: low to high</MenuItem>
                    <MenuItem key={1} value={"price-htl"}>Price: high to low</MenuItem>
                </Select>
            </Grid>

            {/* Filters */}
            <Grid item xs={12} md={3} className={classes.filters}>
                <div className={classes.filtersContainer}>
                    <div className={classes.title}>
                        <FilterListIcon/>
                        <h4>Filters</h4>
                    </div>
                    <div className={classes.filter}>
                        <Input placeholder="Search name, title, description..." name="search" value={filters.search} onChange={onFilterChange}/>
                        <TagSelect className={classes.tagsFilter} options={tagOptions} isMulti onChange={onTagsChange} value={filters.tags[0]?.value}/>
                    </div>
                    <div className={classes.buttons}>
                        <Button outlined rounded onClick={resetFilters}>Clear</Button>
                    </div>
                </div>
            </Grid>

            {/* Tutors List */}
            <Grid item xs={12} md={9} className={classes.container}>
                <div className={classes.container}>
                    {tutors
                    .filter(tutor => (
                        tutor.user.first_name.toLowerCase().includes(filters.search.toLowerCase()) ||
                        tutor.user.last_name.toLowerCase().includes(filters.search.toLowerCase()) ||
                        tutor.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                        tutor.description.toLowerCase().includes(filters.search.toLowerCase())
                    ))
                    .filter(question=>filters.tags.length > 0 ? question.tags.some(tag=>filters.tags.includes(tag)):true)
                    .sort((a,b)=>sortTutors(a,b))
                    .map(tutor => {
                        return <TutorCard key={tutor.id} tutor={tutor} showProfiles={false} fetchTutors={fetchTutors}/>
                    })}
                </div>
            </Grid>
        </Grid>
    )
}

export default Tutors;