  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  O

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OPEN%20CURSOR%2C%20ABAPOPEN_CURSOR_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OPEN CURSOR - Short Reference

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

[ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement. Opens a [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") for the selection defined using SELECT and associates a cursor variable dbcur with this database cursor.

Additions   

-   [WITH +cte](javascript:call_link\('abapwith.htm'\))
    Introduces a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry")+cte.
-   [WITH HOLD](javascript:call_link\('abapopen_cursor.htm'\))
    Leaves the cursor open in the case of an explicitly triggered [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry").
-   [*\[*FIELDS*\]* ...](javascript:call_link\('abapselect.htm'\))
    Defines a selection set.
-   [FROM ...](javascript:call_link\('abapfrom_clause.htm'\))
    Specifies the database tables.
-   [*\[*FOR ALL ENTRIES IN itab*\]* WHERE sql\_cond](javascript:call_link\('abapwhere.htm'\))
    Specifies a condition for the result set.
-   [GROUP BY ... *\[*HAVING sql\_cond*\]*](javascript:call_link\('abapgroupby_clause.htm'\))
    Groups rows and sets a condition on the grouped rows.
-   [ORDER BY ...](javascript:call_link\('abaporderby_clause.htm'\))
    Sorts the result set.
-   [OFFSET, UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\))
    Restricts the result set.
-   [ABAP-specific additions](javascript:call_link\('abapselect_additions.htm'\))