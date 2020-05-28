//schedules and runs tasks
function HourlyTaskScheduler() {
  this.tasks = [];
  this.interval = null;
  this.timeout = null;
}

HourlyTaskScheduler.prototype.start = function() {
  //calculates start of next hour and starts a 1 hr interval for updates on the hour
  const d = new Date();
  const currentHour = d.getHours();
  const startOfNextHr = d.setHours(currentHour + 1, 0, 0, 0);
  const timeUntilFirstUpdate = Date.now() - startOfNextHr;

  const that = this;
  this.timeout = setTimeout(() => {
    that.runScheduledTasks();
    that.interval = setInterval(function() {
      that.runScheduledTasks();
    }, 60 * 60 * 1000);
  }, timeUntilFirstUpdate);
};

HourlyTaskScheduler.prototype.clearPending = function() {
  clearInterval(this.interval);
  clearTimeout(this.timeout);
};

HourlyTaskScheduler.prototype.runScheduledTasks = function() {
  //loop through all available tasks and check if they should trigger
  const currentHr = new Date().getHours();
  this.tasks.forEach(task => {
    //adjust hr to match datetime hr
    const startHrIndex = task.startHr - 1;
    const endHrIndex = task.endHr - 1;

    //check if it's after the start and before end of the interval
    const afterStart = currentHr >= startHrIndex;
    const beforeEnd = currentHr <= endHrIndex;
    if (task.endHr > task.startHr) {
      //if our end is after our beginning
      //we have to land between the beginning and end
      if (afterStart && beforeEnd) {
        task.run();
      }
    } else if (task.startHr > task.endHr) {
      //if our start is after the begining (i.e. 9pm - 5am)
      //either being greater than beginning or less than end is okay
      if (afterStart || beforeEnd) {
        task.run();
      }
    }
  });
};

//registers task to run during given hrs
HourlyTaskScheduler.prototype.registerTask = function(
  task = { run: () => {}, startHr: 0, endHr: 0 }
) {
  this.tasks.push(task);
};

export default HourlyTaskScheduler;
