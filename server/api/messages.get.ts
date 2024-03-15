export default defineEventHandler(async (event) => {
    const sse = createEventStream(event)

    const interval = setInterval(() => {
        sse.push('Hello, world!')
    }, 2000)

    sse.onClosed(() => {
        clearInterval(interval)
    })

    setTimeout(() => {
        sse.close()
    }, 10000)

    return sse.send()
});