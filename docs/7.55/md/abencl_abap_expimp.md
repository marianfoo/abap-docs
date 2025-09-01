  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_cluster.htm) → 

System Class for Data Clusters

As well as the statements [IMPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_data_cluster.htm) and [DELETE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_cluster.htm) it is possible, if necessary, to use the methods of the class CL\_ABAP\_EXPIMP\_UTILITIES. These enhance the functions of the statements for [data clusters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_cluster_glosry.htm "Glossary Entry").

-   They allow data clusters to be accessed in the individual storage media, of which only parts of the identifier id or of the area ar are specified, by determining the complete key.

-   Data clusters can be deleted generically using partly specified keys.

-   The release-dependent internal format of data clusters can be converted.

-   Data objects saved using [DATA BUFFER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_medium.htm) can be created dynamically when read.

Hint

In application programs, the parameter CLIENT of the methods of the classes for accessing data clusters in database tables or in the shared memory in [application programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_program_glosry.htm "Glossary Entry") of [application clients](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_client_glosry.htm "Glossary Entry") cannot be given a value. These programs should only work with data from the current client.

Example

The program DEMO\_IMPORT\_CREATE\_DATA demonstrates how target objects can be created dynamically and filled using the method DBUF\_IMPORT\_CREATE\_DATA of the class CL\_ABAP\_EXPIMP\_UTILITIES.