  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [RFC - CALL FUNCTION](javascript:call_link\('abapcall_function_destination-.htm'\)) →  [CALL FUNCTION DESTINATION](javascript:call_link\('abapcall_function_destination.htm'\)) → 

CALL FUNCTION DESTINATION, parameter\_list

[Short Reference](javascript:call_link\('abapcall_function_shortref.htm'\))

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*TABLES     t1 = itab1 t2 = itab2 ...*\]*
    *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
    *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                *\[*system\_failure        = ns *\[*MESSAGE smess*\]**\]*
                *\[*communication\_failure = nc *\[*MESSAGE cmess*\]**\]*
                *\[*OTHERS = n\_others*\]**\]*.

Additions:

[1\. EXPORTING  p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_1@1@)
[2\. IMPORTING  p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_2@2@)
[3\. TABLES     t1 = itab1 t2 = itab2 ...](#!ABAP_ADDITION_3@3@)
[4\. CHANGING   p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_4@4@)
[5\. EXCEPTIONS exc1 = n1 exc2 = n2 ...](#!ABAP_ADDITION_5@5@)

Effect

These additions are used to assign actual parameters to the formal parameters of the remotely called function module, and return values to exceptions that are not class-based. These additions have the same basic meaning as they do in general [function module calls](javascript:call_link\('abapcall_function_parameter.htm'\)).

In the case of RFC, however, the following differences to general function module calls apply:

-   Bindings of actual parameters to incorrectly specified formal parameters are ignored.

-   Typings are not checked. The content of actual parameters is handled in the remotely called function module and, if possible, casted to the type of the formal parameter. Rules that depend on the typing and the [RFC log](javascript:call_link\('abenrfc_protocol.htm'\)) used apply. For more information, see the RFC documentation on SAP Help Portal.

-   Each formal parameter is handled implicitly like an optional parameter. Every input parameter or input/output parameter not assigned an actual parameter is given either its type-dependent initial value or a default value specified explicitly in the definition.

Some other differences for specific additions are described in the following.

Hints

-   If a remote-enabled function module is not called using the RFC, pass by parameter works like a general function module call and the corresponding exceptions are raised in if formal parameters are incorrect and actual parameters are unsuitable.

-   If possible, the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") checks the pass by parameter and reports any formal parameters and unsuitable actual parameters as errors.
    

Addition 1

EXPORTING  p1 = a1 p2 = a2 ...

Addition 2

IMPORTING  p1 = a1 p2 = a2 ...

Effect

The following differences apply to the additions EXPORTING and IMPORTING:

-   In character-like formal parameters, the actual parameter can have a length different from the formal parameter. In the called function module, a shorter actual parameter is filled with blanks on the right in the input and truncated in the output. If the actual parameter is longer, the reverse applies.

-   [Reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") cannot be passed directly or as components of deep structures. As in general function module calls, however, it is not possible to pass tables with [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") line types, structures, and strings.

-   When passing internal tables with non-unique [table keys](javascript:call_link\('abenitab_key.htm'\)), the order of the duplicate lines in relation to these keys is not retained.
    

Addition 3

TABLES  t1 = itab1 t2 = itab2 ...

Effect

When using TABLES to pass data to [table parameters](javascript:call_link\('abaptables_parameters_obsolete.htm'\)), the difference is that only tables with [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") line types and no [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") can be passed, and that an existing [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") is not passed .

Hints

-   As long as [basXML](javascript:call_link\('abenbasxml_glosry.htm'\) "Glossary Entry") is not configured as the [RFC protocol](javascript:call_link\('abenrfc_protocol.htm'\)), the classic binary RFC protocol is used implicitly for TABLES parameters, and not the XML format xRFC, which is otherwise used for deep types. Passing internal tables using the TABLES parameters can therefore be considerably faster in this case (depending on the data passed) than with other parameters.

-   [basXML](javascript:call_link\('abenbasxml_glosry.htm'\) "Glossary Entry") is now used as a unified format for all types of RFC communication. The binary RFC protocol currently still has better performance than basXML, but this will change in the future. The addition TABLES is therefore only required for RFMs for which performance is currently critical.
    

Addition 4

CHANGING   p1 = a1 p2 = a2 ...

Effect

With respect to the addition CHANGING, the same differences apply as to the additions EXPORTING and IMPORTING.

Addition 5

EXCEPTIONS exc1 = n1 exc2 = n2 ...

Effect

The addition EXCEPTIONS is used to perform classic [non-class-based](javascript:call_link\('abenexceptions_non_class.htm'\)) exception handling, which works in essentially the same way as general function module calls. In addition, however, the [special exceptions](javascript:call_link\('abenrfc_exception.htm'\)) SYSTEM\_FAILURE and COMMUNICATION\_FAILURE can be specified to handle the exceptions raised by the RFC interface itself . An optional MESSAGE addition can also be specified after these exceptions. If one of the special classic exceptions system\_failure or communication\_failure is raised, the first line of the associated [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") is inserted in the smess or cmess field. This field which must be a flat character-like field. If a remotely called function module raises a class-based exception during non-class-based exception handling, this exception is not transported and raises the predefined classic exception SYSTEM\_FAILURE instead

Hints

-   If specified after EXCEPTIONS, [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) is ignored in RFC.

-   If the classic exception SYSTEM\_FAILURE is raised when a [message of type "A", "E", or "X"](javascript:call_link\('abenabap_message_rfc.htm'\)) is sent, the smess field contains the message short text when MESSAGE is specified.

-   Class-based exception handling in RFCs is not possible in the current release track.

Executable Examples

-   [Parameter Passing in sRFC and aRFC](javascript:call_link\('abenrfc_parameters_abexa.htm'\))

-   [Exception Handling in RFC](javascript:call_link\('abenrfc_exceptions_abexa.htm'\))