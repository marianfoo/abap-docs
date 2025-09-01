---
title: "synchronous_update_glosry"
description: |
  synchronous_update_glosry - ABAP 7.52 language reference documentation
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensynchronous_update_glosry.htm"
abapFile: "abensynchronous_update_glosry.htm"
keywords: ["update", "do", "try", "abensynchronous", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

synchronous update

[Update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_glosry.htm "Glossary Entry") where [updating function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") of high priority are executed in the update work process. The calling program waits for completion. Synchronous updates are started using [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm) with the addition AND WAIT and are executed in a separate [update session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_session_glosry.htm "Glossary Entry").