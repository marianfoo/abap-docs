  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

cross-transaction application buffer

Application buffer in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"). ABAP programs access cross-transaction application buffers by specifying [SHARED BUFFER](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) or [SHARED MEMORY](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) as medium with the statements [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) and [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) for [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry"). The two categories differ in respect to how the system behaves when the memory limit is reached.