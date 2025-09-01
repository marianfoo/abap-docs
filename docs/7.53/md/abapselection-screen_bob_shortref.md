---
title: "SELECTION-SCREEN - BLOCK - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_block.htm) Syntax SELECTION-SCREEN BEGIN OF BLOCK block WITH FRAME TITLE title NO INTERVALS. ... SELECTION-SCREEN END OF BLOCK block. Effect Defines a block named block on the current
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_bob_shortref.htm"
abapFile: "abapselection-screen_bob_shortref.htm"
keywords: ["select", "do", "if", "try", "abapselection", "screen", "bob", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  S

SELECTION-SCREEN - BLOCK - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_block.htm)

Syntax

SELECTION-SCREEN BEGIN OF BLOCK block
                                *\[*WITH FRAME *\[*TITLE title*\]**\]*
                                *\[*NO INTERVALS*\]*.
...
SELECTION-SCREEN END OF BLOCK block.

Effect

Defines a block named block on the current [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry").

Additions

-   WITH FRAME
    Creates a frame around the block.
    
-   TITLE title
    Creates a title title for the block.
    
-   NO INTERVALS
    Specifies the addition NO INTERVALS for all the selection criteria in the block.