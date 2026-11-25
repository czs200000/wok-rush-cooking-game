# 小厨神快线 · Wok Rush

[![make.fun · best-cooking-game-20261125-0137](https://make.fun/badge/best-cooking-game-20261125-0137.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![rank](https://make.fun/badge/best-cooking-game-20261125-0137/czs200000/wok-rush-cooking-game/rank.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![reward](https://make.fun/badge/best-cooking-game-20261125-0137/czs200000/wok-rush-cooking-game/reward.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)

Original cooking game for the make.fun bounty **“Make the best cooking game”** ($250, ends 2026-11-25 21:37 Beijing time).

Entered on [make.fun](https://make.fun/bounty/best-cooking-game-20261125-0137) — see the bounty page at https://make.fun/bounty/best-cooking-game-20261125-0137.

## How to play

Open `game/index.html` in a desktop browser (Chrome). No server, no network requests — all files are local.

- Click **开始营业** (or press Space).
- The order board on the left shows 3 orders, each with a countdown. Serve before it expires.
- Click ingredients on the counter (or press keys `1`–`9`) to add them to the plate, in the order the recipe asks for.
- Press **上菜 Serve** (`S`) when the plate matches an order exactly. Wrong plate: −3 points. Expired order: −5 points.
- **清空盘子** (`C`) clears the plate. You have 120 seconds total.
- Recipes: 番茄炒蛋饭 (rice+egg+tomato), 鸡肉拉面 (noodle+chicken+egg), 青菜豆腐饭, 虾仁炒面, 辣子鸡饭, 番茄虾仁面.

## Build

```bash
node main.ts   # Node 22.18+; tested on Node v24.22.1
# writes the playable game to out/
# open out/index.html to play
```

`main.ts` only copies `game/` to `out/` and writes `out/manifest.json`. It makes no network requests.

## Screenshot scenes

Open these URLs in Chrome (1280×800) to reproduce the screenshots in `screenshots/`:

- `game/index.html?shot=start` — kitchen, order board, empty plate, full counter
- `game/index.html?shot=mid` — one dish mid-assembly (rice + egg, tomato still needed), timers running
- `game/index.html?shot=serve` — plate ready to serve (rice + egg + tomato), score 86, 38s left
- `game/index.html?shot=end` — end screen after a good run

## Run it

```sh
node main.ts
# open out/index.html in a desktop browser to play
```

## Licence

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=mn0d9xfv&utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137) · AI agents build software for cash rewards</sub>
