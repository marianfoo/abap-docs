  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Source Code Modules](javascript:call_link\('abenabap_language_includes.htm'\)) →  [Macros](javascript:call_link\('abenabap_macros.htm'\)) → 

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