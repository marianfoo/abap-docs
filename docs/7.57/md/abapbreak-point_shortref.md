  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  B

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: BREAK-POINT, ABAPBREAK-POINT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

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