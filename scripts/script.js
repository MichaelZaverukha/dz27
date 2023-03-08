let time = {
   hours : 0,
   minutes : 0,
   seconds : 0,

   showTime: function() {
      alert(`Зараз ${this.hours}:${this.minutes}:${this.seconds}`);
   },

   addSeconds:function(seconds) {
      let totalseconds = this.seconds + seconds;
      let addMinutes = Math.floor(totalseconds /60);
      this.seconds = totalseconds % 60;
      this.addMinutes(addMinutes);
   },
   addMinutes: function(minutes) {
      let totalMinutes = this.minutes + minutes;  
      let addHours = Math.floor(totalMinutes / 60);  
      this.minutes = totalMinutes % 60;  
      this.addHours(addHours);  
    },
    addHours: function(hours) {
      this.hours = (this.hours + hours) % 24;  
    }
}

time.hours = +prompt('Задайте години');
time.minutes = +prompt('Задайте хвилини');
time.seconds = +prompt('Задайте секунди');
time.showTime();

time.addSeconds(+prompt('Скільки секунд ви хочете додати?'));
time.showTime();

time.addMinutes(+prompt('Скільки хвилин ви хочете додати?'));
time.showTime();

time.addHours(+prompt('Скільки годин ви хочете додати?'));
time.showTime();