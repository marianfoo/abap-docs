  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SPLIT, ABAPSPLIT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

SPLIT - Short Reference

[Reference](javascript:call_link\('abapsplit.htm'\))

Syntax

SPLIT dobj AT sep INTO
      *{* *{*result1 result2 ...*}* *|* *{*TABLE result\_tab*}* *}*
      *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Effect

Splits a character string or byte string dobj.

Additions   

-   AT sep
    Specifies the separator sequence sep where the split is made.
-   INTO *{* *{*result1 result2 ...*}* *|* *{*TABLE result\_tab*}* *}*
    Specifies the target fields either as a list result1 result2 ... or as lines of the internal table result\_tab.
-   IN *{*CHARACTER*|*BYTE*}* MODE
    Specifies character string or byte string processing.