class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === undefined || callback === undefined || time === null || callback === null) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.length > 0 &&
            this.alarmCollection.find(alarm => alarm['time'] === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push(
            {
                time: time,
                callback: callback,
                canCall: true
            }
        );
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm['time'] !== time);
    }

    getCurrentFormattedTime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`;
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                alarm.canCall = false;
                alarm.callback();
            }}, 1000)
        })
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }
}

