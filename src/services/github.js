import axios from "axios";

const BASE_URL = 'https://api.github.com'

export const getUser = (username) =>
    axios.get(`${BASE_URL}/users/${username}`)

export const getRepos = (username) =>
    axios.get(`${BASE_URL}/users/${username}/repos?per_page=100&sort=stars`)

export const getCommits = (owner, repo) =>
    axios.get(`${BASE_URL}/repos/${owner}/${repo}/commits?per_page=100`)