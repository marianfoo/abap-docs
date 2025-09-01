  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  C

CONCATENATE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconcatenate.htm)

Syntax

CONCATENATE *{*dobj1 dobj2 ...*}**|**{*LINES OF itab*}*
            INTO result
            *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
            *\[*SEPARATED BY sep*\]*
            *\[*RESPECTING BLANKS*\]*.

Effect

Concatenates the content of dobj1 dobj2 ... or the lines of an internal table itab and assigns the result result.

Additions

-   IN *{*CHARACTER*|*BYTE*}* MODE
    Specifies character string or byte string processing.
-   SEPARATED BY sep
    Specifies a separator character or a separator byte in sep.
-   RESPECTING BLANKS
    Respects trailing blanks in dobj1 dobj2 ... or in the lines of itab.