//boolean/string
false+'1' //'false1'
true*'2' //2
true*'a' //NaN
true/'2' //0.5
true/'a' //NaN
false-'3' //-3
false-'a' //NaN
	
// string/string
'1'+'2' //'12'
'a'+'b' //'ab'
'1'*'2' //2
'a'*'b' //NaN
'1'/'2' //0.5
'a'/'b' //NaN
'2'-'1' //1
'a'-'b' //NaN
	
// string/number
'1'+1 //'11'
'a'+1 //'a1'
'2'*1 //2
'a'*1 //NaN
'2'/1 //2
'a'/1 //NaN
'1'-1 //0
'a'-1 //NaN
	
// number/string
1+'1' //'11'
1+'a' //'1a'
1*'1' //2
1*'a' //NaN
1/'2' //0.5
1/'a' //NaN
1-'1' //0
1-'a' //NaN
	
// number/boolean
1+true //2
1*true //1
1/true //1
1-true //0