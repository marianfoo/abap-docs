  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CONCATENATE%2C%20ABAPCONCATENATE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CONCATENATE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconcatenate.htm)

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