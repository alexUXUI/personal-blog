---
templateKey: blog-post
title: Micro frontends
date: 2019-03-28T03:46:30.206Z
description: Microservice design patterns applied to front end applications.
tags:
  - micro frontend
---
## What is a micro frontend:

A micro frontend is a UI composed of multiple frontend applications. These frontend applications are generally referred to as "micro" applications because they are modeled on the single responsibility principal of microservices. A micro frontend is what emerges when all of the micro applications work together to form a seamless UI.


#### Hypothetical Example:
In theory, Amazon might be using a micro frontend architecture to split up its various web applications. Amazon products, wishlist, and shopping cart could all be independent web applications assembled into one composite UI.

## Why use micro frontends:

Organizations leveraging micro frontend architectures are more nimble due to less interdependence between teams. The agility allows for quicker iterations, and code quality improves because more code is being reused across microservices. This decrease in code makes microservices easier to maintain, and that adds durability to the overall UI. One other benefit is that teams get smaller, faster, and have more ownership over their products.

## When to use micro frontends:

Micro front end architectures are a good fit for teams with a large frontend code base that is made up of, or can be split into discrete sections of functionality. 

## Who should use micro frontends?

You and your team! Micro frontends are great place to give back to the community because there are not a enough people sharing their experiences with this design pattern.

## How to implement a micro frontend:

There are many ways to solve this problem, yet few established solutions. While it is relatively easy to have fragmented codebases, the crux of the problem is bringing the independent applications together. The "stitching" layer of a micro frontend must be able to load the correct micro app configuration and provide a way for micro apps to communicate and share state.

With this information in mind, Let's look at three of the more common design patterns.

#### 1) Routing between subdomains:

This technique allows developers to split frontend monoliths into micro apps at the subdomain level. Subdomains make it easy for teams to have independently maintained codebases under one domain. Example: `amazon.com` might route a user to `primenow.amazon.com`, using a `POST` request to share the user's shopping cart. While being low effort, the drawback of this approach is that it does not satisfy the requirements of a true micro frontend. A true microfront end should allow for the possibility that multiple micro applications be in the UI  _simultaneously_.

<img src="https://i.ibb.co/tMchN7w/Screen-Shot-2019-03-27-at-11-56-09-PM.png" class="post-example" style="height: 300px; margin: auto; width: 100%; object-fit: contain"/>

<br />
<br />

#### 2) Web Components

Web Components (or Iframes) can also be used to add multiple, independent html/css/js applications to the same DOM. Spotify’s micro frontend is Iframe based.


<img src="https://i.ibb.co/mvGtDMc/Screen-Shot-2019-03-28-at-12-07-15-AM.png" class="post-example" style="height: 300px; margin: auto; width: 100%; object-fit: contain"/>

<br />
<br />

#### 3) Server Side Rendering

Servers can be used to fetch html/js/css files from an S3 bucket, add those files to a DOM, and serve a single index.html page. In this example, the user requests a route of `/app-3` and the handler for this route fetches html/css/js content from an S3 bucket, adds the contents to an index file

<img src="https://i.ibb.co/L56fqB1/Screen-Shot-2019-03-28-at-12-28-51-AM.png" class="post-example" style="height: 300px; margin: auto; width: 100%; object-fit: contain"/>


<br />
<br />

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
