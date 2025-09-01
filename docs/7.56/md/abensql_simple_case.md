  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_case](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_case.htm) → 

sql\_exp - sql\_simple\_case

Syntax

... CASE sql\_exp
         WHEN sql\_exp1 THEN result1
        *\[*WHEN sql\_exp2 THEN result2*\]*
         ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Simple [case distinction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_case.htm) (simple case) in ABAP SQL. This SQL expression compares the values of the operand sql\_exp with the operands sql\_exp1, sql\_exp2, ..., and returns the operand result as the result after the first THEN for which the comparison is true. If no matches are found, the result specified after ELSE is selected. If ELSE is not specified, the result is the [null value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry").

The operands sql\_exp, sql\_exp1, sql\_exp2, ..., and the results result1, result2, ... can be any [SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm). They can have any dictionary types except ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), LCHR, LRAW, PREC, RAWSTRING, STRING, and GEOM\_EWKB.

The data type of the operand sql\_exp must be [comparable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_compare_types.htm) with the data types of the operands sql\_exp1, sql\_exp2, .... If this is not the case, a static specification raises a syntax error and a dynamic specification raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS. The results must also be compatible to produce a common result type: The data types result1, result2, ... must be either the same or the data type must be able to completely represent the value of all other data types. The result has the dictionary type of the specification with the greatest value range.

If an operand of a comparison has the [null value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of this comparison is unknown.

Hints

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html).
-   If the case distinction is evaluated in the table buffer, the order of processing is preserved and there is no termination when an operand is evaluated whose condition is not true.
-   If an operand of a simple CASE expression is an SQL expression, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp08.htm) that handles the statement more strictly than the regular syntax check.

Example

Conversion of the distances specified in miles to kilometers. The conversion factor is specified as the host variable whose value has already been calculated using an SQL expression in a SELECT statement. This task could also be performed more generally in a subquery of a [WITH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwith.htm) statement.

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

[SQL expressions, simple CASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_case_string_abexa.htm)

Continue
![Example](exa.gif "Example") [sql\_exp - Simple CASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_case_string_abexa.htm)