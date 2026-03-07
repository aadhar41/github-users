import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();


// Provider, Consumer

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [githubRepos, setGithubRepos] = useState(mockRepos);
    const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
    // request loading
    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(true);
    // check rate
    const [rate, setRate] = useState({});
    // error
    const [error, setError] = useState(false);
    const getUser = async (user) => {
        setLoading(true);
        const response = await axios.get(`${rootUrl}/users/${user}`).then((response) => {
            setGithubUser(response.data);
            setLoading(false);
        }).catch((error) => {
            setError(true);
            setLoading(false);
        });
    };
    const getRequests = async () => {
        setLoading(true);
        const response = await axios.get(`${rootUrl}/rate_limit`).then((response) => {
            setRequests(response.data.rate.remaining);
            setLoading(false);
        }).catch((error) => {
            setError(true);
            setLoading(false);
        });
    };
    const getRepos = async (user) => {
        setLoading(true);
        const response = await axios.get(`${rootUrl}/users/${user}/repos?per_page=100`).then((response) => {
            setGithubRepos(response.data);
            setLoading(false);
        }).catch((error) => {
            setError(true);
            setLoading(false);
        });
    };
    const getFollowers = async (user) => {
        setLoading(true);
        const response = await axios.get(`${rootUrl}/users/${user}/followers`).then((response) => {
            setGithubFollowers(response.data);
            setLoading(false);
        }).catch((error) => {
            toggleError(true, 'Sorry, you have exceeded your hourly rate limit.');
            setLoading(false);
        });
    };
    // check rate
    const checkRequests = () => {
        axios.get(`${rootUrl}/rate_limit`).then(({ data }) => {
            setRequests(data.rate.remaining);
            if (data.rate.remaining === 0) {
                toggleError(true, 'Sorry, you have exceeded your hourly rate limit.');
            }
        }).catch((error) => {
            toggleError(true, 'Sorry, you have exceeded your hourly rate limit.');
        });
    };
    // toggle error
    const toggleError = (show = false, msg = '') => {
        setError({ show, msg });
    };
    useEffect(() => {
        getUser('PovilasKorop');
        getRepos('PovilasKorop');
        getFollowers('PovilasKorop');
        checkRequests();
    }, []);
    return (
        <GithubContext.Provider value={{ githubUser, githubRepos, githubFollowers, requests, loading, error, getUser, getRepos, getFollowers, getRequests, checkRequests, toggleError, rate }}>
            {children}
        </GithubContext.Provider>
    );
};

export { GithubProvider, GithubContext };

