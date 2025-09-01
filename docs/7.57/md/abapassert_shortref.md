  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  A

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ASSERT, ABAPASSERT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

ASSERT - Short Reference

[Reference](javascript:call_link\('abapassert.htm'\))

Syntax

ASSERT *\[* *\[*ID group *\[*SUBKEY sub*\]**\]*
         *\[*FIELDS val1 val2 ...*\]*
         CONDITION *\]* log\_exp.

Effect

Defines an [assertion](javascript:call_link\('abenassertion_glosry.htm'\) "Glossary Entry"). If the logical expression log\_exp is false, either the program terminates with a runtime error, or processing switches to the ABAP debugger, or a log entry is created.

Additions   

-   ID group
    Assigns the assertion to a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") group that controls its activation and behavior.
-   SUBKEY sub
    Controls the summarization of the log using a subkey sub.
-   FIELDS val1 val2 ...
    Writes the content of data objects val1 val2 ... to the log or the [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry").
-   CONDITION
    Must be specified before log\_exp if one of the other additions is specified.