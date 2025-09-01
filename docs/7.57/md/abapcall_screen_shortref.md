  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL SCREEN, ABAPCALL_SCREEN_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

CALL SCREEN - Short Reference

[Reference](javascript:call_link\('abapcall_screen.htm'\))

Syntax

CALL SCREEN dynnr
            *\[*STARTING AT col1 lin1
            *\[*ENDING   AT col2 lin2*\]**\]*.

Effect

Calls the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") of the number specified in dynnr and starts a [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry") defined by the [next dynpros](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") of the called dynpro.

Additions   

-   STARTING AT col1 lin1
    Opens a modal dialog box at the position specified in col1 and lin1.
-   ENDING AT col2 lin2
    Defines the lower right corner of the modal dialog box at the position specified in col2 and lin2.