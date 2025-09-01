  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_program_flow.htm) →  [Obsolete Control Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_control_structures.htm) → 

CASE, WHEN (Obsolete)

Obsolete Syntax

CASE ...
  statements
  WHEN ...
    ...
ENDCASE.

Effect

The statements statements between [CASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcase.htm) and the first statement [WHEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhen.htm) have the same effect as when they are specified directly in front of CASE. This construct is not allowed in classes and produces a syntax warning outside of classes. The statements must be placed in front of CASE.