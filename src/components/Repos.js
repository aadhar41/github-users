import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { githubRepos } = useContext(GithubContext);
  const { stars, forks } = githubRepos;
  // most popular languages
  const languages = githubRepos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (language) {
      total[language] = (total[language] || 0) + stargazers_count;
    }
    return total;
  }, {});

  const top5Languages = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const top5LanguagesObject = Object.fromEntries(top5Languages);

  return (
    <Wrapper>
      <Pie3D data={top5LanguagesObject} />
      <Doughnut2D data={top5LanguagesObject} />
      <Column3D data={top5LanguagesObject} />
      <Bar3D data={top5LanguagesObject} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  margin: 1rem 1rem;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
