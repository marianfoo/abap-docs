---
title: "CATCH"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptry_shortref.htm) Syntax CATCH BEFORE UNWIND cx_class1 cx_class2 ... INTO oref. Additions: 1. ... BEFORE UNWIND(#!ABAP_ADDITION_1@1@) 2. ... INTO oref(#!ABAP_ADDITION_2@2@) Effect Introduces a CA
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcatch_try.htm"
abapFile: "abapcatch_try.htm"
keywords: ["select", "delete", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "exception-handling", "abapcatch"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexceptions.htm) →  [TRY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptry.htm) → 

CATCH

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptry_shortref.htm)

Syntax

CATCH *\[*BEFORE UNWIND*\]* cx\_class1 cx\_class2 ... *\[*INTO oref*\]*.

Additions:

[1\. ... BEFORE UNWIND](#!ABAP_ADDITION_1@1@)
[2\. ... INTO oref](#!ABAP_ADDITION_2@2@)

Effect

Introduces a CATCH block of a [TRY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptry.htm) control structure in which exceptions can be handled.

A CATCH block is an exception handler, meaning the program logic that is executed whenever the associated exception is raised in the TRY block of the same TRY control structure.

A CATCH block handles the exceptions of the exception classes cx\_class1 cx\_class2 ... that are specified after the statement CATCH, as well as the exceptions of the subclasses of these exception classes. In each CATCH statement of a TRY control structure, a list of any number of exception classes cx\_class1 cx\_class2 ... can be specified, with more specific exception classes (subclasses) having to be specified before more general exception classes (superclasses). This order must be followed both within a CATCH statement and across multiple CATCH statements of a TRY control structure.

Before the CATCH block is executed, the system by default deletes the context in which the exception was raised. To get the context during execution of the CATCH block, the BEFORE UNWIND addition can be used.

Hint

The rule that special exception classes must be specified before general exception classes in CATCH ensures that an exception is not handled by a general exception handler (superclass) if a special handler (subclass) is provided.

Example

Catch of two possible exceptions with CATCH. If the input cannot be interpreted as number, the exception CX\_SY\_CONVERSION\_NO\_NUMBER is caught by its superclass CX\_SY\_CONVERSION\_ERROR. If the number 0 is entered, the exception CX\_SY\_CONVERSION\_ERROR is caught by its superclass CX\_SY\_ARITHMETIC\_ERROR.

DATA(input) = \`x\`.
cl\_demo\_input=>request( CHANGING field = input ).
TRY.
    cl\_demo\_output=>display( |{ 1 / CONV decfloat34( input ) }| ).
  CATCH cx\_sy\_arithmetic\_error cx\_sy\_conversion\_error INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.

Executable Example

[Exceptions, CATCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencatch_exception_abexa.htm)

Addition 1

... BEFORE UNWIND

Effect

If the addition BEFORE UNWIND is specified, the context in which the exception was raised is not deleted until the CATCH block is executed. Instead, the context, including all called procedures and their local data, is preserved during the execution of the CATCH block.

-   If no [RESUME](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapresume.htm) statement is executed in the CATCH block, the context is deleted when the CATCH block is exited.

-   If a [RESUME](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapresume.htm) statement is executed in the CATCH block, processing resumes after the place that raised the exception.

Any [CLEANUP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcleanup.htm) blocks are always executed directly before their context is deleted. This means that when BEFORE UNWIND is used, after exception handling, and in all other cases before the exception handling. In a CATCH block with BEFORE UNWIND, no statements can be executed in which the context is deleted without executing any CLEANUP blocks.

-   The statements [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction.htm), [CALL DIALOG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_dialog.htm), [SUBMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction.htm), [STOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapstop.htm), [REJECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreject.htm), [CHECK SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcheck_select-options.htm), and the obsolete variant of [LEAVE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave-.htm) are forbidden by the syntax, as they might leave the [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry").

-   Statements such as [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_to_transaction.htm), which are statically known to leave the internal session, are allowed. In such cases, exception handling is properly terminated while executing the CLEANUP blocks before the statement is executed.

-   Procedure calls are allowed. However, if the context is deleted during such a procedure call, a runtime error EXCP\_HANDLER\_FAILED\_TO\_UNWIND occurs. This is also the case if a statement is executed here that is allowed directly in the CATCH block. For example, [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_to_transaction.htm) can be executed directly in the CATCH block, but not in a procedure that is called there, because otherwise the context would be deleted without executing the CLEANUP blocks.

-   If the [message type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_type_glosry.htm "Glossary Entry") is dynamically specified for the [MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage.htm) statement for sending messages, the ABAP runtime environment behaves as if exception handling is to be exited. The context is deleted during the execution of the CLEANUP blocks. However, if the system returns to the CATCH block after the MESSAGE statement has been executed, which can be the case with message types I and S, for example, the exception CX\_SY\_ILLEGAL\_HANDLER is raised.

When combined with INTO, the addition BEFORE UNWIND sets the attribute IS\_RESUMABLE of the exception object and the preceding exception objects of a chaining with the attribute PREVIOUS. Up until the first resumable raised exception, IS\_RESUMABLE is set to the value of abap\_true and is otherwise set to the value of ABAP\_FALSE.

Hints

-   If addition BEFORE UNWIND is not specified, the context is deleted before the CATCH block is executed.

-   The statement [RESUME](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapresume.htm) can be used only when handling a [resumable exception](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenresumable_exception_glosry.htm "Glossary Entry") and only in a CATCH block for which the addition BEFORE UNWIND is specified. This is the only case where the context of the exception is not deleted when the CATCH block is exited.
    

-   Resumable exceptions can also be handled in CATCH blocks without the addition BEFORE UNWIND. In this case, the context of the exception is deleted before the handling process and the statement RESUME cannot be specified.
    

-   Use of the addition BEFORE UNWIND for CATCH is only required when the statement [RESUME](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapresume.htm) is used. However, it is allowed in principle during exception handling if the context of the exception is to be evaluated before any cleanup activities in [CLEANUP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcleanup.htm) blocks. This is useful, for example, when handling resource bottlenecks if releasing resources in CLEANUP blocks would change the context and thus make the calculation of the free resources in the exception handler meaningless. Other than for logging purposes, evaluating the part of the context that is only of interest locally for implementing the incorrect procedure is not recommended.
    

-   In a procedure called up using BEFORE UNWIND during a CATCH block, each MESSAGE statement that sends a message causes the runtime error EXCP\_HANDLER\_FAILED\_TO\_UNWIND.
    

Example

Use of the addition BEFORE UNWIND when a resumable exception cx\_demo is caught.

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

Addition 2

... INTO oref

Effect

If the addition INTO is specified, a reference to the exception object is stored in oref. The following can be specified for oref:

-   An existing object reference variable oref, whose static type must be more general or as general as the most general of the specified exception classes.

-   An inline declaration with [DATA(var)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm). The static type of the declared object reference variable is this class for a specified exception class. If a common superclass is listed for multiple exception classes, the superclass is the static type of oref; otherwise it is CX\_ROOT.

The object reference variable can be used to access the attributes and methods of the exception object.

If the exception was raised with [RAISE RESUMABLE EXCEPTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_class.htm) and the addition BEFORE UNWIND is also specified, the attribute IS\_RESUMABLE of the current exception object and any preceding exception objects referenced in the attribute PREVIOUS is, until the first resumable raised exception, set to the value of ABAP\_TRUE. In all other exception objects, the attribute IS\_RESUMABLE is set to the value of ABAP\_FALSE.

Hint

Within a CATCH block without the addition BEFORE UNWIND, the attribute IS\_RESUMABLE of the exception object is undefined.

Example

Catch of exceptions with an inline declaration of an object reference variable. The static type of this variable is cx.

CLASS cx DEFINITION INHERITING FROM cx\_dynamic\_check.
  PUBLIC SECTION.
ENDCLASS.
CLASS cy DEFINITION INHERITING FROM cx.
  PUBLIC SECTION.
ENDCLASS.
TRY.
    ...
  CATCH cy cx INTO DATA(oref).
ENDTRY.