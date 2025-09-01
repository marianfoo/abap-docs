---
title: "Syntax"
description: |
  ... CAST( operand AS dtype PRESERVING TYPE) ... Effect Casting in a SELECT statement(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) of a CDS view entity(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm 'Glo
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cast_expression_v2.htm"
abapFile: "abencds_cast_expression_v2.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "cast", "expression"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_expressions_v2.htm) → 

CDS DDL - CDS View Entity, cast\_expr

Syntax

... CAST( operand AS dtype *\[*PRESERVING TYPE*\]*) ...

Effect

Casting in a [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). The cast expression converts the value of the operand operand to the ABAP Dictionary type specified by dtype. The result has the type dtype.

The following can be specified for dtype:

-   A [data element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_element_glosry.htm "Glossary Entry"). In this case, the optional addition PRESERVING TYPE can be specified. If this addition is specified, the built-in data type, the length of the operand and the number of decimal places, and the target data type must match exactly.

-   A [built-in data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) in ABAP Dictionary. The addition PRESERVING TYPE cannot be specified in this case.

The following table shows the syntax for specifying built-in data types:

dtype

Dictionary Type

abap.char( len )

[CHAR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) with length len

abap.clnt*\[*(3)*\]*

[CLNT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.cuky*\[*(5)*\]*

[CUKY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.curr(len,decimals)

[CURR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.decfloat16*\[*(16)*\]*

[DECFLOAT16](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.decfloat34*\[*(34)*\]*

[DECFLOAT34](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.dats*\[*(8)*\]*

[DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.datn*\[*(8)*\]*

[DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.dec(len,decimals)

[DEC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) with length len and decimals decimal places

abap.fltp*\[*(16,16)*\]*

[FLTP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.int1*\[*(3)*\]*

[INT1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.int2*\[*(5)*\]*

[INT2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.int4*\[*(10)*\]*

[INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.int8*\[*(19)*\]*

[INT8](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.lang*\[*(1)*\]*

[LANG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.numc( len )

[NUMC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) with length len

abap.quan(len,decimals)

[QUAN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) with length len with decimals decimal places

abap.sstring(len)

[SSTRING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.tims*\[*(6)*\]*

[TIMS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.timn*\[*(6)*\]*

[TIMN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

abap.unit*\[*(2*|*3)*\]*

[UNIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) with length 2 or 3 (standard length)

abap.utclong*\[*(27)*\]*

[UTCLONG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm)

The actual length of the result is defined when the CDS view entity is activated and is at least as long as an explicitly defined length len. It is possible, but not mandatory, to specify the length for types with fixed lengths and decimal places.

The following can be specified for operand:

-   A [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v2.htm)

-   A [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v2.htm)

-   A [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm)

-   A [field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm) of the current CDS view entity

-   An [aggregate expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_aggregate_functions_v2.htm)

-   A [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm) that identifies a field of a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm)

-   A [built-in function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_builtin_functions_v2.htm)

-   An [arithmetic expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_arithmetic_expression_v2.htm)

-   A [case distinction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v2.htm)

-   Another, nested cast expression

Cast expressions can be specified in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v2.htm) and in operand positions of expressions.

The following table shows which combinations of built-in data types in ABAP Dictionary can currently be cast to each other and what the prerequisites are in each case. There is a special list of [conversion rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cast_expression_rules_v2.htm) for every combination.

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

x

x

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

x

x

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

\-

\-

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

\-

\-

\-

DECFLOAT16

x

x

x

x

x

\-

x

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

\-

DECFLOAT34

x

x

x

x

x

\-

x

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

x

x

x

\-

\-

\-

p

x

x

x

x

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

x

x

x

\-

\-

\-

p

x

x

x

x

\-

NUMC

y

y

y

y

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

z

\-

\-

\-

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

\-

\-

x

x

\-

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

\-

\-

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

\-

\-

z

z

z

\-

\-

\-

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

d

d

\-

\-

\-

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

\-

\-

\-

\-

\-

p

There are no further restrictions to note in combinations with "x". The following rules apply to the other combinations:

-   In combinations with "y", the length of the target data type must be sufficient.

-   In combinations with "z", the lengths of the data types must match exactly.

-   In the case of combinations with "p" or "d", a data element must be specified as the target data type. It is not possible to specify a built-in data type from ABAP Dictionary.

-   In combinations with "d", the data element can have a suitable target type in accordance with the table above and with any length.

-   In combinations with "p", the data element must have the built-in data type and the same length as the data type of the operand.

In the case of incompatible types, the content of the operand is converted to the target type (exceptions can be raised if values are not suitable). In compatible types, a syntax check warning occurs (unless the target data type is specified as a data element using the addition PRESERVING TYPE).

Hints

-   If a data element is specified for dtype, the result of the expression takes on the semantic attribute of the data element. An exception to this is the use of the CAST expression within a case distinction.

-   With the addition PRESERVING TYPE, the data type of the operand stays the same, only the semantic attributes are changed.

-   The characters in the [surrogate area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensurrogate_area_glosry.htm "Glossary Entry") of the [system code page](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_codepage_glosry.htm "Glossary Entry") [UTF-16](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutf16_glosry.htm "Glossary Entry") are handled as two characters in cast expressions for strings. Care should be taken to avoid splitting these characters in truncation operations.

-   When performing a conversion between [currency fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_currency_field.htm) with type CURR, it should be noted that CAST respects the decimal places defined for the type. In ABAP applications, on the other hand, the position of the decimal point is usually ignored.

-   A CAST expression should be platform-independent. Conversions from the type FLTP to other numeric types are not allowed because the result would be platform-dependent.

-   Special built-in [conversion functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conversion_functions_v2.htm) are available for conversions that cannot be covered by a CAST expression:

-   [FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v2.htm) for converting FLTP to packed numbers.

-   [BINTOHEX](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v2.htm) and [HEXTOBIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v2.htm) for conversions of byte strings to character strings and back.

-   [Conversion functions for units and currencies](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v2.htm)

-   [Conversion functions for dates, times, and timestamps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)

Example

Cast expressions in a SELECT list.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_SO\_CAST
  as select from DEMO\_SALES\_CDS\_SO
    association to DEMO\_SALES\_CDS\_SO\_I as \_item
      on DEMO\_SALES\_CDS\_SO.so\_key = \_item.so\_item\_key
    {
      key so\_key,
          currency\_sum,
          @Semantics.amount.currencyCode: 'currency\_sum'
          amount\_sum                                   as original\_amount,
          cast(amount\_sum as abap.fltp) -
          (cast(amount\_sum as abap.fltp) \* 0.03)       as reduced\_amount,
          cast(amount\_sum as abap.fltp) \* 0.03         as overall\_savings,
          \_item.currency,
          \_item.posnr                                  as item\_position,
          @Semantics.amount.currencyCode: 'currency'
          \_item.gross\_amount                           as item\_amount,
          cast(\_item.gross\_amount as abap.fltp) \* 0.97 as item\_savings
    }

Example

In the following view entity, the column char1 of the DDIC database table DEMO\_EXPRESSIONS is cast to the data element demo\_char\_text with the same technical attributes. In this case, it is advisable to specify the addition PRESERVING TYPE.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_CAST\_DATA\_ELEMENT\_VE
  as select from demo\_expressions
  {
    cast ( char1 as demo\_char\_text preserving type) as char\_with\_text
  };

The following function module call returns the attributes of the view field. The text shows that the semantic attributes of the data element were applied. The column char1 does not have its own text.

DATA dfies\_tab TYPE TABLE OF dfies.
CALL FUNCTION 'DDIF\_FIELDINFO\_GET'
  EXPORTING
    tabname   = 'DEMO\_CDS\_CAST\_DATA\_ELEMENT\_VE'
    fieldname = 'CHAR\_WITH\_TEXT'
    langu     = sy-langu
                TABLES
                dfies\_tab = dfies\_tab.
cl\_demo\_output=>display( dfies\_tab\[ 1 \]-fieldtext ).

Example

In the following view, a literal is given the technical and semantic attributes of the data element S\_MANDT.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_CAST\_CLNT\_VE
  as select from scarr
{
  key cast ( 'XXX' as s\_mandt ) as pseudo\_client,
  key carrid,
      carrname
}

Continue
[CDS DDL - CDS View Entity, cast\_expr, Conversion Rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cast_expression_rules_v2.htm)