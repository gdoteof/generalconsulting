import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type ContactType = {
  method: string;
  description: JSX.Element;
};

const ContactTypeList: ContactType[] = [
  {
    method: 'Phone',
    description: (
      <>
        <Link to="tel:802-266-4454">802-266-4454</Link>
      </>
    ),
  },
  {
    method: 'Email',
    description: (
      <>
        <Link to="mailto:web@generalconsulting.io">web@generalconsulting.io</Link>
      </>
    ),
  },
  {
    method: 'Text',
    description: (
      <>
        We are available via imessage/signal/telegram.  For now, you will need to join <Link to="https://discord.gg/acP4kKYZT9">our discord</Link> to get our contact information.
      </>
    ),
  },
];

function ContactType({method, description}: ContactType) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{method}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function ContactTypes(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ContactTypeList.map((props, idx) => (
            <ContactType key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
