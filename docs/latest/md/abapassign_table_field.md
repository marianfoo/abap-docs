  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ASSIGN%2C%20TABLE%20FIELD%2C%20ABAPASSIGN_TABLE_FIELD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ASSIGN, TABLE FIELD

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_shortref.htm)

Obsolete Syntax

ASSIGN TABLE FIELD (name) TO <fs>.

Effect

This variant of the [dynamic specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_dobj.htm) of the memory area in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign.htm) is only possible outside of classes and without specifying [casting\_spec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_casting.htm) and [range\_spec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_range.htm) explicitly. When executing the statement, the name in the character-like data object name is searched for in the [table work areas](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_work_area_glosry.htm "Glossary Entry") declared using [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm) in the current [program group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_group_glosry.htm "Glossary Entry"). The name in name must be specified in uppercase letters.

Hint

Neither inline declarations [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield-symbol_inline.htm) nor the addition [ELSE UNASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_else_unassign.htm) can be used in this obsolete variant of the ASSIGN statement.