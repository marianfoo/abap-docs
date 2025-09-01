  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

sql\_exp - sql\_case

Syntax Forms

[Simple case distinction](javascript:call_link\('abensql_simple_case.htm'\))
1\. ... CASE operand
           WHEN operand1 THEN result1
          *\[*WHEN operand2 THEN result2*\]*
           ...
          *\[*ELSE resultn*\]*
      END ...
[Complex case distinction](javascript:call_link\('abensql_searched_case.htm'\))
2\. ... CASE WHEN sql\_cond1 THEN result1
          *\[*WHEN sql\_cond2 THEN result2*\]*
          *\[*WHEN sql\_cond3 THEN result3*\]*
            ...
          *\[*ELSE resultn*\]*
      END ...

Effect

Case distinction in Open SQL. Either a [simple case distinction](javascript:call_link\('abensql_simple_case.htm'\)) (simple case) or a [complex case distinction](javascript:call_link\('abensql_searched_case.htm'\)) (searched case).

Notes

-   A conflict between SQL language element CASE and a column named CASE cannot occur because ABAP Dictionary does not permit a column with this name to be created. However, if a column with this name does exist, it must be prefixed with the escape character [!](javascript:call_link\('abennames_escaping.htm'\)) when it is specified in an Open SQL statements.

-   A maximum of 10 case distinctions can be nested with CASE.

Continue
[sql\_exp - sql\_simple\_case](javascript:call_link\('abensql_simple_case.htm'\))
[sql\_exp - sql\_searched\_case](javascript:call_link\('abensql_searched_case.htm'\))