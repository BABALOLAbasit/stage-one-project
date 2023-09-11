const express = require('express');
const chalk = require('chalk');

const app = express();
const port = 5000; // Use port 5000 

app.get('/api', (req, res) => {
  // Get query parameters
  const { slack_name, track } = req.query;

  // Validate input
  if (!slack_name || !track) {
    return res.status(400).json({ error: 'slack_name and track are required query parameters' });
  }

  // Get current day and UTC time
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = new Date().toISOString();

  // GitHub URLs
  const githubFileUrl = 'https://github.com/username/repo/blob/main/file_name.ext';
  const githubRepoUrl = 'https://github.com/username/repo';

  // Response JSON
  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  // Send JSON response
  res.json(response);
});

app.listen(port, () => {
  console.log(chalk.blue(`Server is running on port ${port}`));
});
