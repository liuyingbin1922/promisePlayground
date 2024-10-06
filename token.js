class CSTFToken {
    constructor() {
        this.token_prefix = 'cstf_token';
        this.token = new Map();
        this.tokenLength = 32;
    }

    generateToken (sessionId) {
        const token = this.randomString();
        this.token.set(sessionId, token);
        return token;
    }

    validateToken(sessionId, token) {
        if (!this.token.has(sessionId)) return false;

        if (this.token.get(sessionId) && this.token.get(sessionId) === token) {
            this.token.delete(sessionId);
            return true;
        }
        return false;
    }

    randomString() {
        let result = '';
        const chars = 'skdskdjskdjskd38748738473483874u';
        for (let i = 0; i < this.tokenLength; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    getTokenName() {
        return this.token;
    }

}