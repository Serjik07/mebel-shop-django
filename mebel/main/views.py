from django.shortcuts import render,redirect
from .models import Articles
from django.views.generic import UpdateView,DeleteView
from .forms import ArticlesForm
# Create your views here.

class ArticleDeleteView(DeleteView):
    model = Articles
    success_url = "/"
    template_name = "main/delete.html"


class ArticleUpdateView(UpdateView):
    model = Articles
    template_name = "main/update.html"
    fields = ["name","price","type_model","img_url"]



def home(request):
    cards = Articles.objects.all()
    form = ArticlesForm()

    if request.method == 'POST':
        form = ArticlesForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/")
        else: 
            print("EROR")

    return render(request,'main/index.html',{"form":form,"cards":cards})