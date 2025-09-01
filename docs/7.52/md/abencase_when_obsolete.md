  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_program_flow.htm) →  [Obsolete Control Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_control_structures.htm) → 

CASE, WHEN - obsolete

Obsolete Syntax

CASE ...
  statements
  WHEN ...
    ...
ENDCASE.

Effect

Statements between [CASE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcase.htm) and the first [WHEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhen.htm) statement take effect if they are specified directly before CASE. This construct is not allowed in classes, and results in a syntax warning outside of classes. The statements must be positioned before CASE.