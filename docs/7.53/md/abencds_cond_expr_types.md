  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_operands_and_expressions.htm) →  [ABAP CDS - cond\_expr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conditional_expression.htm) →  [ABAP CDS - cond\_expr, Relational Operators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_cond_expr_comp.htm) → 

ABAP CDS - cond\_expr, Comparable Types

The following tables show which [built-in data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) in ABAP Dictionary can be compared with each other in a [condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conditional_expression.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry").

-   [Comparisons with Fields of Data Sources](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_1)

-   [Comparisons with Parameters](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_2)

-   [Comparisons with literals](#@@ITOC@@ABENCDS_COND_EXPR_TYPES_3)

Comparisons with Fields of Data Sources

The following table shows the possible combinations of data source fields [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) on the left side (lhs) with data source fields on the right side (rhs) of [comparisons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_cond_expr_comp.htm).

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

CLNT

LANG

DATS

TIMS

ACCP

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

\-

\-

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

\-

\-

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

\-

\-

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

\-

\-

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

\-

\-

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

\-

\-

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

\-

\-

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

\-

\-

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

l

x

x

x

x

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

x

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

x

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

ACCP

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

x

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

\-

x

\-

x

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

x

\-

\-

x

\-

\-

x

x

x

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

l

-   There are no restrictions for combinations using "x".

-   In combinations using "l", the lengths of the compared columns must match exactly.

Comparisons with Parameters

The following table shows the possible combinations of data source fields [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) on the left side (lhs) with [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_parameter.htm) on the right side (rhs) of [comparisons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_cond_expr_comp.htm).

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

CLNT

LANG

DATS

TIMS

ACCP

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

\-

\-

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

\-

\-

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

\-

\-

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

\-

\-

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

\-

\-

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

\-

\-

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

\-

\-

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

\-

\-

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

l

x

x

x

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

x

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

x

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

ACCP

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

x

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

\-

x

\-

x

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

x

\-

\-

x

\-

\-

\-

x

x

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

l

-   There are no restrictions for combinations using "x".

-   In combinations using "l", the lengths of the compared operands must match exactly.

Comparisons with literals

The following table shows the possible combinations of data source fields [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_data_source.htm) on the left side (lhs) with [literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_literal.htm) on the right side (rhs) of [comparisons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_cond_expr_comp.htm) function. The data types of literals are determined by the content of literals (as described [here](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_literal.htm)) and only the data types displayed in the table are possible.

lhs/rhs

INT1

INT2

INT4

FLTP

CHAR

NUMC

INT1

x

y

\-

\-

\-

\-

INT2

x

x

z

\-

\-

\-

INT4

x

x

x

\-

\-

\-

INT8

x

x

x

\-

\-

\-

DEC

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

d

\-

\-

QUAN

l

l

l

d

\-

\-

FLTP

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

m

m

NUMC

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

l

LANG

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

l

TIMS

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

l

UNIT

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

m

\-

SSTRING

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

-   There are no restrictions for combinations using "x".

-   For the combination using "y", the literal value must be between 0 and 999. For the combination using "z", the literal value must be between -99999 and +99999.

-   For combinations using "m", the length of the literal cannot be larger than the column.

-   For combinations using "d", the length of the literal and the number of decimal places cannot be larger than the length and number for the column.

-   For combinations using "l", the length of the literal must be equal to the length of the column.