import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Efficient Solutions',
    Svg: require('@site/static/img/efficient.svg').default,
    description: (
      <>
        The days of the monolith and bloated frameworks like Java and .NET are over.  We can help you build efficient solutions using modern tools like Rust, Go, and React. We can put your workloads in kubernetes and leave your static content on a CDN.
      </>
    ),
  },
  {
    title: 'Technology Transfer',
    Svg: require('@site/static/img/transfer.svg').default,
    description: (
      <>
        In {new Date().getFullYear()}, the quality and availability of open source software is at an all time high, and the cost of cloud computing is at an all time low.  We can help you take advantage of these trends by transferring technology to your team.
      </>
    ),
  },
  {
    title: 'ChatGPT, large language models, and generative AI',
    Svg: require('@site/static/img/generative-ai-chatgpt.svg').default,
    description: (
      <>
      Generative AI will transform the economy on the scale of the steam engine and the internet.  Combine prompt engineering, automation, structured recall from automated agents to increase efficiency and reduce iteration time.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
