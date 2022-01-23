from operator import imod
from re import I
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Workers.models import Departments, Employees
from Workers.serializers import DepartmentSerializer, EmployeeSerializer

from django.core.files.storage import default_storage #To Store Photos

# Create your views here.
@csrf_exempt
def departmentApi(request, id=0):  # Optional id
    if request.method == 'GET':    # All records in JSON format
        departments = Departments.objects.all()   
        departments_serializer=DepartmentSerializer(departments, many=True) # Changes data to json
        return JsonResponse(departments_serializer.data, safe=False)  # Tells Django that json is a valid format
    elif request.method == 'POST': # Push 1 record to table
        departments_data = JSONParser().parse(request)
        departments_serializer = DepartmentSerializer(data=departments_data) # Pass JSON into model instance
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Added Succesfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT': # Update 1 record
        department_data = JSONParser().parse(request)
        department = Departments.objects.get(DepartmentId = department_data['DepartmentId']) # Get Existing record
        departments_serializer = DepartmentSerializer(department, data=department_data) # Wrap the new data
        if departments_serializer.is_valid(): #if valid save it
            departments_serializer.save()
            return JsonResponse("Update Successfully", safe=False)
        return JsonResponse("Failed to Update")
    elif request.method == 'DELETE': # Delelee 1 record
        department=Departments.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted Succesfully",  safe=False)

@csrf_exempt
def employeeApi(request, id=0):  # Optional id
    if request.method == 'GET':    # All records in JSON format
        employees = Employees.objects.all()   
        employees_serializer=EmployeeSerializer(employees, many=True) # Changes data to json
        return JsonResponse(employees_serializer.data, safe=False)  # Tells Django that json is a valid format
    elif request.method == 'POST': # Push 1 record to table
        employees_data = JSONParser().parse(request)
        employees_serializer = EmployeeSerializer(data=employees_data) # Pass JSON into model instance
        if employees_serializer.is_valid():
            employees_serializer.save()
            return JsonResponse("Added Succesfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT': # Update 1 record
        employee_data = JSONParser().parse(request)
        employee = Employees.objects.get(EmployeeId = employee_data['EmployeeId']) # Get Existing record
        employees_serializer = EmployeeSerializer(employee, data=employee_data) # Wrap the new data
        if employees_serializer.is_valid(): #if valid save it
            employees_serializer.save()
            return JsonResponse("Update Successfully", safe=False)
        return JsonResponse("Failed to Update")
    elif request.method == 'DELETE': # Delelee 1 record
        employee=Employees.objects.get(EmployeeId=id)
        employee.delete()
        return JsonResponse("Deleted Succesfully",  safe=False)

@csrf_exempt
def SaveFile(request):
    file =  request.FILES['file']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)

