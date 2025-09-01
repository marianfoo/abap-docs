  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, cds\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm) →  [CDS DDL - CDS View Entity, cds\_cond, Comparison Operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_comp_v2.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, cds_cond, Comparable Types, ABENCDS_COND_EXPR_TYPES_V2, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, cds\_cond, Comparable Types

The following tables show which [built-in data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) in ABAP Dictionary can be compared with each other in a [condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry").

-   [Comparisons with Fields of Data Sources](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_V2_1)
-   [Comparisons with Parameters](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_V2_2)
-   [Comparisons with Literals](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_V2_3)
-   [Comparisons with CDS Amount Fields and CDS Quantity Fields](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_V2_4)

Comparisons with Fields of Data Sources   

The following table shows the possible combinations of data source fields on the left side (lhs) with data source fields on the right side (rhs) of comparisons.

lhs/rhs

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

CLNT

LANG

DATS

TIMS

DATN

TIMN

UTCLONG

ACCP

UNIT

CUKY

RAW

INT1

x

x

x

x

x

\-

a

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

INT2

x

x

x

x

x

\-

a

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

INT4

x

x

x

x

x

\-

a

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

INT8

x

x

x

x

x

\-

a

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

DEC

x

x

x

x

x

\-

a

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

CURR

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

\-

\-

\-

QUAN

a

a

a

\-

a

\-

a

a

a

a

\-

\-

\-

\-

\-

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

a

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

DECFLOAT34

x

x

x

x

x

\-

a

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

FLTP

x

x

x

x

x

\-

a

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

m

l

x

x

x

\-

\-

\-

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

\-

\-

x

\-

\-

\-

\-

\-

x

x

x

\-

NUMC

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

m

\-

l

l

\-

l

l

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

l

\-

l

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

\-

l

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

\-

l

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

\-

\-

x

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

\-

\-

x

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

\-

\-

x

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

\-

l

-   There are no restrictions for combinations using x.
-   In combinations using l, the lengths of the compared columns must match exactly.
-   For combinations using m, the length is relevant: the field of type NUMC can have the same lengths or fewer characters than the field of type CHAR. If the field of type NUMC is longer than the field of type CHAR, a syntax error occurs.
-   For combinations using d, the number of decimal places must match exactly.
    -   Note: Operands of data type CURR can be cast to data type DECFLOAT34 using the conversion function [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm) to avoid length requirements.
-   For combinations using a, both operands must be specified as [ABAP CDS quantity fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_glosry.htm "Glossary Entry") by adding a reference to a [unit of measurement key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_glosry.htm "Glossary Entry") using the annotation [@Semantics.quantity.unitOfMeasure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm). Otherwise, a syntax check warning occurs.
    -   Note: You can use the conversion function [GET\_NUMERIC\_VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm) to turn quantity fields into regular fields of data type DECFLOAT34.

Comparisons with Parameters   

The following table shows the possible combinations of data source fields on the left side (lhs) with parameters on the right side (rhs) of comparisons.

lhs/rhs

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

CLNT

LANG

DATS

TIMS

DATN

TIMN

UTCLONG

ACCP

UNIT

CUKY

RAW

INT1

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

\-

\-

\-

\-

\-

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

\-

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

INT4

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

\-

\-

\-

\-

\-

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

\-

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

DEC

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

\-

\-

\-

\-

\-

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

\-

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

\-

\-

\-

\-

\-

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

m

l

x

x

x

\-

\-

\-

\-

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

x

\-

NUMC

\-

\-

\-

\-

\-

\-

\-

\-

\-

\-

m

\-

l

l

\-

l

l

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

l

\-

l

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

\-

l

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

\-

l

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

\-

\-

x

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

\-

\-

x

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

\-

\-

x

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

\--

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

\-

l

-   There are no restrictions for combinations using x.
-   In combinations using l, the lengths of the compared operands must match exactly.
-   For combinations using "m", the length is relevant: the field of type NUMC can have the same lengths or less characters than the field of type CHAR. If the field of type NUMC is longer than the field of type CHAR, a syntax error occurs.
-   For combinations using d, the number of decimal places must match exactly.
    -   Note: Operands of data type CURR can be cast to data type DECFLOAT34 using the conversion function [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm) to avoid this length requirement.

Comparisons with Literals   

The following table shows the possible combinations of data source fields on the left side (lhs) with literals on the right side (rhs) of comparisons. The literals can be [typed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_typed_literal_v2.htm) or [untyped](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_untyped_literal_v2.htm). It is recommended that only typed literals are used, because they offer more data types. With typed literals, the data types shown in the table are possible.

lhs/rhs

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

RAW

DATS

TIMS

DATN

TIMN

UTCL

DECFLOAT16

DECFLOAT34

INT1

y

y

y

y

y

\-

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

y

y

INT2

x

y

y

y

y

\-

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

y

y

INT4

x

x

y

y

y

\-

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

y

y

INT8

x

x

x

y

y

\-

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

y

y

DEC

x

x

x

x

d

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

m

m

CURR

m

m

m

m

d

d

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

m

m

QUAN

m

m

m

m

d

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

m

m

DECFLOAT16

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

\-

\-

\-

\-

\-

\-

x

x

DECFLOAT34

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

\-

\-

\-

\-

\-

\-

x

x

FLTP

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

\-

\-

\-

\-

\-

\-

x

x

CHAR

\-

\-

\-

\-

\-

\-

\-

\-

m

m

\-

\-

\-

\-

\-

\-

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

m

\-

\-

\-

\-

\-

\-

\-

\-

\-

NUMC

\-

\-

\-

\-

\-

\-

\-

\-

l

l

\-

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

l

l

\-

\-

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

l

l

\-

\-

\-

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

\-

l

\-

x

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

l

\-

\-

x

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

x

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

x

\-

\-

\-

UTCL

\-

\-

\-

\-

\-

\-

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

l

\-

\-

\-

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

m

\-

\-

\-

\-

\-

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

m

\-

\-

\-

\-

\-

\-

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

l

\-

\-

\-

\-

\-

\-

\-

-   There are no restrictions for combinations using x.
-   For combinations using y, the literal value must be within the value range of the respective type. That means:
    -   For a comparison with INT1, the literal value must be between 0 and 255.
    -   For a comparison with INT2, the literal value must be between -32,768 and +32,767.
    -   For a comparison with INT4, the literal value must be between -2,147,483,648 and +2,147,483,647.
    -   For a comparison with INT8, the literal value must be between -9,223,372,036,854,775,808 and +9,223,372,036,854,775,807.
-   For combinations using m, the length of the literal cannot be greater than the column.
-   For combinations using d, the length of the literal and the number of decimal places cannot be greater than the length and number for the column.
-   For combinations using l, the length of the literal must be equal to the length of the column.
-   If the literal on the right side (rhs) is of data type CURR, it must have exactly two decimal places. Since the number of decimal places of rhs and lhs must match exactly, lhs must also have exactly two decimal places. The conversion functions [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm) and [GET\_NUMERIC\_VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm) can be used to avoid this length requirement.

Comparisons with CDS Amount Fields and CDS Quantity Fields   

If one of the operands lhs or rhs of a comparison is a [CDS amount field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field_glosry.htm "Glossary Entry"), a [CDS quantity field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_glosry.htm "Glossary Entry"), or a [CDS calculated quantity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry"), special rules apply:

-   Both operands lhs and rhs must have the same reference type. Both must be either amounts, or quantities, or calculated quantities. Comparing operands with references of different types ([currency key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencurrency_key_glosry.htm "Glossary Entry"), [unit key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunit_glosry.htm "Glossary Entry"), or [calculated unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_unit_glosry.htm "Glossary Entry")) results in a syntax check warning.
-   An operand of type CURR can only be compared with another operand of type CURR. The number of decimal places of both operands must match exactly.
    -   Exception: If lhs has data type CURR and rhs is specified as literal, the following data types are possible for rhs: INT1, INT2, INT4, INT8, DEC, CURR, QUAN, FLTP, DECFLOAT16, DECFLOAT34.
-   Two conversion functions are available to circumvent limitations:
    
    -   [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm) converts an amount field of type CURR to an amount field of type DECFLOAT34.
    -   [GET\_NUMERIC\_VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm) convert amounts and quantities into regular fields.
    
    Caution: In the [ON condition of a CDS association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_simple_association_v2.htm), these two conversion functions are not available, since functions in general are not supported in the ON condition of a CDS association.
    

The following table shows the possible combinations of operands in comparisons. Number refers to an operand of a numeric data type without reference annotation that turns it into an amount or quantity field.

Type of Operand

Comment

amount, number

syntax check warning
Exception:: If number is specified as literal, no syntax check warning occurs.

amount, amount

OK. Elements of data type CURR must have exactly the same number of decimal places.

quantity, number

syntax check warning
Exception: If number is specified as literal, no syntax check warning occurs.

quantity, quantity

OK

amount, quantity

syntax check warning

amount, calculated quantity

syntax check warning

quantity, calculated quantity

syntax check warning

calculated quantity, number

syntax check warning
Exception: If number is specified as literal, no syntax check warning occurs.

calculated quantity, calculated quantity

OK

Undesirable comparisons of operands with references of different types result in a syntax check warning. There is no syntax check error to ensure downward compatibility.

The exception that amounts, quantities, and calculated quantities can be compared with a number if the number is specified as literal is in place to ensure downward compatibility.