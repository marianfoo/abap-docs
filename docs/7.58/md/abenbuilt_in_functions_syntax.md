  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Built-In Functions](javascript:call_link\('abenbuilt_in_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20Functions%2C%20Syntax%2C%20ABENBUILT_IN_FUNCTIONS_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Built-In Functions, Syntax

-   [Functions with an Unnamed Argument](#abenbuilt-in-functions-syntax-1-------functions-with-named-arguments---@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_2)

In functions with named arguments, there is usually a main argument val and the option of specifying further arguments, some of which are optional. The following sections show the general syntax for calling built-in functions.

Functions with an Unnamed Argument   

Syntax

... func( arg ) ...

In functions with an unnamed argument, the syntax is the same as the syntax for calling functional methods with one input parameter. func is the built-in function and the argument arg is an operand whose data type matches the function. The blanks after the opening parentheses and before the closing parentheses are relevant.

Example

The built-in function [line\_exists](javascript:call_link\('abenline_exists_function.htm'\)) has an unnamed argument that expects a table expression.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
IF line\_exists( itab\[ 1 \] ).
  ...
ENDIF.

Functions with Named Arguments   

Syntax

... func( val = arg p1 = arg1 p2 = arg2 ... ) ...

Functions with one or more named arguments are bound to [keyword parameters](javascript:call_link\('abenkeyword_parameter_glosry.htm'\) "Glossary Entry") in the same way as when functional methods are called with multiple input parameters. Operands can be specified for the arguments whose data type matches the corresponding parameter. The blanks after the opening parentheses and before the closing parentheses are relevant. If such a function has only one argument, or if only the main argument is to be supplied, the syntax can be simplified as follows:

... func( arg ) ...

Example

The built-in function [condense](javascript:call_link\('abencondense_functions.htm'\)) has named arguments and can, for example, be called as follows.

FINAL(str1) = condense( \`...\` ).
FINAL(str2) = condense( val = \`...\` ).
FINAL(str3) = condense( val = \`...\`  del = \` \` ).