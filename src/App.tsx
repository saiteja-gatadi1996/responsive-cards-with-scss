import React, { useState } from 'react';
import './styles/Global.scss';
import Layout from './components/Layout';
import ShimmerUI from './components/ShimmerUI';
import Typography from './components/Typography';
import YouTubeCard from './components/YouTubeCard';
import videoData from './utils/videoData';
const App: React.FC = () => {
  const [videos] = useState(videoData);

  return (
    <Layout>
      <Typography variant='h1'>React App with SCSS</Typography>
      <Typography variant='p'>
        This is a simple React application demonstrating various concepts.
      </Typography>

      <ShimmerUI />

      <div className='card-container'>
        {videos.map((video, index) => (
          <YouTubeCard
            key={index}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>
    </Layout>
  );
};

export default App;
