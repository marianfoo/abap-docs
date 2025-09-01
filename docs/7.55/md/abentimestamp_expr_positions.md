  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Read Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_read.htm'\)) → 

Timestamp-Like Expression Positions

Timestamp-like expression positions are [read positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry") where [time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry") and [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), and [built-in functions](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry") can be specified, or [functional method calls](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") and [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") whose return value has a [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry"). The following time-stamp-like expression positions exist:

-   Time-stamp-like arguments in time stamp functions

-   Operand time\_stamp of the function
    [utclong\_add( val  = time\_stamp ... )](javascript:call_link\('abenutclong_add.htm'\))

-   Operands time\_stamp2 and time\_stamp1 of the function
    [utclong\_diff( high = time\_stamp2 low = time\_stamp1 )](javascript:call_link\('abenutclong_diff.htm'\))

-   Functional operand positions in statements for time stamps

-   Operand time\_stamp of the statement
    [CONVERT UTCLONG time\_stamp TIME ZONE tz INTO ...](javascript:call_link\('abapconvert_utclong.htm'\))

Example

Specification of a functional method call and a time stamp function as arguments of the time stamp function utclong\_diff.

DATA ts TYPE timestampl.
GET TIME STAMP FIELD ts.
cl\_demo\_output=>display(
  utclong\_diff(
    low =  cl\_abap\_tstmp=>tstmp2utclong( timestamp =  ts )
    high = utclong\_add( val = utclong\_current( )
                        hours = 1 ) ) ).