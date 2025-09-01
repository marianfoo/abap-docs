  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [CALL FUNCTION - RFC](javascript:call_link\('abapcall_function_destination-.htm'\)) →  [CALL FUNCTION - IN BACKGROUND UNIT](javascript:call_link\('abapcall_function_background_unit.htm'\)) → 

CALL FUNCTION - IN BACKGROUND parameter\_list

[Quick Reference](javascript:call_link\('abapcall_function_shortref.htm'\))

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ... *\]*
    *\[*TABLES     t1 = itab1 t2 = itab2 ...*\]* ...

Effect

These additions are used to assign actual parameters to the formal parameters of the function module. The additions have the same meaning as in [synchronous RFC](javascript:call_link\('abapcall_function_destination_para.htm'\)) with the exception that no values can be applied using IMPORTING and CHANGING and no return values can be assigned to non-class-based exceptions.