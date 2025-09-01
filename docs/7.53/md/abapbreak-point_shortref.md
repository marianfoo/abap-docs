  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  B

BREAK-POINT - Quick reference

[Reference](javascript:call_link\('abapbreak-point.htm'\))

Syntax

BREAK-POINT *\[* *{*ID group*}* *|* *{*log\_text*}* *\]*.

Effect

Defines a [breakpoint](javascript:call_link\('abenbreakpoint_glosry.htm'\) "Glossary Entry") for branching to the ABAP Debugger.

Additions

-   ID group
    Assigns the breakpoint to a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") group that controls its activation. Without this specification, a breakpoint is always active.
    
-   log\_text
    Specifies a supplementary text for the system log.