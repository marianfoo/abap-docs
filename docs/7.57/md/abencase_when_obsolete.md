  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_program_flow.htm) →  [Obsolete Control Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_control_structures.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CASE, WHEN \(Obsolete\), ABENCASE_WHEN_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

CASE, WHEN (Obsolete)

Obsolete Syntax

CASE ...
  statements
  WHEN ...
    ...
ENDCASE.

Effect

The statements statements between [CASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase.htm) and the first statement [WHEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhen.htm) have the same effect as when they are specified directly in front of CASE. This construct is not allowed in classes and produces a syntax warning outside of classes. The statements must be placed in front of CASE.