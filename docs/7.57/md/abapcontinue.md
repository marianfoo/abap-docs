  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Loops](javascript:call_link\('abenleave_loops.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONTINUE, ABAPCONTINUE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for i
mprovement:)

CONTINUE

[Short Reference](javascript:call_link\('abapcontinue_shortref.htm'\))

Syntax

CONTINUE.

Effect

The statement CONTINUE may only be used in [loops](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry"). If it is used, the current loop pass is terminated immediately and the program flow is continued with the next loop pass.

Example

Exit of a loop pass using CONTINUE if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  IF remainder <> 0.
    CONTINUE.
  ENDIF.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).