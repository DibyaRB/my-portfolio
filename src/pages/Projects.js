import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }

  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }

  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText) {
      const filteredData = ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      );
      setProjectData(filteredData);
    }
  }, [searchText]);

  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="Projects" subheading="Some of my recent works" />
        <div className="projects__searchBar">
          <form>
            <input
              type="text"
              placeholder="Project Name"
              value={searchText}
              onChange={(e) => {
                e.preventDefault();
                setSearchText(e.target.value);
                if (!e.target.value.length) {
                  setProjectData(ProjectInfo);
                }
              }}
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>

        <div className="projects__allItems">
          {projectData.map((project, index) => (
            <ProjectItem
              key={index}
              img={project.img}
              title={project.name}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}
