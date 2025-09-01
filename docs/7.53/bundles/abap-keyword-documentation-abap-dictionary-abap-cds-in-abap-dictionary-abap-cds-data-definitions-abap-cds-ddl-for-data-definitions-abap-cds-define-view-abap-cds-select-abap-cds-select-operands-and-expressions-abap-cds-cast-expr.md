# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - DEFINE VIEW / ABAP CDS - SELECT / ABAP CDS - SELECT, Operands and Expressions / ABAP CDS - cast_expr

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencds_f1_cast_expression.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cast_expression.htm)
- [abencds_f1_cast_expression_rules.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cast_expression_rules.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.136Z

---

### abencds_f1_cast_expression.htm

> **📖 Official SAP Documentation**: [abencds_f1_cast_expression.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cast_expression.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) → 

ABAP CDS - cast\_expr

Syntax

... CAST( operand AS dtype *\[*PRESERVING TYPE*\]*) ...

Effect

Casting in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The cast expression [converts](javascript:call_link\('abencds_f1_cast_expression_rules.htm'\)) the value of the operand operand to the dictionary type specified by dtype. The result has the type dtype. The following can be specified for dtype:

-   Any [data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry"). In this case, the optional addition PRESERVING TYPE can be specified. If this addition is specified, the built-in data type, the length of the operand and the number of decimal places, and the target data type must match exactly.

-   A [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary The addition PRESERVING TYPE cannot be specified in this case.

The following table shows the syntax for specifying built-in data types:

dtype

Dictionary Type

abap.char( len )

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

abap.clnt*\[*(3)*\]*

[CLNT](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.cuky( len )

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

abap.curr(len,decimals)

[CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and decimals decimal places

abap.dats*\[*(8)*\]*

[DATS](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.dec(len,decimals)

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len and decimals decimal places

abap.fltp*\[*(16,16)*\]*

[FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.int1*\[*(3)*\]*

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.int2*\[*(5)*\]*

[INT2](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.int4*\[*(10)*\]*

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.int8*\[*(19)*\]*

[INT8](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.lang*\[*(1)*\]*

[LANG](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.numc( len )

[NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

abap.quan(len,decimals)

[QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len with decimals decimal places

abap.raw(len)

[RAW](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.sstring(len)

[SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.tims*\[*(6)*\]*

[TIMS](javascript:call_link\('abenddic_builtin_types.htm'\))

abap.unit( len )

[CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length len

The actual length of the result is defined when the CDS view is activated and is must be at least as long as an explicitly defined length len. The predefined values can be specified for types with fixed lengths and decimal places, but this is not mandatory.

The following can be specified for operand:

-   A [literal](javascript:call_link\('abencds_f1_literal.htm'\)) without a domain prefix

-   A [parameter](javascript:call_link\('abencds_f1_parameter.htm'\))

-   A [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\))

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the current CDS view

-   An [aggregate expression](javascript:call_link\('abencds_f1_aggregate_functions.htm'\))

-   A [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) that identifies a field of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\))

-   A [built-in function](javascript:call_link\('abencds_f1_builtin_functions.htm'\))

-   An [arithmetic expression](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\))

-   A case distinction with [CASE](javascript:call_link\('abencds_f1_case_expression.htm'\))

-   A nested cast expression

Cast expressions can be specified in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) and in operand positions of expressions.

The following table shows which combinations of built-in data types in ABAP Dictionary can currently be cast to each other and what the prerequisites are in each case. There is a special list of [conversion rules](javascript:call_link\('abencds_f1_cast_expression_rules.htm'\)) for every combination.

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

SSTRING

NUMC

DATS

TIMS

ACCP

CLNT

LANG

UNIT

CUKY

RAW

INT1

x

x

x

x

y

y

y

x

y

y

\-

\-

\-

\-

x

\-

\-

\-

\-

INT2

x

x

x

x

y

y

y

x

y

y

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

y

y

y

x

y

y

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

y

y

y

x

y

y

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

\-

\-

\-

\-

x

x

x

x

y

y

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

y

y

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

y

y

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

x

y

y

y

p

y

y

y

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

x

x

y

y

y

p

y

y

y

y

\-

NUMC

y

y

y

y

x

x

y

x

y

y

z

z

z

p

z

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

y

y

\-

z

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

y

y

\-

\-

z

\-

\-

\-

\-

\-

\-

ACCP

\-

\-

\-

\-

\-

\-

\-

\-

z

z

z

\-

\-

p

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

d

d

\-

\-

\-

\-

p

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

d

d

\-

\-

\-

\-

\-

p

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

d

d

\-

\-

\-

\-

\-

\-

p

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

d

d

\-

\-

\-

\-

\-

\-

\-

p

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

p

There are no further restrictions to note in combinations using "x". The following rules apply to the other combinations:

-   In combinations using "y", the target data type must be long enough.

-   In combinations using "z", the lengths of the data types must match exactly.

-   In the case of combinations with "p" or "d", no built-in data type from ABAP Dictionary can be specified. A data element must be specified as the target data type instead.

-   In combinations with "d", the data element can have a suitable target type in accordance with the table above and with any length.

-   In combinations with "p", the data element must have the built-in data type and the same length as the data type of the operand.

In the case of incompatible types, the content of the operand is [converted](javascript:call_link\('abencds_f1_cast_expression_rules.htm'\)) to the target type (exceptions can be raised if values are not suitable). In compatible types, a syntax check warning occurs (unless the target data type is specified as a data element using the addition PRESERVING TYPE).

Notes

-   If a data element is specified for dtype, the result of the expression is given its semantic attributes. An exception to this is the use of the CAST expression within a case distinction using [CASE](javascript:call_link\('abencds_f1_case_expression.htm'\)),

-   The addition PRESERVING TYPE can be used to perform a cast to data elements. This is done solely to modify the semantic attributes of the operand.

-   The characters in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry") of the [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry") [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") are handled as two characters in cast expressions for strings. Care should be taken to avoid splitting these characters in cutoff operations.

-   When performing a [conversion](javascript:call_link\('abencds_f1_cast_expression_rules.htm'\)) between [currency fields](javascript:call_link\('abenddic_currency_field.htm'\)) with type CURR, it should be noted that CAST respects the decimal places defined for the type. In ABAP applications, on the other hand, the position of the decimal point is usually ignored.

-   A CAST expression should be platform-independent. Conversions from the type FLTP to other numeric types are not allowed because the result would be platform-dependent.

-   An aggregate expression [AVG](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) has the type FLTP by default. It can be specified as an operand but it is not possible to cast to other types. Therefore there is a separate addition for AVG [AS dtype](javascript:call_link\('abencds_f1_avg_as.htm'\)).

-   Special built-in [conversion functions](javascript:call_link\('abencds_f1_conversion_functions.htm'\)) are available for special conversions that cannot be covered by a CAST expression:

-   [FLTP\_TO\_DEC](javascript:call_link\('abencds_f1_conv_func_types.htm'\)) for converting FLTP to packed numbers.

-   [BINTOHEX](javascript:call_link\('abencds_f1_conv_func_types.htm'\)) and [HEXTOBIN](javascript:call_link\('abencds_f1_conv_func_types.htm'\)) for conversions of byte strings to character strings and back.

-   [Conversion Functions for Units and Currencies](javascript:call_link\('abencds_f1_conv_func_unit_curr.htm'\))

Example

Cast expressions in a SELECT list.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
         association \[1..\*\] to snwd\_so\_i as \_item
           on snwd\_so.node\_key = \_item.parent\_key
         { key snwd\_so.node\_key,
               gross\_amount as original\_amount,
               cast(gross\_amount as abap.fltp) +
                 (cast( -gross\_amount as abap.fltp) \* 0.03)
                   as reduced\_amount,
               cast(gross\_amount as abap.fltp) \* 0.03
                 as overall\_savings,
               \_item.so\_item\_pos as item\_position,
               \_item.gross\_amount as item\_gross\_amount,
               cast(\_item.gross\_amount as abap.fltp) \* 0.97
                 as item\_savings }

Example

In the following view, the column char1 of the database DEMO\_EXPRESSIONS is cast to the data element demo\_char\_text with the same technical attributes. In this case, it is advisable to specify the addition PRESERVING TYPE.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_CAST\_DE'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_cast\_data\_element
as select from
demo\_expressions
{
cast ( char1 as DEMO\_CHAR\_TEXT preserving type) as char\_with\_text
};    

The following function module call returns the attributes of the view field The text shows that the semantic attributes of the data element were applied. The column char1 does not have its own text.

DATA dfies\_tab TYPE TABLE OF dfies.
CALL FUNCTION 'DDIF\_FIELDINFO\_GET'
  EXPORTING
    tabname   = 'DEMO\_CDS\_CAST\_DE'
    fieldname = 'CHAR\_WITH\_TEXT'
    langu     = sy-langu
                TABLES
                dfies\_tab = dfies\_tab.
cl\_demo\_output=>display( dfies\_tab\[ 1 \]-fieldtext ).

Example

In the following view, a literal is given the technical and semantic attributes of the data element S\_MANDT.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_CSTCLNT'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_cast\_clnt
as select from
scarr
{
key cast ( 'XXX' as s\_mandt )
as pseudo\_client,
key carrid,
carrname
};    

Continue
[ABAP CDS - cast\_expr, Conversion Rules](javascript:call_link\('abencds_f1_cast_expression_rules.htm'\))



**📖 Source**: [abencds_f1_cast_expression.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cast_expression.htm)

### abencds_f1_cast_expression_rules.htm

> **📖 Official SAP Documentation**: [abencds_f1_cast_expression_rules.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cast_expression_rules.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencds_f1_cast_expression_rules.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_cast_expression_rules.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cast\_expr](javascript:call_link\('abencds_f1_cast_expression.htm'\)) → 

ABAP CDS - cast\_expr, Conversion Rules

The following sections describe the conversion rules for [cast expressions](javascript:call_link\('abencds_f1_cast_expression.htm'\)) in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry").

-   [Numeric source type](#abencds-f1-cast-expression-rules-1--------source-type-int1--int2--int4--int8---@ITOC@@ABENCDS_F1_CAST_EXPRESSION_RULES_2)

-   [Source type DEC, CURR, QUAN](#abencds-f1-cast-expression-rules-3--------character-like-source-type---@ITOC@@ABENCDS_F1_CAST_EXPRESSION_RULES_4)

-   [Source types CHAR and SSTRING](#abencds-f1-cast-expression-rules-5--------source-type-numc---@ITOC@@ABENCDS_F1_CAST_EXPRESSION_RULES_6)

-   [Source types DATS and TIMS](#abencds-f1-cast-expression-rules-7--------source-types-clnt--lang--unit--and-cuky---@ITOC@@ABENCDS_F1_CAST_EXPRESSION_RULES_8)

Data types that cannot be converted to each other are not specified. In these cases, casts are either not possible or only casts between type-friendly operands. If the source type and the target type are technically identical, the content is transferred without being converted.

Numeric source type

Source type INT1, INT2, INT4, INT8

-   Numeric target type

The possible target types are INT1, INT2, INT4, INT8, DEC, CURR, QUAN, and FLTP.

-   The source value is converted to the internal representation for the target type.

-   If the value range is exceeded, an exception is raised that can be caught in ABAP using CX\_SY\_OPEN\_SQL\_DB.

-   In the case of the target types DEC, CURR, and QUAN, a syntax check warning is produced if a static check knows statically that an exception can be raised.

-   Character-like target type

The possible target types are CHAR, SSTRING, and CLNT (in the case of INT1).

-   The number value is converted to a character string in [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") without decimal separators and is left-aligned.

-   The length of the target type must be enough for all potential values including the sign. The minimum lengths for INT1, INT2, INT4, and INT8 are 3, 6, 11, and 20.

Source type DEC, CURR, QUAN

-   Numeric target type

The possible target types are DEC, CURR, QUAN, and FLTP.

-   The source value is converted to the internal representation for the target type.

-   In the case of the target types DEC, CURR, and QUAN, an exception is raised if the value range in the integer digits is exceeded. This exception can be caught in ABAP using CX\_SY\_OPEN\_SQL\_DB. Any surplus decimal places are cut off without rounding.

-   In the case of the target type FLTP, values that cannot be represented as [binary floating point numbers](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry") are converted to the next adjacent number.

-   Character-like target type

The possible target types are CHAR and SSTRING.

-   The number value is converted to a character string in [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") and is left-aligned.

-   The length of the target type must be enough for all potential values in the source type including the sign and decimal separator.

Note

When the source type DEC is converted to a character-like target type, the database specifies whether non-relevant zeros are displayed before and after the decimal separator.

Character-like source type

Source types CHAR and SSTRING

-   Character-like target type

The possible target types are CHAR, SSTRING, NUMC, CLNT, LANG, DATS, TIMS, UNIT, and CUKY.

-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.

-   There is no special handling for the special target type for numeric text, NUMC, and for the date/time types DATS and TIMS. It is advisable to only convert valid values. In the case of the target type NUMC, the built-in function [LPAD](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)) can be used to create leading zeroes.

Source type NUMC

-   Numeric target type

The possible target types are INT1, INT2, INT4, INT8, DEC, CURR, QUAN, and FLTP.

-   The validity of the content of the source field is not checked, which means that there can be decimal places.

-   The source field must contain a character string that can be interpreted as a number. If not, an exception is raised that can be caught in ABAP using CX\_SY\_OPEN\_SQL\_DB.

-   In the case of the target types INT1, INT2, INT4, and INT8, the length of the source type cannot be too great for the target type. The source value cannot contain any decimal places.

-   In the case of the target types DEC, CURR, and QUAN, an exception is raised if the value range in the integer digits is exceeded. This exception can be caught in ABAP using CX\_SY\_OPEN\_SQL\_DB. A syntax check warning occurs it a static check knows that an exception can be raised. Any surplus decimal places are cut off without rounding.

-   In the case of the target type FLTP, values that cannot be represented as [binary floating point numbers](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry") are converted to the next adjacent number.

-   Character-like target type

The possible target types are CHAR, SSTRING, NUMC, CLNT, DATS, and TIMS.

-   The validity of the source field is not checked.

-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.

-   The lengths of the source type and target type must match for the special target type for numeric text, NUMC, and for the date/time types DATS and TIMS. No other special handling takes place. It is advisable to only convert valid values. In the case of the target type NUMC, the built-in function [LPAD](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)) can be used to create leading zeroes.

Source types DATS and TIMS

-   Character-like target type

The possible target types are CHAR and SSTRING.

-   The validity of the source field is not checked.

-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.

Source types CLNT, LANG, UNIT, and CUKY

-   Character-like target type

The possible target types are CHAR and SSTRING, which need to be specified using data elements.

-   The validity of the source field is not checked.

-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.
