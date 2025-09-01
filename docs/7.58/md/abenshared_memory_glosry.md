  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20shared%20memory%2C%20ABENSHARED_MEMORY_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

shared memory

Memory area of an [AS instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_instance_glosry.htm "Glossary Entry") in which the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") stores programs, program data, buffers, and so on. In the shared memory of the current AS instance, [ABAP programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_glosry.htm "Glossary Entry") can either access [data clusters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry") in [cross-transactional application buffers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") or [shared objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_objects_glosry.htm "Glossary Entry") in the [shared objects memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_objects_memory_glosry.htm "Glossary Entry"). The amount of shared memory that can be occupied by the different consumers is defined statically using [profile parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprofile_parameter_glosry.htm "Glossary Entry"). [Transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransaction_glosry.htm "Glossary Entry") ST02 (SAP Memory Management) shows the current occupancy of the shared memory and the corresponding profile parameters.

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_organization.htm)