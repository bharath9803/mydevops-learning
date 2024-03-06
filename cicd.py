def add_numbers(num1, num2):
    """Function to add two numbers."""
    return num1 + num2

# Input numbers
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Call the function and display the result
result = add_numbers(num1, num2)
print("The sum of", num1, "and", num2, "is:", result)
