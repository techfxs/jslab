import React from 'react';
import { GitHubLink } from '@src/components/GitHubLink/GitHubLink';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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

interface CoreCardProps {
  link: string;
  description: string;
  title?: string;
}

export const CoreCard: React.FC<CoreCardProps> = ({ link, description, title }) => {
  return (
    <Item>
      <div className="flex flex-col p-3">
        <GitHubLink link={link} title={title} />
        <Divider />
        <Divider />
        <p className="text-left mt-3 mb-4">{description}</p>
      </div>
    </Item>
  );
};
