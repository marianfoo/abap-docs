  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Control Structures](javascript:call_link\('abenobsolete_control_structures.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CASE%2C%20WHEN%20%28Obsolete%29%2C%20ABENCASE_WHEN_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CASE, WHEN (Obsolete)

Obsolete Syntax

CASE ...
  statements
  WHEN ...
    ...
ENDCASE.

Effect

The statements statements between [CASE](javascript:call_link\('abapcase.htm'\)) and the first statement [WHEN](javascript:call_link\('abapwhen.htm'\)) have the same effect as when they are specified directly in front of CASE. This construct is not allowed in classes and produces a syntax warning outside of classes. The statements must be placed in front of CASE.