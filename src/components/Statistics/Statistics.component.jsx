import React from 'react';

import {
  Grid,
} from '@material-ui/core';
import CommentSharpIcon from '@material-ui/icons/CommentSharp';
import TwitterIcon from '@material-ui/icons/Twitter';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

import { StatisticsBox } from './StatisticsBox.component';

export const Statistics = (props) => {
  const {
    pendingTermCount,
    processingTermCount,
    processedTermCount,
    tweetCount,
    topicCount,
  } = props;

  const totalTerms = pendingTermCount + processingTermCount + processedTermCount;

  return(
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StatisticsBox
          title="Terms"
          count={totalTerms}
          countLabel="searched terms"
          icon={<CommentSharpIcon />}
        >
          There are a total of <b>{totalTerms}</b> searched terms. Under this
          terms, <i>{pendingTermCount}</i> will be processed, <i>{processingTermCount}
          </i> are processing and <i>{processedTermCount}</i> have been processed.
        </StatisticsBox>
      </Grid>
      <Grid item xs={12}>
        <StatisticsBox
          title="Tweets"
          count={tweetCount}
          countLabel="processed tweets"
          icon={<TwitterIcon />}
        >
          Using all the <i>{totalTerms}</i> terms as queries, we
          pulled <b>{tweetCount}</b> related tweets from the Twitter API.
          All of these tweets were processed using deep learning techniques for sentiment
          analysis.
        </StatisticsBox>
      </Grid>
      <Grid item xs={12}>
        <StatisticsBox
          title="Topics"
          count={topicCount}
          countLabel="generated terms"
          icon={<GroupWorkIcon />}
        >
          From the tweets, we extracted <b>{topicCount}</b> topics, distributed
          across all the <i>{totalTerms}</i> terms.
        </StatisticsBox>
      </Grid>
    </Grid>
  );
}
