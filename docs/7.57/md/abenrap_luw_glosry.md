---
title: "RAP LUW"
description: |
  The LUW in RAP is the sum of all operations and workflows that are used to transfer data from one consistent state to another. A RAP LUW begins with creating new data on the RAP transactional buffer(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm 'Glo
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_luw_glosry.htm"
abapFile: "abenrap_luw_glosry.htm"
keywords: ["do", "if", "try", "data", "abenrap", "luw", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAP LUW, ABENRAP_LUW_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

RAP LUW

The LUW in RAP is the sum of all operations and workflows that are used to transfer data from one consistent state to another. A RAP LUW begins with creating new data on the [RAP transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") or by retrieving data from the database to the transactional buffer. It is terminated with [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit_entities.htm) or [ROLLBACK ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback_entities.htm).