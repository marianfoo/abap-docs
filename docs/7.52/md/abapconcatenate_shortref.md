  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CONCATENATE - Quick reference

[Reference](javascript:call_link\('abapconcatenate.htm'\))

Syntax

CONCATENATE *{*dobj1 dobj2 ...*}**|**{*LINES OF itab*}*
            INTO result
            *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
            *\[*SEPARATED BY sep*\]*
            *\[*RESPECTING BLANKS*\]*.

Effect

Concatenates the contents of dobj1 dobj2 ... or the rows of an internal table itab and assigns the result result.

Additions

-   IN *{*CHARACTER*|*BYTE*}* MODE
    Specifies character string or byte string processing.
    
-   SEPARATED BY sep
    Specifies a separator character or a separator byte in sep.
    
-   RESPECTING BLANKS
    Respects trailing blanks in dobj1 dobj2 ... or in the rows of itab.