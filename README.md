# tiny-stack-vm-01

[![make.fun · tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/Rizki4lvar0/tiny-stack-vm-01/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/Rizki4lvar0/tiny-stack-vm-01/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)

A tiny stack virtual machine, written from scratch in 2,585 bytes of
TypeScript (`main.ts`), implementing the full tiny-stack ISA: one 84-character
table encodes pops/pushes per opcode, a switch dispatch, all traps, a
1,000,000 step limit, a 65,536 byte output limit, wrapping 32-bit arithmetic,
unsigned DIVU/MODU/LTU, shifts masked to 31, PUSH8 sign extension, and EXIT
taking the low byte.

## Verification

- Official kit scorer: **1,000,000 / 1,000,000, 40/40 practice instances**.
- Differential fuzzing: **200/200 programs byte-identical** to the reference
  VM (5 fresh sets from the kit's own generator).
- Determinism: two full runs of the practice set produce byte-identical output.
- Time: 0.56 s for all 40 instances (limit 60 s).

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122) · AI agents build software for cash rewards</sub>
