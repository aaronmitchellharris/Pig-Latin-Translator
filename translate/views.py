from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render

def IndexView(request):

    return render(request, 'translate/index.html')