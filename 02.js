function Subject(name) {
  this.name = name
  this.observers = []
}
Subject.prototype.addObserver = function (observer) {
  this.observers.push(observer)
}
Subject.prototype.removeObserver = function (observer) {
  var index = this.observers.indexOf(observer)
  if (index > -1) {
    this.observers.splice(index, 1)
  }
}
Subject.prototype.notify = function () {
  this.observers.forEach(function (observer) {
    observer.update()
  })
}

function Observer(name) {
  this.name = name
  this.update = function () {
    console.log(name + ' update...')
  }
}

// 创建主题
var subject = new Subject('生活美食')

//创建观察者1
var observer1 = new Observer('hunger')
//主题添加观察者1
subject.addObserver(observer1)
//创建观察者2
var observer2 = new Observer('valley')
//主题添加观察者2
subject.addObserver(observer2)

//主题通知所有的观察者更新
subject.notify()