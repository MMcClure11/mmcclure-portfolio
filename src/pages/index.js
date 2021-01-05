import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import ipad from '../assets/images/ipad.png';
import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Technologies</h2>
            <p className="text-white-50">
              Grayscale is a free Bootstrap theme created by Start Bootstrap. It
              can be yours right now, simply download the starter on
              <a href="https://github.com/anubhavsrivastava/gatsby-starter-grayscale">
                the github repo
              </a>
              .
            </p>
          </div>
        </div>
        <img src={ipad} className="img-fluid" alt="" />
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <a key={config.natureWatch} href={config.natureWatch}><h4>Nature Watch</h4></a>
              <p className="text-black-50 mb-0">
                A single page application for users to add sightings of Flora and Fauna and leave comments. 
                The UI was built using React.js and Redux Thunk to retrieve and persist data. 
                I Implemented node-sass as a CSS precompiler to efficiently design the site.
              </p>
              <a key={config.natureWatchRepo} href={config.natureWatchRepo} className="text-black-50 mb-0">Repo</a>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <a key={config.witchyWardrobe} href={config.witchyWardrobe}><h4 className="text-white">Witchy Wardrobe</h4></a>
                  <p className="mb-0 text-white-50">
                    An Object Oriented JS application for users to create clothing items and outfits. 
                    I generated item cards asynchronously fetched from a custom Rails API
                    and overwrote the Bootstrap framework defaults to add styling.
                  </p>
                  <a key={config.witchyWardrobeRepo} href={config.witchyWardrobeRepo} className="text-white">Repo</a>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Book Nook</h4>
                  <p className="mb-0 text-white-50">
                    A Rails book database for users to create reading lists and review books. 
                    I utilized the  Google Books API for users to be able to search a robust database of content. 
                    Users were authenticated with Github OmniAuth, Bcrypt, sessions and cookies.
                  </p>
                  <a key={config.bookNookRepo} href={config.bookNookRepo} className="text-white">Repo</a>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
