  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - CALL FUNCTION](javascript:call_link\('abapcall_function_destination-.htm'\)) →  [CALL FUNCTION STARTING NEW TASK](javascript:call_link\('abapcall_function_starting.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL FUNCTION STARTING NEW TASK, parameter_list, ABAPCALL_FUNCTION_STARTING_PARA, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL FUNCTION STARTING NEW TASK, parameter\_list

[Short Reference](javascript:call_link\('abapcall_function_shortref.htm'\))

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

Parameter passing for [aRFC](javascript:call_link\('abenarfc_glosry.htm'\) "Glossary Entry"). These additions are used to assign actual parameters to the formal parameters of the asynchronously called function module, and to assign return codes to exceptions that are not class-based. The additions have the same meaning as in the [synchronous RFC](javascript:call_link\('abapcall_function_destination_para.htm'\)) with the exception that values with IMPORTING cannot be accepted and that values are passed but not accepted for actual parameters specified by CHANGING or TABLES. The additional predefined non-class-based exception resource\_failure can also be handled for [pRFC](javascript:call_link\('abenprfc_glosry.htm'\) "Glossary Entry"). If this exception is raised, the addition MESSAGE is not allowed.

The additions [IMPORTING](javascript:call_link\('abapreceive_para.htm'\)), [CHANGING](javascript:call_link\('abapreceive_para.htm'\)), and [TABLES](javascript:call_link\('abapreceive_para.htm'\)) of the statement [RECEIVE](javascript:call_link\('abapreceive.htm'\)) must be used in callback routines to receive values from an asynchronously called function module.

Executable Example

[Parameter Passing in sRFC and aRFC](javascript:call_link\('abenrfc_parameters_abexa.htm'\))