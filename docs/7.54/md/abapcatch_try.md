  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [TRY](javascript:call_link\('abaptry.htm'\)) → 

CATCH

[Quick Reference](javascript:call_link\('abaptry_shortref.htm'\))

Syntax

CATCH *\[*BEFORE UNWIND*\]* cx\_class1 cx\_class2 ... *\[*INTO oref*\]*.

Extras:

[1\. ... BEFORE UNWIND](#!ABAP_ADDITION_1@1@)
[2\. ... INTO oref](#!ABAP_ADDITION_2@2@)

Effect

Introduces a CATCH block of a [TRY](javascript:call_link\('abaptry.htm'\)) control structure in which exceptions can be handled.

A CATCH block is an exception handler, meaning the program logic that is executed whenever the associated exception is raised in the TRY block of the same TRY control structure.

A CATCH block handles the exceptions of the exception classes cx\_class1 cx\_class2 ... that are specified after the statement CATCH as well as the exceptions of the subclasses of these exception classes. In each CATCH statement of a TRY control structure, any number of exception classes cx\_class1 cx\_class2 ... can be specified, with more specific exception classes (subclasses) being specified before more general exception classes (superclasses). This order must be preserved both within a CATCH statement and across multiple CATCH statements of a TRY control structure.

Before the CATCH block is executed, the system by default deletes the context in which the exception was raised. To preserve the context during execution of the CATCH block, the BEFORE UNWIND addition can be used.

Note

The rule where special exception classes must be specified before general classes in CATCH ensures that an exception is not handled by a general exception handler (superclass) if a special handler (subclass) is provided.

Example

Catch two possible exceptions with CATCH. If the input cannot be interpreted as number, the exception CX\_SY\_CONVERSION\_NO\_NUMBER is caught by its superclass CX\_SY\_CONVERSION\_ERROR. If the number 0 is entered, the exception CX\_SY\_CONVERSION\_ERROR is caught by its superclass CX\_SY\_ARITHMETIC\_ERROR.

DATA(input) = \`x\`.
cl\_demo\_input=>request( CHANGING field = input ).
TRY.
    cl\_demo\_output=>display( |{ 1 / CONV decfloat34( input ) }| ).
  CATCH cx\_sy\_arithmetic\_error cx\_sy\_conversion\_error INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.

Executable Example

[Exceptions, CATCH](javascript:call_link\('abencatch_exception_abexa.htm'\))

Addition 1

... BEFORE UNWIND

Effect

If the addition BEFORE UNWIND is specified, the context in which the exception was raised is not deleted until the CATCH block is deleted. Instead, the context is preserved (including all called procedures and their local data) during the execution of the CATCH block.

-   If no [RESUME](javascript:call_link\('abapresume.htm'\)) statement is executed in the CATCH block, the context is deleted when the CATCH block is exited.
    
-   Of a [RESUME](javascript:call_link\('abapresume.htm'\)) statement is executed in the CATCH block, processing resumes after the place that raised the exception.
    

Any [CLEANUP](javascript:call_link\('abapcleanup.htm'\)) blocks are always executed directly before their context is deleted. If BEFORE UNWIND is used, after exception handling, and in all other cases before the exception handling. In a CATCH block with BEFORE UNWIND, no statements can be executed in which the context is closed without executing any CLEANUP blocks.

-   The statements [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)), [CALL DIALOG](javascript:call_link\('abapcall_dialog.htm'\)), [SUBMIT](javascript:call_link\('abapcall_transaction.htm'\)), [STOP](javascript:call_link\('abapstop.htm'\)), [REJECT](javascript:call_link\('abapreject.htm'\)), [CHECK SELECT-OPTIONS](javascript:call_link\('abapcheck_select-options.htm'\)), and the obsolete variant of [LEAVE](javascript:call_link\('abapleave-.htm'\)) are forbidden, as they might leave the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").
    
-   Statements such as [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)), which are statically known to leave the internal session, are permitted. In such cases, exception handling is correctly ended while executing the CLEANUP blocks before the statement is executed.
    
-   Procedure calls are allowed. However, if the context is deleted during this type of procedure call, a runtime error occurs EXCP\_HANDLER\_FAILED\_TO\_UNWIND. This is also the case if a statement is executed here, which is allowed in the CATCH block. For example, [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)) can be executed directly in the CATCH block, but not in a procedure that is called in this block. This is because the context would be deleted if the CLEANUP blocks are not executed.
    
-   If the [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry") is dynamically specified for the [MESSAGE](javascript:call_link\('abapmessage.htm'\)) statement for sending messages, the ABAP runtime environment behaves as if exception handling is going to be exited. The context is deleted during the execution of the CLEANUP blocks. However, if the system returns to the CATCH block after the MESSAGE statement has been executed (which can be the case with message types I and S, for example), the exception CX\_SY\_ILLEGAL\_HANDLER is raised.
    

When combined with INTO, the addition BEFORE UNWIND sets the attribute IS\_RESUMABLE of the exception object and of the preceding exception objects in a chaining with the attribute PREVIOUS. Up until the first resumable raised exception, IS\_RESUMABLE is set to the value of ABAP\_TRUE and is otherwise set to the value of ABAP\_FALSE.

Notes

-   If addition BEFORE UNWINDis not specified, the context is deleted before the CATCH block is executed.
    
-   The statement [RESUME](javascript:call_link\('abapresume.htm'\)) can be used only when handling a [resumable exception](javascript:call_link\('abenresumable_exception_glosry.htm'\) "Glossary Entry") and only in a CATCH block in which the addition BEFORE UNWIND is specified. This is the only case in which the context of the exception is not deleted when the CATCH block is exited.
    
-   Resumable exceptions can also be handled in CATCH blocks without the addition BEFORE UNWIND. In this case, the context of the exception is deleted before the handling process and the statement RESUME cannot be specified.
    
-   Use of the addition BEFORE UNWIND for CATCH is only required when the statement [RESUME](javascript:call_link\('abapresume.htm'\)) is used. However, it is allowed in principle during exception handling if the context of the exception is to be evaluated before any cleanup activities in [CLEANUP](javascript:call_link\('abapcleanup.htm'\)) blocks. This makes sense, for example, when handling resource bottlenecks if releasing resources in CLEANUP blocks would change the context and thus make the calculation of the free resources in the exception handler meaningless. Other than for logging purposes, we do not recommend evaluating the part of the context that is only of interest locally for implementing the incorrect procedure.
    
-   In a procedure called up using BEFORE UNWIND during a CATCH block, each MESSAGE statement that sends a message causes the runtime error EXCP\_HANDLER\_FAILED\_TO\_UNWIND.
    

Example

Uses the addition BEFORE UNWIND when a resumable exception cx\_demo is caught.

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

If the addition INTO is specified, a reference to the exception object is saved to oref. The following can be specified for oref:

-   An existing object reference variable oref, whose static type must be more general or as general as the most general of the specified exception classes.
    
-   An inline declaration with [DATA(var)](javascript:call_link\('abendata_inline.htm'\)). The static type of the declared object reference variable is the exception class (if specified). If multiple exception classes are specified and a common superclass of these classes is used, the superclass is the static type of oref; if not, it is CX\_ROOT.
    

The object reference variable can be used to access the attributes and methods of the exception object.

If the exception was raised with [RAISE RESUMABLE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) and the addition BEFORE UNWIND was specified, the attribute IS\_RESUMABLE of the current exception object and of any preceding exception objects referenced in the attribute PREVIOUS is, up until the first resumable raised exception, set to the value of ABAP\_TRUE. In all other exception objects, the attribute IS\_RESUMABLE is set to the value of ABAP\_FALSE.

Note

Within a CATCH block without the addition BEFORE UNWIND, the attribute IS\_RESUMABLE of the exception object is undefined.

Example

Catches exceptions with an inline declaration of an object reference variable. The static type of this variable is cx.

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