  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) →  [Export/Import Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SQL Access to Export/Import Tables, ABENINDX_TYPE_TABLE_AND_SQL, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SQL Access to Export/Import Tables

[Export/import tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_import_table_glosry.htm "Glossary Entry") are relational databases defined in the ABAP Dictionary. This means that, in principle, SQL statements can also be used to access export/import tables.

To be able to use SQL statements on export/import tables effectively, the [special structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) of these tables must be respected.

It is not a good idea to perform reads or writes on the fields that manage the data cluster, such as CLUSTD or SRTF2 and CLUSTR. These fields contain the data cluster in an internal format and can only be handled correctly using the EXPORT TO DATABASE and IMPORT FROM DATABASE statements.

SQL statements should only be used if the corresponding combination of special data cluster statements would be too inefficient. The SQL statement INSERT should never be used on export/import tables.

ABAP SQL statements can, in certain circumstances, be used for administrative tasks on export/import tables, for which the data cluster specific statements are not suitable.

Example

An export/import table can be searched systematically for a particular data cluster using SELECT. Here, information in the freely definable columns can be evaluated.

Example

The following example deletes all data clusters of an area from the export/import tables DEMO\_INDX\_BLOB and DEMO\_INDX\_TABLE. Each time, all rows of the data cluster are to be deleted.

DELETE FROM demo\_indx\_blob  WHERE relid = '..'.
DELETE FROM demo\_indx\_table WHERE relid = '..'.

Example

The following example demonstrates how the name and area of a data cluster can be changed in the database tables DEMO\_INDX\_BLOB and DEMO\_INDX\_TABLE using UPDATE. Solving this problem using the special cluster statements would be considerably more time-consuming.

UPDATE demo\_indx\_blob
       SET   relid = @new\_relid,
             id    = @new\_id
       WHERE relid = @old\_relid AND
             id    = @old\_id.
UPDATE demo\_indx\_table
       SET   relid = @new\_relid,
             id    = @new\_id
       WHERE relid = @old\_relid AND
             id    = @old\_id.