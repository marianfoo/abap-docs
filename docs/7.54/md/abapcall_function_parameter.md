  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_procedures.htm) →  [CALL FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function.htm) → 

CALL FUNCTION - parameter\_list

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_shortref.htm)

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*TABLES     t1 = itab1 t2 = itab2 ...*\]*
    *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
    *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                *\[*error\_message = n\_error*\]*
                *\[*OTHERS = n\_others*\]**\]*.

Extras:

[1\. ... EXPORTING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... IMPORTING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... TABLES t1 = itab1 t2 = itab2 ...](#!ABAP_ADDITION_3@3@)
[4\. ... CHANGING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_4@4@)
[5\. ... EXCEPTIONS exc1 = n1 exc2 = n2 ... OTHERS = n\_others](#!ABAP_ADDITION_5@5@)
[6\. ... EXCEPTIONS ... error\_message = n\_error ...](#!ABAP_ADDITION_6@6@)

Effect

With the exception of the addition EXCEPTIONS, these additions assign the actual parameters a1, a2, ... to the formal parameters p1, p2, ... or t1, t2, ... of the called function module. All data objects (and some expressions) whose data type [matches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm) the [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_glosry.htm "Glossary Entry") of the appropriate formal parameter can be specified as actual parameters. With the exception of calculation expressions specified for input parameters, each formal parameter inherits all properties of the assigned actual parameter when called. Non-class-based exceptions can be handled using the addition EXCEPTIONS. The order of the additions is fixed.

A handleable exception is raised whenever a formal parameter is incorrect and the name of the function module is specified by a constant or as a character literal. Unlike method calls, formal parameters are not checked by the syntax check. A static check only takes place in the extended program check. If the name of the function module is specified by a variable, the specification of an incorrect formal parameter is ignored at runtime.

Notes

-   The formal parameters and non-class-based exceptions of a function module are defined as its [parameter interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction.htm) in Function Builder.
    
-   A [system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") should [never be used an actual parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuse_actual_parameters_guidl.htm "Guideline").
    

Addition 1

... EXPORTING p1 = a1 p2 = a2 ...

Effect

This addition assigns actual parameters to the [input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of the called function module. EXPORTING can be used to assign actual parameters to the optional input parameters. It must be used to assign actual parameters to the non-optional input parameters. If [pass by reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is used, a reference to an actual parameter is passed when the call is made. If [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is used, the content of an actual parameter is assigned to the corresponding formal parameter.

a1, a2, ... are [general expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"), which means that, alongside data objects, functions and expressions can also be passed as actual parameters. [Special rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_arith_expr.htm) apply in this case.

Notes

-   [Substring access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoffset_length.htm) is not possible after an actual parameter of type string or xstring specified after EXPORTING.
    
-   Unlike in [method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm), types cannot be specified generically (#) when a [constructor expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") is specified. This is because the typing of the parameters is not determined until runtime.
    

Addition 2

... IMPORTING p1 = a1 p2 = a2 ...

Effect

This addition assigns actual parameters to the [output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") of the called function module. IMPORTING can be used to assign actual parameters to all output parameters, but this is not mandatory. If [pass by reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is used, a reference is passed to an actual parameter when the call is made. If [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is used, the content of an output parameter is assigned to the actual parameter in question only if the function module is completed without errors.

Note

Unlike in [method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm), no [writable expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry") and no [inline declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninline_declaration_glosry.htm "Glossary Entry") can be specified.

Addition 3

... TABLES t1 = itab1 t2 = itab2 ...

Effect

This addition assigns actual parameters to the [table parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_parameter_glosry.htm "Glossary Entry") of the called function module. If TABLES is used, internal tables itab1, itab2, ... must be assigned to all non-optional table parameters t1, t2, ... of the called function module. These internal tables are optional for all optional table parameters. For itab1, itab2, ... , only [standard tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") can be specified. The data is passed using a reference
(except [RFC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination-.htm)) . If a specified table itab1, itab2, ... has a [header line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheader_line_glosry.htm "Glossary Entry"), this is also passed. Otherwise, the header line of the corresponding table parameter t1, t2, ... is initial after the call.

Addition 4

... CHANGING p1 = a1 p2 = a2 ...

Effect

This addition assigns actual parameters to the [input/output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry") of the called function module. CHANGING can be used to assign actual parameters to the optional input/output parameters. It must be used to assign actual parameters to the non-optional input/output parameters. If [pass by reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is used, a reference to an actual parameter is passed when the call is made. If [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is used, the content of an actual parameter is assigned to the corresponding formal parameter. If [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is used, the modified content of an input/output parameter is assigned to the actual parameter in question only if the function module is completed without errors.

Note

Unlike in [method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm), no [writable expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry") can be specified.

Addition 5

... EXCEPTIONS exc1 = n1 exc2 = n2 ... OTHERS = n\_others

Effect

EXCEPTIONS can be used to assign return codes to [non-class-based exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_non_class.htm) exc1 exc2 ... declared in the parameter interface. Each exception exc1 exc2 ... that the caller wants to handle must be assigned to a directly specified number n1 n2 ... All numbers between 0 and 65535 can be specified. The behavior outside of this range is undefined.

OTHERS can be specified as the last entry after EXCEPTIONS to assign a common return code to all exceptions not specified explicitly in exc1 exc2.... This is done by assigning a number n\_others. The same return code can be assigned to different exceptions (including OTHERS). The behavior when an exception is raised is as follows:

-   If the statement [RAISE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception.htm) or [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm) is used to raise an exception exc1 exc2 ... (to which a return code is assigned), the statement is ended immediately, any procedure parameters passed by value are not filled, and the number n1 n2 ... assigned to the exception is available to be evaluated in sy-subrc .
    
-   If the call of an exception raised by [RAISE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception.htm) does not assign a return code, the program terminates with a runtime error.
    
-   If the call of an exception raised by [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm) does not assign a return code, the [message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry") is sent and the system resumes in accordance with the message type.
    

If no exception is raised, a call sets sy-subrc to 0.

The addition EXCEPTIONS cannot be specified in the call if RAISING is used to declare [class-based exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") in the parameter interface of the called procedure.

When the program is running, a specified exception is not checked when a function module is called. The extended program check returns an error if a specified exception is not declared in its interface.

Notes

-   For the addition EXCEPTIONS, CALL FUNCTION also has an [obsolete short form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_exc_short_form.htm), in which the return code \= n can be omitted after a specified exception. If an exception is raised, the value 1 is assigned to sy-subrc implicitly. The return code must always be specified explicitly, however.
    
-   If the value 0 is assigned to an exception, this indicates that the caller wants to ignore this exception. If the exception is raised in the function module, no runtime error occurs, but the exception cannot be handled.
    
-   Information about the behavior of class-based exceptions in function modules can be found in [Class-Based Exceptions in Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_procedures.htm).
    

Addition 6

... EXCEPTIONS ... error\_message = n\_error ...

Effect

If the predefined exception error\_message is specified after EXCEPTIONS, all messages sent in the following ways in function module processing are affected as stated below:

-   Messages sent using the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm) without the addition [RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm),
    
-   Messages sent using the statement [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm) because no return code is assigned to them
    
-   that are sent by the ABAP runtime environment
    

during function module processing are affected as follows:

-   [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry") of the type S, I, or W are not sent but are flagged in the log in [background processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbackround_processing_glosry.htm "Glossary Entry") .
    
-   Messages of the type E and A raise the exception error\_message and set sy-subrc to n\_error. The message class, message type, message number, and the contents of possible placeholders for the MESSAGE statement are in the fields sy-msgid, sy-msgno, sy-msgty, and sy-msgv1, ... sy-msgv4. In the case of messages of type A, the statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprollback.htm) is also executed explicitly. For information about behavior in [background processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbackround_processing_glosry.htm "Glossary Entry"), see [messages in background processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_batch_job.htm).
    
-   Messages of the type X are not affected. As always, they cause a program termination with a [short dump](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshort_dump_glosry.htm "Glossary Entry").
    

Notes

-   When messages are handled with the predefined exception error\_message, it does not make a difference whether the message is sent in the current function module or in a module that is called by this function module. Unlike the exceptions raised by the statement [RAISE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception.htm), messages sent using the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm) are propagated across call levels.
    
-   Only messages from the current [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") are handled. Messages from programs [called](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_call.htm) when the function module is processed are not handled.
    
-   The following situations can arise for the statement [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm) within the called function module:
    

-   If a return code is assigned to the exception specified after RAISING, the exception is handled independently of error\_message and sy-subrc is set to this value.

-   If no return code is assigned to the exception specified after RAISING and error\_message is specified, the sent message is affected as specified above.

-   If no return code is assigned to the exception specified after RAISING and error\_message is not specified, the message is sent in accordance with its type.
    

-   When a program is resumed after handling a type A message, it must be ensured that a full [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprollback.htm) is performed and not just a database rollback.
    
-   The statement [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprollback.htm) is executed when messages of type A are caught using error\_message, and is therefore forbidden in [updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_update.htm) and when processing subroutines after [PERFORM ON COMMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapperform_subr.htm) or [PERFORM ON ROLLBACK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapperform_subr.htm), It also produces runtime errors.
    
-   When programs are executed, the ABAP runtime environment can also send messages, for example when the automatic checks on screen input are performed. These messages are caught using error\_message in the same way as messages sent using MESSAGE.
    

Example

Calls the function module GUI\_DOWNLOAD to save the content of an internal table to a file on the current [presentation server](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpresentation_server_glosry.htm "Glossary Entry"). The name of the function module is specified as a character literal, which is the most frequent type of specification in static parameter assignment.

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