---
title: "INSERT itab - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm) Syntax INSERT  wa  INITIAL LINE  LINES OF jtab FROM idx1 TO idx2 USING KEY key_name(name)  INTO  TABLE itab  itab INDEX idx  itab
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_shortref.htm"
abapFile: "abapinsert_itab_shortref.htm"
keywords: ["insert", "loop", "do", "if", "try", "internal-table", "field-symbol", "abapinsert", "itab", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  I

INSERT itab - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm)

Syntax

INSERT *{* wa
       *|* *{*INITIAL LINE*}*
       *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY key\_name*|*(name)*\]**}* *}*
  INTO *{* *{*TABLE itab*}*
       *|* *{*itab INDEX idx*}*
       *|* *{*itab*}* *}*
       *\[* *{*ASSIGNING <fs> *\[*CASTING*\]**}* *|* *{*REFERENCE INTO dref *}* *\]*.

Effect

Inserts rows into an internal table itab. A restricted [variant](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_insert.htm) works with[mesh paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_glosry.htm "Glossary Entry").

Additions

-   [wa](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm)
    Inserts a work area wa.
    
-   [INITIAL LINE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm)
    Inserts an initial row.
    
-   [LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY key\_name*|*(name)*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_linespec.htm)
    Inserts the rows of internal table jtab that were specified by indexes idx1 and idx2. The table key can be specified statically or dynamically.
    
-   [INTO TABLE itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_position.htm)
    Specifies the insertion position using the primary table key.
    
-   [INTO itab INDEX idx](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_position.htm)
    Specifies the insertion position using a table index idx.
    
-   [INTO itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_position.htm)
    Specifies the insertion position in a loop using the current row.
    
-   [ASSIGNING <fs> *\[*CASTING*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_result.htm)
    Assigns an inserted single row to a field symbol <fs>, where casting can be performed.
    
-   [REFERENCE INTO dref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab_result.htm)
    Assigns the reference (to an inserted single row) to a reference variable dref.