  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20subquery%2C%20ABENSUBQUERY_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

subquery - Short Reference

Syntax

... ( SELECT *{* ...
               FROM ... *}*
           *|* *{* FROM ...
               FIELDS ... *}*
             *\[*WHERE [sql\_cond](javascript:call_link\('abensql_cond_shortref.htm'\))*\]*
             *\[*GROUP BY ...*\]* *\[*HAVING [sql\_cond](javascript:call_link\('abensql_cond_shortref.htm'\))*\]* ) ...

Effect

Parenthesized SELECT statement that can be used in conditions [sql\_cond](javascript:call_link\('abensql_cond_shortref.htm'\)) of [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statements, in common table expressions of the statement [WITH](javascript:call_link\('abapwith_shortref.htm'\)), or as a data source of an [INSERT statement](javascript:call_link\('abapinsert_dbtab_shortref.htm'\)) for a subquery.

Additions   

-   As in the statement [SELECT](javascript:call_link\('abapselect_shortref.htm'\)).
-   The additions SINGLE, ORDER BY, and INTO cannot be used.
-   Further additions may also be excluded, depending on how they are used.