  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  L

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LEAVE%20TO%20LIST-PROCESSING%2C%20ABAPLEAVE_TO_LIST-PROCESS_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LEAVE TO LIST-PROCESSING - Short Reference

[Reference](javascript:call_link\('abapleave_to_list-processing.htm'\))

Syntax

LEAVE TO LIST-PROCESSING *\[*AND RETURN TO SCREEN dynnr*\]*.

Effect

Calls list processing when the current [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") is exited.

Additions   

-   AND RETURN TO SCREEN dynnr
    Specifies a dynpro dynnr to which the runtime framework returns when list processing is exited.