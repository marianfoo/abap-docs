  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [CALL FUNCTION - RFC](javascript:call_link\('abapcall_function_destination-.htm'\)) →  [CALL FUNCTION - STARTING NEW TASK](javascript:call_link\('abapcall_function_starting.htm'\)) → 

CALL FUNCTION - STARTING NEW TASK parameter\_list

[Quick Reference](javascript:call_link\('abapcall_function_shortref.htm'\))

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

These additions are used to assign actual parameters to the formal parameters of the asynchronously called function module, and assign return values to exceptions that are not class-based. The additions have the same meaning as in the [synchronous RFC](javascript:call_link\('abapcall_function_destination_para.htm'\)) with the exception that values with IMPORTING cannot be imported and that actual parameters specified by CHANGING or TABLES can be used to pass values but not to accept values. The additional predefined non-class-based exception resource\_failure can also be handled for [pRFC](javascript:call_link\('abenprfc_glosry.htm'\) "Glossary Entry") . If this exception is raised, the addition MESSAGE is not permitted.

The additions [IMPORTING](javascript:call_link\('abapreceive_para.htm'\)), [CHANGING](javascript:call_link\('abapreceive_para.htm'\)), and [TABLES](javascript:call_link\('abapreceive_para.htm'\)) of the statement [RECEIVE](javascript:call_link\('abapreceive.htm'\)) are used in callback routines to receive values from an asynchronously called function module.

Executable Example

[Parameter Passing in sRFC and aRFC](javascript:call_link\('abenrfc_parameters_abexa.htm'\))