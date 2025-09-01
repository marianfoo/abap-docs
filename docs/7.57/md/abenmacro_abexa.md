  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_macros.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Macros, ABENMACRO_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
improvement:)

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