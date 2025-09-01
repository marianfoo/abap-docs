---
title: "asynchronous_update_glosry"
description: |
  asynchronous_update_glosry - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasynchronous_update_glosry.htm"
abapFile: "abenasynchronous_update_glosry.htm"
keywords: ["update", "do", "if", "try", "abenasynchronous", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asynchronous%20update%2C%20ABENASYNCHRONOUS_UPDATE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

asynchronous update

[Update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_glosry.htm "Glossary Entry") in which [update function modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") are executed with high priority in the update work process, whereby the calling program does not wait for termination. Asynchronous updates are started by [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm) without the addition AND WAIT and are executed in a separate [update session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_session_glosry.htm "Glossary Entry").