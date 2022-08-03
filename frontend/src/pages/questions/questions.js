import React, { useState, useEffect } from 'react';
import QuestionTile from '../../components/questionTile/questionTile';
import axios from 'axios';
import styles from './styles';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import AddQuestion from '../../components/addQuestion/addQuestion';
import TagSelect from 'react-select'

// Material UI
import {Grid, Select, MenuItem} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';

const Questions = () => {
    const classes = styles();
    const [questions, setQuestions] = useState([]);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [tagOptions, setTagOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [addPostOpen, setAddPostOpen] = useState(false)
    const [filters, setFilters] = useState({
        tags: [],
        search: '',
        sort: 'newest',
        isAnswered: null,
        sort: 'latest',
    })

    const onFilterChange = (e) => {
        console.log(e.target.name, typeof e.target.value);
        setFilters({
            ...filters,
             [e.target.name]: e.target.name === 'isAnswered'? parseInt(e.target.value): e.target.value
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

    const resetFilters = () => {
        setFilters({
            tags: [],
            search: '',
            sort: 'latest',
            isAnswered: null,
        })
    }

    const handleOpenAddPost = ()=>{
        setAddPostOpen(true);
    }

    const fetchData = async () => {
        try {
            const { data } = await axios.get('/posts/questions');
            setQuestions(data);
            setFilteredQuestions(data);
            setLoading(false);
            console.log(data);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    const fetchTags= async () => {
        await axios.get('/tags').then(res=>{
            setTagOptions(res.data);
            console.log(res.data);
        })
    }


    useEffect(() => {
        fetchTags();
        fetchData();
    }, []);

    useEffect(()=>{
        setFilteredQuestions (
            questions.filter(question=>question.title.toLowerCase().includes(filters.search.toLowerCase()))
            .filter(question=>filters.tags.length > 0 ? question.tags.some(tag=>filters.tags.includes(tag)):true)
            .filter(question=>(filters.isAnswered === null ? true : question.answers.length > 0 === !!filters.isAnswered))
            .sort((a,b)=>{
                if (filters.sort === 'latest') {
                    return a.createdAt > b.createdAt ? -1 : 1;
                } else if (filters.sort === 'most-voted') {
                    return a.up_votes.length > b.up_votes.length ? -1 : 1;
                } else if (filters.sort === 'least-voted') {
                    return a.down_votes?.length > b.down_votes?.length ? -1 : 1;
                }
            })
        )
    },[filters])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            {/* Sort and Add Question Button */}
            <Grid container spacing={3} p={1} className={classes.sort}>
                {/* Sort */}
                <Grid item xs={12} md={9}>
                <Select
                    value={filters.sort}
                    onChange={onSortChange}
                    style={{backgroundColor: '#fff'}}
                    >
                        <MenuItem key={0} value={"latest"}>Latest</MenuItem>
                        <MenuItem key={1} value={"most-voted"}>Most voted</MenuItem>
                        <MenuItem key={1} value={"least-voted"}>Least voted</MenuItem>
                    </Select>
                </Grid>

                {/* Add Question Button */}
                <Grid item xs={12} md={3}>
                    <Button leftIcon={<AddIcon/>} onClick={handleOpenAddPost} fullWidth rounded>Add Question</Button>
                </Grid>
            </Grid>

            {/* Filters and  Questions List*/}
            <Grid container direction='row-reverse' spacing={3} p={1}>

                {/* Filters */}
                <Grid item xs={12} md={3}>
                            <div className={classes.filtersContainer}>
                                <div className={classes.title}>
                                    <FilterListIcon/>
                                    <h4>Filters</h4>
                                </div>
                                <div className={classes.filter}>
                                    <Input placeholder="Search questions..." name="search" value={filters.search} onChange={onFilterChange}/>
                                    {/* <Input placeholder="Tags" name="tags" value={filters.tags} onChange={onFilterChange}/> */}
                                    <TagSelect className={classes.tagsFilter} options={tagOptions} isMulti onChange={onTagsChange} value={filters.tags[0]?.value}/>
                                    <label className={classes.option}>
                                        <input type='radio' className={classes.radio} name="isAnswered" value={1} checked={filters.isAnswered === 1} onChange={onFilterChange}/>
                                        Answered
                                    </label>
                                    <label className={classes.option}>
                                        <input type='radio' className={classes.radio} name="isAnswered" value={0} checked={filters.isAnswered == 0} onChange={onFilterChange}/>
                                        Not Answered
                                    </label>
                                </div>
                                <div className={classes.buttons}>
                                    <Button outlined rounded onClick={resetFilters}>Clear</Button>
                                </div>
                            </div>
                </Grid>

                {/* Questions List */}
                <Grid item xs={12} md={9}>
                    <Grid container className={classes.questions}>
                        {filteredQuestions.length > 0 ?
                         filteredQuestions
                        .map(question => (
                            <Grid item xs={12} key={question._id}>
                                <QuestionTile key={question._id} {...question} id={question._id} />
                            </Grid>
                        )):
                        <div className={classes.noQuestions}> No questions found </div>}
                    </Grid>
                </Grid>
            </Grid>
            <AddQuestion isOpen={addPostOpen} setIsOpen={setAddPostOpen} fetchData={fetchData}/>
        </div>
    );
}

export default Questions;