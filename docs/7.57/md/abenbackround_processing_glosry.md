---
title: "backround_processing_glosry"
description: |
  backround_processing_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbackround_processing_glosry.htm"
abapFile: "abenbackround_processing_glosry.htm"
keywords: ["do", "if", "try", "abenbackround", "processing", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: background processing, ABENBACKROUND_PROCESSING_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

background processing

Execution of [ABAP programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_glosry.htm "Glossary Entry") with defined settings in the background, that is, with no on-screen user dialog. In contrast to [dialog processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_processing_glosry.htm "Glossary Entry"), the execution process is predefined when the program is started. An [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is scheduled in [ABAP Editor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_editor_glosry.htm "Glossary Entry") or after calling System → Services → Reporting via the menu Program → Execute → Background for automatic execution or is called in the background using [SUBMIT VIA JOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_via_job.htm). Background processing takes place in a separate [background session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_session_glosry.htm "Glossary Entry") and at least one background [work process](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwork_process_glosry.htm "Glossary Entry") must be configured.