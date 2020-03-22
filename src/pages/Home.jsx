import React, {useEffect, useState} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { Box } from '../components/shared/containers';
import {
  projects,
} from '../asset/content';

import {fetchEntry} from '../utils/api';

import Navigation from '../components/shared/Navigation';
import Hero from '../components/Hero';
import About from './About';
import Resume from './Resume';
import Project from './Projects';
import Content from '../components/Content';
import Coffee from '../components/Coffee';

const Home = () => {

// // gets entry data from API 
  const [projectList, setProjectList] = useState();
  const [heroText, setHeroText] =  useState();
  const [footer, setFooter] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await fetchEntry('6CUxF1u6ZrilbA3LZtNvhl');
      setProjectList(result.fields.homeProjects);
      setHeroText(result.fields.heroText);
      setFooter(result.fields.footer);
      // console.log(result);
      // console.log(result.fields.footer.fields.footerText);
    }
    fetchData();
  }, [])


  
    return (
      <Switch>
        <Route>
          <Box mobile padding='0' >

            <Navigation />

            <Hero heroText={heroText} />

            {projectList && projectList.map((project, i) => <Content key={i} projectText={projectList[i].fields.projectText} />)}

            {footer && <Coffee footer={footer} />}

            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {projects.map((project, i) => <Route key={i} path={project.path}><Project {...project} /></Route>)}

          </Box>
        </Route>
      </Switch>
    );
}

export default Home;