---
title: "RAP draft handling"
description: |
  A concept in RAP that allows the content of the transactional buffer(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm 'Glossary Entry') to be stored in intermediate storages (draft tables(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abe
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_draft_handling_glosry.htm"
abapFile: "abenrap_draft_handling_glosry.htm"
keywords: ["do", "if", "try", "abenrap", "draft", "handling", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAP draft handling, ABENRAP_DRAFT_HANDLING_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

RAP draft handling

A concept in RAP that allows the content of the [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") to be stored in intermediate storages ([draft tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendraft_table_glosry.htm "Glossary Entry")) in order to allow transactions to expand over different [ABAP sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_session_glosry.htm "Glossary Entry"). Introduced by the keyword [with draft](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_with_draft.htm) in the [behavior definition header](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") of a [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").