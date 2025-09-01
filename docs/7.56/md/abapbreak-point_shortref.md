  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  B

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