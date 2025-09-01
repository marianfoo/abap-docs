---
title: "Syntax"
description: |
  ... EXPORTING  p1 = a1  p2 = a2 ... TABLES     t1 = itab1 t2 = itab2 ... CHANGING   p1 = a1  p2 = a2 ... EXCEPTIONS exc1 = n1  exc2 = n2 ... system_failure        = ns MESSAGE smess communication_failure = nc MESSAGE cmess res
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_starting_para.htm"
abapFile: "abapcall_function_starting_para.htm"
keywords: ["do", "if", "try", "class", "data", "abapcall", "function", "starting", "para"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc.htm) →  [RFC - CALL FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION STARTING NEW TASK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_starting.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20FUNCTION%20STARTING%20NEW%20TASK%2C%20parameter_list%2C%20ABAPCALL_FUNCTION_STARTING_PARA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

CALL FUNCTION STARTING NEW TASK, parameter\_list

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_shortref.htm)

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

Parameter passing for [aRFC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarfc_glosry.htm "Glossary Entry"). These additions are used to assign actual parameters to the formal parameters of the asynchronously called function module, and to assign return codes to exceptions that are not class-based. The additions have the same meaning as in the [synchronous RFC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_destination_para.htm) with the exception that values with IMPORTING cannot be accepted and that values are passed but not accepted for actual parameters specified by CHANGING or TABLES. The additional predefined non-class-based exception resource\_failure can also be handled for [pRFC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprfc_glosry.htm "Glossary Entry"). If this exception is raised, the addition MESSAGE is not allowed.

The additions [IMPORTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreceive_para.htm), [CHANGING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreceive_para.htm), and [TABLES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreceive_para.htm) of the statement [RECEIVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreceive.htm) must be used in callback routines to receive values from an asynchronously called function module.

Executable Example

[Parameter Passing in sRFC and aRFC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_parameters_abexa.htm)