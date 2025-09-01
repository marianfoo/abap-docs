  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Assignments](javascript:call_link\('abenobsolete_assignments.htm'\)) → 

ASSIGN, TABLE FIELD

[Short Reference](javascript:call_link\('abapassign_shortref.htm'\))

Obsolete Syntax

ASSIGN TABLE FIELD (name).

Effect

This variant of the [dynamic specification](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) of the memory area in the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) is only possible outside of classes and without specifying [casting\_spec](javascript:call_link\('abapassign_casting.htm'\)) and [range\_spec](javascript:call_link\('abapassign_range.htm'\)) explicitly. When executing the statement, the name in the character-like data object name is searched for in the [table work areas](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") declared using [TABLES](javascript:call_link\('abaptables.htm'\)) in the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry"). The name in name must be specified in uppercase letters.

Hint

Table work areas are designed to be interfaces to classic dynpros only.