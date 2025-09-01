  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  G

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET BADI, ABAPGET_BADI_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

GET BADI - Short Reference

[Reference](javascript:call_link\('abapget_badi.htm'\))

Syntax

GET BADI *{* badi *\[*FILTERS f1 = x1 f2 = x2 ...*\]* *}*
       *|* *{* badi TYPE (name)
              *\[* *{*FILTERS f1 = x1 f2 = x2 ...*}*
              *|* *{*FILTER-TABLE ftab*}**\]* *}*
              *\[*CONTEXT con*\]*.

Effect

Passes a [BAdI reference](javascript:call_link\('abenbadi_reference_glosry.htm'\) "Glossary Entry") to a [BAdI object](javascript:call_link\('abenbadi_object_glosry.htm'\) "Glossary Entry") to a [BAdI reference variable](javascript:call_link\('abenbadi_reference_variable_glosry.htm'\) "Glossary Entry").

Additions   

-   TYPE (name)
    Specifies the name of a BAdI dynamically.
-   FILTERS f1 = x1 f2 = x2 ...
    Specifies a setting x1, x2, ... for the filters f1, f2, ... of the [BAdIs](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry") when searching for BAdI implementations.
-   FILTER-TABLE ftab
    Specifies the filter setting dynamically in an internal table.
-   CONTEXT con
    Specifies a [BAdI context object](javascript:call_link\('abenbadi_context_object_glosry.htm'\) "Glossary Entry").