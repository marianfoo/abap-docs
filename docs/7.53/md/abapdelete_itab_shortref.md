---
title: "DELETE itab - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab.htm) Syntax DELETE   TABLE itab FROM wa USING KEY key_name(name) WITH TABLE KEY key_name(name) COMPONENTS comp_name1(name1) = dobj1 comp_name2(name2
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_shortref.htm"
abapFile: "abapdelete_itab_shortref.htm"
keywords: ["delete", "loop", "do", "if", "try", "internal-table", "abapdelete", "itab", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  D

DELETE itab - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab.htm)

Syntax

DELETE *{* *{* *{*TABLE itab
            *{**{*FROM wa *\[*USING KEY key\_name*|*(name)*\]**}*
            *|**{*WITH TABLE KEY *\[*key\_name*|*(name) COMPONENTS*\]*
                             *{*comp\_name1*|*(name1)*}* = dobj1
                             *{*comp\_name2*|*(name2)*}* = dobj2
                             ... *}**}**}*
         *|* *{*itab INDEX idx *\[*USING KEY key\_name*|*(name)*\]**}*
         *|* *{*itab *\[*USING KEY loop\_key*\]**}* *}*
       *|* *{*itab *\[*USING KEY key\_name*|*(name)*\]*
               *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*WHERE [log\_exp*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlog_exp_shortref.htm)*|*(cond\_syntax)*}*
       *|* *{*ADJACENT DUPLICATES FROM itab
           *\[* USING KEY key\_name*|*(name) *\]*
           *\[*COMPARING comp1 comp2 ...*|**{*ALL FIELDS*}**\]**}* *}*.

Effect

Deletes rows from an internal table itab. A restricted [variant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_delete.htm) works with[mesh paths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmesh_path_glosry.htm "Glossary Entry").

Additions

-   [TABLE itab FROM wa](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_key.htm)
    Specifies a row to be deleted. The row matches the key values of a work area wa.
    
-   [TABLE itab WITH TABLE KEY *{*comp\_name1*|*(name1)*}* = dobj1 *{*comp\_name2*|*(name2)*}* = dobj2 ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_key.htm)
    Specifies a row to be deleted by specifying components of the primary table key statically of dynamically.
    
-   [itab INDEX idx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_line.htm)
    Specifies a row to be deleted by specifying the row number of a table index idx.
    
-   [itab *\[*USING KEY loop\_key*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_line.htm)
    Defines the rows to be deleted in a loop across the current row.
    
-   [itab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*WHERE log\_exp*|*(cond\_syntax)*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_lines.htm)
    Specifies multiple rows to be deleted by specifying a lower and upper row number in a table index idx1 and idx2. These can be restricted by specifying a static condition log\_exp or a dynamic condition in cond\_syntax.
    
-   [ADJACENT DUPLICATES FROM itab *\[*COMPARING comp1 comp2 ...*|**{*ALL FIELDS*}**\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_duplicates.htm)
    Specifies adjacent identical rows. Using COMPARING, the relevant comparison components can be specified.
    
-   [KEY key\_name*|*(name)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab.htm)
    Specifies, statically or dynamically, a (secondary) table key that is used to search for the rows to be deleted.