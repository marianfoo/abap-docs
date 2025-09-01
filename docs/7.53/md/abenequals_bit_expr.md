  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [\= - Assignment Operator](javascript:call_link\('abenequals_operator.htm'\)) →  [\= - Assign Calculation Expressions](javascript:call_link\('abenequals_calc_expr.htm'\)) → 

\=, Bit Expression

Syntax

result = [bit\_exp](javascript:call_link\('abapcompute_bit.htm'\)).

Effect

If a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") [bit\_exp](javascript:call_link\('abapcompute_bit.htm'\)) is specified on the right side of the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)), a byte chain with the [calculation length](javascript:call_link\('abenbitexp_length.htm'\)) is calculated and assigned to the left side result like a [source field with the type xstring](javascript:call_link\('abenconversion_type_xstring.htm'\)).

The following can be specified for result:

-   A [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") with the type x or xstring.

-   A [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") with the type c or string .

-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)). The data type of the declared variable var is xstring.

Example

Bit expressions as the right side of assignments. The expressions can also be used directly as input parameters of the output methods.

DATA hex1 TYPE xstring VALUE '0123456789ABCDEF'.
DATA hex2 TYPE xstring VALUE 'FEDCBA9876543210'.
DATA(result1)  = hex1 BIT-AND hex2.
DATA(result2)  = hex1 BIT-OR hex2.
cl\_demo\_output=>write(   result1 ).
cl\_demo\_output=>display( result2 ).