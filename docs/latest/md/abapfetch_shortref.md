---
title: "FETCH - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfetch.htm) Syntax FETCH NEXT CURSOR dbcur   INTO  CORRESPONDING FIELDS OF wa  (dobj1, dobj2, ...)     INTOAPPENDING CORRESPONDING FIELDS OF TABLE itab PACKAGE SIZE n
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfetch_shortref.htm"
abapFile: "abapfetch_shortref.htm"
keywords: ["select", "do", "if", "try", "data", "internal-table", "abapfetch", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  F

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FETCH%2C%20ABAPFETCH_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FETCH - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfetch.htm)

Syntax

FETCH NEXT CURSOR dbcur
    *{* *{* INTO *{* *{**\[*CORRESPONDING FIELDS OF*\]* wa*}* *|* (dobj1, dobj2, ...) *}* *}*
    *|* *{* INTO*|*APPENDING *\[*CORRESPONDING FIELDS OF*\]* TABLE itab
                       *\[*PACKAGE SIZE n*\]* *}* *}*
      *\[* EXTENDED RESULT @oref *\]*.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement. Extracts rows from the result set of a [database cursor](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") opened using OPEN CURSOR.

Additions   

-   [INTO wa](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm)
    Reads a row and assigns it to a work area wa.
-   [INTO (dobj1, dobj2, ...)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm)
    Reads a row and assigns it to multiple data objects dobj1, dobj2, ...
-   [INTO*|*APPENDING TABLE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm)
    Reads multiple rows and assigns them to an internal table itab or attaches them to the table.
-   [CORRESPONDING FIELDS OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm)
    Restricts the transport to identically named components of the work area wa or to the internal table itab.
-   [PACKAGE SIZE n](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm)
    Passes the rows in packages of n rows to the internal table itab.
-   [EXTENDED RESULT @oref](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_extended_result.htm)
    Provides an extended result in a result object.