// 数字枚举 可以反向映射
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter) // 1
console.log(Role)
//  {
//   "1": "Reporter",
//   "2": "Developer",
//   "3": "Maintainer",
//   "4": "Owner",
//   "5": "Guest",
//   "Reporter": 1,
//   "Developer": 2,
//   "Maintainer": 3,
//   "Owner": 4,
//   "Guest": 5
// }

// 字符串枚举
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}
console.log(Message);
// {
//   "Success": "恭喜你，成功了",
//   "Fail": "抱歉，失败了"
// }

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}
console.log(Answer);
// {
//   "0": "N",
//   "N": 0,
//   "Y": "Yes"
// }

// 常量枚举 直接不编译 不需要一个对象，需要对象的值
const enum Month {
  Jan,
  Feb,
  Mar,
  Apr = Month.Mar + 1,
  // May = () => 5
}
let month = [Month.Jan]
console.log(month) // [0]