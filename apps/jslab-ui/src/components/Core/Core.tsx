import React from 'react';
import Divider from '@mui/material/Divider';
import { Header } from '@src/components/Header/Header';
import Grid from '@mui/material/Grid';
import { coreTopics } from '@src/appData';
import { CoreCard } from '@src/components/CoreCard/CoreCard';

export const Core: React.FC = () => {
  return (
    <div>
      <Header />
      <Divider />
      <Grid container spacing={2} className="mt-6">
        {coreTopics.map(({ id, git, description, title }) => {
          return (
            <Grid size={3} id={id}>
              <CoreCard link={git.link} description={description} title={title} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
