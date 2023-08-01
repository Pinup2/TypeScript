import './App.css';
import LoginPage from './components/LoginPage';
import ProfilePage from "./components/ProfilePage";
import Feed from "./components/Feed";
import About from "./components/About"
import Footer from "./components/Footer"
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';



type GithubUser = {
    name: string;
    email: string;
    bio: string;
    avatar_url: string;
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number;
};

const App: React.FC = () => {
    const [user, setUser] = useState<GithubUser | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        fetch('https://api.github.com/users/moonhighway')
            .then(response => response.json())
            .then(data => {
                const githubUser: GithubUser = {
                    name: data.name,
                    email: data.email,
                    bio: data.bio,
                    avatar_url: data.avatar_url,
                    followers: data.followers,
                    following: data.following,
                    public_repos: data.public_repos,
                    public_gists: data.public_gists
                };
                setUser(githubUser);
                setIsLoggedIn(true);
            })

            .catch(error => {
                console.error('Error:', error);
                setIsLoggedIn(false);
            });
    }, []);

    let content = isLoggedIn && user ? (
        <ProfilePage name={user.name} email={user.email} bio={user.bio} avatar_url={user.avatar_url} followers={user.followers} public_gists={user.public_gists} />
    ) : <LoginPage />;

    return (
        <Router>
            <AppBar position="fixed" color="secondary">
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow: 1}}>
                        My App
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/feed">Feed</Button>
                </Toolbar>
            </AppBar>

            <Routes>
                <Route path="/Feed" element={<Feed />} />
                <Route path="/About" element={<About />} />
                <Route path="/" element={content} />
            </Routes>
            <Footer />
        </Router>
    );
}


export default App;
