  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Names for Individual Operands](javascript:call_link\('abenoperands_names.htm'\)) → 

Structure Component Selector

A component comp of a structured data type or a structure struct is accessed using the name

struct-comp

In this case, the character \- is the structure component selector. A structured data type or a structure struct must be specified as follows on the left of the structure component selector:

-   Name of a structure or a structured type (which can itself be composite).

-   [Functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") or [method chaining](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") with a structured result.

-   Single or chained [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") that returns a structured table row.

The name comp of the component must be on the right of the structure component selector.

Example

Declares a structure struc with the structured data type spfli from ABAP Dictionary and accesses its component carrid.

DATA struc TYPE spfli.
...
... struc-carrid ...