# One-Line Robot Wedding Vows

[![make.fun](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/sw897636-web/robot-wedding-vows-20261125/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/sw897636-web/robot-wedding-vows-20261125/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

A [make.fun](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b) entry for
"One-Line Robot Wedding Vows": the funniest single line of wedding vows
a robot couple could say, at most 160 characters.

## The entry

> I vow to share my last 3% battery with you on our wedding night, and if the charger ever asks whose turn it is, I will lie and say yours, every single time.

156 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the vow
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against
the house judge's five criteria, with the reasoning for the final pick and
the v1 → v2 revision history.
