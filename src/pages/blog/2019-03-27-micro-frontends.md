---
templateKey: blog-post
title: 'Micro Frontends '
date: 2019-03-28T03:46:30.206Z
description: Applying micro service design patterns to front end applications.
tags:
  - micro frontend
---

## What is a Micro frontend?

It’s a UI built with micro services. Micro frontends are also called composite UIs.

(Insert graphic)

### Amazon Example: 

Ever notice how Amazon.com’s website has a slightly different look and feel across different parts? It's because each part is a separate application, built by different team, using a any given technology. 

All of these micro applications come together to create a micro front end, also called a composite UI.

### Why?

Front end code bases can scale:

- Less coupling (not everything together)
- More reuse (more things using one thing)
- Can have as many web apps as you want

Front end teams can also scale:

- Smaller and more focused teams
- Not everyone working on one code base
- Faster PR times due to easier reviews
- Less risk of breaking things
- Teams can choose what ever technology they want
- Teams have more ownership due to clearer responsibility

Business can scale as well:

- Easier feature adoption
- Clearer lines of responsibility
- More flexible technology 

When?

Micro front end Architectures are a good fit for companies with front end applications that need to integrate, talk to, and share data with one another.

Example use case:

A big website that consists of many different parts working together

Who?

You and your team!

How?

There are many ways to solve this problem, yet few established solutions. 

- A common approach is to route a user to a different website. For example: products.amazon.com might route to purchase.amazon.com, using a POST request to share the users shopping cart. 
	
	(insert diagram)

- Another approach could be to have three different web components or IFrames append three different js applications to the same DOM. (Spotify’s micro front end is IFame based)

	(insert diagram)

- Use SSR to pull micro app code into a single index.html, depending on a URL route

	(insert diagram)

The approach we decided on was the third approach, to use SSR to append different micro apps into the same DOM.

We started out a monolithic create react app that supports 3 domains of our business. 

We split the monolith up into 4 distinct web applications:
- 3 micro apps
- 1 parent app (to help share state and routes between the micro apps)

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








