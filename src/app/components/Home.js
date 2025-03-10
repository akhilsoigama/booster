'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import { Favorite, Share, MoreVert } from '@mui/icons-material';

const HomePage = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            username: 'john_doe',
            avatar: '/avatars/john.jpg',
            content: 'Just had a great day at the park! 🌳',
            timestamp: '2h ago',
        },
        {
            id: 2,
            username: 'jane_smith',
            avatar: '/avatars/jane.jpg',
            content: 'Excited to start my new project! 💻',
            timestamp: '4h ago',
        },
    ]);

    return (
        <div className="min-h-screen p-6 pt-20 w-full flex justify-center">
            <div className="space-y-6">
                {posts.map((post) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='w-full sm:w-[400]'
                    >
                        <Card>
                            <CardHeader
                                avatar={<Avatar src={post.avatar} alt={post.username} />}
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVert />
                                    </IconButton>
                                }
                                title={post.username}
                                subheader={post.timestamp}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {post.content}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <Favorite />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <Share />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;