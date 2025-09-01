  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) → 

System Class for Data Clusters

As well as the statements [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) and [DELETE](javascript:call_link\('abapdelete_cluster.htm'\)) it is possible, if necessary, to use the methods of the class CL\_ABAP\_EXPIMP\_UTILITIES. These enhance the functions of the statements for [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry").

-   They allow data clusters to be accessed in the individual storage media, of which only parts of the identifier id or of the area ar are specified, by determining the complete key.

-   Data clusters can be deleted generically using partly specified keys.

-   The release-dependent internal format of data clusters can be converted.

-   Data objects saved using [DATA BUFFER](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) can be created dynamically when read.

Note

In application programs, the parameter CLIENT of the methods of the classes for accessing data clusters in database tables or in the shared memory in [application programs](javascript:call_link\('abenapplication_program_glosry.htm'\) "Glossary Entry") of [application clients](javascript:call_link\('abenapplication_client_glosry.htm'\) "Glossary Entry") cannot be given a value. These programs should only work with data from the current client.

Example

The program DEMO\_IMPORT\_CREATE\_DATA demonstrates how target objects can be created dynamically and filled using the method DBUF\_IMPORT\_CREATE\_DATA of the class CL\_ABAP\_EXPIMP\_UTILITIES.