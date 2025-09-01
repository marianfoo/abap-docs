  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) → 

Data Cluster

A data cluster is a group of [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") grouped together for the purpose of storage in a [memory medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) that can only be edited using ABAP statements.

-   The data objects are written to the memory medium by the statement [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)).

-   The data objects are extracted again by the statement [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)).

-   The statement [DELETE](javascript:call_link\('abapdelete_cluster.htm'\)) can be used to delete any memory medium.

-   The statement [FREE](javascript:call_link\('abapfree_memory.htm'\)) can be used to delete the ABAP Memory.

-   The statement [IMPORT DIRECTORY](javascript:call_link\('abapimport_directory.htm'\)) creates a list of all data objects that have previously been exported to a database table.

The statements for data clusters are complemented by the subclasses of the abstract system class [CL\_ABAP\_EXPIMP\_UTILITIES](javascript:call_link\('abencl_abap_expimp.htm'\)).

Note

As well as the statements described here, some [obsolete accesses](javascript:call_link\('abendata_cluster_obsolete.htm'\)) to data clusters also still exist.

Continue
[EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\))
[IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\))
[IMPORT DIRECTORY](javascript:call_link\('abapimport_directory.htm'\))
[FREE MEMORY](javascript:call_link\('abapfree_memory.htm'\))
[DELETE FROM](javascript:call_link\('abapdelete_cluster.htm'\))
[System Class for Data Clusters](javascript:call_link\('abencl_abap_expimp.htm'\))