  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Control Structures](javascript:call_link\('abenobsolete_control_structures.htm'\)) → 

CASE, WHEN - obsolete

Obsolete Syntax

CASE ...
  statements
  WHEN ...
    ...
ENDCASE.

Effect

Statements between [CASE](javascript:call_link\('abapcase.htm'\)) and the first [WHEN](javascript:call_link\('abapwhen.htm'\)) statement take effect if they are specified directly before CASE. This construct is not allowed in classes, and results in a syntax warning outside of classes. The statements must be positioned before CASE.