  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Built-In Functions](javascript:call_link\('abenbuilt_in_functions.htm'\)) → 

Built-In Functions, Obscured by Methods

Within a class, a built-in function is always hidden by [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") of the class if they have the same name, regardless of the number and type of its arguments. The function is also hidden regardless of the number and type of method parameters. This also takes place in method calls for which no selector \=> or \-> is specified in front of the method name:

-   A [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") hides a built-in function with the same name in all methods of the associated class.

-   An [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") hides a built-in function with the same name in the instance methods of the associated class.

The function is hidden regardless of the operand position. More specifically, any built-in functions called as arguments of other functions are also hidden.

Hint

Methods should never be given the same name as a built-in function.

Example

The following class returns a syntax error. The specification of strlen on the right side of the assignment indicates the method of the class and not the built-in function. It cannot be specified in this operand position since it is not a functional method with a return value.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
    CLASS-METHODS strlen IMPORTING text TYPE string
                         EXPORTING len  TYPE i.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(len) = strlen( \`xxx\` ).
  ENDMETHOD.
  METHOD strlen.
    ...
  ENDMETHOD.
ENDCLASS.