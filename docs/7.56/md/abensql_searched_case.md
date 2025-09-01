---
title: "Syntax"
description: |
  ... CASE WHEN sql_cond1(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_expr_logexp.htm) THEN result1 WHEN sql_cond2(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_expr_logexp.htm) THEN result2 WHEN sql_cond3(https://help.sap.com/
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_searched_case.htm"
abapFile: "abensql_searched_case.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abensql", "searched"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_case](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_case.htm) → 

sql\_exp - sql\_searched\_case

Syntax

... CASE WHEN [sql\_cond1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_expr_logexp.htm) THEN result1
        *\[*WHEN [sql\_cond2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_expr_logexp.htm) THEN result2*\]*
        *\[*WHEN [sql\_cond3](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_expr_logexp.htm) THEN result3*\]*
          ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Complex [case distinction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_case.htm) (searched case) in ABAP SQL. This SQL expression evaluates logical expressions [sql\_cond1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_expr_logexp.htm), [sql\_cond2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_expr_logexp.htm), ... and produces the operand result as a result after the first THEN for which the logical expression is true. If no logical expressions are true, the result specified after ELSE is selected. If ELSE is not specified, the result is the [null value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry"). The results result1, result2, ... can be any [SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm).

The results must be compatible with each other in such a way that a common result type can be determined: The data types result1, result2, ... must be either the same or the data type must be able to fully represent the value of all other data types. If this is not the case, a static specification raises a syntax error and a dynamic specification raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS. The result has the dictionary type of the specification with the greatest value range.

If a complex CASE is used in a [condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasql_cond.htm) of an ABAP SQL statement, the [client column](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-dependent data source of a query or of the target of a write statement cannot be used as the operand of a WHEN condition due to [implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm).

Hints

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html).
-   If the case distinction is evaluated in the table buffer, the order of processing is preserved and there is no termination when an operand is evaluated whose condition is not true.
-   The [relational expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_expr_logexp.htm) that can be used after CASE are a subset of the [relational expressions for statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_stmt_logexp.htm), but also allow [SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) as operands on the right side.
-   When complex CASE is used, the syntax check is performed in a [strict mode from Release 7.40, SP08](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.
-   A client column can be used as an operand only if [implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm) is disabled using the obsolete addition CLIENT SPECIFIED for the query or the write statement.
-   When SQL expressions are specified on the left side or host expressions occur on the right side, the syntax check is performed in a [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_750.htm), which handles the statement more strictly than the regular syntax check.

Example

Evaluation of the column FLTIME in a complex CASE.

SELECT FROM spfli
       FIELDS carrid,
              connid,
              cityfrom,
              cityto,
              CASE WHEN fltime < 100 THEN 'short'
                   WHEN fltime BETWEEN 100 AND 300 THEN 'medium'
                   ELSE 'long'
              END AS fltime
       ORDER BY carrid, connid
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Example

[SQL Expressions, Complex CASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_searched_case_abexa.htm)

Continue
![Example](exa.gif "Example") [sql\_exp - Complex CASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_searched_case_abexa.htm)