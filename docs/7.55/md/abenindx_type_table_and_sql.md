  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) →  [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) →  [Export/Import Tables](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) → 

SQL access to export/import tables

[Export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") are relational databases defined in ABAP Dictionary. This means that, in principle, SQL statements can also be used to access export/import tables.

To use SQL statements on export/import tables effectively, the [special structure](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) of these tables must be respected.

It is not a good idea to perform reads or writes on the fields that manage the data cluster, such as CLUSTD or SRTF2 and CLUSTR. These fields contain the data cluster in an internal format and can only be handled correctly using the EXPORT TO DATABASE and IMPORT FROM DATABASE statements.

SQL statements should only be used if the corresponding combination of specific data cluster statements would be too inefficient. The SQL statement INSERT should never be used on export/import tables.

ABAP SQL statements can, in certain circumstances, be used for administrative operations on export/import tables, for which the data cluster specific statements are not suitable.

Example

An export/import table can be searched systematically for a particular data cluster using SELECT; at the same time, information in the freely definable columns can be evaluated.

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