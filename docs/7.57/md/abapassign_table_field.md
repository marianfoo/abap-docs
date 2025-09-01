  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Assignments](javascript:call_link\('abenobsolete_assignments.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ASSIGN, TABLE FIELD, ABAPASSIGN_TABLE_FIELD, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

ASSIGN, TABLE FIELD

[Short Reference](javascript:call_link\('abapassign_shortref.htm'\))

Obsolete Syntax

ASSIGN TABLE FIELD (name) TO <fs>.

Effect

This variant of the [dynamic specification](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) of the memory area in the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) is only possible outside of classes and without specifying [casting\_spec](javascript:call_link\('abapassign_casting.htm'\)) and [range\_spec](javascript:call_link\('abapassign_range.htm'\)) explicitly. When executing the statement, the name in the character-like data object name is searched for in the [table work areas](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") declared using [TABLES](javascript:call_link\('abaptables.htm'\)) in the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry"). The name in name must be specified in uppercase letters.

Hint

Neither inline declarations [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)) nor the addition [ELSE UNASSIGN](javascript:call_link\('abapassign_else_unassign.htm'\)) can be used in this obsolete variant of the ASSIGN statement.