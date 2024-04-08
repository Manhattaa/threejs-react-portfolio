import React, { useState, useEffect } from "react";
import { CTA } from "../components";
import { Link } from "react-router-dom";
import Myprojects from "../constants/Projects.json";
import { arrow } from "../assets/icons";
import Spinner from 'react-bootstrap/Spinner';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true); 
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(Myprojects.projects);
      setIsLoading(false); 
    }, 1000);
    return () => clearTimeout(timer);
  }, []); 

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading - please wait...</span>
        </Spinner>
      </div>
    );
  }
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects as a Student, but these are
        the ones I hold closest to my heart. Feel free to review the 
        code and contribute your ideas for further enhancements.
        Many of these projects are open source.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {Myprojects.projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>



              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
