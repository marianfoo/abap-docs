---
title: "Syntax"
description: |
  ... EXPORTING  p1 = a1 p2 = a2 ...  TABLES     t1 = itab1 t2 = itab2 ... ... Effect These additions are used to assign actual parameters to the formal parameters of the function module. The additions have the same meaning as in synchronous RFC(https://help.sap.com/doc/abapdocu_754_
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_background_para.htm"
abapFile: "abapcall_function_background_para.htm"
keywords: ["do", "class", "data", "abapcall", "function", "background", "para"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc.htm) →  [CALL FUNCTION - RFC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION - IN BACKGROUND UNIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_background_unit.htm) → 

CALL FUNCTION - IN BACKGROUND parameter\_list

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_shortref.htm)

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ... *\]*
    *\[*TABLES     t1 = itab1 t2 = itab2 ...*\]* ...

Effect

These additions are used to assign actual parameters to the formal parameters of the function module. The additions have the same meaning as in [synchronous RFC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination_para.htm) with the exception that no values can be applied using IMPORTING and CHANGING and no return values can be assigned to non-class-based exceptions.