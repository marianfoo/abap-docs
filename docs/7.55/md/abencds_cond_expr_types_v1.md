  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) →  [CDS DDL - DDIC-based View, cds\_cond, Comparison Operators](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)) → 

CDS DDL - DDIC-based View, cds\_cond, Comparable Types

The following tables show which [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary can be compared with each other in a [condition](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").

-   [Comparisons with Fields of Data Sources](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_V1_1)

-   [Comparisons with Parameters](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_V1_2)

-   [Comparisons with literals](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_V1_3)

Comparisons with Fields of Data Sources

The following table shows the possible combinations of data source fields [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) on the left side (lhs) with data source fields on the right side (rhs) of [comparisons](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)).

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

x

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

x

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

Comparisons with Parameters

The following table shows the possible combinations of data source fields [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) on the left side (lhs) with [parameters](javascript:call_link\('abencds_parameter_v1.htm'\)) on the right side (rhs) of [comparisons](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)).

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

x

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

x

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

Comparisons with literals

The following table shows the possible combinations of data source fields [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) on the left side (lhs) with [literals](javascript:call_link\('abencds_literal_v1.htm'\)) on the right side (rhs) of [comparisons](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)). The data types of literals are determined by their content (as described [here](javascript:call_link\('abencds_literal_v1.htm'\))) and only the data types shown in the table are possible.

lhs/rhs

INT1

INT2

INT4

INT8

FLTP

CHAR

NUMC

INT1

x

v

\-

\-

\-

\-

\-

INT2

x

x

v

\-

\-

\-

\-

INT4

x

x

x

v

\-

\-

\-

INT8

x

x

x

v

\-

\-

\-

DEC

x

x

x

x

d

\-

\-

CURR

l

l

l

l

d

\-

\-

QUAN

l

l

l

l

d

\-

\-

DECFLOAT16

x

x

x

x

\-

\-

\-

DECFLOAT34

x

x

x

x

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

CHAR

\-

\-

\-

\-

\-

m

m

SSTRING

\-

\-

\-

\-

\-

m

\-

NUMC

\-

\-

\-

\-

\-

\-

l

CLNT

\-

\-

\-

\-

\-

\-

l

LANG

\-

\-

\-

\-

\-

l

l

DATS

\-

\-

\-

\-

\-

\-

l

TIMS

\-

\-

\-

\-

\-

\-

l

ACCP

\-

\-

\-

\-

\-

\-

l

UNIT

\-

\-

\-

\-

\-

m

\-

CUKY

\-

\-

\-

\-

\-

m

\-

RAW

\-

\-

\-

\-

\-

\-

\-

-   There are no restrictions for combinations using "x".

-   For the combination using "v", the literal value must be within the following value range:

-   Comparison of INT1(lhs) with INT2(rhs): between 0 and 999.

-   Comparison of INT2(lhs) with INT4(rhs): between -99,999 and +99,999.

-   Comparison of INT4(lhs) with INT8(rhs): between -9,999,999,999 and +9,999,999,999.

-   Comparison of INT8(lhs) with INT8( rhs): between -9,223,372,036,854,775,808 and +9,223,372,036,854,775,807.

-   For combinations using "m", the length of the literal cannot be larger than the column.

-   For combinations using "d", the length of the literal and the number of decimal places cannot be larger than the length and number for the column.

-   For combinations using "l", the length of the literal must be equal to the length of the column.