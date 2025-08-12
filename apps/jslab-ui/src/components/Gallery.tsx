import React from 'react';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { Header } from '@src/components/Header/Header';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { GitHubLink } from '@src/components/GitHubLink/GitHubLink';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: '0px',
  boxShadow: 'none',
  height: '200px',
  border: '1px solid #ccc',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export const Gallery: React.FC = () => {
  return (
    <div>
      <Header />
      <Divider />
      <Grid container spacing={2} className="mt-6">
        <Grid size={3}>
          <Item>
            <div className="flex flex-col p-3">
              <GitHubLink link="" />
              <Divider />
              <p className="text-left mt-3 mb-4">
                CORS (Cross-Origin Resource Sharing) is a browser security feature that allows web
                servers to control which external domains are permitted to access their resources.
              </p>
            </div>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item>
            <div className="flex flex-col p-3">
              <GitHubLink link="" />
              <Divider />
              <p className="text-left mt-3 mb-4">
                CORS (Cross-Origin Resource Sharing) is a browser security feature that allows web
                servers to control which external domains are permitted to access their resources.
              </p>
            </div>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item>
            <div className="flex flex-col p-3">
              <GitHubLink link="" />
              <Divider />
              <p className="text-left mt-3 mb-4">
                CORS (Cross-Origin Resource Sharing) is a browser security feature that allows web
                servers to control which external domains are permitted to access their resources.
              </p>
            </div>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item>
            <div className="flex flex-col p-3">
              <GitHubLink link="" />
              <Divider />
              <p className="text-left mt-3 mb-4">
                CORS (Cross-Origin Resource Sharing) is a browser security feature that allows web
                servers to control which external domains are permitted to access their resources.
              </p>
            </div>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item>
            <div className="flex flex-col p-3">
              <GitHubLink link="" />
              <Divider />
              <p className="text-left mt-3 mb-4">
                CORS (Cross-Origin Resource Sharing) is a browser security feature that allows web
                servers to control which external domains are permitted to access their resources.
              </p>
            </div>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item>
            <div className="flex flex-col p-3">
              <GitHubLink link="" />
              <Divider />
              <p className="text-left mt-3 mb-4">
                CORS (Cross-Origin Resource Sharing) is a browser security feature that allows web
                servers to control which external domains are permitted to access their resources.
              </p>
            </div>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};
