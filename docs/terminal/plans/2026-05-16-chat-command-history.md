# Chat Command History Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add terminal-style `↑/↓` command history and `ESC` clear to the chat input in `austin_portfolio.html`.

**Architecture:** Two in-memory variables (`chatHistory[]`, `historyIndex`) added near existing chat constants. `handleChat()` pushes to history on submit. The existing `keydown` listener is expanded to handle `ArrowUp`, `ArrowDown`, and `Escape`.

**Tech Stack:** Vanilla JS, single HTML file, no build step, no test framework — verification is manual browser testing.

---

### Task 1: Add history state and wire submit

**Files:**

- Modify: `austin_portfolio.html:404-431`

No automated test framework exists in this project — verification is done by opening the file in a browser.

- [ ] **Step 1: Add history state variables**

Locate this block (around line 404):

```js
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const greetArea = document.getElementById('greeting-area');
```

Add two lines immediately after `greetArea`:

```js
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const greetArea = document.getElementById('greeting-area');
const chatHistory = [];
let historyIndex = -1;
```

- [ ] **Step 2: Push to history on submit**

Locate `handleChat()`. The current first two lines are:

```js
const q = chatInput.value.trim();
if (!q) return;
```

Add history push + index reset immediately after the guard:

```js
const q = chatInput.value.trim();
if (!q) return;
chatHistory.push(q);
historyIndex = -1;
```

- [ ] **Step 3: Manual verify — submit pushes to history**

Open `austin_portfolio.html` in browser. Open DevTools console. Type a message and send it. Run:

```js
chatHistory;
```

Expected: `["your message"]`. Run again after a second message: `["first", "second"]`.

- [ ] **Step 4: Commit**

```bash
git add austin_portfolio.html
git commit -m "feat: add chat history state and push on submit"
```

---

### Task 2: Expand keydown listener for ↑ / ↓ / ESC

**Files:**

- Modify: `austin_portfolio.html:431`

- [ ] **Step 1: Replace the existing keydown listener**

Current code (line 431):

```js
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleChat();
});
```

Replace with:

```js
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleChat();
    return;
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (!chatHistory.length) return;
    historyIndex = historyIndex === -1 ? chatHistory.length - 1 : Math.max(0, historyIndex - 1);
    chatInput.value = chatHistory[historyIndex];
    setTimeout(() => chatInput.setSelectionRange(chatInput.value.length, chatInput.value.length), 0);
    return;
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIndex === -1) return;
    historyIndex++;
    if (historyIndex >= chatHistory.length) {
      historyIndex = -1;
      chatInput.value = '';
    } else {
      chatInput.value = chatHistory[historyIndex];
      setTimeout(() => chatInput.setSelectionRange(chatInput.value.length, chatInput.value.length), 0);
    }
    return;
  }
  if (e.key === 'Escape') {
    chatInput.value = '';
    historyIndex = -1;
  }
});
```

- [ ] **Step 2: Manual verify — ↑ recalls history**

Open `austin_portfolio.html`. Send 3 messages: "hello", "foo", "bar".

- Press `↑` once → input shows `bar`
- Press `↑` again → input shows `foo`
- Press `↑` again → input shows `hello`
- Press `↑` again → input stays `hello` (clamped)

- [ ] **Step 3: Manual verify — ↓ moves forward and clears**

Continuing from previous state (showing `hello`):

- Press `↓` → input shows `foo`
- Press `↓` → input shows `bar`
- Press `↓` → input clears (back to blank)
- Press `↓` again → no-op (index still -1)

- [ ] **Step 4: Manual verify — ESC clears**

Type something in input without sending. Press `ESC` → input clears, cursor ready.

- [ ] **Step 5: Manual verify — ↑ with empty history is no-op**

Hard-refresh page. Press `↑` immediately → nothing happens.

- [ ] **Step 6: Commit**

```bash
git add austin_portfolio.html
git commit -m "feat: add arrow key command history and ESC clear to chat input"
```
