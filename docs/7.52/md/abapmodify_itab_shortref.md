---
title: "MODIFY itab - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm) Syntax MODIFY    TABLE itabitab INDEX idx USING KEY key_name(name)    itab USING KEY loop_key  FROM wa TRANSPORTING comp1 comp2 ... ASSI
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_shortref.htm"
abapFile: "abapmodify_itab_shortref.htm"
keywords: ["loop", "do", "if", "try", "internal-table", "field-symbol", "abapmodify", "itab", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  M

MODIFY itab - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm)

Syntax

MODIFY *{* *{* *{* *{*TABLE itab*}**|**{*itab INDEX idx*}*
             *\[*USING KEY key\_name*|*(name)*\]* *}*
         *|* *{* itab *\[*USING KEY loop\_key*\]* *}*
           FROM wa
           *\[*TRANSPORTING comp1 comp2 ...*\]*
           *\[**{*ASSIGNING <fs> *\[*CASTING*\]**}**|**{*REFERENCE INTO dref*}**\]* *}*
       *|* *{*itab FROM wa *\[*USING KEY key\_name*|*(name)*\]*
                       TRANSPORTING comp1 comp2 ...
                       WHERE [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlog_exp_shortref.htm)*|*(cond\_syntax)*}* *}*.

Effect

Changes rows in internal tables. A restricted [variant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_modify.htm) works with[mesh paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_glosry.htm "Glossary Entry").

Additions

-   [TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_single.htm)
    Specifies a row to be changed by matching the key values of the wa work area.
    
-   [itab INDEX idx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_single.htm)
    Specifies a row to be changed by specifying a row number idx of a table index.
    
-   [itab *\[*USING KEY loop\_key*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_single.htm)
    Specifies the rows in a loop to be changed using the current rows.
    
-   [FROM wa](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_multiple.htm)
    Specifies the new content in a wa work area.
    
-   [TRANSPORTING comp1 comp2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_single.htm)
    Specifies the components comp1, comp2, ... to be changed.
    
-   [ASSIGNING <fs> *\[*CASTING*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_result.htm)
    Assigns a changed single row to a field symbol <fs> for casting.
    
-   [REFERENCE INTO dref](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_result.htm)
    Assigns the reference to a changed single row to a reference variabledref.
    
-   [WHERE log\_exp*|*(cond\_syntax)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_multiple.htm)
    Specifies the rows to be changed by specifying a static condition log\_exp or a dynamic condition in cond\_syntax.
    
-   [USING KEY key\_name*|*(name)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm)
    Specifies (statically or dynamically) a secondary table key to search for the rows to be changed.