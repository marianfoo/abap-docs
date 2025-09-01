  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-initiating statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

REPORT

[Short Reference](javascript:call_link\('abapreport_shortref.htm'\))

Syntax

REPORT rep *\[*[list\_options](javascript:call_link\('abapreport_list_options.htm'\))*\]*
           *\[*MESSAGE-ID mid*\]*
           *\[*[DEFINING DATABASE ldb](javascript:call_link\('abapreport_defining.htm'\))*\]*
           *\[*REDUCED FUNCTIONALITY*\]*.

Additions:

[1\. ... MESSAGE-ID mid](#!ABAP_ADDITION_1@1@)
[2\. ... REDUCED FUNCTIONALITY](#!ABAP_ADDITION_2@2@)

Effect

The statement REPORT introduces an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved. The name rep must be specified directly. The optional additions [list\_options](javascript:call_link\('abapreport_list_options.htm'\)) can be used to affect the [basic list](javascript:call_link\('abenbasic_list_glosry.htm'\) "Glossary Entry") of the program. A [message class](javascript:call_link\('abenmessage_class_glosry.htm'\) "Glossary Entry") can be specified using MESSAGE-ID.

The addition [DEFINING DATABASE](javascript:call_link\('abapreport_defining.htm'\)) is used to define a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), whereas REDUCED FUNCTIONALITY should only be used for [PROGRAM](javascript:call_link\('abapprogram.htm'\)).

Hints

-   The keyword PROGRAM can also be replaced by the keyword [REPORT](javascript:call_link\('abapprogram.htm'\)). In executable programs, PROGRAM means the same as REPORT and can be used with its additions. As a rule, however, executable programs should only be introduced using REPORT.

-   Although it is not absolutely necessary to specify the name rep, the name of the ABAP program from the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") should always be used.
    

Addition 1

... MESSAGE-ID mid

Effect

This addition specifies a message class mid that allows the use of short forms of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) in the program in which only the message type and message number are specified. The message class must be specified directly and appear in the column ARBGB of the database table T100. The variants of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) in which the message class is specified override the addition MESSAGE-ID.

Example

Default setting of the message class DEMO\_FLIGHT for a program.

REPORT ... MESSAGE-ID demo\_flight.

Addition 2

... REDUCED FUNCTIONALITY

Effect

This addition is only intended for use with the statement [PROGRAM](javascript:call_link\('abapprogram.htm'\)) in subroutine pools and is described [there](javascript:call_link\('abapprogram.htm'\)).

Continue
[REPORT, list\_options](javascript:call_link\('abapreport_list_options.htm'\))