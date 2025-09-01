  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

REPLACE substring WITH - Quick reference

[Reference](javascript:call_link\('abapreplace_obsolete.htm'\))

Syntax

REPLACE substring WITH new INTO dobj
        *\[*IN *{*BYTE*|*CHARACTER*}* MODE*\]*
        *\[*LENGTH len*\]*.

Effect

Obsolete: Searches for a character string or byte string substring in the variable dobj and replaces it with the content of new.

Additions

-   IN *{*CHARACTER*|*BYTE*}* MODE
    Specifies character string or byte string processing.
    
-   LENGTH len
    Uses only the first len characters or bytes from substring for searches.