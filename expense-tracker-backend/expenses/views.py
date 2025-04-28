from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Expense
from .serializers import ExpenseSerializer

@api_view(['GET', 'POST'])
def expense_list(request):
    """
    Handles GET and POST requests for listing all expenses and creating a new expense.
    - GET: Returns a list of all expenses.
    - POST: Accepts data to create a new expense entry.
    """
    if request.method == 'GET':
        # Retrieve all expense records from the database
        expenses = Expense.objects.all()
        # Serialize the expense data into a JSON format
        serializer = ExpenseSerializer(expenses, many=True)
        return Response(serializer.data)  # Return serialized data in the response

    elif request.method == 'POST':
        # Deserialize the incoming data to validate and create a new expense
        serializer = ExpenseSerializer(data=request.data)
        if serializer.is_valid():
            # Save the new expense record to the database
            serializer.save()
            # Return the created expense data along with a 201 status code
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # If the data is invalid, return errors with a 400 status code
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def expense_detail(request, pk):
    """
    Handles PUT and DELETE requests for updating and deleting a specific expense.
    - PUT: Updates an existing expense based on the provided primary key (pk).
    - DELETE: Deletes the specified expense based on its pk.
    """
    try:
        # Attempt to retrieve the expense record by its primary key (pk)
        expense = Expense.objects.get(pk=pk)
    except Expense.DoesNotExist:
        # If the expense doesn't exist, return a 404 Not Found response
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        # Deserialize the incoming data and update the expense record
        serializer = ExpenseSerializer(expense, data=request.data)
        if serializer.is_valid():
            # Save the updated expense data to the database
            serializer.save()
            return Response(serializer.data)  # Return the updated expense data
        # If the data is invalid, return errors with a 400 status code
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        # Delete the specified expense record from the database
        expense.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)  # No content response for successful deletion
