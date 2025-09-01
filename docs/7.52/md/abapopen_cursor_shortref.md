---
title: "OPEN CURSOR - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor.htm) Syntax OPEN CURSOR WITH HOLD @dbcur FOR WITH(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith_shortref.htm) +cte1 AS subquery(https://help.sap.com/doc/abapdocu_752_index_htm
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor_shortref.htm"
abapFile: "abapopen_cursor_shortref.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abapopen", "cursor", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  O

OPEN CURSOR - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor.htm)

Syntax

OPEN CURSOR *\[*WITH HOLD*\]* @dbcur FOR
  *\[*[WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith_shortref.htm)
    +cte1 AS [subquery](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubquery_shortref.htm)*\[*,
    +cte2 AS [subquery](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubquery_shortref.htm)
    ...*\]**\]*
  SELECT *{* ...
           FROM ... *}*
       *|* *{* FROM ...
           FIELDS ... *}*
         *\[**\[*FOR ALL ENTRIES IN itab*\]* WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_shortref.htm)*\]*
         *\[*GROUP BY ...*\]* *\[*HAVING [sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_shortref.htm)*\]*
         *\[*ORDER BY ...*\]*
         *\[*UP TO n ROWS*\]*
         *\[*OFFSET o*\]*
         *\[*BYPASSING BUFFER*\]*
         *\[*CONNECTION con*|*(con\_syntax)*\]*.

Effect

[Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement. Opens a [database cursor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") for the selection defined using SELECT and associates a cursor variable dbcur with this database cursor.

Additions

-   [WITH +cte](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith.htm)
    Introduces a [common table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencommon_table_expression_glosry.htm "Glossary Entry")+cte.
    
-   [WITH HOLD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor.htm)
    Leaves the cursor open in the case of an explicitly triggered [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry") or [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_rollback_glosry.htm "Glossary Entry").
    
-   [*\[*FIELDS*\]* ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm)
    Defines a selection set.
    
-   [FROM ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm)
    Specifies the database table(s).
    
-   [*\[*FOR ALL ENTRIES IN itab*\]* WHERE sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm)
    Specifies a condition for the results set.
    
-   [GROUP BY ... *\[*HAVING sql\_cond*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm)
    Groups rows and sets a condition on the grouped rows.
    
-   [ORDER BY ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm)
    Sorts the results set.
    
-   [OFFSET, UP TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_up_to_offset.htm)
    Restricts the results set.
    
-   [BYPASSING BUFFER, CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm)
    ABAP-specific additions.