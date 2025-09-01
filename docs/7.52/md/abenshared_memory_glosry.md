---
title: "shared_memory_glosry"
description: |
  shared_memory_glosry - ABAP 7.52 language reference documentation
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_memory_glosry.htm"
abapFile: "abenshared_memory_glosry.htm"
keywords: ["do", "if", "try", "data", "abenshared", "memory", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

shared memory

Memory area of an [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry"), used by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") as a repository for programs, program data, buffers, and so on. In the shared memory of the current application server, [ABAP programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_glosry.htm "Glossary Entry") can either access [data clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_glosry.htm "Glossary Entry") in [cross-transactional application buffers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") or [shared objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_objects_glosry.htm "Glossary Entry") in the [shared objects memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_objects_memory_glosry.htm "Glossary Entry"). The maximum amount of shared memory that can be occupied by the different users is defined statically using [profile parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry"). [Transaction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction_glosry.htm "Glossary Entry") ST02 (SAP Memory Management) shows the current occupancy of the shared memory and the corresponding profile parameters.

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_organization.htm)