  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20cast_expr%2C%20ABENCDS_CAST_EXPRESSION_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

CDS DDL - CDS View Entity, cast\_expr

Syntax

... CAST( operand AS dtype *\[*PRESERVING TYPE*\]*) ...

Effect

Casting in a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). The cast expression converts the value of the operand operand to the type specified by dtype. The result has the type dtype.

The following can be specified for dtype:

-   A [CDS user-defined type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_user_defined_type_glosry.htm "Glossary Entry"). In this case, the optional addition PRESERVING TYPE can be specified.
-   A [DDIC data element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_element_glosry.htm "Glossary Entry"). In this case, the optional addition PRESERVING TYPE can be specified. If this addition is specified, the built-in data type, the length of the operand and the number of decimal places, and the target data type must match exactly.
-   A built-in data type from ABAP Dictionary. The addition PRESERVING TYPE cannot be specified in this case. All available data types are listed in the topic [ABAP CDS - Overview of Built-In DDIC Types That Can Be Used in ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_overview_builtin_types.htm).

The following can be specified for operand:

-   A [literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm)
-   A [parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v2.htm)
-   A [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v2.htm)
-   A [field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) of the current CDS view entity
-   An [aggregate expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_aggregate_functions_v2.htm)
-   A [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm) that identifies a field of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm)
-   A [built-in function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm)
-   An [SQL-based scalar function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_function.htm)
-   An [arithmetic expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_arithmetic_expression_v2.htm)
-   A [case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v2.htm)
-   Another, nested, cast expression

Cast expressions can be specified in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v2.htm) and in operand positions of expressions.

The following table shows which combinations of built-in data types in ABAP Dictionary can currently be cast to each other and what the prerequisites are in each case. There is a special list of [conversion rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cast_expression_rules_v2.htm) for every combination.

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

DF16\_DEC

DF34\_DEC

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

\-

DF16\_DEC

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

\-

\-

\-

\-

\-

\-

d

\-

DF34\_DEC

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

\-

\-

\-

\-

\-

\-

\-

d

FLTP

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

CHAR

x

x

x

x

x

x

x

x

x

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

\-

\-

SSTRING

x

x

x

x

x

x

x

x

x

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

\-

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

\-

\-

DATS

x

x

x

x

x

x

x

x

x

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

\-

\-

TIMS

x

x

x

x

x

x

x

x

x

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

\-

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

\-

\-

There are no further restrictions to note in combinations with x. The following rules apply to the other combinations:

-   In combinations with y, the length of the target data type must be sufficient.
-   In combinations with z, the lengths of the data types must match exactly.
-   In the case of combinations with p or d, a CDS user-defined type or a data element must be specified as the target data type. It is not possible to specify a built-in data type from ABAP Dictionary.
    -   In combinations with d, the CDS user-defined type or the data element can have a suitable target type in accordance with the table above and with any length.
    -   In combinations with p, the CDS user-defined type or the data element must have the built-in data type and the same length as the data type of the operand.

In the case of incompatible types, the content of the operand is converted to the target type (exceptions can be raised if values are not suitable). For compatible types, a syntax check warning occurs (unless the target data type is specified as a CDS user-defined type or as a data element using the addition PRESERVING TYPE).

If the operand of a cast expression has the [null value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the expression is also the null value.

If the target type dtype is specified as CURR or QUAN, then a [Semantics reference annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_element_annotation.htm) specifying a currency key or unit key is mandatory.

When casting to a [CDS enumerated type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry"), the operand of the cast expression must be compatible with the [base type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbase_type_glosry.htm "Glossary Entry") of the CDS enumerated type. The cast matrix and the conversion rules for casting apply with respect to the base type.

Hints

-   If a CDS user-defined type is specified for dtype, the result of the expression inherits the semantic properties of the CDS user-defined type in question.
-   If a data element is specified for dtype, the result of the expression inherits the semantic properties of the data element. An exception to this is the use of the CAST expression within a case distinction.
-   If operand and dtype have the same data type and the same length, a syntax check warning occurs. This syntax check warning can be suppressed using the addition PRESERVING TYPE. If dtype is a CDS type or a data element and the addition PRESERVING TYPE is not available, the warning can be ignored. It is currently not possible to suppress the warning.
-   If the addition PRESERVING TYPE is specified, the data type of the operand stays the same and only the semantic properties are changed.
-   The characters in the [surrogate area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensurrogate_area_glosry.htm "Glossary Entry") of the [system code page](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_codepage_glosry.htm "Glossary Entry") [UTF-16](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutf16_glosry.htm "Glossary Entry") are handled as two characters in cast expressions for strings. Care should be taken to avoid splitting these characters in truncation operations.
-   When performing a conversion between [currency fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_currency_field.htm) with type CURR, it should be noted that CAST respects the decimal places defined for the type. In ABAP applications, on the other hand, the position of the decimal point is usually ignored.
-   A CAST expression should be platform-independent. Conversions from the type FLTP to other numeric types are not allowed because the result would be platform-dependent.
-   Special built-in [conversion functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conversion_functions_v2.htm) are available for conversions that cannot be covered by a CAST expression:
    -   [FLTP\_TO\_DEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_types_v2.htm) for converting FLTP to packed numbers.
    -   [BINTOHEX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_types_v2.htm) and [HEXTOBIN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_types_v2.htm) for conversions of byte strings to character strings and back.
    -   [Conversion functions for units and currencies](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_conv_func_unit_curr_v2.htm)
    -   [Conversion functions for dates, times, and time stamps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_date_time_conversions_v2.htm)

Example

Cast expressions in a SELECT list.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SALES\_CDS\_SO\_CAST
  as select from
    DEMO\_SALES\_CDS\_SO
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

In the following view entity, the column char1 of the DDIC database table DEMO\_EXPRESSIONS is cast to the simple type DEMO\_BT\_CHAR\_TEXT with the same technical properties. In this case, it is advisable to specify the addition PRESERVING TYPE.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_CAST\_SIMPLE\_TYPE\_VE
  as select from demo\_expressions
{
  cast ( char1 as DEMO\_BT\_CHAR\_TEXT preserving type)
                                as char\_with\_text
};

Example

In the following view, a literal is given the technical and semantic properties of the simple type DEMO\_BT\_MANDT.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_CAST\_CLNT\_VE
  as select from scarr
{
  key cast ( 'XXX' as s\_mandt ) as pseudo\_client,
  key carrid,
      carrname
}

Continue
[CDS DDL - CDS View Entity, cast\_expr, Conversion Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cast_expression_rules_v2.htm)