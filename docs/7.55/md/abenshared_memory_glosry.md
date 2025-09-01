  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

shared memory

Memory area of an [AS instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") in which the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") stores programs, program data, buffers, and so on. In the shared memory of the current AS instance, [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") can either access [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") in [cross-transactional application buffers](javascript:call_link\('abencrosstrans_app_buffer_glosry.htm'\) "Glossary Entry") or [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry") in the [shared objects memory](javascript:call_link\('abenshared_objects_memory_glosry.htm'\) "Glossary Entry"). The amount of shared memory that can be occupied by the different consumers is defined statically using [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry"). [Transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") ST02 (SAP Memory Management) shows the current occupancy of the shared memory and the corresponding profile parameters.

[→ More about](javascript:call_link\('abenmemory_organization.htm'\))