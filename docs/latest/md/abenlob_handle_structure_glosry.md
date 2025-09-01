---
title: "LOB handle structure"
description: |
  The structure(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_glosry.htm 'Glossary Entry') of a special work area(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwork_area_glosry.htm 'Glossary Entry') to support streaming(https://help.sap.com/d
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm"
abapFile: "abenlob_handle_structure_glosry.htm"
keywords: ["do", "if", "try", "data", "types", "abenlob", "handle", "structure", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOB%20handle%20structure%2C%20ABENLOB_HANDLE_STRUCTURE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOB handle structure

The [structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_glosry.htm "Glossary Entry") of a special [work area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwork_area_glosry.htm "Glossary Entry") to support [streaming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstreaming_glosry.htm "Glossary Entry") and [locators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocator_glosry.htm "Glossary Entry") for [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") in [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry"). LOB handle structures have the same components as [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_db_table_glosry.htm "Glossary Entry"), [DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_glosry.htm "Glossary Entry"), or [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"). However, there is at least one component which is assigned to a LOB, which is not a [string](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_glosry.htm "Glossary Entry") but instead a [LOB handle component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry"). A LOB handle structure can be defined component by component with [ABAP statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_statement_glosry.htm "Glossary Entry") or in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"), or it can be derived by referencing a structure that contains [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm)