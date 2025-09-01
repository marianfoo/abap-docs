  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN - screen\_elements](javascript:call_link\('abapselection-screen_layout.htm'\)) → 

SELECTION-SCREEN - SKIP

[Quick Reference](javascript:call_link\('abapselection-screen_shortref.htm'\))

Syntax

SELECTION-SCREEN SKIP *\[*n*\]* *\[*[ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\))*\]*.

Effect

This statement creates n blank lines on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") among the lines already filled. The value n must be specified directly as a single-digit positive number. If n is not specified, a single blank line is created.

The additions [ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)) can only be used in the selection include of a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").