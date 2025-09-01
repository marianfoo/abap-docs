---
title: "Exceptions Before Class-Based Exceptions"
description: |
  Exceptions are class-based(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm). Before the introduction of exception classes, however, there were the following types of exceptions: -   Exception situations detected by the system (and whose causes could be handled effecti
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_pre_610.htm"
abapFile: "abenexceptions_pre_610.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "types", "exception-handling", "abenexceptions", "pre", "610"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_exceptions.htm) → 

Exceptions Before Class-Based Exceptions

Exceptions are [class-based](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm). Before the introduction of exception classes, however, there were the following types of exceptions:

-   Exception situations detected by the system (and whose causes could be handled effectively by the program) raised [catchable runtime errors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem-exceptions.htm) that could be handled by the statement [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_sys.htm). Catchable runtime errors are now obsolete. Each catchable runtime error is assigned an exception class instead, which is handled in a [TRY block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm). Conversely, not all predefined class-based exceptions are assigned to a catchable runtime error. No new catchable runtime errors are created and existing runtime errors that are to be made handleable are no longer transformed to catchable runtime errors. Instead, exception classes are assigned to them.

-   [Self-defined handleable exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_non_class.htm) were allowed only in the interfaces of function modules and methods. These types of exceptions can be raised within the [procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry") by the statement [RAISE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_raising.htm) as soon as an exception situation is detected. The caller of the procedure can use the addition EXCEPTIONS of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function.htm) or [meth( ... )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_short.htm) to assign return codes for the system field sy-subrc to the exceptions the caller wants to handle and evaluate them after the call. This is not, however, true exception handling in the sense of responding to an event.

Interaction of the Exception Concepts

Class-based exceptions replace and enhance the previous concepts in full and can be raised and handled in all ABAP contexts (such as programs and processing blocks). In particular, all previously catchable runtime errors can be handled as class-based exceptions, with the previous exception groups being mapped to shared superclasses. For reasons of downward-compatibility, the catchable runtime errors and the non-class-based exceptions defined in the interfaces of methods and function modules have not been abolished, but their use has been restricted as follows:

-   Within a [processing block](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocessing_block_glosry.htm "Glossary Entry"), only one kind of exception can be raised.

-   Within a procedure interface, the declaration of class-based exceptions excludes the definition of non-class-based exceptions and vice versa.

-   Within a processing block, catchable runtime errors cannot be caught using [CATCH SYSTEM-EXCEPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcatch_sys.htm) if class-based exceptions are handled there in [TRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm) blocks or are raised using [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expressions.htm). Instead, catchable runtime errors must be caught when handling the associated class-based exception.

For reasons of interoperability, class-based exceptions can be handled within a processing block and return codes of function modules and methods can be evaluated there using non-class-based exceptions.

Continue
[Non-Class-Based Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_non_class.htm)