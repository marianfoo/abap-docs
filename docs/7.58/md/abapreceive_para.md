  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc.htm) →  [RFC - CALL FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION STARTING NEW TASK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_starting.htm) →  [RECEIVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreceive.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RECEIVE%2C%20parameter_list%2C%20ABAPRECEIVE_PARA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RECEIVE, parameter\_list

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreceive_shortref.htm)

Syntax

... *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*TABLES     t1 = itab1 t2 = itab2 ...*\]*
    *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
    *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                *\[*system\_failure = ns *\[*MESSAGE smess*\]**\]*
                *\[*communication\_failure = nc *\[*MESSAGE cmess*\]**\]*
                *\[*OTHERS = n\_others*\]**\]*.

Effect

These additions are used to pass the specified formal parameters of the function module func specified after [RECEIVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreceive.htm) to the actual parameter of the callback routine in the calling program. The meaning of the additions is the same as for [synchronous RFC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_destination_para.htm). However, values are only applied by actual parameters specified using CHANGING or TABLES and are not passed.

EXCEPTIONS is used to perform non-class-based exception handling. Return codes are assigned to the non-class-based exceptions. The same exceptions can be raised as in [synchronous RFC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_destination_para.htm), that is, exceptions that are defined in the interface of the function module and the predefined exceptions of the RFC interface. If no exceptions are raised, RECEIVE sets the content of sy-subrc to 0.

Hint

CALL FUNCTION and RECEIVE are currently decoupled with regard to the addition EXCEPTIONS. This changes when class-based exceptions are introduced. For this reason, it is advisable to use the addition EXCEPTIONS in the same way for CALL FUNCTION and RECEIVE.