  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Control Structures](javascript:call_link\('abenobsolete_control_structures.htm'\)) → 

CASE, WHEN (Obsolete)

Obsolete Syntax

CASE ...
  statements
  WHEN ...
    ...
ENDCASE.

Effect

The statements statements between [CASE](javascript:call_link\('abapcase.htm'\)) and the first statement [WHEN](javascript:call_link\('abapwhen.htm'\)) have the same effect as when they are specified directly in front of CASE. This construct is not allowed in classes and produces a syntax warning outside of classes. The statements must be placed in front of CASE.