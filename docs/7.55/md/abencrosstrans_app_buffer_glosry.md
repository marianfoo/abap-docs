  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

cross-transaction application buffer

Application buffer in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"). ABAP programs access cross-transaction application buffers by specifying [SHARED BUFFER](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) or [SHARED MEMORY](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) as the medium with the statements [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) and [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) for [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry"). The difference between the two types lies in the system behavior when the memory limit is reached.