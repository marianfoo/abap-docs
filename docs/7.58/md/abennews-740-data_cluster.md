  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-740.htm) →  [News for ABAP Release 7.40, SP02](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-740_sp02.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Clusters%20in%20ABAP%20Release%207.40%2C%20SP02%2C%20ABENNEWS-740-DATA_CLUSTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

Data Clusters in ABAP Release 7.40, SP02

[1\. Replacement of the System Class](#!ABAP_MODIFICATION_1@1@)
[2\. Exception Handling](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Replacement of the System Class

The abstract system class CL\_ABAP\_EXPIMP for [data clusters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry") and its subclasses have been replaced by the new system class [CL\_ABAP\_EXPIMP\_UTILITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_expimp.htm) and its methods. The class CL\_ABAP\_EXPIMP should no longer be used.

Modification 2   

Exception Handling

The following improvements were made:

-   If an SQL error occurs in the statements [EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster.htm), [IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm), or [DELETE FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_cluster.htm) for data clusters in database tables, the new exception class CX\_SY\_EXPIMP\_DB\_SQL\_ERROR can be used to handle the error.
-   If the string or internal table is empty in the statements [IMPORT FROM DATA BUFFER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_medium.htm) or [IMPORT FROM INTERNAL TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_medium.htm), the dedicated runtime errors IMPORT\_FROM\_DATA\_BUFFER\_EMPTY or IMPORT\_FROM\_INTTABLE\_EMPTY now occur.