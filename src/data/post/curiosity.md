---
publishDate: 2024-03-23T20:12:00Z
title: "The Question That Changed Everything: How Curiosity Fuels Growth"
excerpt: Curiosity fuels growth, innovation, and problem-solving—learn how to cultivate it in yourself and inspire it in others.
image: https://cdn.sanity.io/images/0j9fbpsg/production/398bc38b5d660484a35bb7ad0ac73dfeac414aa9-5827x3602.jpg
category: Learning
tags:
  - learning
  - software engineering
---

## A Moment of Curiosity

One of the earliest moments of curiosity I had that actually got me on the path towards becoming a software engineer was in high school when my Xbox 360 broke and got that infamous Red Ring of Death (RRoD). I started to take it apart after trying basic troubleshooting steps from online help, and I saw the intricate design of all the components and casing. As I disassembled each part, I was fascinated by how they were layered and interconnected to form a functioning system.

That moment sparked curiosity that led to me going to Iowa State University in Undeclared Engineering. I didn't know exactly what type I wanted to do yet but I knew I wanted to explore the engineering world. That simple moment had a cascading effect on my life. Looking back, here are some key takeaways.

- I didn't just give in with the RRoD and just go and try to buy a new one.
- I kept searching for answers beyond basic troubleshooting.
- What I uncovered gave me additional questions and intrigued me more.
- It was a rewarding experience where I got to learn and have fun with the exploration process.

This initial curiosity lead me to becoming a software engineer and it continued to help me grow in my career and it's definitely something that is important in this field as well as many others.

## The Power of Curiosity in Software Engineering

After nearly eight years of writing software, I can say this with confidence:
Curiosity + Persistence = A Superpower 💪

In software engineering, there are a lot of complex systems, solutions, and codebases to understand and maintain. No one can be an expert in everything and there a tons of topics of specialty across our industry. It is definitely moving fast, especially with AI and innovation that go on every day. While this can feel overwhelming at first, shifting your perspective can turn it into an endless landscape of opportunity for the curious 🤔.

Focus is important here as well, because while you could be curious about everything, time is a constraint that needs to be applied to this problem. We only have so many ~~days~~ [keystrokes](https://keysleft.com/) left, so it's crucial to use them wisely[1].

There are a few ways to hone this curiosity and let's discuss that next within the context of software engineering.

## How to Develop Curiosity in Yourself

Curiosity starts from within; external factors can inspire it, but they won't sustain it. If you aren't stoking and growing your own curiosity, then it will remain stagnant.

A great place to start developing your curiosity is to use your work. You are most likely a software engineer because you love to build software. There are probably many different concepts and types of work that could be a great spring board for leveling up your curiosity.

First find a bug or problem that you are running into that you really want to solve, not that you have to. Those aren't mutually exclusive so if you find a bug or problem you have to solve and are really interested in that, then perfect!

Start simple—tackling something too complex could lead to too many rabbit holes. This plays back into focusing your curiosity. I do want to note that simple does not equate to easy. A bit of difficulty will help test and strengthen your persistence. This is also key as you will encounter difficulty and roadblocks in developing curiosity unless it comes super natural.

One example I’ll share is when I was developing a conversational web app with a FastAPI backend in AWS. I had an LLM hosted in Sagemaker and responses were taking ~30 seconds at the time. This was going to be the pilot application for our AI department to gather feedback and expose GenAI capabilities to internal employees. I had been using ChatGPT and was asking "How is their response so fast?"

Just asking a single question took me on a journey to learn about

- Server Sent Events (SSE)
- Time to First Byte (TTFB)
- StreamingResponse in FastAPI
- Using WireShark, doing packet inspection to find locations of response buffering
- Layer 7 API Gateway configurations and actually finding a bug in the software that they needed to apply a fix to in an upcoming release
- Apigee Hybrid configurations and settings and working with our internal API Management team and Google Support
- Streaming via Python and eventually Go
- Optimizing response times from ~30 seconds to around 300ms, a 100x improvement!

As you can see asking a simple question can help lead you towards more learning and growth in multiple areas that you may never have touched on your own.

Being persistent really helps here as that process took months of hitting roadblocks and frustrating issues that give reasons to stop and give up. I'm really glad i didn't and I kept going.

I think another part of curiosity is exposing yourself to new information and sources like podcasts, books, videos, etc. Try to get outside of your comfort zone too. I started listening to the Go Time! Podcast recently as I've started to learn Go and it's been great for different lessons and being exposed to many more perspectives and experience.

I think that another important thing is to learn with others as well. You can have built in accountability too with scheduling a time together to learn or explore a certain area. It's very easy to make excuses on why you can't do something now and will do it later.

Problem is, later seems to rarely come and you never get around to it.

> If you want to go fast, go alone. If you want to go far, go together

## Encouraging Curiosity in Others

As you learn or improve curiosity in yourself, share that superpower with others in your company, community, or friend circle!

If you haven’t had the chance to mentor yet, this is a great opportunity. Encouraging curiosity helps others grow—not just in software engineering, but in many areas of life.

It's really cool to see junior devs or others learn that they can ask deeper questions and the lightbulb moments happen as they learn more from diving deeper.

I think another important part is making it fun and not just other work they might have to do. First being curious about them and what they are interested in learning. Sometimes, asking the right questions can spark engagement. Asking open-ended questions like, 'This function seems slow—why do you think that is?' encourages deeper thinking rather than just providing an answer.

## Stay Curious, Stay Ahead

If there's one thing I've learned, it's that curiosity is a rocket ship for personal and professional growth. The best engineers I know aren't just skilled; they are relentlessly curious and persistent.

"Next time you hit a roadblock, don’t just move on.
Stop. Ask a question. Dig deeper.
Because that one moment of curiosity?
It might just change your life."

[1]: A few years ago I got to hear Scott Hanselman give a talk to my company and learn about this [blogpost](https://www.hanselman.com/blog/do-they-deserve-the-gift-of-your-keystrokes). I also go to learn about this site he built to calculate remaining keystrokes so we can use them more effectively.
