---
title: "Syntax"
description: |
  ... CAST( operand AS dtype PRESERVING TYPE) ... Effect Casting in a SELECT statement(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) of a CDS view(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm 'Glossary Entr
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cast_expression.htm"
abapFile: "abencds_f1_cast_expression.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "cast", "expression"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_operands_and_expressions.htm) → 

ABAP CDS - cast\_expr

Syntax

... CAST( operand AS dtype *\[*PRESERVING TYPE*\]*) ...

Effect

Casting in a [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry"). The cast expression [converts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cast_expression_rules.htm) the value of the operand operand to the dictionary type specified by dtype. The result has the type dtype. The following can be specified for dtype:

-   Any [data element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_element_glosry.htm "Glossary Entry"). In this case, the optional addition PRESERVING TYPE can be specified. If this addition is specified, the built-in data type, the length of the operand and the number of decimal places, and the target data type must match exactly.

-   A [built-in data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) in ABAP Dictionary The addition PRESERVING TYPE cannot be specified in this case.

The following table shows the syntax for specifying built-in data types:

dtype

Dictionary Type

abap.char( len )

[CHAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with length len

abap.clnt*\[*(3)*\]*

[CLNT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm)

abap.cuky( len )

[CHAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with length len

abap.curr(len,decimals)

[CURR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.dats*\[*(8)*\]*

[DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm)

abap.dec(len,decimals)

[DEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.fltp*\[*(16,16)*\]*

[FLTP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm)

abap.int1*\[*(3)*\]*

[INT1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm)

abap.int2*\[*(5)*\]*

[INT2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm)

abap.int4*\[*(10)*\]*

[INT4](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm)

abap.int8*\[*(19)*\]*

[INT8](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm)

abap.lang*\[*(1)*\]*

[LANG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm)

abap.numc( len )

[NUMC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with length len

abap.quan(len,decimals)

[QUAN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with length len with decimals decimal places

abap.raw(len)

[RAW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm)

abap.sstring(len)

[SSTRING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm)

abap.tims*\[*(6)*\]*

[TIMS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm)

abap.unit( len )

[CHAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with length len

The actual length of the result is defined when the CDS view is activated and is must be at least as long as an explicitly defined length len. The predefined values can be specified for types with fixed lengths and decimal places, but this is not mandatory.

The following can be specified for operand:

-   A [literal](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_literal.htm) without a domain prefix

-   A [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter.htm)

-   A [session variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm)

-   A [field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_field.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) of the current CDS view

-   An [aggregate expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm)

-   A [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) that identifies a field of a data source [data\_source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm)

-   A [built-in function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_builtin_functions.htm)

-   An [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_arithmetic_expression.htm)

-   A case distinction with [CASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm)

-   A nested cast expression

Cast expressions can be specified in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm) and in operand positions of expressions.

The following table shows which combinations of built-in data types in ABAP Dictionary can currently be cast to each other and what the prerequisites are in each case. There is a special list of [conversion rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cast_expression_rules.htm) for every combination.

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

In the case of incompatible types, the content of the operand is [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cast_expression_rules.htm) to the target type (exceptions can be raised if values are not suitable). In compatible types, a syntax check warning occurs (unless the target data type is specified as a data element using the addition PRESERVING TYPE).

Notes

-   If a data element is specified for dtype, the result of the expression is given its semantic attributes. An exception to this is the use of the CAST expression within a case distinction using [CASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm),

-   The addition PRESERVING TYPE can be used to perform a cast to data elements. This is done solely to modify the semantic attributes of the operand.

-   The characters in the [surrogate area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensurrogate_area_glosry.htm "Glossary Entry") of the [system code page](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_codepage_glosry.htm "Glossary Entry") [UTF-16](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenutf16_glosry.htm "Glossary Entry") are handled as two characters in cast expressions for strings. Care should be taken to avoid splitting these characters in cutoff operations.

-   When performing a [conversion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cast_expression_rules.htm) between [currency fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_currency_field.htm) with type CURR, it should be noted that CAST respects the decimal places defined for the type. In ABAP applications, on the other hand, the position of the decimal point is usually ignored.

-   A CAST expression should be platform-independent. Conversions from the type FLTP to other numeric types are not allowed because the result would be platform-dependent.

-   An aggregate expression [AVG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm) has the type FLTP by default. It can be specified as an operand but it is not possible to cast to other types. Therefore there is a separate addition for AVG [AS dtype](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_avg_as.htm).

-   Special built-in [conversion functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conversion_functions.htm) are available for special conversions that cannot be covered by a CAST expression:

-   [FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm) for converting FLTP to packed numbers.

-   [BINTOHEX](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm) and [HEXTOBIN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_types.htm) for conversions of byte strings to character strings and back.

-   [Conversion functions for units and currencies](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conv_func_unit_curr.htm)

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
[ABAP CDS - cast\_expr, Conversion Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_cast_expression_rules.htm)