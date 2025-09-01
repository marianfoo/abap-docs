---
title: "OPEN CURSOR - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm) Syntax OPEN CURSOR WITH HOLD @dbcur FOR WITH(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith_shortref.htm) +cte1 AS subquery(https://help.sap.com/doc/abapdocu_757_index_htm
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor_shortref.htm"
abapFile: "abapopen_cursor_shortref.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abapopen", "cursor", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  O

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: OPEN CURSOR, ABAPOPEN_CURSOR_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

OPEN CURSOR - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm)

Syntax

OPEN CURSOR *\[*WITH HOLD*\]* @dbcur FOR
  *\[*[WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith_shortref.htm)
    +cte1 AS [subquery](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubquery_shortref.htm)*\[*,
    +cte2 AS [subquery](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubquery_shortref.htm)
    ...*\]**\]*
  SELECT *{* ...
           FROM ... *}*
       *|* *{* FROM ...
           FIELDS ... *}*
         *\[**\[*FOR ALL ENTRIES IN itab*\]* WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cond_shortref.htm)*\]*
         *\[*GROUP BY ...*\]* *\[*HAVING [sql\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cond_shortref.htm)*\]*
         *\[*ORDER BY ...*\]*
         *\[*UP TO n ROWS*\]*
         *\[*OFFSET o*\]*
         *\[*BYPASSING BUFFER*\]*
         *\[*CONNECTION con*|*(con\_syntax)*\]*.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement. Opens a [database cursor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") for the selection defined using SELECT and associates a cursor variable dbcur with this database cursor.

Additions   

-   [WITH +cte](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm)
    Introduces a [common table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommon_table_expression_glosry.htm "Glossary Entry")+cte.
-   [WITH HOLD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_cursor.htm)
    Leaves the cursor open in the case of an explicitly triggered [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_rollback_glosry.htm "Glossary Entry").
-   [*\[*FIELDS*\]* ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm)
    Defines a selection set.
-   [FROM ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm)
    Specifies the database tables.
-   [*\[*FOR ALL ENTRIES IN itab*\]* WHERE sql\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhere.htm)
    Specifies a condition for the result set.
-   [GROUP BY ... *\[*HAVING sql\_cond*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgroupby_clause.htm)
    Groups rows and sets a condition on the grouped rows.
-   [ORDER BY ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm)
    Sorts the result set.
-   [OFFSET, UP TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_up_to_offset.htm)
    Restricts the result set.
-   [BYPASSING BUFFER, CONNECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_additions.htm)
    ABAP-specific additions.