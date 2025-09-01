---
title: "Calling Procedures"
description: |
  Procedures(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm 'Glossary Entry') can be called both internally(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_procedures_intern.htm) and externally(https://help.sap.com/doc/abapdocu_753_index_h
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_procedures.htm"
abapFile: "abencall_procedures.htm"
keywords: ["do", "if", "try", "method", "abencall", "procedures"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_processing_blocks.htm) → 

Calling Procedures

[Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm "Glossary Entry") can be called both [internally](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_procedures_intern.htm) and [externally](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_procedures_extern.htm). The following figure shows the most important internal and external calls.

![Figure](abdoc_call_proc.gif)

The statements for calling procedures are

-   for methods:
    [meth( ... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static_short.htm)
    [CALL METHOD dynamic\_meth ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_dynamic.htm)

-   for function modules:
    [CALL FUNCTION func ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function.htm)

-   and (for the time being) for the obsolete subroutines:
    [PERFORM subr ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform.htm)

These statements supply the parameter interfaces of the procedures. When the call ends correctly, control returns to the statement after the call position.

Continue
[Internal Procedure Calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_procedures_intern.htm)
[External Procedure Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_procedures_extern.htm)
[Method Calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls.htm)
[CALL FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function.htm)
[PERFORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform.htm)