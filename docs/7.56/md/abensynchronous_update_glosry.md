---
title: "synchronous_update_glosry"
description: |
  synchronous_update_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensynchronous_update_glosry.htm"
abapFile: "abensynchronous_update_glosry.htm"
keywords: ["update", "do", "try", "abensynchronous", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

synchronous update

[Update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_glosry.htm "Glossary Entry") in which [update function modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") of high priority are executed in the update work process whereby the calling program waits for completion. Synchronous updates are started via [COMMIT WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit.htm) with the addition AND WAIT and are executed in a separate [update session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_session_glosry.htm "Glossary Entry").