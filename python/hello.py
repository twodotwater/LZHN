#!/usr/bin/env python
# -*- coding:utf-8 -*-	#告诉Python解释器，按照UTF-8编码读取源代码
print "hello world"
print '''one
two
three'''
name = int(input("please input a number: "))
print name
print name > 0
if name > 0:
	print "two dot water."
	print u"缩进代码块"
else:
	print "who is",name
print u'显示中文'	# 需要使用Unicode字符串！！
str = ["one","two","three"]
for s in str:
	print s