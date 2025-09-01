---
title: "Syntax"
description: |
  ... CASE sql_exp WHEN sql_exp1 THEN result1 WHEN sql_exp2 THEN result2 ... ELSE resultn END ... Effect Simple case distinction(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_case.htm) (simple case) in ABAP SQL. This SQL expression compares the values of the o
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_simple_case.htm"
abapFile: "abensql_simple_case.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abensql", "simple"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_case](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_case.htm) → 

sql\_exp - sql\_simple\_case

Syntax

... CASE sql\_exp
         WHEN sql\_exp1 THEN result1
        *\[*WHEN sql\_exp2 THEN result2*\]*
         ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Simple [case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_case.htm) (simple case) in ABAP SQL. This SQL expression compares the values of the operand sql\_exp with the operands sql\_exp1, sql\_exp2, and so on, and produces the operand result as the result after the first THEN for which the comparison is true. If no matches are found, the result specified after ELSE is selected. If ELSE is not specified, the result is the [zero value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry").

The operands sql\_exp, sql\_exp1, sql\_exp2, and so on, and the results result1, result2, and so on can be any [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm). They can have any dictionary types except ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), LCHR, LRAW, PREC, RAWSTRING, STRING, and GEOM\_EWKB.

The data type of the operand sql\_exp must be [comparable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_compare_types.htm) with the data types of the operands sql\_exp1, sql\_exp2, and so on. If this is not the case, a statically specified type raises a syntax error and a dynamically specified type raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS. The results must also be compatible to produce a common result type: The data types result1, result2, ... must be either the same or the data type must be able to fully represent the value of all other data types. The result has the dictionary type of the entry with the greatest value range.

If an operand of a comparison has the [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of this comparison is unknown.

Notes

-   The SQL standard dictates the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.

-   On the [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when am operand is evaluated, the entire case distinction is canceled. Here, it does not matter which conditions apply and the order in which they are noted. From this reason, it is advisable not to use any exceptions in expressions specified as operands. More information can be found in the [HANA-specific SQL](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.03/en-US) documentation.

-   If the case distinction is evaluated in the table buffer, the order of processing is preserved and there is no crash when an operand is evaluated whose condition is not true.

-   If an operand of a simple CASE expression is an SQL expression, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_740_sp08.htm) that handles the statement more strictly than the regular syntax check.

Example

Converts the distances specified in miles to kilometers. The conversion factor is specified as the host variable, whose value has already been calculated using an SQL expression in a SELECT statement. This task could also be performed more generally in a subquery of a [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement.

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

[SQL expressions, simple CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_case_string_abexa.htm)

Continue
![Example](exa.gif "Example") [SQL Expressions, Simple CASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_case_string_abexa.htm)