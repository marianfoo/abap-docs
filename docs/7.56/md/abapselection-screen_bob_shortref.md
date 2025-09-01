---
title: "SELECTION-SCREEN, BLOCK - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_block.htm) Syntax SELECTION-SCREEN BEGIN OF BLOCK block WITH FRAME TITLE title NO INTERVALS. ... SELECTION-SCREEN END OF BLOCK block. Effect Defines a block named block on the current
version: "7.56"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_bob_shortref.htm"
abapFile: "abapselection-screen_bob_shortref.htm"
keywords: ["select", "do", "if", "try", "abapselection", "screen", "bob", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  S

SELECTION-SCREEN, BLOCK - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_block.htm)

Syntax

SELECTION-SCREEN BEGIN OF BLOCK block
                                *\[*WITH FRAME *\[*TITLE title*\]**\]*
                                *\[*NO INTERVALS*\]*.
...
SELECTION-SCREEN END OF BLOCK block.

Effect

Defines a block named block on the current [selection screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_glosry.htm "Glossary Entry").

Additions

-   WITH FRAME
    Creates a frame around the block.
-   TITLE title
    Creates a title title for the block.
-   NO INTERVALS
    Specifies the addition NO INTERVALS for all the selection criteria in the block.