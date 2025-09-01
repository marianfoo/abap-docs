  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) →  [CDS DDL - CDS View Entity, cds\_cond, Comparison Operators](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)) → 

CDS DDL - CDS View Entity, cds\_cond, Comparable Types

The following tables show which [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary can be compared with each other in a [condition](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

-   [Comparisons with Fields of Data Sources](#abencds-cond-expr-types-v2-1-------comparisons-with-parameters---@ITOC@@ABENCDS_COND_EXPR_TYPES_V2_2)
-   [Comparisons with Literals](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_V2_3)

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

-   There are no restrictions for combinations using "x".
-   In combinations using "l", the lengths of the compared columns must match exactly.
-   For combinations using "m", the length is relevant: the field of type NUMC can have the same lengths or fewer characters than the field of type CHAR. If the field of type NUMC is longer than the field of type CHAR, a syntax error occurs.

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

\-

\-

\-

\-

\-

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

-   There are no restrictions for combinations using "x".
-   In combinations using "l", the lengths of the compared operands must match exactly.
-   For combinations using "m", the length is relevant: the field of type NUMC can have the same lengths or less characters than the field of type CHAR. If the field of type NUMC is longer than the field of type CHAR, a syntax error occurs.

Comparisons with Literals

The following table shows the possible combinations of data source fields on the left side (lhs) with literals on the right side (rhs) of comparisons. The literals can be [typed](javascript:call_link\('abencds_typed_literal_v2.htm'\)) or [untyped](javascript:call_link\('abencds_untyped_literal_v2.htm'\)). It is recommended to only use typed literals, because they offer more data types. With typed literals, the data types shown in the table are possible.

lhs/rhs

INT1

INT2

INT4

INT8

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

y

INT2

x

y

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

y

y

INT4

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

y

y

INT8

x

x

x

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

y

y

DEC

x

x

x

x

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

DECFLOAT34

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

x

x

FLTP

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

x

x

CHAR

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

l

\-

\-

\-

\-

\-

\-

\-

-   There are no restrictions for combinations using "x".
-   For combinations using "y", the literal value must be within the value range of the respective type. That means:
    -   For a comparison with INT1, the literal value must be between 0 and 255.
    -   For a comparison with INT2, the literal value must be between -32,768 and +32,767.
    -   For a comparison with INT4, the literal value must be between -2,147,483,648 and +2,147,483,647.
    -   For a comparison with INT8, the literal value must be between -9,223,372,036,854,775,808 and +9,223,372,036,854,775,807.
-   For combinations using "m", the length of the literal cannot be larger than the column.
-   For combinations using "d", the length of the literal and the number of decimal places cannot be larger than the length and number for the column.
-   For combinations using "l", the length of the literal must be equal to the length of the column.