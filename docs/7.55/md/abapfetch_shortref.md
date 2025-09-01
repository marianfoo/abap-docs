---
title: "FETCH - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm) Syntax FETCH NEXT CURSOR dbcur   INTO  CORRESPONDING FIELDS OF wa  (dobj1, dobj2, ...)     INTOAPPENDING CORRESPONDING FIELDS OF TABLE itab PACKAGE SIZE n
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch_shortref.htm"
abapFile: "abapfetch_shortref.htm"
keywords: ["select", "do", "try", "data", "internal-table", "abapfetch", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  F

FETCH - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm)

Syntax

FETCH NEXT CURSOR dbcur
    *{* *{* INTO *{* *{**\[*CORRESPONDING FIELDS OF*\]* wa*}* *|* (dobj1, dobj2, ...) *}* *}*
    *|* *{* INTO*|*APPENDING *\[*CORRESPONDING FIELDS OF*\]* TABLE itab
                       *\[*PACKAGE SIZE n*\]* *}* *}*
      *\[* EXTENDED RESULT @oref *\]*.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement. Extracts rows from the result set of a [database cursor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") opened using OPEN CURSOR.

Additions

-   [INTO wa](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm)
    Reads a row and assigns it to a work area wa.
    

-   [INTO (dobj1, dobj2, ...)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm)
    Reads a row and assigns it to multiple data objects dobj1, dobj2, ...
    

-   [INTO*|*APPENDING TABLE itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm)
    Reads multiple rows and assigns them to an internal table itab or attaches them to the table.
    

-   [CORRESPONDING FIELDS OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm)
    Restricts the transport to identically named components of the work area wa or to the internal table itab.
    

-   [PACKAGE SIZE n](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm)
    Passes the rows in packages of n rows to the internal table itab.
    

-   [EXTENDED RESULT @oref](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_extended_result.htm)
    Provides an extended result in a result object.