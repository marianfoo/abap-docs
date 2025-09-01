  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: TRANSLATE, ABAPTRANSLATE_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

TRANSLATE - Short Reference

[Reference](javascript:call_link\('abaptranslate.htm'\))

Syntax

TRANSLATE dobj *{*TO *{*UPPER*|*LOWER*}* CASE*}*
             *|* *{*USING mask*}*.

Effect

Translates the content of a data object dobj.

Additions   

-   [TO *{*UPPER*|*LOWER*}* CASE](javascript:call_link\('abaptranslate.htm'\))
    Translates all lowercase letters to uppercase letters, or vice versa.
-   [USING mask](javascript:call_link\('abaptranslate.htm'\))
    Translates characters in accordance with the rule specified by character pairs in the data object mask.