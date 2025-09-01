  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  S

SPLIT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsplit.htm)

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