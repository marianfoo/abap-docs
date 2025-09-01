  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

DEMAND - Quick reference

[Reference](javascript:call_link\('abapdemand.htm'\))

Syntax

DEMAND val1 = f1 val2 = f2 ...
       FROM CONTEXT context\_ref
       *\[*MESSAGES INTO itab*\]*.

Effect

Obsolete: Assigns the derived values val1, val2, ... of a [context](javascript:call_link\('abencontext_glosry.htm'\) "Glossary Entry") instance referenced by context\_ref to the data objects f1, f2, ...

Addition

-   MESSAGES INTO itab
    Appends [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of the context to the internal table itab. Otherwise messages are sent.