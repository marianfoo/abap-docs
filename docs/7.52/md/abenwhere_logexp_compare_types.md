  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - Conditions sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_cond.htm) →  [sql\_cond - rel\_exp for Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm) →  [sql\_cond - Relational Operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_compare.htm) → 

sql\_cond - Comparable Types

The following table shows which [predefined data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) in ABAP Dictionary can be compared with each other. The table applies to the following:

-   [Comparisons](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_compare.htm) of a [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm) condition or [HAVING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaphaving_clause.htm) condition in which columns or expressions are specified on the left side (lhs) and columns are specified on the right side (rhs).

-   Comparisons of an [ON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm) condition.

-   Comparisons in [expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenosql_expr_logexp.htm).

Invalid comparisons produce a syntax error in [conditions of an expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenosql_expr_logexp.htm) and in the [strict mode from Release 7.40SP08](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp08.htm). In other cases, a syntax warning is produced. The result of invalid comparisons is determined by the database system and is not platform-independent.

lhs/rhs

INT1

INT2

INT4

INT8

DEC

CURR

QUAN

FLTP

DF16\_DEC

DF16\_RAW

DF34\_DEC

DF34\_RAW

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

\-

y

\-

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

INT2

x

x

x

x

x

x

x

\-

y

\-

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

\-

y

\-

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

\-

y

\-

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

\-

y

\-

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

y

\-

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

\-

y

\-

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

\-

\-

\-

\-

DF16\_DEC

y

y

y

y

y

y

y

\-

z

\-

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

DF16\_RAW

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

DF34\_DEC

y

y

y

y

y

y

y

\-

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

\-

\-

\-

\-

\-

DF34\_RAW

\-

\-

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

\-

\-

x

x

x

x

x

x

y

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

\-

\-

x

x

x

x

e

e

y

x

x

x

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

\-

\-

x

x

x

x

e

e

y

x

x

x

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

\-

\-

x

x

x

x

e

e

y

x

x

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

\-

\-

\-

\-

x

e

e

e

x

e

\-

e

e

e

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

\-

\-

x

e

e

e

e

x

\-

e

e

e

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

\-

\-

y

y

y

y

\-

\-

y

y

y

y

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

\-

\-

x

x

x

x

e

e

y

x

x

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

\-

\-

\-

\-

x

x

x

x

e

e

y

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

\-

\-

x

x

x

x

e

e

y

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

\-

\-

\-

\-

l, y

-   There are no restrictions for combinations using "x".

-   Combinations with "y" cannot be used in [conditions in an expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenosql_expr_logexp.htm).

-   In combinations with "z", the lengths and decimal places must match in the compared columns or expressions in [conditions in an expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenosql_expr_logexp.htm).

-   Combinations with "e" can only be used in [conditions in an expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenosql_expr_logexp.htm) and cannot be used in [conditions for a statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm).

-   In combinations with "l", the lengths of the compared columns or expressions must match.

Notes

-   The table does not show the [obsolete types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_obsolete_types.htm) DF16\_SCL and DF34\_SCL, which cannot be compared in [conditions in an expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenosql_expr_logexp.htm) and (like DF16\_RAW and DF34\_RAW) can otherwise only be compared with themselves.

-   In the following cases, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check.

-   Columns or expressions of the types DF16\_DEC or DF34\_DEC are compared with other numeric types except with themselves.

-   Columns or expressions of the type SSTRING are compared with types other than themselves in a [CASE expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_case.htm).