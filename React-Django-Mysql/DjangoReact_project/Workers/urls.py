# from django.conf.urls import url   # Deprecated library to manage urls with regex url()
from django.urls import include, re_path  #New library to manage urls with regex
from Workers import views


urlpatterns = [
    re_path(r'^department$',  views.departmentApi),
    re_path(r'^department/([0-9]+)$', views.departmentApi), # The data commited will receive id in the url
    re_path(r'^employee$',  views.employeeApi),
    re_path(r'^employee/([0-9]+)$', views.employeeApi)# The data commited will receive id in the url
]
