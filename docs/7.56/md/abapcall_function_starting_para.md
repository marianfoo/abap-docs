  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc.htm) →  [RFC - CALL FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION STARTING NEW TASK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_starting.htm) → 

CALL FUNCTION STARTING NEW TASK, parameter\_list

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_shortref.htm)

Syntax

... *\[*EXPORTING  p1 = a1  p2 = a2 ...*\]*
    *\[*TABLES     t1 = itab1 t2 = itab2 ...*\]*
    *\[*CHANGING   p1 = a1  p2 = a2 ...*\]*
    *\[*EXCEPTIONS *\[*exc1 = n1  exc2 = n2 ...*\]*
                *\[*system\_failure        = ns *\[*MESSAGE smess*\]**\]*
                *\[*communication\_failure = nc *\[*MESSAGE cmess*\]**\]*
                *\[*resource\_failure      = nr*\]*
                *\[*OTHERS = n\_others*\]**\]*.

Effect

These additions are used to assign actual parameters to the formal parameters of the asynchronously called function module, and to assign return codes to exceptions that are not class-based. The additions have the same meaning as in the [synchronous RFC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_destination_para.htm) with the exception that values with IMPORTING cannot be accepted and that values are passed but not accepted for actual parameters specified by CHANGING or TABLES. The additional predefined non-class-based exception resource\_failure can also be handled for [pRFC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprfc_glosry.htm "Glossary Entry") . If this exception is raised, the addition MESSAGE is not allowed.

The additions [IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreceive_para.htm), [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreceive_para.htm), and [TABLES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreceive_para.htm) of the statement [RECEIVE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreceive.htm) must be used in callback routines to receive values from an asynchronously called function module.

Executable Example

[Parameter Passing in sRFC and aRFC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_parameters_abexa.htm)