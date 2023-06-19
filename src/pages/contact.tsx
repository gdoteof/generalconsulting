import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ContactFeatures from '@site/src/components/ContactFeatures';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`${siteConfig.title} - Contact`}
        description="General Consulting creates first class solutions using first principles.">
        <header className={clsx('hero hero--primary')}>
            <h1>Contact</h1>
        </header>
        <main>
            <ContactFeatures />
        </main>
      </Layout>
    );
  }