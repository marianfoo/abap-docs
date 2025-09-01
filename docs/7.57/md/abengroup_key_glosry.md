---
title: "group_key_glosry"
description: |
  group_key_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengroup_key_glosry.htm"
abapFile: "abengroup_key_glosry.htm"
keywords: ["loop", "do", "if", "try", "data", "internal-table", "abengroup", "key", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: group key, ABENGROUP_KEY_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

group key

Value of any [data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_type_glosry.htm "Glossary Entry") that is constructed for each read line in a [group key expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengroup_key_expression_glosry.htm "Glossary Entry") when grouping [internal tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_table_glosry.htm "Glossary Entry") using [LOOP AT itab ... GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm) or [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_groups_of.htm). All table lines for which the same value is produced are assigned to each group key. In [group level processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengroup_level_processing_glosry.htm "Glossary Entry") for internal tables, the group key is the content of all columns to the left of a column specified after [AT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm).