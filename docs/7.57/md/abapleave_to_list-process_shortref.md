  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  L

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LEAVE TO LIST-PROCESSING, ABAPLEAVE_TO_LIST-PROCESS_SHORTREF, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

LEAVE TO LIST-PROCESSING - Short Reference

[Reference](javascript:call_link\('abapleave_to_list-processing.htm'\))

Syntax

LEAVE TO LIST-PROCESSING *\[*AND RETURN TO SCREEN dynnr*\]*.

Effect

Calls list processing when the current [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") is exited.

Additions   

-   AND RETURN TO SCREEN dynnr
    Specifies a dynpro dynnr to which the runtime framework returns when list processing is exited.