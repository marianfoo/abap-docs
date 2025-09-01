---
title: "Exception Handling"
description: |
  Exceptions are events in the execution of an ABAP program that interrupt the program when it is not possible for the program to continue in a meaningful way. Exception handling enables a response to be made to these events. Exception situations can be recognized either by the program or by the runti
version: "7.53"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_exceptions.htm"
abapFile: "abenabap_exceptions.htm"
keywords: ["do", "if", "try", "catch", "class", "exception-handling", "abenabap", "exceptions"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) → 

Exception Handling

Exceptions are events in the execution of an ABAP program that interrupt the program when it is not possible for the program to continue in a meaningful way. Exception handling enables a response to be made to these events.

Exception situations can be recognized either by the program or by the runtime environment. When an exception situation is recognized, either the ABAP program or the runtime environment raises an exception. Exceptions in the ABAP runtime environment are generally caused by error situations that cannot be predicted by the static [program check](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_check_glosry.htm "Glossary Entry").

Exceptions are either handleable or non-handleable.

-   Handleable exceptions are [class-based](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions.htm). They are predefined in the system, or custom exceptions can be defined. They are raised either by the ABAP runtime environment or in an ABAP program using

-   The statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception_class.htm)

-   [THROW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_result.htm) specified in a [conditional expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expressions.htm)

They can be handled using [TRY - CATCH - ENDTRY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptry.htm). As well as these, [non-class-based exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions_non_class.htm) and (obsolete) [catchable runtime errors](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem-exceptions.htm) also exist.

-   Non-handleable exceptions are raised only by the ABAP runtime environment. They are a response to error situations that cannot generally be handled meaningfully in a program.

Non-handled exceptions (all non-handleable exceptions and all handleable exceptions not caught in the program) produce a [runtime error](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenruntime_error_glosry.htm "Glossary Entry"), which means that the program is terminated with a [short dump](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshort_dump_glosry.htm "Glossary Entry").

Continue
[Class-Based Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions.htm)
[Exceptions Before Class-Based Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions_pre_610.htm)
[Exceptions in ABAP Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)
[Runtime Error](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennoncat_exceptions.htm)