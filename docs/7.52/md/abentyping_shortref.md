  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  T

typing - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_syntax.htm)

Syntax

... *{* TYPE generic\_type *}*
  *|* *{* LIKE  <generic\_fs>*|*generic\_para *}*
  *|* *{* TYPE *{**\[*LINE OF*\]* complete\_type*}*
         *|* *{*REF TO *{*data*|*complete\_type*|*class*|*intf*}**}* *}*
  *|* *{* LIKE *{**\[*LINE OF*\]* dobj*}*
         *|* *{*REF TO dobj*}* *}* ...

Effect

Typing of field symbols or formal parameters.

Additions

-   TYPE
    Typed with reference to a data type.
    
-   LIKE
    Typed with reference to a data object, generic field symbol or formal parameter.
    
-   LINE OF
    Typed in relation to the row type of an internal table.
    
-   REF TO
    Typed as reference type.