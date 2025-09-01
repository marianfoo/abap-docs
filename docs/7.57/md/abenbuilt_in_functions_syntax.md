  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in.htm) →  [Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Built-In Functions, Syntax, ABENBUILT_IN_FUNCTIONS_SYNTAX, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Built-In Functions, Syntax

-   [Functions with an Unnamed Argument](#@@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_1)
-   [Functions with Named Arguments](#@@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_2)

In functions with named arguments, there is usually a main argument val and the option of specifying further arguments, some of which are optional. The following sections show the general syntax for calling built-in functions.

Functions with an Unnamed Argument   

Syntax

... func( arg ) ...

In functions with an unnamed argument, the syntax is the same as the syntax for calling functional methods with an input parameter. func is the built-in function and the argument arg is an operand whose data type matches the function. The blanks after the opening parentheses and before the closing parentheses are relevant.

Example

The built-in function [line\_exists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenline_exists_function.htm) has an unnamed argument that expects a table expression.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
IF line\_exists( itab\[ 1 \] ).
  ...
ENDIF.

Functions with Named Arguments   

Syntax

... func( val = arg p1 = arg1 p2 = arg2 ... ) ...

Functions with one or more named arguments are bound to [keyword parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenkeyword_parameter_glosry.htm "Glossary Entry") in the same way as when functional methods are called with multiple input parameters. Operands can be specified for the arguments whose data type matches the corresponding parameter. The blanks after the opening parentheses and before the closing parentheses are relevant. If such a function has only one argument, or if only the main argument is to be supplied, the syntax can be simplified as follows:

... func( arg ) ...

Example

The built-in function [condense](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencondense_functions.htm) has named arguments and can, for example, be called as follows.

FINAL(str1) = condense( \`...\` ).
FINAL(str2) = condense( val = \`...\` ).
FINAL(str3) = condense( val = \`...\`  del = \` \` ).