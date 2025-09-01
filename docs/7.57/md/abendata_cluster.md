  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Cluster, ABENDATA_CLUSTER, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

Data Cluster

A data cluster is a group of [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") grouped together for the purpose of storage in a [memory medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) that can only be accessed using ABAP statements.

-   The data objects are written to the memory medium by the statement [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)).
-   The data objects are extracted again by the statement [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)).
-   The statement [DELETE](javascript:call_link\('abapdelete_cluster.htm'\)) can be used to delete any memory medium.
-   The statement [FREE](javascript:call_link\('abapfree_memory.htm'\)) can be used to delete the ABAP Memory.
-   The statement [IMPORT DIRECTORY](javascript:call_link\('abapimport_directory.htm'\)) creates a list of all data objects that have previously been exported to a database table.

The statements for data clusters are complemented by the subclasses of the abstract system class [CL\_ABAP\_EXPIMP\_UTILITIES](javascript:call_link\('abencl_abap_expimp.htm'\)).

Hint

As well as the statements described here, some [obsolete accesses](javascript:call_link\('abendata_cluster_obsolete.htm'\)) to data clusters also still exist.

Continue
[EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\))
[IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\))
[IMPORT DIRECTORY](javascript:call_link\('abapimport_directory.htm'\))
[FREE MEMORY](javascript:call_link\('abapfree_memory.htm'\))
[DELETE FROM](javascript:call_link\('abapdelete_cluster.htm'\))
[System Class for Data Clusters](javascript:call_link\('abencl_abap_expimp.htm'\))