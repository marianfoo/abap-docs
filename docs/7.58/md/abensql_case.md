  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20sql_case%2C%20ABENSQL_CASE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - sql\_case

Syntax Forms

[Simple Case Distinction](javascript:call_link\('abensql_simple_case.htm'\))

1\. ... CASE sql\_exp
           WHEN sql\_exp1 THEN result1
          *\[*WHEN sql\_exp2 THEN result2*\]*
           ...
          *\[*ELSE resultn*|*sql\_null*\]*
      END ...

[Complex Case Distinction](javascript:call_link\('abensql_searched_case.htm'\))

2\. ... CASE WHEN sql\_cond1 THEN result1
          *\[*WHEN sql\_cond2 THEN result2*\]*
          *\[*WHEN sql\_cond3 THEN result3*\]*
            ...
          *\[*ELSE resultn*|*sql\_null*\]*
      END ...

Effect

Case distinction in ABAP SQL. Either a [simple case distinction](javascript:call_link\('abensql_simple_case.htm'\)) (simple case) or a [complex case distinction](javascript:call_link\('abensql_searched_case.htm'\)) (searched case).

Hints

-   Specifying a case distinction always means specifying an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)). Case distinctions can only be specified for operand positions in which SQL expressions are possible.
-   A conflict between SQL language element CASE and a column named CASE cannot occur because the ABAP Dictionary does not allow a column with this name to be created. However, if a column with this name does exist, it must be prefixed with the escape character [!](javascript:call_link\('abennames_escaping.htm'\)) when it is specified in an ABAP SQL statement.
-   A maximum of 10 case distinctions can be nested with CASE.
-   A case distinction can be processed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine.htm'\)) for accessing the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and internal tables with [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)).

Continue
[sql\_exp - sql\_simple\_case](javascript:call_link\('abensql_simple_case.htm'\))
[sql\_exp - sql\_searched\_case](javascript:call_link\('abensql_searched_case.htm'\))