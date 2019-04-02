---
templateKey: blog-post
title: 'Micro frontends '
date: 2019-03-28T03:46:30.206Z
description: Microservice design patterns applied to front end applications.
tags:
  - micro frontend
---
## What is a micro frontend?

A micro frontend is UI composed of microservices. Each microservice encapsulates a domain of business functionality and is a self-contained web application made of html, css, and js. While being independent, microservices work together to create a single UI. (breadth and depth)

> #### Example:
Amazon uses a micro frontend to split up it's various web applications. Products page, wish list, and shopping cart are all independent web applications Amazon assembles into a composite UI.

## Why use micro frontends?

Business:

* Easier feature adoption
* Clearer lines of responsibility
* More flexible, less buggy tech 

Code bases:

* Code reuse
* Scaling number of code bases

Teams:

* Smaller-focused teams
* Faster development
* Less risk
* Technology agnostic
* Increased ownership


## When to use micro frontends?

Micro front end architectures are a good fit for developers with a big frontend code base that consists of many different parts that work together and need to integrate, talk to, and share data.

## Who should use micro frontends?

You and your team! Micro frontends are great place to give back to the tech community because there is not a enough people sharing their experiences in solving this common problem.

## How to implement a micro frontend:

There are many ways to solve this problem, yet few established solutions. 

##### Route a user between websites:
One hypothetical example would be that `products.amazon.com` might route to `purchase.amazon.com`, using a `POST` request to share the users shopping cart. 

![alt text](https://i.ibb.co/tMchN7w/Screen-Shot-2019-03-27-at-11-56-09-PM.png)

* Another approach could be to have three different web components or IFrames append three different js applications to the same DOM. (Spotify’s micro front end is IFame based)

![alt text](https://i.ibb.co/mvGtDMc/Screen-Shot-2019-03-28-at-12-07-15-AM.png)

* Use SSR to pull micro app code into a single index.html, depending on a URL route

![alt text](https://i.ibb.co/L56fqB1/Screen-Shot-2019-03-28-at-12-28-51-AM.png)

The approach we decided on was the third approach, to use SSR to append different micro apps into the same DOM.

We started out a monolithic create react app that supports 3 domains of our business. 

We split the monolith up into 4 distinct web applications:

* 3 micro apps
* 1 parent app (to help share state and routes between the micro apps)

Each web application was made with react, redux, and react-router-4.

The micro applications are stand-alone create react apps that are built and uploaded to S3 buckets. These buckets are not configured for web hosting.

The parent React app is a node server that dynamically pulls micro app code from a S3 bucket, depending on which URL was selected, and appends the code to an index.html file. 

(Diagram)

In addition to the micro app, the parent react app is always mounted to the index.html file. 

(Diagram)

Once the composite UI is assembled and delivered to the user, the client side SPA code handles the users activity within a given business domain until the user needs to navigate to a different business domain. 

(Diagram)

At this point a request is made to the node server for a different micro application.

(Diagram)

The node server build a new composite UI and delivers is back to the browser.

(Diagram)
