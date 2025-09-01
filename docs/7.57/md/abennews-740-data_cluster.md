  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740.htm) →  [News for Release 7.40, SP02](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-740_sp02.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Clusters in Release 7.40, SP02, ABENNEWS-740-DATA_CLUSTER, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Data Clusters in Release 7.40, SP02

[1\. Replacement of the System Class](#!ABAP_MODIFICATION_1@1@)
[2\. Exception Handling](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Replacement of the System Class

The abstract system class CL\_ABAP\_EXPIMP for [data clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") and its subclasses have been replaced by the new system class [CL\_ABAP\_EXPIMP\_UTILITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_expimp.htm) and its methods. The class CL\_ABAP\_EXPIMP should no longer be used.

Modification 2   

Exception Handling

-   If an SQL error occurs in the statements [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm), [IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm), or [DELETE FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_cluster.htm) for data clusters in database tables, the new exception class CX\_SY\_EXPIMP\_DB\_SQL\_ERROR can be used to handle the error.
-   If the string or internal table is empty in the statements [IMPORT FROM DATA BUFFER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_medium.htm) or [IMPORT FROM INTERNAL TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_medium.htm), the dedicated runtime errors IMPORT\_FROM\_DATA\_BUFFER\_EMPTY or IMPORT\_FROM\_INTTABLE\_EMPTY now occur.