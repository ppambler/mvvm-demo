class Subject {
  constructor(name) {
    this.observers = []
    this.name = name
  }
  addObserver(observer) {
    this.observers.push(observer)
  }
  removeObserver(observer) {
    var index = this.observers.indexOf(observer)
    if (index > -1) {
      this.observers.splice(index, 1)
    }
  }
  notify() {
    let _this = this
    this.observers.forEach(observer => {
      observer.update(_this.name)
    })
  }
}


class Observer {
  constructor(name) {
    this.update = function () {}
    this.name = name
  }
  subscribeTo(subject) {
    subject.addObserver(this)
  }
}


let subject = new Subject('生活美食')
let subject2 = new Subject('音乐')
let observer = new Observer('Ambler')
observer.update = function (topic) {
  console.log(`${this.name} update ${topic}`)
}
observer.subscribeTo(subject) //观察者订阅主题
observer.subscribeTo(subject2)
subject.notify()
subject2.notify()