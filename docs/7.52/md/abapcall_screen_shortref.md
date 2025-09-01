---
title: "CALL SCREEN - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_screen.htm) Syntax CALL SCREEN dynnr STARTING AT col1 lin1 ENDING   AT col2 lin2. Effect Calls the dynpro(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm 'Glossary Entry
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_screen_shortref.htm"
abapFile: "abapcall_screen_shortref.htm"
keywords: ["do", "if", "try", "abapcall", "screen", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  C

CALL SCREEN - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_screen.htm)

Syntax

CALL SCREEN dynnr
            *\[*STARTING AT col1 lin1
            *\[*ENDING   AT col2 lin2*\]**\]*.

Effect

Calls the [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") of the number specified in dynnr and starts a [dynpro sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") defined by the [next dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennext_dynpro_glosry.htm "Glossary Entry") of the called dynpro.

Additions

-   STARTING AT col1 lin1
    Opens a modal dialog window at the position specified in col1 and lin1.
    
-   ENDING AT col2 lin2
    Defines the lower right corner of the modal dialog window at the position specified in col2 and lin2.