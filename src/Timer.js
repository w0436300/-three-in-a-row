export class Timer {
    constructor() {
        this.count = 0;
        this.interval = null;
    }

    start() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.count++;
                console.log(this.count); 
            }, 1000); 
        }
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    reset() {
        this.stop(); // Stop any existing timer
        this.count = 0; // Reset count to 0
    }

    getCount() {
        return this.count;
    }
}
