# Getting started

## Basic info

C# is a case-sensitive language, meaning that the C# compiler considers the words console and Console as different as the words cat and dog. Sometimes, the error message can be a bit misleading. You'll need to understand the true reason why the error exists, and that comes through learning more about C#'s syntax.

Similarly, if you used single-quotation marks to surround the literal string Hello World! like so:

**Correct**:
``` C#
Console.WriteLine("Hello World!");
``` 

**Incorrect**:
``` C#
console.writeLine("Hello World!");
// (1,1): error CS0103: The name 'console' does not exist in the current context
``` 


``` C#
Console.WriteLine('Hello World!'); 
// (1,19): error CS1012: Too many characters in character literal
``` 


To print an entire message to the output console, the first technique used Console.WriteLine(). At the end of the line, it added a line feed similar to how you'd create a new line of text by pressing Enter or Return.

To print to the output console, but without adding a line feed at the end, the second technique used Console.Write(). So, the next call to Console.Write() prints an additional message to the same line.

The WriteLine() part is called a method. You can always spot a method because it has a set of parentheses after it. Each method has one job. 

The parentheses are known as the method invocation operator

The Console part is called a class. 

The period is the member access operator.

Use Console.WriteLine("Your message here");
Capitalize Console, Write, and Line
Use the correct punctuation, because it has a special role in C#
If you make a mistake, just spot it, fix it and rerun; you can't really fail


# What is .NET

The .NET compiler is a program that converts the source code into a special language called intermediate language (IL).

All software is built in layers, meaning software runs at various levels of abstraction on a computer:

At the lowest level, software communicates directly with your computer's hardware. It controls the flow of data on the motherboard, processors, memory, and hard drives.
At the next level, software allows the end user to provide instructions through an operating system.
At the next level, software like .NET provides a way for you to develop and run applications.
At the next level, application frameworks and libraries of functionality allow you to quickly build rich applications by using less effort than older development methods allowed.

``` C#
using System;

public class Program
{
  public static void Main()
  {
    Console.WriteLine("Hello world!");
  }
}
``` 

The code public static void Main() and its set of curly braces define a type of code block called a method. A method contains a grouping of code that works toward a single purpose or responsibility in your software system.

Methods are organized inside other code blocks called classes. A class can contain one or more methods. Ideally, all of the methods in a class have a related purpose in the system. The class in the preceding code is named Program.

In your inserted line of code, Console.WriteLine() is calling, or running, the method WriteLine(). The method WriteLine() is contained in the class Console.

1. A command to compile your new code invokes the C# compiler.

2. The C# compiler ensures your code can be compiled and is free from syntax errors. If it can't compile your code, the compiler stops and sends an error message back to the Output pane.

3. If the C# compiler succeeds, the .NET runtime opens the newly compiled .NET assembly. By default, it looks in a class named Program to find a method named Main() to begin running the instructions.

4. Instruction by instruction, the .NET runtime evaluates each line of code. It runs the instruction and moves to the next line of code.

5. In this case, when the instruction to print the words "Hello world!" finishes, the running path continues to the next line but finds nothing. The path ends, and the .NET runtime removes the program from its memory. Meanwhile, the output from the WriteLine() instruction is delivered back to your web browser.

## .NET commands

- Manage dependencies: Commands in this category cover installation, removal, cleanup after package installations, and package updates.
- Run programs: The .NET Core tool can help you manage flows in your application development. Examples of application flows are running tests, building code, and running migrate commands to upgrade projects.
- Author and publish packages: Several commands can help you with tasks like creating a compressed package and pushing the package to a registry.

## Packages

```
dotnet add package <dependency name>
``` 
```
dotnet restore 
```
``` 
dotnet remove package <name of dependency>
``` 

## Updates

Find and update outdated packages
The dotnet list package --outdated command lists outdated packages. This command can help you learn when newer versions of packages are available. Here's a typical output from the command:

Output

Copy
Top-level Package      Requested   Resolved   Latest
> Humanizer            2.7.*       2.7.9      2.8.26
Here are the meanings of the names of the columns in the output:

Requested: The version or version range that you've specified.
Resolved: The actual version that has been downloaded for the project that matches the specified version.
Latest: The latest version available for update from NuGet.
The recommended workflow is to run the following commands, in this order:

Run dotnet list package --outdated. This command lists all the outdated packages. It provides information in the Requested, Resolved, and Latest columns.
Run dotnet add package <package name>. If you run this command, it will try to update to the latest version. Optionally, you can pass in --version=<version number/range>.

## Debugging

*A debugger is a software tool used to observe and control the execution flow of your program with an analytical approach*

- Control of your program execution. You can pause your program and run it step by step, which allows you to see which code is executed and how it affects your program's state.
- Observation of your program's state. For example, you can look at the value of your variables and function parameters at any point during your code execution.


- System.Console
  - Always enabled and always writes to the console.
  - Useful for information that your customer might need to see in the release.
  - Because it's the simplest approach, it's often used for ad-hoc temporary debugging. This debug code is often never checked in to source control.


- System.Diagnostics.Trace
  - Only enabled when TRACE is defined.
  - Writes to attached Listeners, by default, the DefaultTraceListener.
  - Use this API when you create logs that will be enabled in most builds.


- System.Diagnostics.Debug
  - Only enabled when DEBUG is defined (when in debug mode).
  - Writes to an attached debugger.
  - Use this API when you create logs that will be enabled only in debug builds.

```C#
Console.WriteLine("This message is readable by the end user.");
Trace.WriteLine("This is a trace message when tracing the app.");
Debug.WriteLine("This is a debug message just for developers.");
``` 

## Define TRACE and DEBUG constants

``` XML
<PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Debug|AnyCPU'">
    <DefineConstants>DEBUG;TRACE</DefineConstants>
</PropertyGroup>
<PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Release|AnyCPU'">
    <DefineConstants>TRACE</DefineConstants>
</PropertyGroup>
``` 

## Conditional tracing

``` C#
if(count == 0)
{
    Debug.WriteLine("The count is 0 and this may cause an exception.");
}
```

``` C#
Debug.WriteLineIf(count == 0, "The count is 0 and this may cause an exception.");
``` 

``` C#
bool errorFlag = false;  
System.Diagnostics.Trace.WriteIf(errorFlag, "Error in AppendData procedure.");  
System.Diagnostics.Debug.WriteIf(errorFlag, "Transaction abandoned.");  
System.Diagnostics.Trace.Write("Invalid value for data request");
```

## Verify that certain conditions exist

Assert statement, tests a condition, which you specify as an argument to the Assert statement. 

``` C#
int IntegerDivide(int dividend, int divisor)
{
    Debug.Assert(divisor != 0, $"{nameof(divisor)} is 0 and will cause an exception.");

    return dividend / divisor;
}
``` 