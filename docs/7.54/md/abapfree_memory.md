  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) → 

FREE MEMORY

[Quick Reference](javascript:call_link\('abapfree_memory_shortref.htm'\))

Syntax

FREE MEMORY ID id.

Effect

This statement has the same effect as the statement

[DELETE FROM MEMORY ID id.](javascript:call_link\('abapdelete_cluster.htm'\))

The addition ID can be omitted outside of classes. In this case, all [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") are deleted from the [ABAP Memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry").

Note

The use of FREE MEMORY without the addition ID is [obsolete](javascript:call_link\('abapfree_mem_id_obsolete.htm'\)). While the statement EXPORT without addition ID involves only one data cluster, in this case all clusters are involved. It is safest to use the statement DELETE FROM, because here the addition ID is mandatory.

Example

Deletes the data cluster with the ID demo from the ABAP memory.

DATA(dobj) = \`xxx\`.
EXPORT contents = dobj TO MEMORY ID 'demo'.
IMPORT contents = dobj FROM MEMORY ID 'demo'.
ASSERT sy-subrc = 0.
FREE MEMORY ID 'demo'.
IMPORT contents = dobj FROM MEMORY ID 'demo'.
ASSERT sy-subrc = 4.