  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20shared%20memory%2C%20ABENSHARED_MEMORY_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

shared memory

Memory area of an [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry") in which the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") stores programs, program data, buffers, and so on. In the shared memory of the current AS instance, [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") can either access [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") in [cross-transactional application buffers](javascript:call_link\('abencrosstrans_app_buffer_glosry.htm'\) "Glossary Entry") or [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry") in the [shared objects memory](javascript:call_link\('abenshared_objects_memory_glosry.htm'\) "Glossary Entry"). The amount of shared memory that can be occupied by the different consumers is defined statically using [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry"). [Transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") ST02 (SAP Memory Management) shows the current occupancy of the shared memory and the corresponding profile parameters.

[→ More about](javascript:call_link\('abenmemory_organization.htm'\))