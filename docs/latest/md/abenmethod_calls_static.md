---
title: "Static Method Calls"
description: |
  There are two types of static method call, standalone static method calls and functional static method calls. Method chainings are a special form of static method call. -   meth( ... ) - Standalone Method Call(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_static_s
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_calls_static.htm"
abapFile: "abenmethod_calls_static.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "types", "abenmethod", "calls", "static"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_calls.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Static%20Method%20Calls%2C%20ABENMETHOD_CALLS_STATIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Static Method Calls

There are two types of static method call, standalone static method calls and functional static method calls. Method chainings are a special form of static method call.

-   [meth( ... ) - Standalone Method Call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_static_short.htm)
-   [meth( ... ) - Functional Method Call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_functional.htm)
-   [... meth1( ... )->meth2( ... )->... - Method Chaining](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_static_chain.htm)

Obsolete variant of the standalone call:

-   [CALL METHOD meth ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_static.htm)

System Fields

Each method call sets the system field sy-subrc to 0 in the moment the method is called. Handling [non-class-based exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_non_class.htm) can change this value.

Hint

The static method call described here must not be confused with the call of [static methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_method_glosry.htm "Glossary Entry"). A static method call is the static specification of an [instance method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninstance_method_glosry.htm "Glossary Entry") or a static method. In addition, there is the [dynamic method call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmethod_calls_dynamic.htm), for which the methods are specified dynamically.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_NO\_HANDLER

-   See [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_procedures.htm).

CX\_SY\_REF\_IS\_INITIAL

-   Cause: Reference variable is initial
    Runtime error: OBJECTS\_OBJREF\_NOT\_ASSIGNED

Continue
[meth( ... ), Standalone Method Call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_static_short.htm)
[meth( ... ), Functional Method Call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_functional.htm)
[... meth1( ... )->meth2( ... )->..., Method Chaining](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_static_chain.htm)
[meth( ... ), Parameter Passing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_parameters.htm)