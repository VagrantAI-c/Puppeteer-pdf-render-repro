# Puppeteer crash on PDF render, repro

## Repro steps
1. Clone repo
2. Run `npm ci`
3. Run `npm run build`
4. Run `npm run serve`

## Actual result
```
\dist\main.js:3113
    return new Readable({
           ^

TypeError: Readable is not a constructor
    at Object.getReadableFromProtocolStream (\dist\main.js:3113:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Page.pdf (\dist\main.js:6019:26)
    at async \dist\main.js:35011:5
```

## Expected result
No error at `new Readable()` call

## Environment
Windows 10 Pro, Node 18.3.0, Puppeteer 14.4.0
