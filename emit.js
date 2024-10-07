class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(eventName, callback) {
        if (!this.events[eventName])  {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    off(eventName, callback) {
        if (!this.events[eventName]) return;
        this.events[eventName].filter(cb => cb !== callback);
    }

    emit(eventName, ...args) {
        this.events[eventName].forEach(cb => cb.apply(this, args))
    }
}