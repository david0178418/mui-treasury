import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PeopleCardFooter from '@mui-treasury/components/cardFooter/people';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
}));

const EngagementCard = () => {
  const cardStyles = useStyles();
  const wideCardMediaStyles = useWideCardMediaStyles();
  const fadeShadowStyles = useFadedShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  return (
    <Card className={cx(cardStyles.root, fadeShadowStyles.root)}>
      <CardMedia
        // component={'img'} // add this line to use <img />
        classes={wideCardMediaStyles}
        image={
          'https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg'
        }
      />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={'Nature Around Us'}
          body={
            'We are going to learn different kinds of species in nature that live together to form amazing environment.'
          }
        />
      </CardContent>
      <Box px={3} pb={3}>
        <PeopleCardFooter
          faces={[
            'https://i.pravatar.cc/300?img=1',
            'https://i.pravatar.cc/300?img=2',
            'https://i.pravatar.cc/300?img=3',
            'https://i.pravatar.cc/300?img=4',
          ]}
        />
      </Box>
    </Card>
  );
};

// hide-start
EngagementCard.metadata = {
  title: 'Engagement',
  description: "Show people's engagement",
  path: 'component/card/engagement',
  creators: [require('constants/creators').siriwatknp],
  files: [
    { pkg: 'mui-styles', path: 'shadow/faded/fadedShadow.styles.js' },
    {
      pkg: 'mui-styles',
      path: 'cardMedia/wide/wideCardMedia.styles.js',
    },
    {
      pkg: 'mui-components',
      path: 'content/textInfo/TextInfoContent.js',
    },
    {
      pkg: 'mui-styles',
      path: 'textInfoContent/n01/n01TextInfoContent.styles.js',
    },
    {
      pkg: 'mui-components',
      path: 'cardFooter/people/PeopleCardFooter.js',
    },
    {
      pkg: 'mui-styles',
      path: 'cardFooter/people/peopleCardFooter.styles.js',
    },
  ],
};
// hide-end

export default EngagementCard;
