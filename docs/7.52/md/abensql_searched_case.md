  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_case](javascript:call_link\('abensql_case.htm'\)) → 

sql\_exp - sql\_searched\_case

Syntax

... CASE WHEN [sql\_cond1](javascript:call_link\('abenosql_expr_logexp.htm'\)) THEN result1
        *\[*WHEN [sql\_cond2](javascript:call_link\('abenosql_expr_logexp.htm'\)) THEN result2*\]*
        *\[*WHEN [sql\_cond3](javascript:call_link\('abenosql_expr_logexp.htm'\)) THEN result3*\]*
          ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Complex [case distinction](javascript:call_link\('abensql_case.htm'\)) (searched case) in Open SQL. This SQL expression evaluates logical expressions [sql\_cond1](javascript:call_link\('abenosql_expr_logexp.htm'\)), [sql\_cond2](javascript:call_link\('abenosql_expr_logexp.htm'\)), ... and produces the operand result as a result after the first THEN for which the logical expression is true. If none of the logical expressions are true, the result specified after ELSE is selected. If ELSE is not specified, the result is the [zero value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). The results result1, result2, ... can be any SQL expressions, including columns, literals, host variables, and host expressions.

The results must be compatible with each other in such a way that a common result type can be determined: Data types result1, result2, ... must be either the same or the data type must be able to fully represent the value of all other data types. If this is not the case, a statically specified type raises a syntax error and a dynamically specified type raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS. The result has the dictionary type of the entry with the greatest value range.

If a complex CASE is used in a [condition](javascript:call_link\('abenwhere_logexp.htm'\)) of an Open SQL statement, the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") of a client-specific data source of a query or of the target of a write statement is used as an operand of a WHEN condition only in cases when automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") is switched off for the query or write using the addition CLIENT SPECIFIED.

Notes

-   The SQL standard dictates the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.

-   On the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when am operand is evaluated, the entire case distinction is canceled. Here, it does not matter which conditions apply and the order in which they are noted. From this reason, it is advisable not to use any exceptions in expressions specified as operands. More information can be found in the [HANA-specific SQL](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us) documentation.

-   The [relational expressions](javascript:call_link\('abenosql_expr_logexp.htm'\)) that can be used after CASE are a subset of the [relational expressions for statements](javascript:call_link\('abenwhere_logexp.htm'\)), but also allow [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) as operands on the right side.

-   When complex CASE is used, the syntax check is performed in a [strict mode from Release 7.40, SP08](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\)), which handles the statement more strictly than the regular syntax check.

-   When SQL expressions are specified on the left side or host expressions occur on the right side, the syntax check is performed in a [strict mode from Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.

Example

Evaluates the column FLTIME in a complex CASE.

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

[SQL Expressions, Complex CASE](javascript:call_link\('abensql_expr_searched_case_abexa.htm'\))