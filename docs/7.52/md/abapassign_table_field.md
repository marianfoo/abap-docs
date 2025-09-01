  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_assignments.htm) → 

ASSIGN - TABLE FIELD

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_shortref.htm)

Obsolete Syntax

ASSIGN TABLE FIELD (name).

Effect

This variant of the [dynamic specification](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_dynamic_dobj.htm) of the memory area in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) is only possible outside of classes and without specifying [casting\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm) and [range\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_range.htm) explicitly. When executing the statement, the name in the character-like data object name is searched for in the [table work areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_work_area_glosry.htm "Glossary Entry") declared using [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm) in the current [program group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_group_glosry.htm "Glossary Entry"). The name in name must be specified in uppercase letters.

Note

Table work areas are designed to be interfaces to classical dynpros only.