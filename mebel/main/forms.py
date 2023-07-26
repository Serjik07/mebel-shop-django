from django.forms import ModelForm, TextInput, Textarea
from .models import Articles

class ArticlesForm(ModelForm):
    class Meta:
        model = Articles
        fields = ["name","price","type_model","img_url"]

        widgets = {
            "name" : TextInput(attrs={
                'placeholder': 'Title',
                'class' : "form_input",
            }),
            "price" : TextInput(attrs={
                'placeholder': 'Price'
            }),
            "type_model" : TextInput(attrs={
                'placeholder': 'Type_model(accessory,decoration,furniture)'
            }),
            "img_url" : Textarea(attrs={
                'placeholder': 'Img url'
            }),
        }
