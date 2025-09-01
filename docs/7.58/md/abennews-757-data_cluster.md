  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.57](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-757.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Clusters%20in%20ABAP%20Release%207.57%2C%20ABENNEWS-757-DATA_CLUSTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Data Clusters in ABAP Release 7.57

Modification

Import of Type n into Type c

The statement [IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm) now allows assignments of data of type [n to data objects of type c](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_parameterlist.htm) if they have the same length. This change might lead to incompatible behavior if handling of the former exception leads to different results than the new behavior.