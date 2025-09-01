  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) → 

sql\_exp - sql\_cast

Syntax

... CAST( sql\_exp AS dtype ) ...

Effect

Type adjustment in ABAP SQL. A cast expression [converts](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast_rules.htm) the value of the operand sql\_exp to the dictionary type specified by dtype. SQL expressions, which have a type that matches dtype as shown below, can be used as an operand sql\_exp. The result is a representation of the source value in type dtype.

[Built-in data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary with the following syntax can be specified for dtype:

-   Numeric types

-   INT1

-   INT2

-   INT4

-   INT8

-   DEC*\[*( len*\[*, decimals*\]* )*\]*

-   D16N for DECFLOAT16

-   D34N for DECFLOAT34

-   FLTP

-   Character-like types

-   CHAR*\[*( len )*\]*

-   SSTRING*\[*( len )*\]*

-   Byte-like types

-   RAW *\[*( len )*\]*

-   Date types/time types

-   DATS

-   TIMS

-   DATN

-   TIMN

-   UTCL for UTCLONG

-   Character-like types with special semantics

-   NUMC*\[*( len )*\]*

-   CLNT

-   LANG

-   Currency fields and quantity fields

-   CURR*\[*( len*\[*, decimals*\]* )*\]*

-   CUKY

-   QUAN*\[*( len*\[*, decimals*\]* )*\]*

-   UNIT( 2*|*3 )

len and decimals can be used to specify lengths and decimal places for those dictionary types that have variable lengths and decimal places. [Literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_literals.htm) or [host constants](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) of the [ABAP type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_complete.htm) b, s, i, or int8 can be specified for len and decimals. If no lengths or decimal places are specified for these types, these values are taken from the result of the specified SQL expression sql\_exp. In both cases, the lengths and decimal places must meet the requirements of the following table.

The following table shows which combinations of built-in data types in the ABAP Dictionary can currently be cast to each other and the corresponding prerequisites. There is a special list of [conversion rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast_rules.htm) for every combination.

from/to

INT1

INT2

INT4

INT8

DEC

CURR

QUAN

DECFLOAT16

DECFLOAT34

FLTP

CHAR

SSTRING

NUMC

DATS

TIMS

DATN

TIMN

UTCLONG

CLNT

LANG

UNIT

CUKY

RAW

INT1

|x

x

x

x

x

x

x

x

x

x

z

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

x

x

z

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

x

x

z

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

x

x

z

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

\-

\-

DEC

x

x

x

x

x

x

x

x

x

x

z

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

\-

\-

CURR

x

x

x

x

x

x

x

x

x

x

z

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

\-

\-

QUAN

x

x

x

x

x

x

x

x

x

x

z

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

\-

\-

DECFLOAT16

x

x

x

x

x

x

x

x

x

x

z

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

\-

\-

DECFLOAT34

x

x

x

x

x

x

x

x

x

x

z

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

\-

\-

DF16\_DEC

x

x

x

x

\-

\-

\-

x

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

\-

\-

\-

\-

DF34\_DEC

x

x

x

x

\-

\-

\-

x

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

\-

\-

x

x

y

y

y

\-

\-

\-

y

y

c

y

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

x

x

y

y

y

\-

\-

\-

y

y

c

y

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

y

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

\-

\-

x

x

y

x

\-

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

\-

\-

x

x

y

\-

x

\-

x

\-

\-

\-

\-

\-

\-

DATN

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

x

\-

\-

\-

\-

\-

\-

\-

TIMN

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

x

\-

\-

\-

\-

\-

\-

UTCLONG

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

x

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

\-

\-

x

x

y

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

LANG

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

x

x

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

UNIT

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

x

x

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

CUKY

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

x

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

x

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

\-

\-

\-

\-

\-

c

There are no further restrictions for combinations using "x". The following prerequisites apply to the other combinations:

-   For combinations with "y", the initial length cannot be less than the target length.

-   For combinations with "z", the target length must be sufficient to represent the value in the source.

-   For combinations with "c", the initial length and target length must be equal.

In the case of incompatible types, the content of the operand is [converted](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast_rules.htm) to the target type. Exceptions can be raised if values are not suitable. If the operand of the expression has the [null value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the expression is also the null value.

Hints

-   Specifying a cast expression always means specifying an [SQL expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm). Cast expressions can only be specified for operand positions in which SQL expressions are possible.

-   Type modifications can be used in operand positions of ABAP SQL statements to convert operands without a suitable type to an operand with a suitable type.

-   A CAST expression should be platform-independent. Conversions from the type FLTP to other numeric types are not allowed because the result would be platform-dependent.

-   For the missing combinations of type modifications that cannot be covered by a CAST expression, construction operators such as CONV can be used in [host expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_expressions.htm), at least for literals and host variables. There are also built-in [conversion functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_conversion_functions.htm) for special conversions:

-   [BINTOHEX](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm) and [HEXTOBIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm) for conversions of byte strings to character strings and vice versa.

-   If SQL expressions other than operands are used in a cast expression or if a data type other than FLTP is specified as dtype, the syntax check is performed in [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_750.htm). This mode handles the statement more strictly than the normal syntax check.

-   If INT8 is specified as dtype in a cast expression, the syntax check is performed in a [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check. If used, D16N or D34N apply [strict mode of the syntax check from Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_754.htm).

-   A cast expression cannot be evaluated in the [table buffer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffer_glosry.htm "Glossary Entry") and always causes [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffering_glosry.htm "Glossary Entry") to be bypassed.

Example

The following [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) splits a [time stamp in a packed number](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamps_packed.htm) into its date part and its time part. This requires multiple CAST expressions to create a suitable type in every operand position.

DATA(timestamp) =
  cl\_abap\_tstmp=>utclong2tstmp\_short( utclong\_current( ) ).
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @(
  VALUE #( id = 'X' timestamp1 = timestamp ) ).
SELECT SINGLE
       FROM demo\_expressions
       FIELDS CAST( CAST( div( timestamp1 , 1000000 )
                      AS CHAR )
                AS DATS ) AS date,
              CAST( substring( CAST( timestamp1
                                 AS CHAR ), 9, 6 )
                AS TIMS ) AS time
       INTO @DATA(wa).
cl\_demo\_output=>display( wa ).

Executable Example

[SQL Expressions, Cast Expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_expr_cast_abexa.htm)

Continue
[sql\_exp - sql\_cast, Conversion Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast_rules.htm)
![Example](exa.gif "Example") [sql\_exp - Cast Expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_expr_cast_abexa.htm)