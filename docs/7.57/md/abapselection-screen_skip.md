  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN, screen\_elements](javascript:call_link\('abapselection-screen_layout.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECTION-SCREEN, SKIP, ABAPSELECTION-SCREEN_SKIP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

SELECTION-SCREEN, SKIP

[Short Reference](javascript:call_link\('abapselection-screen_shortref.htm'\))

Syntax

SELECTION-SCREEN SKIP *\[*n*\]* *\[*[ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\))*\]*.

Effect

This statement creates n blank lines on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") below the lines already filled. The value n must be specified directly as a single-digit positive number. If n is not specified, a single blank line is created.

The [ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)) can only be used in the selection include of a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").