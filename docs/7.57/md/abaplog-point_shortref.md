  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  L

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LOG-POINT, ABAPLOG-POINT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

LOG-POINT - Short Reference

[Reference](javascript:call_link\('abaplog-point.htm'\))

Syntax

LOG-POINT ID group
          *\[*SUBKEY sub*\]*
          *\[*FIELDS val1 val2 ...*\]*.

Effect

Defines a [logpoint](javascript:call_link\('abenlogpoint_glosry.htm'\) "Glossary Entry") to write a log entry.

Additions   

-   ID group
    Assigns the logpoint to a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") group, which controls its activation.
-   SUBKEY sub
    Controls the summarization of the log using a subkey sub.
-   FIELDS val1 val2 ...
    Writes the values val1, val2, ... to the log.