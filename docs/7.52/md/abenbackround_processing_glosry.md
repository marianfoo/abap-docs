---
title: "backround_processing_glosry"
description: |
  backround_processing_glosry - ABAP 7.52 language reference documentation
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbackround_processing_glosry.htm"
abapFile: "abenbackround_processing_glosry.htm"
keywords: ["do", "try", "abenbackround", "processing", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

background processing

Execution of [ABAP programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_glosry.htm "Glossary Entry") with predetermined settings in the background, that is, with no on-screen user dialog. In contrast to [dialog processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_processing_glosry.htm "Glossary Entry"), the execution flow is fixed when the program is started. An [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is scheduled in [ABAP Editor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_editor_glosry.htm "Glossary Entry") or after choosing System → Services → Reporting from the menu Program → Execute → Background for automatic execution or is called in the background using [SUBMIT VIA JOB](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_via_job.htm). Background processing takes place in a separate [background session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbatch_session_glosry.htm "Glossary Entry") and at least one background [work process](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwork_process_glosry.htm "Glossary Entry") must be configured.