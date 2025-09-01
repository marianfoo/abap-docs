  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_statement.htm) → 

REPORT

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreport_shortref.htm)

Syntax

REPORT rep *\[*[list\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreport_list_options.htm)*\]*
           *\[*MESSAGE-ID mid*\]*
           *\[*[DEFINING DATABASE ldb](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreport_defining.htm)*\]*
           *\[*REDUCED FUNCTIONALITY*\]*.

Extras:

[1\. ... MESSAGE-ID mid](#!ABAP_ADDITION_1@1@)
[2\. ... REDUCED FUNCTIONALITY](#!ABAP_ADDITION_2@2@)

Effect

The statement REPORT introduces an [executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved. The name rep must be specified directly. The optional additions [list\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreport_list_options.htm) can be used to modify the [basic list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbasic_list_glosry.htm "Glossary Entry") of the program. A [message class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_class_glosry.htm "Glossary Entry") can be specified using MESSAGE-ID.

The addition [DEFINING DATABASE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreport_defining.htm) is used to define a [logical database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), whereas REDUCED FUNCTIONALITY should only be used for [PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapprogram.htm).

Notes

-   The keyword PROGRAM can also be replaced by the keyword [REPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapprogram.htm). In executable programs, PROGRAM means the same as REPORT and can be used with the additions of REPORT. As a rule, however, executable programs should only be introduced using REPORT.
    
-   Although it is not absolutely necessary to specify the name rep, the name of the ABAP program from the [repository](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_glosry.htm "Glossary Entry") should always be used.
    

Addition 1

... MESSAGE-ID mid

Effect

This addition specifies a message class mid that allows the use of short forms of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm) in the program. Here, only the message type and message number are specified in the statement. The message class must be specified directly and appear in the column ARBGB of the database table T100. The variants of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm) in which the message class is specified override the addition MESSAGE-ID.

Example

Default setting of the message class Z\_MY\_MESSAGES for the program Z\_MY\_REPORT.

REPORT z\_my\_report MESSAGE-ID z\_my\_messages.

Addition 2

... REDUCED FUNCTIONALITY

Effect

This addition is only intended for use with the statement [PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapprogram.htm) in subroutine pools and is described [there](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapprogram.htm).

Continue
[REPORT - list\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreport_list_options.htm)