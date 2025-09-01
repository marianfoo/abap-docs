  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

shared memory

Memory area of an [AS Instance](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapplication_server_glosry.htm "Glossary Entry"), used by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") as a repository for programs, program data, buffers, and so on. In the shared memory of the current AS Instance, [ABAP programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_glosry.htm "Glossary Entry") can either access [data clusters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster_glosry.htm "Glossary Entry") in [cross-transactional application buffers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") or [shared objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_objects_glosry.htm "Glossary Entry") in the [shared objects memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_objects_memory_glosry.htm "Glossary Entry"). The maximum amount of shared memory that can be occupied by the different consumers is defined statically using [profile parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprofile_parameter_glosry.htm "Glossary Entry"). [Transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction_glosry.htm "Glossary Entry") ST02 (SAP Memory Management) shows the current occupancy of the shared memory and the corresponding profile parameters.

[→ More](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmemory_organization.htm)