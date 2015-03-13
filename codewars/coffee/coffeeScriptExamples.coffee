# if (newLevel === 1) {
#   message = 'Out of bed yet?';
# } else if (newLevel === 2) {
#   message = 'Good morning!';
# } else {
#   message = 'You should stop while you can';
# }

switch newLevel
  when 1 then message = 'Time to get up'
  when 2 then message = 'Good morning! Let\'s go run!'
  else message = 'You should stop now, go code something fun'

# if (typeof newLevel !== "undefined" && newLevel !== null){
#   checkLevel(newLevel);
# } else {
#   resetLevel();
# }

if newLevel? then checkLevel(newLevel) else resetLevel()
# if newLevel exists then

