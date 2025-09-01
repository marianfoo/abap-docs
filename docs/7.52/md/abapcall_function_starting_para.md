  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc.htm) →  [CALL FUNCTION - RFC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION - STARTING NEW TASK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_starting.htm) → 

CALL FUNCTION - STARTING NEW TASK parameter\_list

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_shortref.htm)

Syntax

... *\[*EXPORTING  p1 = a1  p2 = a2 ...*\]*
    *\[*TABLES     t1 = itab1 t2 = itab2 ...*\]*
    *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
    *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                *\[*system\_failure        = ns *\[*MESSAGE smess*\]**\]*
                *\[*communication\_failure = nc *\[*MESSAGE cmess*\]**\]*
                *\[*resource\_failure      = nr*\]*
                *\[*OTHERS = n\_others*\]**\]*.

Effect

These additions are used to assign actual parameters to the formal parameters of the asynchronously called function module, and assign return values to exceptions that are not class-based. The additions have the same meaning as in the [synchronous RFC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_destination_para.htm) with the exception that values with IMPORTING cannot be imported and that actual parameters specified by CHANGING or TABLES can be used to pass values but not to accept values. The additional predefined non-class-based exception resource\_failure can also be handled for [pRFC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprfc_glosry.htm "Glossary Entry"). For this exception, the addition MESSAGE is not permitted.

The additions [IMPORTING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreceive_para.htm), [CHANGING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreceive_para.htm), and [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreceive_para.htm) of the statement [RECEIVE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreceive.htm) are used in callback routines to receive values from an asynchronously called function module.

Executable Example

[Pass by Parameter in sRFC and aRFC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_parameters_abexa.htm)