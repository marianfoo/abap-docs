---
title: "database_program_glosry"
description: |
  database_program_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_program_glosry.htm"
abapFile: "abendatabase_program_glosry.htm"
keywords: ["select", "do", "try", "data", "abendatabase", "program", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

database program

[ABAP program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_glosry.htm "Glossary Entry") of a [logical database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), which provides other programs with data in a [table work area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_work_area_glosry.htm "Glossary Entry") and, in doing so, raises the [reporting event](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreporting_event_glosry.htm "Glossary Entry") [GET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget-.htm) with the statement [PUT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapput.htm). The functionality of a database program is implemented in [subroutines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubroutine_glosry.htm "Glossary Entry"), which are called by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") during the execution of an [executable program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexecutable_program_glosry.htm "Glossary Entry") or the [function module](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_module_glosry.htm "Glossary Entry") LDB\_PROCESS. The execution time of the individual subroutines is related to certain reporting and [selection screen events](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_event_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_program.htm)