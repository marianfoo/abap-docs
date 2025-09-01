---
title: "Method Calls"
description: |
  Background Static calls of methods can be formulated in two different ways. The obsolete long form(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static.htm) CALL METHOD meth EXPORTING ... is based on the notation of the function module call. Alternatively, a short for
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_call_guidl.htm"
abapFile: "abenmethod_call_guidl.htm"
keywords: ["insert", "do", "if", "method", "class", "abenmethod", "call", "guidl"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstructure_style_guidl.htm) →  [Alternative Spellings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalternative_spelling_guidl.htm) → 

Method Calls

Background

Static calls of methods can be formulated in two different ways. The [obsolete long form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static.htm)

CALL METHOD meth EXPORTING ...

is based on the notation of the function module call. Alternatively, a [short form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static_short.htm) can be used:

meth( ... ).

This form uses a parenthesis notation instead of the introductory ABAP words [CALL METHOD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static.htm). A combination of CALL METHOD and parentheses is also possible.

Rule

Formulate static method calls without CALL METHOD

Use the long form of the method call using CALL METHOD only for dynamic method calls.

Details

The short form of the static method call is clearer. The redundant ABAP words CALL METHOD provide no additional information to the reader. Using the short form, self-contained method calls have the same appearance as functional method calls on operand positions. For dynamic method calls, the long form with CALL METHOD is required by the syntax. If it is only used there, the different notations provide the reader with another distinguishing feature between the static and dynamic method call.

Bad Example

The following source code shows the long form of a static method call using CALL METHOD, which is no longer recommended.

...
CALL METHOD cl\_class=>do\_something
  EXPORTING
    some\_input = value1
  IMPORTING
    some\_output = value2
  CHANGING
    some\_change = value3.
...

The following source code shows the same static method call as above, but with parentheses inserted. In this form, which also has correct syntax, either CALL METHOD or the parentheses are superfluous.

...
CALL METHOD cl\_class=>do\_something(
  EXPORTING
    some\_input = value1
  IMPORTING
    some\_output = value2
  CHANGING
    some\_change = value3 ).
...

Good Example

The following source code shows the same method call as above, but as recommended, without CALL METHOD. If a method has only importing parameters, IMPORTING and CHANGING can be omitted, and also the EXPORTING addition. If it is a single importing parameter, its name can also be omitted.

...
cl\_class=>do\_something(
  EXPORTING
    some\_input = value1
  IMPORTING
    some\_output = value2
  CHANGING
    some\_change = value3 ).
...