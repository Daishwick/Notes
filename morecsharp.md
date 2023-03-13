## Variable name rules

- alphanumeric numbers or underscore
- not a number
- cannot be a c# keyword - such as string
- They are case sensitive 
- Variable names should be camelCase;
- should eb meaningful and descriptive;
- 2 or more words appended together for more descriptiveness
- They shouldn't include the data type - that's old school (strName)

examples:
```C#
char userOption;

int gameScore;

decimal particlesPerMillion;

bool processedCustomer;
```

- You must assign (set) a value to a variable before you can retrieve (get) a value from a variable.
- You can initialize a variable by assigning a value to the variable at the point of declaration.
- Assignment happens from right to left.
- You can use a single equals character as the assignment operator.
- To retrieve the value from the variable, you can merely use the variable's name.

- The var keyword tells the compiler to infer the data type of the variable based on the value to which it is initialized.
- You'll likely see the var keyword as you read other people's code; however, you should use the actual data type when possible.

## Character escape sequences

Escape character sequence: \
\n add a new line
\t add a tab

```C#
Console.WriteLine("Hello\nWorld!");
Console.WriteLine("Hello\tWorld!");

Hello
World!
Hello	World!
```

If you need a string within double quotations; 
/"  says that " is not part of the string.
```C#
Console.WriteLine("Hello" \"World\"");
```
valid way to go to a path source: 
```#C
Console.WriteLine("c:\\source\\repos");
```

To create a verbatim string, use the @ directive before the literal string. Two consecutive double-quote characters ("") are printed as a single double-quote character (") in the output string.

```C#
Console.WriteLine(@"   c:\source\repos   
      (""this is where your code goes"")");
```

\u  + 4 character code represents a character in Unicode (UTF-16)

There are several caveats here. First, some consoles like the Windows Command Prompt will not display all Unicode characters. It will replace those characters with question-mark characters instead. Also, the examples used here are UTF-16. Some characters require UTF-32, and therefore require a different escape sequence. This is a complicated subject, and this module is only aimed at showing you what's possible. Depending on your needs, you may need to spend quite a bit of time learning and working with Unicode characters in your applications.

- Use character escape sequences when you need to insert a special character into a literal string, like a tab \t, new line \n, or a double quotation mark \".
- Use an escape character for the backslash \\ when you need to use a backslash in all other scenarios.
- Use the @ directive to create a verbatim string literal that keeps all whitespace formatting and backslash characters in a string.
- Use the \u plus a four-character code to represent Unicode characters (UTF-16) in a string.
- Unicode characters may not print out correctly depending on the application.

```C#
string firstName = "Bob";
string greeting = "Hello";
Console.WriteLine(greeting + " " + firstName + "!");
```


- String concatenation allows you to combine smaller literal and variable strings into a single string.
- Avoid creating intermediate variables if adding them doesn't increase readability.

```C#
string projectName = "First-Project";
Console.WriteLine($@"C:\Output\{projectName}\Data");
```

## Math

- You can perform mathematical-like addition operations on numbers.
- Both string concatenation and addition use the plus + symbol. This is called overloading an operator, and the compiler infers the proper use based on the data types on which it's operating.
- When it can, the C# compiler will implicitly convert an int into a string if it's obvious that the developer is trying to concatenate the string representation of a number for presentation purposes.
- You can use parentheses to define an order of operations to explicitly tell the compiler that you want to perform certain operations before other operations.

``` C#
string firstName = "Bob";
int widgetsSold = 7;
Console.WriteLine(firstName + " sold " + (widgetsSold + 7) + " widgets.");
```