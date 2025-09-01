  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FREE MEMORY, ABAPFREE_MEMORY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

FREE MEMORY

[Short Reference](javascript:call_link\('abapfree_memory_shortref.htm'\))

Syntax

FREE MEMORY ID id.

Effect

This statement has the same effect as the statement

[DELETE FROM MEMORY ID id.](javascript:call_link\('abapdelete_cluster.htm'\))

The addition ID can be omitted outside of classes. In this case, all [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") are deleted from the [ABAP Memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry").

Hint

The use of FREE MEMORY without the addition ID is [obsolete](javascript:call_link\('abapfree_mem_id_obsolete.htm'\)). While the statement EXPORT without addition ID affects only one data cluster, in this case all clusters are affected. It is safest to use the statement DELETE FROM, because here the addition ID is mandatory.

Example

Deletion of the data cluster with the ID demo from the ABAP memory.

DATA(dobj) = \`xxx\`.
EXPORT content = dobj TO MEMORY ID 'demo'.
IMPORT content = dobj FROM MEMORY ID 'demo'.
ASSERT sy-subrc = 0.
FREE MEMORY ID 'demo'.
IMPORT content = dobj FROM MEMORY ID 'demo'.
ASSERT sy-subrc = 4.