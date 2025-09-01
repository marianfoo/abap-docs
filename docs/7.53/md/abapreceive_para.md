  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc.htm) →  [CALL FUNCTION - RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION - STARTING NEW TASK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_starting.htm) →  [RECEIVE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreceive.htm) → 

RECEIVE - parameter\_list

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreceive_shortref.htm)

Syntax

... *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*TABLES     t1 = itab1 t2 = itab2 ...*\]*
    *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
    *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                *\[*system\_failure = ns *\[*MESSAGE smess*\]**\]*
                *\[*communication\_failure = nc *\[*MESSAGE cmess*\]**\]*
                *\[*OTHERS = n\_others*\]**\]*.

Effect

These additions are used to pass the specified formal parameters of the function module func specified after [RECEIVE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreceive.htm) to the actual parameter of the callback routine in the calling program. The meaning of the additions is the same as in [synchronous RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_destination_para.htm). However, values are only applied by actual parameters specified using CHANGING or TABLES and are not passed.

If EXCEPTIONS is specified, class-based exception handling is used. Return codes are assigned to the non-class-based exceptions. The same exceptions can be raised as in [synchronous RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_destination_para.htm). This means exceptions that are defined in the interface of the function module and the predefined exceptions of the RFC interface. If no exceptions are raised, RECEIVE sets the contents of sy-subrc to 0.

Note

CALL FUNCTION and RECEIVE are currently independent of each other as far as the addition EXCEPTIONS is concerned. This changes when class-based exceptions are introduced. For this reason, it is advisable to use the addition EXCEPTIONS in the same way for CALL FUNCTION and RECEIVE.