---
title: "RESUME"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapresume_shortref.htm) Syntax RESUME. Effect This statement exits the CATCH(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcatch_try.htm) handling of a resumable exception(https://help.sap.com/doc/abap
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapresume.htm"
abapFile: "abapresume.htm"
keywords: ["select", "delete", "do", "if", "try", "catch", "method", "class", "exception-handling", "abapresume"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexceptions.htm) →  [TRY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptry.htm) → 

RESUME

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapresume_shortref.htm)

Syntax

RESUME.

Effect

This statement exits the [CATCH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcatch_try.htm) handling of a [resumable exception](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenresumable_exception_glosry.htm "Glossary Entry") and resumes processing after the place where the exception was raised. The statement RESUME can only be listed in a [CATCH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcatch_try.htm) block of a [TRY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptry.htm) control structure for which the addition BEFORE UNWIND is declared. When exception handling is exited using RESUME, the context of the exception is not deleted, and any CLEANUP blocks are not executed.

Prerequisites for resuming processing are:

-   The exception was raised as a resumable exception by the addition RESUMABLE of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm) or by the addition [THROW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expressions.htm).
-   The exception was declared with the addition RESUMABLE of RAISING in the interface of all procedures from which it was propagated, where exceptions derived from CX\_NO\_CHECK are always implicitly declared with that addition.

Otherwise, an exception of the class CX\_SY\_ILLEGAL\_HANDLER is raised. To check whether the prerequisites are met, the instance attribute IS\_RESUMABLE with type abap\_bool of the current exception object can be checked. The value of the attribute is set using the addition INTO when the statements CATCH and CLEANUP are executed as long as the addition BEFORE UNWIND is specified for CATCH.

Hints

-   If the resumable exception was not raised by the variant [RAISE RESUMABLE EXCEPTION oref](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm), the handler can send information to the raiser of the event by assigning values to appropriate attributes of the exception object.
-   Resuming processing after an exception is particularly useful if the exception was raised when a special method was called, such as a constructor or a functional method in an operand position.
-   If a CATCH block is not exited using RESUME when handling a resumable exception, the program flow does not continue in the context of the statement that raised the exception, as described in [System Response After a Class-Based Exception](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexceptions_system_response.htm). This context is deleted when the CATCH block is exited, at the latest.
-   The transformation option [OPTIONS exception = 'resumable'](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transformation_options.htm) can be used to make exceptions of the class CX\_ST\_DESERIALIZATION\_ERROR that are raised in [Simple Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensimple_transformation_glosry.htm "Glossary Entry") resumable. If [CATCH BEFORE UNWIND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcatch_try.htm) is used, the canceled transformation can also be resumed after the break using RESUME.

Example

Use of the statement RESUME in the handling of a resumable exception cx\_demo.

CLASS cx\_demo DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth RAISING RESUMABLE(cx\_demo).
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    ...
    RAISE RESUMABLE EXCEPTION TYPE cx\_demo.
    cl\_demo\_output=>display( 'Resumed ...' ).
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  TRY.
      cls=>meth( ).
    CATCH BEFORE UNWIND cx\_demo.
      RESUME.
  ENDTRY.

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_ILLEGAL\_HANDLER

-   Cause: Exception cannot be resumed. The ID of the exception text is NOT\_RESUMABLE
    Runtime error: UNCAUGHT\_EXCEPTION