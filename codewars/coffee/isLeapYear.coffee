# isLeapYear = (year) ->
#   if (year % 4 == 0)
#     if (year % 100 == 0)
#       if (year % 400 == 0)
#         true
#       else
#         false
#     else
#       true
#   else
#     false


isLeapYear = (year) ->
  leap = false
  leap = true if year % 4 == 0
  leap = false if year % 100 == 0
  leap = true if year % 400 == 0
  leap
