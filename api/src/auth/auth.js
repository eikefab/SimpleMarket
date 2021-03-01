require('dotenv-safe').config();

const jwt = require('jsonwebtoken');

module.exports = {
    validate(request, response, next) {
        const token = request.headers["x-access-token"];
    
        jwt.verify(token, process.env.secret, (error, decoded) => {
            if (error) return response.status(500).json({
                auth: false,
                message: 'Invalid or no token provided.'
            });
    
            const id = decoded.id;
    
            request.userId = id;
    
            next();
        });
    },

    async register(request, response) {
        const { email, password, name, birthday, address } = request.body;

        // TODO: implement database
    },

    async login(request, response) {
        const { email, password } = request.body;

        // TODO: implement database
    }
}