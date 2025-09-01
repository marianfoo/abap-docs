---
title: "asynchronous_update_glosry"
description: |
  asynchronous_update_glosry - ABAP 7.53 language reference documentation
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasynchronous_update_glosry.htm"
abapFile: "abenasynchronous_update_glosry.htm"
keywords: ["update", "do", "try", "abenasynchronous", "glosry"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

asynchronous update

[Update](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_glosry.htm "Glossary Entry") during which [update function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") are executed with high priority in the update work process and the calling program does not wait for completion. Asynchronous updates are started using [COMMIT WORK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit.htm) without the addition AND WAIT and are executed in a separate [update session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_session_glosry.htm "Glossary Entry").