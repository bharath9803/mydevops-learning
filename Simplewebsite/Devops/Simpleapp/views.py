from django.shortcuts import render
from django.http import HttpResponse

def greet(request):
    return render(request,'Simpleapp/index.html')