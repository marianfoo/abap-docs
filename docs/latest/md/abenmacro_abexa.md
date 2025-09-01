---
title: "Macros"
description: |
  This example demonstrates how macros are created and included. Source Code REPORT  DEMO_MACRO. DATA: x TYPE i, y TYPE i, l TYPE i. DEFINE write_frame. x = sy-colno. y = sy-linno. WRITE: '' NO-GAP, &1 NO-GAP, '' NO-GAP. l = sy-colno - x. y -= 1. SKIP TO LINE y. POSITION x. ULINE AT x(l). y += 2.
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmacro_abexa.htm"
abapFile: "abenmacro_abexa.htm"
keywords: ["do", "if", "data", "abenmacro", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_macros.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Macros%2C%20ABENMACRO_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Macros

This example demonstrates how macros are created and included.

Source Code   

REPORT  DEMO\_MACRO.
DATA: x TYPE i, y TYPE i, l TYPE i.
DEFINE write\_frame.
  x = sy-colno. y = sy-linno.
  WRITE: '|' NO-GAP, &1 NO-GAP, '|' NO-GAP.
  l = sy-colno - x.
  y -= 1. SKIP TO LINE y. POSITION x.
  ULINE AT x(l).
  y += 2. SKIP TO LINE y. POSITION x.
  ULINE AT x(l).
  y -= 1. x = sy-colno. SKIP TO LINE y. POSITION x.
END-OF-DEFINITION.
SKIP.
write\_frame 'In a frame!'.

Description   

In this example, a macro write\_frame, which draws a box around the placeholder &1 on a list, is first defined and then used.