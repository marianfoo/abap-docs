  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  F

FREE OBJECT, OLE - Quick reference

[Reference](javascript:call_link\('abapfree_object.htm'\))

Syntax

FREE OBJECT ole *\[*NO FLUSH*\]*.

Effect

Frees the memory of an [automation object](javascript:call_link\('abenole_automation_glosry.htm'\) "Glossary Entry") ole created using CREATE OBJECT ole on the presentation server.

Addition

-   NO FLUSH
    The effect is that the release is passed to the presentation layer only after function module FLUSH is called or when a [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") changes.