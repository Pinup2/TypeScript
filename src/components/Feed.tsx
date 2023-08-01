import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";


type NewsArticle = {
    title: string;
    url: string;
    description: string;
};

const Feed: React.FC = () => {
    const [articles, setArticles] = useState<NewsArticle[]>([]);

    useEffect(() => {
        fetch('https://api.newscatcherapi.com/v2/search?q=Tesla', {
            headers: {
                'x-api-key': 'oWk-tMvmiB5m9hsJGOyZAvFKySlsasLRAG3iYj0_QuM'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Received data:', data);
                setArticles(data.articles);
            })
            .catch(error => console.error('Error:', error));
    }, []);


    return (
        <div>
            <Typography variant="h4" component="h2" gutterBottom>
                News Feed
            </Typography>
            {articles.map((article, index) => (
                <Card key={index} style={{ marginBottom: '15px' }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {article.title}
                        </Typography>
                        <Typography variant="body2">
                            {article.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={article.url} target="_blank" rel="noopener noreferrer">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default Feed;
