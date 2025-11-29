---
publishDate: 2024-02-18T06:19:00Z
title: '🏗️ Learning Go: Quotes, Lessons, and First Impressions'
excerpt: I'm starting to learn Go and have picked up some stuff to share
image: https://cdn.sanity.io/images/0j9fbpsg/production/398bc38b5d660484a35bb7ad0ac73dfeac414aa9-5827x3602.jpg
category: Learning
tags:
  - learning
  - go
  - golang
  - writing
---

I've started dipping my toes into **Go**—learning a new language after Python. While Python is fantastic for getting things done quickly, I missed the **type safety** of C#. Python isn’t always the best for production software, especially in teams with varying experience levels.

Don't get me wrong, I love Python and building with [FastAPI](https://fastapi.tiangolo.com/) and [Pydantic](https://docs.pydantic.dev/latest/) and definitely going to have to look at [PydanticAI](https://ai.pydantic.dev/) soon!

I really wanted to explore something new and that could solve some of the speed and scale problems Python suffers with being a single-core interpreted language.

I went through the whole `Rewrite in Rust` phase but for what I mainly work on it's not a good fit. I also work on a team of various skillsets and disciplines, it would be too hard for everyone to learn Rust and honestly they don't need to. I also did the `Rust vs Go` comparison and watched countless Youtube videos. But really it's comparing a screwdriver and a saw, both tools but for different use-cases and situations.

In the end I thought Go would be a nice language that's easy to pick up and would solve potential issues that could be missed by a dynamic language like Python for our team.

## 🎙️ Discovering the _Go Time Podcast_

I stumbled upon the **[Go Time Podcast](https://changelog.com/gotime)** early on and immediately dove in. I love the different **perspectives and experiences** shared—it's an engaging and insightful listen.

**10/10 would recommend!** 🎧✅

Below are some **quotes and key takeaways** from the _hundreds_ of podcast episodes I've listened to.

## ✨ Quotes & Learnings

> The art of writing is rewriting.
> – Ernest Hemingway

A lot of code stays in its **initial state** longer than it should, especially under the pressure to ship quickly. Instead, we should treat our code like a **first draft**—expecting it to change and improve through **reviews and collaboration**.

---

> A little copying is better than a little dependency.

Go is designed to be simple and **"batteries included"** 🔋. Instead of pulling in unnecessary packages, Go’s standard library provides powerful tools like **`net/http`**, reducing the need for external dependencies.

---

> Simple code is better than clever code.

If you've ever maintained software for a long time, you’ve likely seen clever code **bite back**. Go was built with **readability in mind**, making simplicity a core philosophy. **Optimizing for clarity** over complexity benefits both individual developers and teams.

---

> Write code for the next person and the average developer.

This is **crucial** when working on teams. If you're building a project solo, it may not matter as much, but in a **company or open-source project**, writing **clear, maintainable code** is essential.

I’ll admit, I still need to get better at this! When you're moving fast, it’s easy to focus on shipping instead of maintainability. But for **long-term success**, prioritizing clarity is worth it.

---

> If you're not embarrassed by your first release, you released too late.

This one is interesting. My _senior software engineer_ take? **"It depends."** 😆

I totally get that waiting too long for a **perfect** release means you **miss out on valuable user feedback**. That said, there are **caveats**—in avionics, healthcare, or regulated industries, moving too fast can have **serious consequences**.

Ultimately, it’s about **understanding your domain** and finding the right balance between **speed and reliability**.

---

## 🔜 More to Come!

These are just a few of the **quotes and lessons** I’ve picked up while learning Go. I’ll be sharing more **insights, code snippets, and discoveries** as I continue this journey.

🚧 Stay tuned—**more to come soon!** 🚀
