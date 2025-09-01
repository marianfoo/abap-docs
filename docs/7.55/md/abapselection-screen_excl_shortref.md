---
title: "SELECTION-SCREEN EXCLUDE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_ldb_version.htm) Syntax SELECTION-SCREEN EXCLUDE  PARAMETERS parameter  SELECT-OPTIONS selcrit  RADIOBUTTON GROUPS group  BLOCKS block  IDS id . Effect Deletes
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_excl_shortref.htm"
abapFile: "abapselection-screen_excl_shortref.htm"
keywords: ["select", "delete", "do", "if", "try", "data", "abapselection", "screen", "excl", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  S

SELECTION-SCREEN EXCLUDE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_ldb_version.htm)

Syntax

SELECTION-SCREEN EXCLUDE *{* *{*PARAMETERS parameter*}*
                         *|* *{*SELECT-OPTIONS selcrit*}*
                         *|* *{*RADIOBUTTON GROUPS group*}*
                         *|* *{*BLOCKS block*}*
                         *|* *{*IDS id*}* *}*.

Effect

Deletes the specified element from a version of the [standard selection screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") in a [logical database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Additions

-   PARAMETERS parameter
    Removes a parameter parameter.
    

-   SELECT-OPTIONS selcrit
    Removes a [selection criterion](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit.
    

-   RADIOBUTTON GROUPS group
    Removes a radio button group group.
    

-   BLOCKS block
    Removes a block block.
    

-   IDS id
    Removes all elements of the ID id.