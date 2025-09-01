---
title: "program_group_glosry"
description: |
  program_group_glosry - ABAP 7.53 language reference documentation
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_group_glosry.htm"
abapFile: "abenprogram_group_glosry.htm"
keywords: ["do", "if", "try", "class", "data", "abenprogram", "group", "glosry"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

program group

Organizational unit of programs in the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry"). There is always one [main program group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_program_group_glosry.htm "Glossary Entry") and a number of optional [additional program groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadditional_prog_group_glosry.htm "Glossary Entry"). Each program group has a [main program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_program_glosry.htm "Glossary Entry"). An additional program group is always created when [function groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_group_glosry.htm "Glossary Entry") and [class pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_pool_glosry.htm "Glossary Entry") are loaded. If, however, using a program that is not a function group or class pool causes the program to be loaded, it is loaded into the program group of the consumer. All programs of a program group share the [interface work areas](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") declared using [TABLES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables.htm), [NODES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnodes.htm), and [COMMON PART](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_common.htm). Within a program group, [CALL SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_screen.htm) can only be used to call the [dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") of the main program.

[→ More](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session.htm)