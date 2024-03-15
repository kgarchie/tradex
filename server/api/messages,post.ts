export default defineEventHandler(async (event) => {
    const { message } = await readBody(event)
    console.log(`Received message: ${message}`)
    // TODO: Implement your message handling logic here
    return {
        status: 200,
        body: "Message received!"
    }
});