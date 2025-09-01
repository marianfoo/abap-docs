---
title: "Syntax"
description: |
  ... EXPORTING  p1 = a1 p2 = a2 ... IMPORTING  p1 = a1 p2 = a2 ... TABLES     t1 = itab1 t2 = itab2 ... CHANGING   p1 = a1 p2 = a2 ... EXCEPTIONS exc1 = n1 exc2 = n2 ... error_message = n_error OTHERS = n_others. Additions: 1. ... E
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm"
abapFile: "abapcall_function_parameter.htm"
keywords: ["update", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "abapcall", "function", "parameter"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_procedures.htm) →  [CALL FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL FUNCTION, parameter_list, ABAPCALL_FUNCTION_PARAMETER, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL FUNCTION, parameter\_list

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_shortref.htm)

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*TABLES     t1 = itab1 t2 = itab2 ...*\]*
    *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
    *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                *\[*error\_message = n\_error*\]*
                *\[*OTHERS = n\_others*\]**\]*.

Additions:

[1\. ... EXPORTING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... IMPORTING  p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... TABLES t1 = itab1 t2 = itab2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... CHANGING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_4@4@)
[5\. ... EXCEPTIONS exc1 = n1 exc2 = n2 ... OTHERS = n\_others](#!ABAP_ADDITION_5@5@)
[6\. ... EXCEPTIONS ... error\_message = n\_error ...](#!ABAP_ADDITION_6@6@)

Effect

With the exception of the addition EXCEPTIONS, these additions assign the actual parameters a1, a2, ... to the formal parameters p1, p2, ... or t1, t2, ... of the called function module. All data objects and some expressions whose data type [matches](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_check.htm) the [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_glosry.htm "Glossary Entry") of the corresponding formal parameter can be specified as actual parameters. With the exception of calculation expressions specified for input parameters, each formal parameter inherits all properties of the assigned actual parameter when called. Non-class-based exceptions can be handled using the addition EXCEPTIONS. The order of the additions is predefined.

A catchable exception is raised whenever a formal parameter is incorrect, and the name of the function module is specified by a constant or as a character literal. Unlike method calls, formal parameters are not checked by the syntax check. A static check only takes place in the extended program check. If the name of the function module is specified by a variable, the specification of an incorrect formal parameter is ignored at runtime.

Hints

-   The formal parameters and non-class-based exceptions of a function module are defined as its [parameter interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction.htm) in the Function Builder.
-   A [system field](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_field_glosry.htm "Glossary Entry") should [never be used an actual parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuse_actual_parameters_guidl.htm "Guideline").

Addition 1   

... EXPORTING p1 = a1 p2 = a2 ...

Effect

This addition assigns actual parameters to the [input parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of the called function module. EXPORTING can be used to assign actual parameters to the optional input parameters but is mandatory for non-optional input parameters. In [pass by reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpass_by_reference_glosry.htm "Glossary Entry"), a reference to an actual parameter is passed when the call is made. In [pass by value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), the content of an actual parameter is assigned to the corresponding formal parameter.

a1, a2, ... are [general expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"), which means that, in addition to data objects, functions and expressions can also be passed as actual parameters. [Special rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_arith_expr.htm) apply in this case.

Hints

-   [Substring access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoffset_length.htm) is not possible on an actual parameter of type string or xstring specified after EXPORTING.
-   Unlike in [method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm), a generic type specification # is not possible when a [constructor expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") is specified. This is because the typing of the parameters is not determined until runtime.

Addition 2   

... IMPORTING p1 = a1 p2 = a2 ...

Effect

This addition assigns actual parameters to the [output parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") of the called function module. IMPORTING can be used to assign actual parameters to all output parameters, but this is not mandatory. In [pass by reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpass_by_reference_glosry.htm "Glossary Entry"), a reference is passed to an actual parameter when the call is made. In [pass by value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), the content of an output parameter is assigned to the relevant actual parameter only if the function module is completed without errors.

Hint

Unlike in [method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm), no [writable expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwritable_expression_glosry.htm "Glossary Entry") and no [inline declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declaration_glosry.htm "Glossary Entry") can be specified.

Addition 3   

... TABLES t1 = itab1 t2 = itab2 ...

Effect

This addition assigns actual parameters to the [table parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_parameter_glosry.htm "Glossary Entry") of the called function module. If TABLES is used, internal tables itab1, itab2, ... must be assigned to all non-optional table parameters t1, t2, ... of the called function module and are optional for all optional table parameters. For itab1, itab2, ..., only [standard tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry") can be specified. The data is passed using a reference
(except [RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination-.htm)). If a specified table itab1, itab2, ... has a [header line](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheader_line_glosry.htm "Glossary Entry"), this is also passed. Otherwise, the header line of the corresponding table parameter t1, t2, ... is initial after the call.

Addition 4   

... CHANGING p1 = a1 p2 = a2 ...

Effect

This addition assigns actual parameters to the [input/output parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry") of the called function module. CHANGING can be used to assign actual parameters to the optional input/output parameters but is mandatory for non-optional input/output parameters. In [pass by reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpass_by_reference_glosry.htm "Glossary Entry"), a reference to an actual parameter is passed when the call is made. In [pass by value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), the content of an actual parameter is assigned to the relevant formal parameter and the modified content of an input/output parameter is only assigned to the relevant actual parameter if the function module is completed without errors.

Hint

Unlike in [method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm), no [writable expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified.

Addition 5   

... EXCEPTIONS exc1 = n1 exc2 = n2 ... OTHERS = n\_others

Effect

EXCEPTIONS can be used to assign return codes to [non-class-based exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_non_class.htm) exc1 exc2 ... declared in the parameter interface. Each exception exc1 exc2 ... that the caller wants to handle must be assigned to a directly specified number n1 n2 ... All numbers between 0 and 65535 can be specified. The behavior outside of this range is undefined.

By specifying OTHERS as the last entry after EXCEPTIONS, a common return code can be assigned to all exceptions not specified explicitly in exc1 exc2.... This is done by assigning a number n\_others. The same return code can be assigned to different exceptions (including OTHERS). The behavior when an exception is raised is as follows:

-   If the statement [RAISE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_raising.htm) is used to raise an exception exc1 exc2 ... to which a return code is assigned, the statement is terminated immediately, any procedure parameters passed by value are not filled, and the number n1 n2 ... assigned to the exception is available to be evaluated in sy-subrc.
-   If the call of an exception raised by [RAISE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception.htm) does not assign a return code, the program is terminated with a runtime error.
-   If the call of an exception raised by [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_raising.htm) does not assign a return code, the [message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") is sent, and the system resumes in accordance with the message type.

If no exception is raised, a call sets sy-subrc to 0.

The addition EXCEPTIONS cannot be specified in the call if RAISING is used to declare [class-based exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") in the parameter interface of the called procedure.

During program execution, a specified exception is not checked when a function module is called. Only the extended program check reports whether a specified exception is not declared in its interface.

Hints

-   For the addition EXCEPTIONS, CALL FUNCTION also has an [obsolete short form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_exc_short_form.htm), in which the specification of the return value \= n can also be omitted after a specified exception. If an exception is raised, the value 1 is assigned to sy-subrc implicitly. The return code must always be specified explicitly, however.
-   If the value 0 is assigned to an exception, this indicates that the caller wants to ignore this exception. If the exception is raised in the function module, no runtime error occurs, but the exception cannot be handled.
-   For more information about the behavior of class-based exceptions in function modules, see [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_procedures.htm).

Addition 6   

... EXCEPTIONS ... error\_message = n\_error ...

Effect

Specifying the predefined exception error\_message after EXCEPTIONS changes the processing of all messages that are sent as follows during function module processing:

-   Messages sent using the statement [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm) without the addition [RAISING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_raising.htm).
-   Messages sent using the statement [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_raising.htm) because no return code is assigned to them.
-   Messages sent by the ABAP runtime framework.

For these cases, message processing is affected as follows:

-   [Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") of the type S, I, or W are not sent, but are flagged in the log during [background processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbackround_processing_glosry.htm "Glossary Entry").
-   Messages of the type E and A raise the exception error\_message and set sy-subrc to n\_error. The message class, message type, message number, and the content of possible placeholders for the MESSAGE statement are available in the fields sy-msgid, sy-msgno, sy-msgty, and sy-msgv1, ... sy-msgv4. In the case of messages of type A, the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback.htm) is also executed implicitly. For more information about behavior in [background processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbackround_processing_glosry.htm "Glossary Entry"), see [messages in background processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_message_batch_job.htm).
-   Messages of the type X are not affected. As always, they cause a program termination with a [short dump](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshort_dump_glosry.htm "Glossary Entry").

Hints

-   When messages are handled with the predefined exception error\_message, it does not matter whether the message was sent in the current function module or in a module that is called by it. Unlike the exceptions raised by the statement [RAISE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception.htm), messages sent using the statement [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm) are propagated across call levels.
-   Only messages from the current [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") are handled. Messages from programs [called](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_call.htm) when the function module is processed are not handled.
-   The following situations can arise for the statement [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_raising.htm) within the called function module:
    -   If a return code is assigned to the exception specified after RAISING, the exception is handled independently of error\_message and sy-subrc is set to this value.
    -   If no return code is assigned to the exception specified after RAISING and error\_message is specified, the sent message is affected as specified above.
    -   If no return code is assigned to the exception specified after RAISING and error\_message is not specified, the message is sent in accordance with its type.
-   When a program is resumed after handling a type A message, it must be ensured that a complete [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback.htm) has been performed and not just a database rollback.
-   The statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback.htm) is executed when messages of type A are caught using error\_message and is therefore forbidden in [updates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_message_update.htm) and when processing subroutines after [PERFORM ON COMMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapperform_on_commit.htm) or [PERFORM ON ROLLBACK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapperform_on_commit.htm). It also produces runtime errors.
-   When programs are executed, the ABAP runtime framework can also send messages, for example, during automatic checks on dynpros. These messages are caught using error\_message in the same way as messages sent using MESSAGE.

Example

Call of the function module GUI\_DOWNLOAD to store the content of an internal table in a file on the current [presentation server](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpresentation_server_glosry.htm "Glossary Entry"). The name of the function module is specified as a character literal, which is the most frequent type of specification in static parameter assignment.

CONSTANTS path TYPE string VALUE \`c:\\temp\\\`.
DATA: line     TYPE c LENGTH 80,
      text\_tab LIKE STANDARD TABLE OF line,
      fleng    TYPE i.
...
CALL FUNCTION 'GUI\_DOWNLOAD'
  EXPORTING
    filename         = path && \`text.txt\`
    filetype         = 'ASC'
  IMPORTING
    filelength       = fleng
  TABLES
    data\_tab         = text\_tab
  EXCEPTIONS
    file\_write\_error = 1
    invalid\_type     = 2
    no\_authority     = 3
    unknown\_error    = 4
    OTHERS           = 10.
CASE sy-subrc.
  WHEN 1.
    ...
  ...
ENDCASE.