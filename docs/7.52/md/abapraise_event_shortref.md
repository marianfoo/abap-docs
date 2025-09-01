  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

RAISE EVENT - Quick reference

[Reference](javascript:call_link\('abapraise_event.htm'\))

Syntax

RAISE EVENT evt *\[*EXPORTING p1 = a1 p2 = a2 ...*\]*.

Effect

Raises an event in a method.

Addition

-   EXPORTING p1 = a1 p2 = a2 ...
    Passes actual parameters a1, a2, ... to the input parameter p1, p2 of the [event handler](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry").