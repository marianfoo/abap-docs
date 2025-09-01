  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  R

REPLACE substring WITH - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapreplace_obsolete.htm)

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