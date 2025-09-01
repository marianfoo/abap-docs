---
title: "REPORT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport_shortref.htm) Syntax REPORT rep list_options(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport_list_options.htm) MESSAGE-ID mid DEFINING DATABASE ldb(https://help.sap.
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport.htm"
abapFile: "abapreport.htm"
keywords: ["do", "if", "try", "class", "data", "abapreport"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_layout.htm) →  [Program-Initiating Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_statement.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: REPORT, ABAPREPORT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impro
vement:)

REPORT

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport_shortref.htm)

Syntax

REPORT rep *\[*[list\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport_list_options.htm)*\]*
           *\[*MESSAGE-ID mid*\]*
           *\[*[DEFINING DATABASE ldb](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport_defining.htm)*\]*
           *\[*REDUCED FUNCTIONALITY*\]*.

Additions:

[1\. ... MESSAGE-ID mid](#!ABAP_ADDITION_1@1@)
[2\. ... REDUCED FUNCTIONALITY](#!ABAP_ADDITION_2@2@)

Effect

The statement REPORT introduces an [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved. The name rep must be specified directly. The optional additions [list\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport_list_options.htm) can be used to affect the [basic list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbasic_list_glosry.htm "Glossary Entry") of the program. A [message class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_class_glosry.htm "Glossary Entry") can be specified using MESSAGE-ID.

The addition [DEFINING DATABASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport_defining.htm) is used to define a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), whereas REDUCED FUNCTIONALITY should only be used for [PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprogram.htm).

Hints

-   The keyword PROGRAM can also be replaced by the keyword [REPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprogram.htm). In executable programs, PROGRAM means the same as REPORT and can be used with its additions. As a rule, however, executable programs should only be introduced using REPORT.
-   Although it is not absolutely necessary to specify the name rep, the name of the ABAP program from the [repository](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_glosry.htm "Glossary Entry") should always be used.

Addition 1   

... MESSAGE-ID mid

Effect

This addition specifies a message class mid that allows the use of short forms of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm) in the program in which only the message type and message number are specified. The message class must be specified directly and appear in the column ARBGB of the database table T100. The variants of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm) in which the message class is specified override the addition MESSAGE-ID.

Example

Default setting of the message class DEMO\_FLIGHT for a program.

REPORT ... MESSAGE-ID demo\_flight.

Addition 2   

... REDUCED FUNCTIONALITY

Effect

This addition is only intended for use with the statement [PROGRAM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprogram.htm) in subroutine pools and is described [there](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprogram.htm).

Continue
[REPORT, list\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreport_list_options.htm)