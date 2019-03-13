var data = {
  name: 'hunger',
  friends: [1, 2, 3]
}
observe(data)

console.log(data.name)
data.name = 'valley'
data.friends[0] = 4


function observe(data) {
  if (!data || typeof data !== 'object') return
  for (var key in data) {
    let val = data[key] //注意点1：这里是 let 不是 var，想想为什么
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function () {
        console.log(`get ${val}`)
        return val
      },
      set: function (newVal) {
        console.log(`changes happen: ${val} => ${newVal}`)
        val = newVal
      }
    })
    if (typeof val === 'object') {
      observe(val)
    }
  }
}