  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  O

OPEN CURSOR - Quick reference

[Reference](javascript:call_link\('abapopen_cursor.htm'\))

Syntax

OPEN CURSOR *\[*WITH HOLD*\]* @dbcur FOR
  *\[*[WITH](javascript:call_link\('abapwith_shortref.htm'\))
    +cte1 AS [subquery](javascript:call_link\('abensubquery_shortref.htm'\))*\[*,
    +cte2 AS [subquery](javascript:call_link\('abensubquery_shortref.htm'\))
    ...*\]**\]*
  SELECT *{* ...
           FROM ... *}*
       *|* *{* FROM ...
           FIELDS ... *}*
         *\[**\[*FOR ALL ENTRIES IN itab*\]* WHERE [sql\_cond](javascript:call_link\('abensql_cond_shortref.htm'\))*\]*
         *\[*GROUP BY ...*\]* *\[*HAVING [sql\_cond](javascript:call_link\('abensql_cond_shortref.htm'\))*\]*
         *\[*ORDER BY ...*\]*
         *\[*UP TO n ROWS*\]*
         *\[*OFFSET o*\]*
         *\[*BYPASSING BUFFER*\]*
         *\[*CONNECTION con*|*(con\_syntax)*\]*.

Effect

[ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement. Opens a [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") for the selection defined using SELECT and associates a cursor variable dbcur with this database cursor.

Additions

-   [WITH +cte](javascript:call_link\('abapwith.htm'\))
    Introduces a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry")+cte.
    
-   [WITH HOLD](javascript:call_link\('abapopen_cursor.htm'\))
    Leaves the cursor open in the case of an explicitly triggered [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry").
    
-   [*\[*FIELDS*\]* ...](javascript:call_link\('abapselect.htm'\))
    Defines a selection set.
    
-   [FROM ...](javascript:call_link\('abapfrom_clause.htm'\))
    Specifies the database table(s).
    
-   [*\[*FOR ALL ENTRIES IN itab*\]* WHERE sql\_cond](javascript:call_link\('abapwhere.htm'\))
    Specifies a condition for the results set.
    
-   [GROUP BY ... *\[*HAVING sql\_cond*\]*](javascript:call_link\('abapgroupby_clause.htm'\))
    Groups rows and sets a condition on the grouped rows.
    
-   [ORDER BY ...](javascript:call_link\('abaporderby_clause.htm'\))
    Sorts the results set.
    
-   [OFFSET, UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\))
    Restricts the results set.
    
-   [BYPASSING BUFFER, CONNECTION](javascript:call_link\('abapselect_additions.htm'\))
    ABAP-specific additions.