# Chat Command History

**Date:** 2026-05-16
**Status:** Approved

## Summary

Add terminal-style command history to the chat input. `↑/↓` arrows recall previous messages; `ESC` clears. In-memory only (no persistence across page refresh). Future path: migrate array to `localStorage`.

## Architecture

Pure JS addition to `austin_portfolio.html`. No new files, no dependencies, no CSS or HTML changes.

**State:**

- `chatHistory[]` — ordered array of submitted messages (oldest→newest)
- `historyIndex` — integer, `-1` = not browsing (sentinel); `0..chatHistory.length-1` = browsing

## Data Flow

```
submit message
  → push message to chatHistory[]
  → historyIndex = -1

↑ keydown (input focused, not composing)
  → if chatHistory empty: no-op
  → if historyIndex === -1: historyIndex = chatHistory.length - 1
  → else: historyIndex = max(0, historyIndex - 1)
  → input.value = chatHistory[historyIndex]
  → cursor to end of input

↓ keydown (browsing history)
  → if historyIndex === -1: no-op
  → historyIndex++
  → if historyIndex >= chatHistory.length: historyIndex = -1, input.value = ''
  → else: input.value = chatHistory[historyIndex]

ESC keydown
  → input.value = ''
  → historyIndex = -1
```

## Edge Cases

| Case                             | Behavior                      |
| -------------------------------- | ----------------------------- |
| `↑` with empty history           | no-op                         |
| `↓` past newest entry            | clears input, index = -1      |
| Edit while browsing, then submit | new entry pushed, index reset |
| Duplicate consecutive entries    | allowed (no dedup)            |
| Submit empty input               | not pushed to history         |

## Scope

~25 lines added to existing `handleChat()` and `chatInput` keydown listener. Touches nothing else.

## Future

localStorage persistence: swap `let chatHistory = []` for load/save wrappers. No other changes needed — array API stays identical.
