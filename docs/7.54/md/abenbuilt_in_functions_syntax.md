---
title: "Built-In Functions - Syntax"
description: |
  -   Functions with an Unnamed Argument(#abenbuilt-in-functions-syntax-1--------functions-with-named-arguments---@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_2) In functions with named arguments, there is usually a main argument val and additional, possibly also optional, arguments. The following sections
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_functions_syntax.htm"
abapFile: "abenbuilt_in_functions_syntax.htm"
keywords: ["do", "if", "method", "data", "types", "abenbuilt", "functions", "syntax"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in.htm) →  [Built-In Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_functions.htm) → 

Built-In Functions - Syntax

-   [Functions with an Unnamed Argument](#abenbuilt-in-functions-syntax-1--------functions-with-named-arguments---@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_2)

In functions with named arguments, there is usually a main argument val and additional, possibly also optional, arguments. The following sections show the general syntax for calling built-in functions.

Functions with an Unnamed Argument

Syntax

... func( arg ) ...

The syntax for functions with an unnamed argument is the same as the syntax for calling functional methods with an input parameter. func is the built-in function and the argument arg is an operand whose data type matches the function. The blanks after the opening parentheses and before the closing parentheses are relevant.

Example

The built-on function [line\_exists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenline_exists_function.htm) has an unnamed argument that expects a table expression.

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

The built-in function [condense](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencondense_functions.htm) has named arguments and can, for example, be called as follows.

DATA(str1) = condense( \`...\` ).
DATA(str2) = condense( val = \`...\` ).
DATA(str3) = condense( val = \`...\`  del = \` \` ).