module.exports = handler => {
    return async (req, res) => {
        try {
            await handler(req, res);
        } catch(error) {
            throw new Error("Unresolved Promise");
            console.log(error);
        }
    }
}