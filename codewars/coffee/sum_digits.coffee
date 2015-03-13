sumDigits = (number) ->
  return Math.abs(number).toString().split('').reduce((Vp,Vc) -> +Vp + +Vc )

console.log(sumDigits('123456'))
# 21
