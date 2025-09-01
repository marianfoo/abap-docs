---
title: "Example"
description: |
  An export/import table can be searched systematically for a particular data cluster using SELECT. Here, information in the freely definable columns can be evaluated. Example The following example deletes all data clusters of an area from the export/import tables DEMO_INDX_BLOB and DEMO_INDX_TABL
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenindx_type_table_and_sql.htm"
abapFile: "abenindx_type_table_and_sql.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "data", "abenindx", "type", "table", "and", "sql"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexport_data_cluster.htm) →  [Export/Import Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexport_data_cluster_indx.htm) → 

SQL access to export/import tables

[Export/import tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexport_import_table_glosry.htm "Glossary Entry") are relational databases defined in the ABAP Dictionary. This means that, in principle, SQL statements can also be used to access export/import tables.

To be able to use SQL statements on export/import tables effectively, the [special structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexport_data_cluster_indx.htm) of these tables must be respected.

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