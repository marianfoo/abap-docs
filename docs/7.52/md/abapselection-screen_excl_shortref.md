---
title: "SELECTION-SCREEN EXCLUDE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_version.htm) Syntax SELECTION-SCREEN EXCLUDE  PARAMETERS parameter  SELECT-OPTIONS selcrit  RADIOBUTTON GROUPS group  BLOCKS block  IDS id . Effect Deletes
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_excl_shortref.htm"
abapFile: "abapselection-screen_excl_shortref.htm"
keywords: ["select", "delete", "do", "if", "try", "data", "abapselection", "screen", "excl", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  S

SELECTION-SCREEN EXCLUDE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_version.htm)

Syntax

SELECTION-SCREEN EXCLUDE *{* *{*PARAMETERS parameter*}*
                         *|* *{*SELECT-OPTIONS selcrit*}*
                         *|* *{*RADIOBUTTON GROUPS group*}*
                         *|* *{*BLOCKS block*}*
                         *|* *{*IDS id*}* *}*.

Effect

Deletes the specified element from a version of the [standard selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") in a [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Additions

-   PARAMETERS parameter
    Removes a parameter parameter.
    
-   SELECT-OPTIONS selcrit
    Removes a [selection criterion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit.
    
-   RADIOBUTTON GROUPS group
    Removes a radio button group group.
    
-   BLOCKS block
    Removes a block block.
    
-   IDS id
    Removes all elements of the ID id.