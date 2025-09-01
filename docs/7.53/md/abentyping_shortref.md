  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

typing - Quick reference

[Reference](javascript:call_link\('abentyping_syntax.htm'\))

Syntax

... *{* TYPE generic\_type *}*
  *|* *{* LIKE  <generic\_fs>*|*generic\_para *}*
  *|* *{* TYPE *{**\[*LINE OF*\]* complete\_type*}*
         *|* *{*REF TO *{*data*|*complete\_type*|*class*|*intf*}**}* *}*
  *|* *{* LIKE *{**\[*LINE OF*\]* dobj*}*
         *|* *{*REF TO dobj*}* *}* ...

Effect

Types field symbols or formal parameters.

Additions

-   TYPE
    Types with reference to a data type.
    
-   LIKE
    Types with reference to a data object, generic field symbol, or formal parameter.
    
-   LINE OF
    Types with reference to the row type of an internal table.
    
-   REF TO
    Types as reference type.