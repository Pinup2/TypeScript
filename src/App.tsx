import './App.css';
import LoginPage from './components/LoginPage';
import ProfilePage from "./components/ProfilePage";
import React, { useState, useEffect } from 'react';

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

    if (isLoggedIn) {  // If the user is logged in, show the profile page
        if (user !== null) {
            return <ProfilePage name={user.name} email={user.email} bio={user.bio} avatar_url={user.avatar_url} followers = {user.followers} public_gists={user.public_gists} ></ProfilePage>


        }
        return <div>Loading...</div>;
    } else {  // If the user is not logged in, show the login page
        return <LoginPage />;
    }
}

export default App;
