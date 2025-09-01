  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  B

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20BREAK-POINT%2C%20ABAPBREAK-POINT_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

BREAK-POINT - Short Reference

[Reference](javascript:call_link\('abapbreak-point.htm'\))

Syntax

BREAK-POINT *\[* *{*ID group*}* *|* *{*log\_text*}* *\]*.

Effect

Defines a [breakpoint](javascript:call_link\('abenbreakpoint_glosry.htm'\) "Glossary Entry") for branching to ABAP Debugger.

Additions   

-   ID group
    Assigns the breakpoint to a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") group that controls its activation. Without this specification, a breakpoint is always active.
-   log\_text
    Specifies a supplementary text for the system log.