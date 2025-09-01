  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

subquery - Quick reference

Syntax

... ( SELECT *{* ...
               FROM ... *}*
           *|* *{* FROM ...
               FIELDS ... *}*
             *\[*WHERE [sql\_cond](javascript:call_link\('abensql_cond_shortref.htm'\))*\]*
             *\[*GROUP BY ...*\]* *\[*HAVING [sql\_cond](javascript:call_link\('abensql_cond_shortref.htm'\))*\]* ) ...

Effect

Parenthesized SELECT statement that can be used in conditions [sql\_cond](javascript:call_link\('abensql_cond_shortref.htm'\)) of [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statements, in common table expressions of the statement [WITH](javascript:call_link\('abapwith_shortref.htm'\)), or as a data source of an [INSERT statement](javascript:call_link\('abapinsert_dbtab_shortref.htm'\)) for a subquery.

Additions

-   As in the statement [SELECT](javascript:call_link\('abapselect_shortref.htm'\)).
    
-   The additions SINGLE, ORDER BY, and INTO cannot be used.
    
-   Further additions may also be excluded, depending on how they are used.