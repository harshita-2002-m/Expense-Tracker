from django.db import models

class Expense(models.Model):
    # The amount of the expense (stored as a decimal for precision)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    
    # The category of the expense (e.g., "Food", "Utilities", etc.)
    category = models.CharField(max_length=100)
    
    # A detailed description of the expense (optional)
    description = models.TextField(blank=True)  # blank=True allows the description to be empty
    
    # The date the expense was incurred
    date = models.DateField()

    def __str__(self):
        # String representation of the expense, displaying category and amount
        return f"{self.category} - ${self.amount}"
