  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

sql\_exp - sql\_cast

Syntax

... CAST( operand AS dtype ) ...

Effect

Type adjustment in ABAP SQL. A cast expression [converts](javascript:call_link\('abensql_cast_rules.htm'\)) the value of the operand operand to the dictionary type specified by dtype. SQL expressions, which have a type that matches dtype (as shown below), can be used as an operand operand. The result is a representation of the source value in type dtype.

[Built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary with the following syntax can be specified for dtype:

-   Numeric types

-   INT1

-   INT2

-   INT4

-   INT8

-   DEC*\[*( len*\[*, decimals*\]* )*\]*

-   FLTP

-   Character-like types

-   CHAR*\[*( len )*\]*

-   SSTRING*\[*( len )*\]*

-   Byte-like types

-   RAW*\[*( len )*\]*

-   Date types/time types

-   DATS

-   TIMS

-   Character-like types with special semantics

-   NUMC*\[*( len )*\]*

-   CLNT

-   LANG

-   Currency fields and quantity fields

-   CURR*\[*( len*\[*, decimals*\]* )*\]*

-   CUKY

-   QUAN*\[*( len*\[*, decimals*\]* )*\]*

-   UNIT( 2*|*3 )

len and decimals can be used to specify lengths and decimal places for those dictionary types that have variable lengths and decimal places. Literals or constant [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) of the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 can be specified for len and decimals. If no lengths or decimal places are specified for these types, these values are taken from the operand operand. In both cases, the lengths and decimal places must meet the requirements of the following table.

The following table shows which combinations of built-in data types in ABAP Dictionary can currently be cast to each other and what the prerequisites are in each case. There is a special list of [conversion rules](javascript:call_link\('abensql_cast_rules.htm'\)) for every combination.

from/to

INT1

INT2

INT4

INT8

DEC

CURR

QUAN

FLTP

CHAR

NUMC

DATS

TIMS

CLNT

LANG

UNIT

CUKY

SSTRING

RAW

INT1

x

x

x

x

x

x

x

x

z

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT2

x

x

x

x

x

x

x

x

z

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT4

x

x

x

x

x

x

x

x

z

\-

\-

\-

\-

\-

\-

\-

\-

\-

INT8

x

x

x

x

x

x

x

x

z

\-

\-

\-

\-

\-

\-

\-

\-

\-

DEC

z

z

z

z

x

x

x

x

z

\-

\-

\-

\-

\-

\-

\-

\-

\-

CURR

\-

\-

\-

\-

x

x

x

x

z

\-

\-

\-

\-

\-

\-

\-

\-

\-

QUAN

\-

\-

\-

\-

x

x

x

x

z

\-

\-

\-

\-

\-

\-

\-

\-

\-

FLTP

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

CHAR

\-

\-

\-

\-

\-

\-

\-

\-

x

y

y

y

y

y

x

y

\-

\-

NUMC

x

x

x

x

x

x

x

x

y

y

y

y

y

\-

\-

\-

\-

\-

DATS

\-

\-

\-

\-

\-

\-

\-

\-

x

y

x

\-

\-

\-

\-

\-

\-

\-

TIMS

\-

\-

\-

\-

\-

\-

\-

\-

x

y

\-

x

\-

\-

\-

\-

\-

\-

CLNT

\-

\-

\-

\-

\-

\-

\-

\-

x

y

\-

\-

x

\-

\-

\-

\-

\-

LANG

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

x

\-

\-

\-

\-

UNIT

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

x

\-

\-

\-

CUKY

\-

\-

\-

\-

\-

\-

\-

\-

x

\-

\-

\-

\-

\-

\-

x

\-

\-

SSTRING

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

y

\-

RAW

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

c

There are no further restrictions to note in combinations using "x". The following prerequisites apply to the other combinations:

-   For combinations with "y", the initial length cannot be less than the target length.

-   For combinations with "z", the target length must be sufficient to represent the value in the source.

-   For combinations with "c", the initial length and target length must be equal.

In the case of incompatible types, the content of the operand is [converted](javascript:call_link\('abensql_cast_rules.htm'\)) to the target type (exceptions can be raised if values are not suitable). If the operand of the expression has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result of the expression is also the null value.

Notes

-   Type modifications can be used in operand positions of ABAP SQL statements to convert operands without a suitable type to an operand with a suitable type.

-   A CAST expression should be platform-independent. Conversions from the type FLTP to other numeric types are not allowed because the result would be platform-dependent.

-   For the missing combinations of type modifications that cannot be covered by a CAST expression, construction operators such as CONV can be used in [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) (at least for literals and host variables). In addition, built-in [conversion functions](javascript:call_link\('abenopen_sql_conversion_functions.htm'\)) exist for special conversions:

-   [BINTOHEX](javascript:call_link\('abensql_type_conv_func.htm'\)) and [HEXTOBIN](javascript:call_link\('abensql_type_conv_func.htm'\)) for conversions of byte strings to character strings and back.

-   If SQL expressions other than operands are used in a cast expression or if a data type other than FLTP is specified as dtype, the syntax check is run in [strict mode from Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\)). This mode handles the statement more strictly than the normal syntax check.

-   If INT8 is specified as dtype in a cast expression, the syntax check is performed in a [strict mode from Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.

-   A cast expression cannot be evaluated in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and always causes [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") to be bypassed.

Example

In the following [SELECT list](javascript:call_link\('abapselect_list.htm'\)), a time stamp of the type DEC with length 15 is split into its date part and time part using different methods. Various CAST expressions are needed here to create a suitable type in every operand position.

GET TIME STAMP FIELD DATA(timestamp).
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @(
  VALUE #( id = 'X' timestamp1 = timestamp ) ).
SELECT SINGLE
       FROM demo\_expressions
       FIELDS CAST( CAST( DIV( timestamp1 , 1000000 )
                      AS CHAR )
                AS DATS ) AS date,
              CAST( SUBSTRING( CAST( timestamp1
                                 AS CHAR ), 9, 6 )
                AS TIMS ) AS time
       INTO @DATA(wa).
cl\_demo\_output=>display( wa ).

Executable Example

[SQL Expressions, Cast Expression](javascript:call_link\('abensql_expr_cast_abexa.htm'\))

Continue
[sql\_exp - sql\_cast, Conversion Rules](javascript:call_link\('abensql_cast_rules.htm'\))