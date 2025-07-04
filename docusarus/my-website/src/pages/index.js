import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import RPiLogo from './/rpi_logo.png';
import $ from "jquery"
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
    
        <Heading as="h1" className="hero__title">
        Your <span className='underlined'>better</span> <span >
          <a href='https://www.raspberrypi.com/'>
            <img src={RPiLogo} className='RPILogo'
            width='80 px'
            onMouseEnter={()=> {
              $(this).hide()
            }}
           
            ></img></a></span> interface
        </Heading>
        
        <p className="hero__subtitle">made with <span className='underlined'>ease</span></p>
        <div className='get_started'style={{paddingRight:'20px'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/First%20setup">
            Get started!
          </Link>
        </div>
        <div className = 'download'style={{paddingBottom:'20px'}}>
          <Link
            className="button button--secondary button--lg "
            to="/docs/First%20setup">
            Download
          </Link>
        </div>
  
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A modern way to interface with Raspberry Pi">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
