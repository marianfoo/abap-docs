  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXPORT%2C%20medium%2C%20ABAPEXPORT_DATA_CLUSTER_MEDIUM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXPORT, medium

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_shortref.htm)

Syntax

... *{* DATA BUFFER xstr *}*
  *|* *{* INTERNAL TABLE itab *}*
  *|* *{* MEMORY ID id *}*
  *|* *{* DATABASE      dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id *}*
  *|* *{* SHARED MEMORY dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id *}*
  *|* *{* SHARED BUFFER dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id *}* ...

Alternatives:

[1\. ... DATA BUFFER xstr](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INTERNAL TABLE itab](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... MEMORY ID id](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... DATABASE dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... SHARED MEMORY dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id](#!ABAP_ALTERNATIVE_5@5@)
[6\. ... SHARED BUFFER dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id](#!ABAP_ALTERNATIVE_6@6@)

Effect

The exported [data cluster](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry") can be stored in a byte string xstr, in an internal table itab, in the [ABAP memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_memory_glosry.htm "Glossary Entry"), in a database table dbtab, or in a shared memory area (SHARED MEMORY or BUFFER specified).

Hint

For optimization reasons, the binary content of the data cluster can depend on the way it is stored. When reconstructed, a data cluster stored in multiple parts is not necessarily the same as a data cluster stored as a single cluster. This means that a data cluster can usually only be imported using an [IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm) statement that matches the storage method. Especially, a data cluster stored in a structure for [export/import tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm) in multiple rows cannot necessarily be concatenated into a byte string that can be imported with FROM DATA BUFFER. Even data clusters stored in multiple rows can differ between storage methods. That means a data cluster stored with INTERNAL TABLE can differ from a data cluster for the same data in export/import tables, especially, if they were stored in different releases or for different [code pages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencodepage_glosry.htm "Glossary Entry").

Example

The program DEMO\_DATA\_CLUSTER demonstrates that the size of the data cluster is mostly independent of the way it is stored.

Alternative 1   

... DATA BUFFER xstr

Effect

If DATA BUFFER is specified, the data cluster is written to the elementary data object xstr, which must be of the type xstring. The previous content of xstr is overwritten completely.

Hints

-   A data object xstr filled by EXPORT TO DATA BUFFER contains exactly one data cluster.
-   A common application of the addition DATA BUFFER is to store the new data cluster in a field of a DDIC database table with the corresponding data type. In this case, compressing the data cluster using the addition [COMPRESSION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster.htm) should be considered, since, by default, compression as a medium is only activated if DATABASE is specified directly.
-   Another application is to pass data clusters to an xstring typed procedure parameter and evaluate it there. This can be used for example in RFC in order to pass large amounts of complex data to remote systems.
-   The content of a data object filled by EXPORT TO DATA BUFFER can only be evaluated using IMPORT FROM DATA BUFFER. In other evaluations, for example when comparing data clusters, the result is undefined. For example, the undefined content of [alignment gaps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenalignment_gap_glosry.htm "Glossary Entry") in structures can produce different data clusters with structures that otherwise have the same content.

Example

Export of an internal table to a byte string and storing it in a database table. After the byte string is read from the DDIC database table, the content of the data cluster can be imported into another internal table.

SELECT \*
       FROM scarr
       INTO TABLE @FINAL(itab).
DATA buffer TYPE xstring.
EXPORT itab = itab TO DATA BUFFER buffer.
MODIFY demo\_expressions FROM @(
  VALUE #( id = 'B' xstring1 = buffer ) ).
...
DATA jtab TYPE TABLE OF scarr WITH EMPTY KEY.
SELECT SINGLE xstring1
       FROM demo\_expressions
       WHERE id = 'B'
       INTO @buffer.
IF sy-subrc = 0.
  IMPORT itab = jtab FROM DATA BUFFER buffer.
ENDIF.
IF sy-subrc = 0.
  cl\_demo\_output=>display( jtab ).
ENDIF.

Alternative 2   

... INTERNAL TABLE itab

Effect

If INTERNAL TABLE is specified, the data cluster is stored in the internal table itab. The previous content of itab is overwritten completely.

The first column of itab must have the data type [s](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm) or [i](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm) and the second column must have the type x. Depending on the width of the second column, the data is stored across multiple table lines if necessary. The first column contains the length occupied in the second column. The only table category allowed for itab are [standard tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_table_glosry.htm "Glossary Entry") without [secondary table keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry").

Hints

-   An internal table itab filled by EXPORT TO INTERNAL TABLE contains exactly one data cluster.
-   The content of an internal table filled by EXPORT TO INTERNAL TABLE can only be evaluated using IMPORT FROM INTERNAL TABLE for the same reasons as for EXPORT TO DATA BUFFER.
-   The variant EXPORT TO DATA BUFFER is preferred over the variant EXPORT TO INTERNAL TABLE because it is easier to handle. An export to an internal table is beneficial only for very large data clusters and if the available [memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_consumption_2.htm) is almost used up. This is because its memory is requested block by block, while the memory for a string must always be available in one piece.

Example

Export of an internal table to a data cluster in an internal table and importing it into another internal table.

TYPES:
  BEGIN OF bline,
    id    TYPE i,
    clstr TYPE x LENGTH 100,
  END OF bline.
SELECT \*
       FROM scarr
       INTO TABLE @FINAL(itab).
DATA buffer TYPE TABLE OF bline WITH EMPTY KEY.
EXPORT itab = itab TO INTERNAL TABLE buffer.
...
DATA jtab TYPE TABLE OF scarr WITH EMPTY KEY.
IMPORT itab = jtab FROM INTERNAL TABLE buffer.
IF sy-subrc = 0.
  cl\_demo\_output=>display( jtab ).
ENDIF.

Alternative 3   

... MEMORY ID id

Effect

If MEMORY is specified, the data cluster is written into the [ABAP Memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_memory_glosry.htm "Glossary Entry") with the ID specified in id. id expects a [flat](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenflat_glosry.htm "Glossary Entry") [character-like data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") containing a case-sensitive ID with a maximum of 60 characters. Any existing data clusters with the same ID id are completely overwritten. The ID in id identifies a data cluster in the repository and can be read again using the same ID.

Hints

-   A data cluster in the ABAP memory is available to all programs within a [call sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencall_sequence_glosry.htm "Glossary Entry"), which makes it possible to pass data to called programs.
-   Outside of classes, an [obsolete short form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_import_mem_id_obsolete.htm) exists, in which the addition ID can be omitted. However, this is prone to errors, since all EXPORT statements without ID overwrite the same data cluster.

Example

Export of two text strings labeled P1 and P2 into the ABAP memory. After the statement [IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm) is executed, the content of the fields text1 and text2 is swapped.

FINAL(id) = 'TEXTS'.
DATA(text1) = \`Ike\`.
DATA(text2) = \`Tina\`.
EXPORT p1 = text1
       p2 = text2 TO MEMORY ID id.
...
IMPORT p1 = text2
       p2 = text1 FROM MEMORY ID id.

Alternative 4   

... DATABASE dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id

Effect

If DATABASE is specified, the data cluster is stored under the ID id in the DDIC database table dbtab and committed by the next [database commit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_commit_glosry.htm "Glossary Entry"). The DDIC database table must be an [export/import table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_import_table_glosry.htm "Glossary Entry") with a predefined [structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm). id expects a [flat](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenflat_glosry.htm "Glossary Entry") [character-like data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") containing an ID no longer than the key fields of the export/import table defined between the columns [RELID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm) and [SRTF2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm). The ID is case-sensitive.

The two-character area ar, which must be specified directly, divides the rows of the database table into multiple areas, so that data clusters with the same ID id can occur more than once in the DDIC database table.

After FROM, a work area wa can be specified that must have the same data type as the export/import table dbtab. In an export, the current values of the components of wa, which are located between the fields [SRTF2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm) and [CLUSTR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm), are written to all rows of the database table occupied by the data cluster. If the addition FROM wa is not specified within classes, no data transport takes place to these database fields. If the addition FROM wa is not specified outside of classes, but the statement [TABLES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptables.htm) is used to declare a [table work area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_work_area_glosry.htm "Glossary Entry") for the export/import table dbtab, the current values of the corresponding components of the table work area dbtab are written to the rows of the DDIC database table in the export.

If the export/import table dbtab is client-dependent, a flat character-like field cl can be specified after the addition CLIENT. This field contains a [client ID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_identifier_glosry.htm "Glossary Entry"). If the addition is not specified, the current client is used. The column MANDT of every row in the database table occupied by the data cluster is filled by this client ID in the export.

Hints

-   The statement EXPORT ... TO DATABASE sets a [database lock](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_lock_glosry.htm "Glossary Entry") until the next database commit or rollback. If used incorrectly, this can produce a [deadlock](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeadlock_glosry.htm "Glossary Entry").
-   Data clusters in databases are not converted when migrating from a non-Unicode database to a [Unicode system](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunicode_system_glosry.htm "Glossary Entry"). In a Unicode system, therefore, data clusters may sometimes exist that contain non-Unicode characters. These characters are automatically converted to Unicode characters in each import. When data is exported in Unicode systems, any Unicode characters in the stored data objects are stored in accordance with the relevant platform.
-   Since each client represents a self-contained unit, the addition CLIENT must not be used in application programs.
-   The statement EXPORT ... TO DATABASE does not support [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry").
-   It is still possible to use a table work area implicitly (instead of using FROM wa explicitly). This should be considered an [obsolete short form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_import_tables_area.htm), however.

Example

Exports an internal table itab with the name scarr\_tab and the ID SCARR to the range SC of the DDIC database table DEMO\_INDX\_BLOB. Here, the freely definable components are filled from the structure wa.

SELECT \*
       FROM scarr
       INTO TABLE @FINAL(itab).
FINAL(wa) = VALUE demo\_indx\_blob(
  timestamp = CONV #( sy-datum && sy-uzeit )
  userid    = sy-uname ).
EXPORT scarr\_tab = itab
  TO DATABASE demo\_indx\_blob(sc)
  FROM wa
  ID 'SCARR'.

Alternative 5   

... SHARED MEMORY dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id

Alternative 6   

... SHARED BUFFER dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id

Effect

If SHARED MEMORY or SHARED BUFFER is specified, the data cluster is stored in [cross-transaction application buffers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") of the [shared memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_memory_glosry.htm "Glossary Entry") on of the current [AS instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_instance_glosry.htm "Glossary Entry"). All programs of the same AS instance have access to these buffers.

The two application buffers differ in how the system behaves when reaching the memory limit. Both application buffers can be filled to an internal maximum limit, which can be adjusted using the [profile parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rsdb/esm/buffersize\_kb (SHARED MEMORY) and rsdb/obj/buffersize (SHARED BUFFER).

-   Before the maximum limit of the SHARED MEMORY buffer is reached, space must be freed using the statement [DELETE FROM SHARED MEMORY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_cluster.htm); otherwise a catchable exception is raised.
-   The buffer of SHARED BUFFER is emptied automatically by a displacement when it reaches the maximum limit. This procedure deletes the least used data objects from the buffer.

When storing the data, the system creates a memory table in the application buffer. The row structure of this table is defined using dbtab. For dbtab, a database table from the ABAP Dictionary must be specified that has the [structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm) of an [export/import table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_import_table_glosry.htm "Glossary Entry"). The row area ar, the work area wa, the optional client cl, and the ID id have the same significance for the memory table as when stored in a database table, with the exception that the length of the ID in id is limited to 59 or 62 characters depending on whether the addition CLIENT is specified or not.

Hints

-   When storing data in the shared memory, a reference is made to an export/import table, even if the data is not stored in the table itself, but in an appropriately structured memory table.
-   The length of the key fields of the addressed export/import table between the columns [RELID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm) and [SRTF2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm) cannot exceed 59 or 62 characters, depending on whether a client column exists.
-   When data is exported, any data clusters that have the same client cl, row area ar, and ID id are overwritten. If an existing data cluster is to be overwritten by a bigger one when using SHARED MEMORY, and this would exceed the memory limit, this only deletes the existing data cluster.
-   Instead of storing data clusters in the shared memory, it is best to use [shared objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_objects_glosry.htm "Glossary Entry"). Shared objects make it possible to store objects with complex dependencies, can be processed like regular objects, and enable multiple users to access the shared memory without any copying effort.

Example

Export of an internal table itab with the name scarr\_tab and the ID SCARR to the cross-transaction application buffer. The row structure of the memory table is the same as the export/import table DEMO\_INDX\_BLOB.

SELECT \*
       FROM scarr
       INTO TABLE @FINAL(itab).
FINAL(wa) = VALUE demo\_indx\_blob(
  timestamp = CONV #( sy-datum && sy-uzeit )
  userid    = sy-uname ).
EXPORT scarr\_tab = itab
  TO SHARED BUFFER demo\_indx\_blob(sc)
  FROM wa
  ID 'SCARR'.