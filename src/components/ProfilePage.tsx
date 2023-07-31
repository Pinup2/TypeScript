import React from 'react';
import { makeStyles, Paper, Typography, Grid, Avatar, Button } from '@material-ui/core';
import { Email as EmailIcon, People as PeopleIcon, Folder as FolderIcon, Description as DescriptionIcon } from '@material-ui/icons';

type ProfileProps = {
    name: string;
    email: string;
    bio: string;
    avatar_url: string;
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    avatar: {
        width: 100,
        height: 100,
    },
    info: {
        marginLeft: theme.spacing(2),
    },
    largeIcon: {
        width: 30,
        height: 30,
    },
}));

const Profile: React.FC<ProfileProps> = ({ name, email, bio, avatar_url, followers, following, public_repos, public_gists }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Avatar className={classes.avatar} src={avatar_url} alt={`${name}'s avatar`} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h4">
                                    {name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {bio}
                                </Typography>
                                <Grid container alignItems="center">
                                    <PeopleIcon className={classes.largeIcon} />
                                    <Typography className={classes.info}>{followers} followers · {following} following</Typography>
                                </Grid>
                                <Grid container alignItems="center">
                                    <FolderIcon className={classes.largeIcon} />
                                    <Typography className={classes.info}>{public_repos} public repos</Typography>
                                </Grid>
                                <Grid container alignItems="center">
                                    <DescriptionIcon className={classes.largeIcon} />
                                    <Typography className={classes.info}>{public_gists} public gists</Typography>
                                </Grid>
                                <Grid container alignItems="center">
                                    <EmailIcon className={classes.largeIcon} />
                                    <Typography className={classes.info}>{email}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Follow
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Profile;
