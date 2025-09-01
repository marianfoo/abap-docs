  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm) →  [Reading Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions_read.htm) → 

Time-Stamp-Like Expression Positions

Time-stamp-like expression positions are [reading positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreading_position_glosry.htm "Glossary Entry") in which [time stamp fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_field_glosry.htm "Glossary Entry") plus [constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_function_glosry.htm "Glossary Entry") can be specified, or [functional method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return values have a [time stamp type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_type_glosry.htm "Glossary Entry"). The following time-stamp-like expression positions exist:

-   Time-stamp-like arguments in time stamp functions

-   Operand time\_stamp of the function
    [utclong\_add( val  = time\_stamp ... )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong_add.htm)

-   Operands time\_stamp2 and time\_stamp1 of the function
    [utclong\_diff( high = time\_stamp2 low = time\_stamp1 )](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong_diff.htm)

-   Functional operand positions in statements for time stamps

-   Operand time\_stamp of the statement
    [CONVERT UTCLONG time\_stamp TIME ZONE tz INTO ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_utclong.htm)

Example

Specifies a functional method call and a time stamp function as arguments of the time stamp function utclong\_diff.

DATA ts TYPE timestampl.
GET TIME STAMP FIELD ts.
cl\_demo\_output=>display(
  utclong\_diff(
    low =  cl\_abap\_tstmp=>tstmp2utclong( timestamp =  ts )
    high = utclong\_add( val = utclong\_current( )
                        hours = 1 ) ) ).