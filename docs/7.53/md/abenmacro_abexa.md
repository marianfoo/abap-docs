---
title: "Macros"
description: |
  This example demonstrates how macros are created and included. Source Code REPORT  DEMO_MACRO. DATA: x TYPE i, y TYPE i, l TYPE i. DEFINE write_frame. x = sy-colno. y = sy-linno. WRITE: '' NO-GAP, &1 NO-GAP, '' NO-GAP. l = sy-colno - x. y = y - 1. SKIP TO LINE y. POSITION x. ULINE AT x(l). y = y
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_abexa.htm"
abapFile: "abenmacro_abexa.htm"
keywords: ["do", "data", "abenmacro", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_macros.htm) → 

Macros

This example demonstrates how macros are created and included.

Source Code

REPORT  DEMO\_MACRO.
DATA: x TYPE i, y TYPE i, l TYPE i.
DEFINE write\_frame.
  x = sy-colno. y = sy-linno.
  WRITE: '|' NO-GAP, &1 NO-GAP, '|' NO-GAP.
  l = sy-colno - x.
  y = y - 1. SKIP TO LINE y. POSITION x.
  ULINE AT x(l).
  y = y + 2. SKIP TO LINE y. POSITION x.
  ULINE AT x(l).
  y = y - 1. x = sy-colno. SKIP TO LINE y. POSITION x.
END-OF-DEFINITION.
SKIP.
write\_frame 'In a frame!'.

Description

This example first defines and then uses the macro write\_frame, which draws a box around the placeholder &1 in a list.