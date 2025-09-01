  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

group key

Value of any [data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_type_glosry.htm "Glossary Entry") that is constructed for each read line in a [group key expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengroup_key_expression_glosry.htm "Glossary Entry") when grouping [internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_table_glosry.htm "Glossary Entry") using [LOOP AT itab ... GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm) or [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_groups_of.htm). All table lines for which the same value is produced are assigned to each group key. In [group level processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengroup_level_processing_glosry.htm "Glossary Entry") for internal tables, the group key is the content of all columns to the left of a column specified after [AT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapat_itab.htm).