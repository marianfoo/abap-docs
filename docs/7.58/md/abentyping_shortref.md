  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20typing%2C%20ABENTYPING_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

typing - Short Reference

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
    Types with reference to the line type of an internal table.
-   REF TO
    Types as reference type.