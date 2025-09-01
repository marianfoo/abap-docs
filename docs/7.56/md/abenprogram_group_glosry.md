---
title: "program_group_glosry"
description: |
  program_group_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_group_glosry.htm"
abapFile: "abenprogram_group_glosry.htm"
keywords: ["do", "if", "try", "class", "data", "abenprogram", "group", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

program group

Organizational unit of programs in the [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry"). There is always one [main program group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmain_program_group_glosry.htm "Glossary Entry") and multiple [additional program groups](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadditional_prog_group_glosry.htm "Glossary Entry"). Each program group has a [main program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmain_program_glosry.htm "Glossary Entry"). An additional program pool is always created when [function pools](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_pool_glosry.htm "Glossary Entry") and [class pools](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_pool_glosry.htm "Glossary Entry") are loaded. If, however, using a program that is not a function pool or class pool causes the program to be loaded, it is loaded into the program group of the consumer. All programs of a program group share the [interface work areas](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") declared using [TABLES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables.htm), [NODES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnodes.htm), and [COMMON PART](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_common.htm). Within a program group, [CALL SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_screen.htm) can call the [dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") of the main program only.

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session.htm)