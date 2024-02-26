export class Timer {
    constructor(displayElement) {
        this.elapsedTime = 0;
        this.interval = null;
        this.displayElement = displayElement;
        console.log(displayElement); 
    }

    start() {
        if (this.interval) {
            return; 
        }

        this.interval = setInterval(() => {
            this.elapsedTime++;
            this.display();
        }, 1000);
        console.log('Timer started');
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        console.log('Timer stopped');
    }

    reset() {
        this.stop();
        this.elapsedTime = 0;
        this.display();
    }

    display() {
        if (this.displayElement) {
            this.displayElement.textContent = this.elapsedTime;
        }
    }
}
