import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';

interface GithubLinkProps {
  link: string;
  title?: string;
}

export const GitHubLink: React.FC<GithubLinkProps> = ({ link, title }) => {
  return (
    <div className="flex justify-center items-center h-[35px]">
      <Box sx={{ fontSize: '1rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>{title}</Box>
      <Link
        href={link}
        target="_blank"
        rel="noopener"
        underline="hover"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          fontWeight: 'bold',
          color: 'primary.main',
          '&:hover': {
            color: 'primary.dark',
          },
        }}
      >
        <GitHubIcon />
        {/*Source*/}
      </Link>
    </div>
  );
};
