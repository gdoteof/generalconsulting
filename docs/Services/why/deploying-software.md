---
---

# Thoughts on Building and Deploying Software in 2023

## Introduction

A lot has changed in the last 20 years with how we build and deploy software.  We have moved from specialized hardware, to virtual machines, to containers, to serverless.  We have moved from monoliths, to microservices, to serverless functions.  We have moved from waterfall, to agile, to devops.  We have moved from on-prem, to cloud, to hybrid cloud.  We have moved from bare metal, to VMs, to containers, to serverless and finally back to baremetal to save on compute.  From "backup versions" to SVN, to Git.  We have moved from manual deployments, to CI/CD, to GitOps.

Most of these changes have happened in the last 5 years, and along with those changes, our techniques and craftsmanship for writing elegant, simple software have improved dramatically.  Yet, few organizations are taking advantage of these new techniques.  Most organizations are still stuck in the past, and are struggling to keep up with the pace of change; desperately trying to squeeze just one more year out of their legacy systems.

## General Principles

Building software is unimaginably complex.  It is so complex, that it is impossible to build software that is correct.  The best we can do is build software that is simple, and then test it to make sure it acts within some bounds of correctness.  The more complex the software, the more difficult it is to test, and the more likely it is to have bugs.  Therefore, the best way to build software is to build it as simply as possible.

One part of simplicity is trusting your building blocks.  If you are building a house, you don't want to have to worry about whether the bricks are going to hold up the roof.  You want to be able to trust that the bricks are going to do their job, and you want to be able to focus on the design of the house.  The same is true for software.  You want to be able to trust your building blocks, so that you can focus on the design of your software.  This is why we use open source software.  We trust the open source community to build the best building blocks, and we trust the open source community to test those building blocks.  We don't have to worry about whether the building blocks are going to work, we can focus on the design of our software.

We only write software when we can't find an open source solution to our problem, which in 2023, is becoming increasingly rare.

## Current State of the Art

Generally, we are going to orchestrate a "foundation" of tooling for all our "common" problems like: databases, ingress, monitoring, logging, etc.  We will use open source software for this foundation, and we will use the same foundation for all our projects.  This will allow us to build up expertise in the foundation, and we will be able to leverage that expertise across all our projects.

Our current preferred stack is:

### Back End

When we say "back end," we mean the part of the software that runs on the server.  This is the part of the software that is responsible for the business logic, and the part of the software that is responsible for interacting with the database.  In 2023, it may also mean the software running on the edge that parsing the request, and routing it to the appropriate server, handling authentication, etc.

Generally we will reach for Rust with a preference over Go; unless we expect a diverse and changing set of contributors, then we will prefer Go due to its relative simplicity.  Rust is an objectively superior language in terms of performance, correctness, and safety.  It is also, for those willing to make the leap, a much more expressive language than Go.  However, it is also a much more complex language than Go, and it is a bit more difficult to learn.  Therefore, we will only use Rust when we expect a small, stable set of contributors.

Legacy stacks like Java and C# are not viable options outside of organizations that already have significant framework-specific expertise.  The complexity of these languages, and their massively bloated runtimes is simply too high to justify their use in 2023.

Python is a viable option for small deployments, and even at scale if there is significant python expertise in the organization.  However, it is not a viable option for large deployments due to its lack of type safety, and its lack of performance.  We will however, use python for scripting, glue code, and research projects.


### Front End

When we say "front end," we mean the part of the software that runs in the browser, phone or computer of the user.  This is the part of the software that is responsible for rendering the UI, and handling user interactions.  In 2023, the backend and the frontend are almost always separate projects, and are almost always written in different languages.

React has become the de-facto standard for front end development.  It is a simple, expressive, and powerful framework that is easy to learn, and easy to use.  It is also backed by a large community, and a large ecosystem of libraries and tools.  It is the obvious choice for front end development in 2023.

We may reach for Yew if we are building a complex web application with a complex UI, or Docusaurus if we are building a static site with minimal interaction.  However, these are niche use cases, and we will generally reach for React with typescript.


### Persistence

When we say "persistence," we mean the part of the software that is responsible for storing data.  This is the part of the software that is responsible for storing data in a way that is durable, and that can be queried efficiently.

The traditional, naive persistence of utilizing the local hard drive does not scale in cloud environments as the local drive is ephemeral.  There are specialized databases not included here, but the vast majority of software will use one of the following:

- Object storage:  AWS S3, Google Cloud Storage, Azure Blob Storage, etc.  There are many, many object storage providers, and then tend to even be compatible with AWS S3.  Object storage is the most common form of persistence in 2023. 

- Key-Value store:  DynamoDB, Redis, Memcached, etc.  Key-Value stores are likely the most common form of persistence for application data in 2023.  They are used for caching, and for storing data that needs to be queried quickly.

- Relational database:  Postgres, MySQL, etc.  Relational databases are still the most common form of persistence for structured data in 2023.  They are used for storing data that needs to be queried in complex ways, and for storing data that needs to be queried quickly.


Object storage and Key-Value storage are very similar; the primary difference being Key-Value databases are optimized for querying, while object storage is optimized for storing large amounts of data. In both cases, the data is stored in a key-value format, and the value is opaque to the database.  This means that the database cannot query the data, and the data must be queried by the application.  This is a significant difference from relational databases, where the database can query the data.  DynamoDB is an incredibly performant KV store on AWS, and Redis is an incredibly performant KV store for on-prem and self-hosted solutions.

Relational databases are what we typically think of when we think of databases.  Cloud providers like AWS have brought massively scaling relational databases to the masses via their managed aurora service, and software like CockroachDB and Vitess have brought distributed relational databases to the masses for on-prem and self-hosted solutions.

### Kubernetes and Containers

Kubernetes is the de-facto standard for container orchestration.  It is a complex system, but it is also a very powerful system.  It is the obvious choice for container orchestration in 2023.  Managed Kubernetes services like EKS, GKE, and AKS have brought Kubernetes to the masses, and have made it easy to run Kubernetes at scale. Microk8s, k3s, and k0s have brought Kubernetes to the masses for on-prem and self-hosted solutions.

With containerization and kubernetes, we can automate what used to take an entire team of people to do.  We can automate the provisioning of servers, the deployment of software, the scaling of software, the monitoring of software, and the logging of software.  We can manage upgrades, backups and rollouts with operators, our software can run in high-availability, it can self-heal, and it can scale up and down automatically.  We can do all of this with free software, meticulously maintained by the open source community.


### Serverless

Serverless tends to be much simpler and cheaper at small scale, and much more expensive and complex at large scale.  For low throughput, low complexity applications, serverless is an excellent choice. For high throughput, high complexity applications, serverless is a poor choice.  For everything in between, serverless is a viable choice; particularly for inward facing applications.

AWS has long provided 'lambda' but the complexity of AWS itself largely nullifies Lambda's relative simplicity.  In a way, Kubernetes is a serverless environment, particularly if you go with a managed solution like EKS.  However, there are other serverless solutions that are much simpler than Kubernetes, and that are much more cost effective at small scale.  In particular, Cloudflare Workers is excellent for small scale applications, and `wrangler`, cloudflare's CLI, is lightyears ahead of `aws-cli`.

Our serverless workloads are generally written in Rust, compiled to wasm, and deployed to Cloudflare Workers.  This allows us to leverage the power of Rust, while also leveraging the simplicity and cost effectiveness of serverless.

Another reason we may choose cloudflare workers in particular, is if we need to do something at ingress before it gets to our application.  Having a layer "outside" our application environment that allows us to arbitrarily manipulate or redirect traffic can be a powerful way to provide custom/secure/novel ingress to our application.  For example, we may use cloudflare workers to provide a custom authentication layer, or to send some subset of traffic to a different application or environment.
