  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_case](javascript:call_link\('abensql_case.htm'\)) → 

sql\_exp - sql\_simple\_case

Syntax

... CASE operand
         WHEN operand1 THEN result1
        *\[*WHEN operand2 THEN result2*\]*
         ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Simple [case distinction](javascript:call_link\('abensql_case.htm'\)) (simple case) in ABAP SQL. This SQL expression compares the values of operand operand with operands operand1, operand2, ... and produces the operand result as the result after the first THEN for which the comparison is true. If no matches are found, the result specified after ELSE is selected. If ELSE is not specified, the result is the [zero value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

The operands operand, operand1, operand2, ... and the results result1, result2, ... can be any SQL expressions, which covers columns, literals, host variables, and host expressions. They can have any dictionary types except ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), LCHR, LRAW, PREC, RAWSTRING, and STRING. Literals, host variables, and host expressions can have any ABAP types, except for string and xstring.

The data type of the operand operand must be [comparable](javascript:call_link\('abenwhere_logexp_compare_types.htm'\)) with the data types of the operands operand1, operand2, ... If this is not the case, a statically specified type raises a syntax error and a dynamically specified type raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS. The results must also be compatible to produce a common result type: The data types result1, result2, ... must be either the same or the data type must be able to fully represent the value of all other data types. The result has the dictionary type of the entry with the greatest value range.

If an operand of a comparison has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result of this comparison is unknown.

Notes

-   The SQL standard dictates the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.

-   On the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when am operand is evaluated, the entire case distinction is canceled. Here, it does not matter which conditions apply and the order in which they are noted. From this reason, it is advisable not to use any exceptions in expressions specified as operands. More information can be found in the [HANA-specific SQL](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us) documentation.

-   If the case distinction is evaluated in the table buffer, the order of processing is preserved and there is no crash when an operand is evaluated whose condition is not true.

-   If an operand of a simple CASE expression is an SQL expression, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\)) that handles the statement more strictly than the regular syntax check.

Example

Converts the distances specified in miles to kilometers. The conversion factor is specified as the host variable, whose value has already been calculated using an SQL expression in a SELECT statement. This task could also be performed more generally in a subquery of a [WITH](javascript:call_link\('abapwith.htm'\)) statement.

SELECT SINGLE
       FROM t006
       FIELDS division( zaehl,nennr \* 1000,2 ) AS factor
       WHERE msehi = 'MI'
       INTO @DATA(factor).
SELECT FROM spfli
       FIELDS carrid,
              connid,
              cityfrom,
              cityto,
              CASE distid
                   WHEN 'MI' THEN distance \* @factor
                   ELSE distance
              END AS distance,
       'KM' AS distid
       WHERE distid = 'KM' OR distid = 'MI'
       ORDER BY carrid, connid
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Example

[SQL Expressions, Simple CASE and &&](javascript:call_link\('abensql_expr_case_string_abexa.htm'\))