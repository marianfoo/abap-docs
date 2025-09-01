---
title: "Built-In Functions - Syntax"
description: |
  -   Functions with an Unnamed Argument(#abenbuilt-in-functions-syntax-1--------functions-with-named-arguments---@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_2) -   Obscuring with Methods(#@@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_3) In functions with named arguments, there is usually a main argument val and
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions_syntax.htm"
abapFile: "abenbuilt_in_functions_syntax.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenbuilt", "functions", "syntax"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Predefined Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in.htm) →  [Built-In Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions.htm) → 

Built-In Functions - Syntax

-   [Functions with an Unnamed Argument](#abenbuilt-in-functions-syntax-1--------functions-with-named-arguments---@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_2)

-   [Obscuring with Methods](#@@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_3)

In functions with named arguments, there is usually a main argument val and additional, possibly also optional, arguments. The following sections show the general syntax for calling built-in functions.

Functions with an Unnamed Argument

Syntax

... func( arg ) ...

The syntax for functions with an unnamed argument is the same as the syntax for calling functional methods with an input parameter. func is the built-in function and the argument arg is an operand whose data type matches the function. The blanks after the opening parentheses and before the closing parentheses are relevant.

Example

The built-on function [line\_exists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenline_exists_function.htm) has an unnamed argument that expects a table expression.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
IF line\_exists( itab\[ 1 \] ).
  ...
ENDIF.

Functions with Named Arguments

Syntax

... func( val = arg p1 = arg1 p2 = arg2 ... ) ...

Functions with one or more named arguments are bound to keyword parameters in the same way as when functional methods are called with multiple input parameters. Operands can be specified for the arguments whose data type matches the corresponding parameter. The blanks after the opening parentheses and before the closing parentheses are relevant. If one of these functions only has one argument or only the main argument is to be populated, the syntax can be simplified as follows:

... func( arg ) ...

Example

The built-in function [condense](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencondense_functions.htm) has named arguments and can, for example, be called as follows.

DATA(str1) = condense( \`...\` ).
DATA(str2) = condense( val = \`...\` ).
DATA(str3) = condense( val = \`...\`  del = \` \` ).

Obscuring with Methods

Within a class, a built-in function is always obscured by [methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_glosry.htm "Glossary Entry") of the class if they have the same name, regardless of the number and type of arguments in the function. The function is also obscured regardless of the number and type of method parameters. This also takes place in method calls for which no selector \=> or \-> is specified in front of the method name:

-   A [static method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_method_glosry.htm "Glossary Entry") obscures a built-in function with the same name in all methods of the associated class.

-   An [instance method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_method_glosry.htm "Glossary Entry") obscures a built-in function with the same name in the instance methods of the associated class.

Note

Methods should never be given the same name as a built-in function.

Example

The following class returns a syntax error. The strlen specified on the right side of the assignment indicates the method of the class and not the built-in function. It cannot be specified in this operand position since it is not a functional method with return code.

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