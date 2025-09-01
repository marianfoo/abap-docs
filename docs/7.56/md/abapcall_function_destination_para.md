  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc.htm) →  [RFC - CALL FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_destination-.htm) →  [CALL FUNCTION DESTINATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_destination.htm) → 

CALL FUNCTION DESTINATION, parameter\_list

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_shortref.htm)

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

These additions are used to assign actual parameters to the formal parameters of the remotely called function module and return values to non-class-based exceptions. These additions essentially have the same meaning as they do in general [function module calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_parameter.htm).

In the case of RFC, however, the following differences to general function module calls apply:

-   Bindings of actual parameters to incorrectly specified formal parameters are ignored.
-   Typings are not checked. The content of actual parameters is handled in the remotely called function module and, if possible, is cast to the type of the formal parameter. Rules that depend on the typing and the [RFC log](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_protocol.htm) used apply. For more information, see the RFC documentation on SAP Help Portal.
-   Each formal parameter is handled implicitly like an optional parameter. Every input parameter or input/output parameter to which no actual parameter is assigned is given either its type-dependent initial value or a default value specified explicitly in the definition.

Some other differences for specific additions are described in the following.

Hints

-   If a remote-enabled function module is not called using RFC, parameter passing behaves in the same way as in a general function module call and the corresponding exceptions are raised for incorrect formal parameters and unsuitable actual parameters.
-   If possible, the [extended program check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_program_check_glosry.htm "Glossary Entry") checks the passing of parameters and reports any incorrect formal parameters and unsuitable actual parameters as errors.

Addition 1   

EXPORTING  p1 = a1 p2 = a2 ...

Addition 2   

IMPORTING  p1 = a1 p2 = a2 ...

Effect

The following differences apply to the additions EXPORTING and IMPORTING:

-   In character-like formal parameters, the actual parameter can have a length different from the formal parameter. In the called function module, a shorter actual parameter is filled with blanks on the right in the input and truncated in the output. If the actual parameter is longer, the reverse applies.
-   [Reference variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreference_variable_glosry.htm "Glossary Entry") cannot be passed directly or as components of deep structures. As in general function module calls, however, tables with [deep](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeep_glosry.htm "Glossary Entry") line types, structures, and strings can be passed.
-   When passing internal tables with non-unique [table keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_key.htm), the order of the duplicate lines in relation to these keys is not retained.

Addition 3   

TABLES  t1 = itab1 t2 = itab2 ...

Effect

When using TABLES to pass data to [table parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables_parameters_obsolete.htm), the difference is that only tables with [flat](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenflat_glosry.htm "Glossary Entry") line types and no [secondary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") can be passed and any existing [header lines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheader_line_glosry.htm "Glossary Entry") are not passed.

Hints

-   As long as [basXML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbasxml_glosry.htm "Glossary Entry") is not configured as the [RFC protocol](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_protocol.htm), the classic binary RFC protocol is used implicitly for TABLES parameters, and not the XML format xRFC, which is otherwise used for deep types. Passing internal tables using the TABLES parameters can therefore be considerably faster in this case than with other parameters, depending on the data passed.
-   [basXML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbasxml_glosry.htm "Glossary Entry") is now recommended as a uniform format for all types of RFC communication. The binary RFC protocol currently still has better performance than basXML, but this will change in the future. The addition TABLES is therefore only required for RFMs for which performance is currently critical.

Addition 4   

CHANGING   p1 = a1 p2 = a2 ...

Effect

With respect to the addition CHANGING, the same differences apply as to the additions EXPORTING and IMPORTING.

Addition 5   

EXCEPTIONS exc1 = n1 exc2 = n2 ...

Effect

The addition EXCEPTIONS is used to perform classic [non-class-based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexceptions_non_class.htm) exception handling, which works in essentially the same way as in general function module calls. In addition, however, the [special exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_exception.htm) SYSTEM\_FAILURE and COMMUNICATION\_FAILURE can be specified here to handle the exceptions raised by the RFC interface itself. An optional MESSAGE addition can also be specified after these exceptions. If one of the special classic exceptions system\_failure or communication\_failure is raised, the first line of the associated [short dump](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshort_dump_glosry.htm "Glossary Entry") is placed in the smess or cmess field. This field must be flat and character-like. If a remotely called function module raises a class-based exception during non-class-based exception handling, this exception is not transported and raises the predefined classic exception SYSTEM\_FAILURE instead

Hints

-   The specification of [error\_message](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_function_parameter.htm) after EXCEPTIONS is ignored in RFC.
-   If the classic exception SYSTEM\_FAILURE is raised when a [message of type A, E, or X](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_rfc.htm) is sent, the smess field contains the message short text when MESSAGE is specified.
-   Class-based exception handling in RFCs is not possible in the current release track.

Executable Examples

-   [Parameter Passing in sRFC and aRFC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_parameters_abexa.htm)
-   [Exception Handling in RFC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_exceptions_abexa.htm)