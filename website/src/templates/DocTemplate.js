import React from 'react';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SimpleShowcase, { Inline } from '../components/atoms/SimpleShowcase';
import CodeSandbox from '../components/atoms/CodeSandbox';
import PageNavigation from '../components/molecules/PageNavigation';
import './documentation.css';

const shortcodes = {
  Inline,
  Link,
  CodeSandbox,
  SimpleShowcase,
  PageNavigation,
};

const DocTemplate = ({ pageContext, children }) => {
  if (!pageContext)
    return <MDXProvider components={shortcodes}>{children}</MDXProvider>;
  const { frontmatter } = pageContext;
  return (
    <Box
      className={'Documentation'}
      maxWidth={`calc(700px + 3rem)`}
      mx={'auto'}
      py={{ xs: '2rem', sm: '3rem' }}
      px={{ xs: 2, sm: '1.5rem' }}
    >
      <Typography variant={'subtitle1'} color={'textSecondary'} style={{ letterSpacing: 1 }}>
        {frontmatter.category}
      </Typography>
      <h1>{frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Box>
  );
};

export default DocTemplate;
