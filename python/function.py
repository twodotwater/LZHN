#!/usr/bin/env python
# -*- coding:utf-8 -*-	#告诉Python解释器，按照UTF-8编码读取源代码
import random
# 定义函数
def my_abs(x):	# 定义函数的语法
	if not isinstance(x,(int,float)):	# 参数类型判断
		raise TypeError('bad operand type')	# 异常抛出
	if x >= 0:
		return x
	else :
		return -x
	
# 参数类型判断
def destiny(name1,name2):
	if not isinstance(name1,(str,)) or not isinstance(name2,(str,)):
		raise TypeError('bad operand type')
	n = random.randint(0,9)
	if n % 2 == 0:
		print name1 +" "+ name2 +" together"
		return n,"together"
	else:
		print name1 +" "+ name2 +" miss"
		return n,"miss"
		
# 带默认参数
def person(name,age,city='beijing'):	
	print name +" is "+str(age)+" years old,living in "+city+"."

# 默认参数陷阱：默认参数也是一个变量，每次调用值可能改变；解决方案：使用None不可变对象
def add_end(l = []):	
	print "********"
	print "before: "
	print l
	l.append('end')
	print "after: "
	print l
	return l
	
# 测试默认参数陷阱
# add_end(['one','two'])
# add_end([1,2])
# add_end()
# add_end()

# 可变参数
def variable_param(*param):
	for p in param:
		print p
		
# 测试可变参数
# variable_param(1,2,3)
# l = [4,5,6]
# variable_param(*l) # 在list或tuple名前加*
# t = (7,8,9)
# variable_param(*t)

# 关键字参数：dict
def key_param(name='li',age=25,**keywords):
	print name,"-",str(age),"-",keywords
	
# 测试关键字参数：dict
# key_param()
# key_param('liu',25)
# key_param('wang',26,one='one')

# 混合参数
def complex_param(name,age=25,*telephone,**address):
	print name,'-',age,'-',telephone,'-',address
	
# 测试混合参数
complex_param('li')
complex_param('yu','age',{1:'one',2:'two'})
complex_param('liu',26,123,345,city='hn')
complex_param('wang',26,111,222,333,city='hn',road='tzp')