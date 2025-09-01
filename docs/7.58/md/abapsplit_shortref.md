  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SPLIT%2C%20ABAPSPLIT_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SPLIT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsplit.htm)

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