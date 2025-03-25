---
publishDate: 2024-02-18T06:19:00Z
title: Go Learning
excerpt: I'm starting to learn Go and have picked up some stuff to share
image: https://cdn.sanity.io/images/0j9fbpsg/production/398bc38b5d660484a35bb7ad0ac73dfeac414aa9-5827x3602.jpg
category: Learning
tags:
  - learning
  - go
  - golang
  - writing
---

I've started to tip my toes into Go and learning a new language after Python. I missed the type safety of C# and while Python is great for getting things done quickly, it's not the best for production software, especially with varying experience levels.

I found out about the [Go Time Podcast](https://changelog.com/gotime) relatively quickly and dove in. I really like all the different perspectives and expierences that get shared and it's a solid time. 10/10 would recommend!

Below are just some of the quotes and learnings I picked up over the few hundreds podcast episodes I have listened to.

## Quotes

> The art of writing is rewriting
> Ernest Hemingway

A lot of code we write can stay in it's initial state sometimes without a refactor, especially with pressures to ship quickly. Treating our code as a first draft when we start and that it will change and become better through review and collaboration is a good mindset to have.

> A little copying is better than a little dependency

With Go being a simple language and having it be "batteries included", you don't have to bring all these packages for a lot of common use cases. Packages like `net/http` allow for a lot to be done without frameworks or other speciality packages other languages might need.

> Simple code is better than clever code

Anyone working on a team and that has to maintain code for long periods of time has probably run into this issue when clever code bites back. Go was built to be simple and to be optimzed for reading, among many other design philosophies.

> You should write code for the next person and the average developer

This one I definitely think is really important when working on teams and if it's just your personal projects, probably not big a deal. Working for a company or organization though makes this be a must. It relates to the above quote too with working towards simple code and not clever code. I will say I definitely need to get better at this as I've been working on some projects for work and been one of the main devs.

It's easy to forget this too when you have to ship fast and get things to users, but it still is really important for longevity of a codebase.

> If you're not embarrassed by your first release, you released too late.

This one is interesting and I probably will have to take the senior software engineer take of "It depends." as I totally understand that waiting too long to release so everything is perfect is too long. Getting something out there and getting user feedback is invaulable, especially early on. There is always caveats like in Avionics systems or highly regulated environments where going too fast can have higher impacts if something was missed or goes wrong.

It's always important to understand the context and domain you are working in and make the best choice to what's most important for you and your users.

## More coming in the future

These are just some of the quotes and teachings I've written done as I've listened and thought about. They won't be the last and I still have lots to learn about Go. I definitely will be writing more as I learn and hoping sharing what I discover via code examples or anything I think is helpful. More to come!