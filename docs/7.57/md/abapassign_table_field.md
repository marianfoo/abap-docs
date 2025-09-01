  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ASSIGN, TABLE FIELD, ABAPASSIGN_TABLE_FIELD, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

ASSIGN, TABLE FIELD

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_shortref.htm)

Obsolete Syntax

ASSIGN TABLE FIELD (name) TO <fs>.

Effect

This variant of the [dynamic specification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_mem_area_dynamic_dobj.htm) of the memory area in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm) is only possible outside of classes and without specifying [casting\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_casting.htm) and [range\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_range.htm) explicitly. When executing the statement, the name in the character-like data object name is searched for in the [table work areas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_work_area_glosry.htm "Glossary Entry") declared using [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm) in the current [program group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_group_glosry.htm "Glossary Entry"). The name in name must be specified in uppercase letters.

Hint

Neither inline declarations [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield-symbol_inline.htm) nor the addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign_else_unassign.htm) can be used in this obsolete variant of the ASSIGN statement.