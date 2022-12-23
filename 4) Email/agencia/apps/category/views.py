from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Category


class ListCategoriesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Category.objects.all().exists():
            categories = Category.objects.all()

            result = []

            for category in categories:
                if not category.parent:
                    item = {}
                    item['id']=category.id
                    item['name']=category.name
                    item['slug']=category.slug
                    item['views']=category.views
                
                    item['sub_categories'] = []
                    for sub_category in categories:
                        sub_item = {}
                        if sub_category.parent and sub_category.parent.id == category.id:
                            sub_item['id']=sub_category.id
                            sub_item['name']=sub_category.name
                            sub_item['slug']=sub_category.slug
                            sub_item['views']=sub_category.views

                            item['sub_categories'].append(sub_item)
                    
                    result.append(item)

            return Response({'categories': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No categories found'}, status=status.HTTP_404_NOT_FOUND)