  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SPLIT - Quick reference

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
    Specifies the target fields either as a list result1 result2 ... or as rows of the internal table result\_tab.
    
-   IN *{*CHARACTER*|*BYTE*}* MODE
    Specifies character string or byte string processing.