  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

shared memory

Memory area of an [AS instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_instance_glosry.htm "Glossary Entry") in which the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") stores programs, program data, buffers, and so on. In the shared memory of the current AS instance, [ABAP programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_glosry.htm "Glossary Entry") can either access [data clusters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_cluster_glosry.htm "Glossary Entry") in [cross-transactional application buffers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") or [shared objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshared_objects_glosry.htm "Glossary Entry") in the [shared objects memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshared_objects_memory_glosry.htm "Glossary Entry"). The amount of shared memory that can be occupied by the different consumers is defined statically using [profile parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprofile_parameter_glosry.htm "Glossary Entry"). [Transaction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransaction_glosry.htm "Glossary Entry") ST02 (SAP Memory Management) shows the current occupancy of the shared memory and the corresponding profile parameters.

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmemory_organization.htm)