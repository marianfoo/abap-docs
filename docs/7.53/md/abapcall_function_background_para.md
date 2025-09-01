  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc.htm) →  [CALL FUNCTION - RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION - IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_unit.htm) → 

CALL FUNCTION - IN BACKGROUND parameter\_list

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_shortref.htm)

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ... *\]*
    *\[*TABLES     t1 = itab1 t2 = itab2 ...*\]* ...

Effect

These additions are used to assign actual parameters to the formal parameters of the function module. The additions have the same meaning as in [synchronous RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_destination_para.htm) with the exception that no values can be applied using IMPORTING and CHANGING and no return values can be assigned to non-class-based exceptions.