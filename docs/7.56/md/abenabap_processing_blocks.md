---
title: "Reporting Events"
description: |
  The following are event key words for reporting(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreporting_glosry.htm 'Glossary Entry') events: -   INITIALIZATION(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinitialization.htm), -   START-OF-SELECTION(https://he
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_processing_blocks.htm"
abapFile: "abenabap_processing_blocks.htm"
keywords: ["select", "do", "try", "data", "abenabap", "processing", "blocks"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenevent_blocks.htm) → 

Reporting Events

The following are event key words for [reporting](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreporting_glosry.htm "Glossary Entry") events:

-   [INITIALIZATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinitialization.htm),
-   [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapstart-of-selection.htm),
-   [GET node](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget-.htm) (obsolete, for logical databases only),
-   [END-OF-SELECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapend-of-selection.htm) (obsolete, for logical databases only).

Reporting events occur in a [predefined order](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreporting_process.htm) and only in [executable programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexecutable_program_glosry.htm "Glossary Entry") started with SUBMIT. In general, every executable program is started implicitly using SUBMIT. Only starts with regular transaction codes (no reporting transactions) or external calls of their procedures are not connected to a SUBMIT statement.

When an executable program is connected to a [logical database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), the assigned subroutine is [executed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_usage_executable.htm) in the [database program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_program_glosry.htm "Glossary Entry") before a reporting event is raised. in

Continue
[INITIALIZATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinitialization.htm)
[START-OF-SELECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapstart-of-selection.htm)