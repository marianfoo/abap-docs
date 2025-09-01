  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - CALL FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_background_unit.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL FUNCTION IN BACKGROUND, parameter_list, ABAPCALL_FUNCTION_BACKGROUND_PARA, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL FUNCTION IN BACKGROUND, parameter\_list

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_shortref.htm)

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ... *\]*
    *\[*TABLES     t1 = itab1 t2 = itab2 ...*\]* ...

Effect

These additions are used to assign actual parameters to the formal parameters of the function module. The additions have the same meaning as in [synchronous RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination_para.htm) with the exception that no values can be applied using IMPORTING and CHANGING and no return values can be assigned to non-class-based exceptions.