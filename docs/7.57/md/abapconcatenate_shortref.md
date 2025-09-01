  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONCATENATE, ABAPCONCATENATE_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

CONCATENATE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconcatenate.htm)

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