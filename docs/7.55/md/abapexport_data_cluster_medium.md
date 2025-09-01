  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) →  [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) → 

EXPORT, medium

[Short Reference](javascript:call_link\('abapexport_shortref.htm'\))

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

The exported [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") can be stored in a byte string xstr, in an internal table itab , in the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry"), in a database table dbtab, or in a shared memory area (SHARED MEMORY or BUFFER specified).

Hint

For optimization reasons, the binary content of the data cluster can be dependent on the way it is saved. When reconstructed, a data cluster saved in multiple parts is not necessarily the same as a data cluster saved as a single cluster. This means that a data cluster can usually only be imported using an [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) statement that matches the save method.

Example

The program DEMO\_DATA\_CLUSTER demonstrates that the size of the data cluster is mostly independent of the way it is saved.

Alternative 1

... DATA BUFFER xstr

Effect

If DATA BUFFER is specified, the data cluster is written to the elementary data object xstr, which has to be of the type xstring. The previous content of xstr is overwritten completely.

Hints

-   A data object xstr filled by EXPORT TO DATA BUFFER contains exactly one data cluster.

-   A common application of the addition DATA BUFFER is to store the new data cluster in a field of a DDIC database table with the corresponding data type. In this case, consider compressing the data cluster using the addition [COMPRESSION](javascript:call_link\('abapexport_data_cluster.htm'\)), since, by default, compression as a medium is only activated if DATABASE is specified directly.

-   The content of a data object filled by EXPORT TO DATA BUFFER can only be evaluated using IMPORT FROM DATA BUFFER. In other evaluations, for example when comparing data clusters, the result is not defined. For example, the undefined content of [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") in structures can produce different data clusters with structures that otherwise have the same content.

Example

Exports an internal table to a byte string and saves it to a database table. After the byte string is read from the DDIC database table, the content of the data cluster can be imported to another internal table.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(itab).
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

The first column of itab must have the data type [s](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) or [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) and the second column must have the type x. Depending on the width of the second column, the data is stored across multiple table lines if necessary. The first line contains the length occupied in the second line. The only table category allowed for itab are [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") without [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry").

Hints

-   An internal table itab filled by EXPORT TO INTERNAL TABLE contains exactly one data cluster.

-   The content of an internal table filled by EXPORT TO INTERNAL TABLE can only be evaluated using IMPORT FROM INTERNAL TABLE for the same reasons as for EXPORT TO DATA BUFFER.

-   The variant EXPORT TO DATA BUFFER is preferred over the variant EXPORT TO INTERNAL TABLE because it is easier to handle. An export to an internal table is of benefit only for very large data clusters and if the available [memory](javascript:call_link\('abenmemory_consumption_2.htm'\)) is almost used up. This is because its memory is requested block by block, while the memory for a string must always be completely available.

Example

Exports an internal table to a data cluster in an internal table and imports it into another internal table.

TYPES:
  BEGIN OF bline,
    id    TYPE i,
    clstr TYPE x LENGTH 100,
  END OF bline.
SELECT \*
       FROM scarr
       INTO TABLE @DATA(itab).
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

If MEMORY is specified, the data cluster is written in to [ABAP Memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") with the ID specified in id. id expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") [character-like data object](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry") containing a case-sensitive ID with a maximum of 60 characters. Any existing data clusters with the same ID id are completely overwritten. The ID in id identifies a data cluster in the repository and can be read again using the same identification.

Hints

-   A data cluster in the ABAP memory is available to all programs within a [call sequence](javascript:call_link\('abencall_sequence_glosry.htm'\) "Glossary Entry"), which makes it possible to pass data to called programs.

-   Outside of classes, an [obsolete short form](javascript:call_link\('abapexport_import_mem_id_obsolete.htm'\)) exists, in which the addition ID can be omitted. However, this is prone to errors, since all EXPORT statements without ID overwrite the same data cluster.
    

Example

Exports two text strings labeled P1 and P2 into the ABAP memory. After the statement [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) is executed, the contents of the fields text1 and text2 are swapped.

DATA(id) = 'TEXTS'.
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

If DATABASE is specified, the data cluster with the ID id is stored in the DDIC database table dbtab and committed by the next [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"). The DDIC database table must be an [export/import table](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") with a predefined [structure](javascript:call_link\('abenexport_data_cluster_indx.htm'\)). id expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") [character-like data object](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry") containing an ID no longer than the key fields of the export/import table defined between the columns [RELID](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) and [SRTF2](javascript:call_link\('abenexport_data_cluster_indx.htm'\)). The ID is case-sensitive.

The two-character area ar, which must be specified directly, splits up the rows of the database table into multiple areas, so that data clusters with the same ID id can exist more than once in the DDIC database table.

After FROM, a work area wa can be specified that must have the same data type as the export/import table dbtab. In an export, the current values of the components of wa, which are located between the fields [SRTF2](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) and [CLUSTR](javascript:call_link\('abenexport_data_cluster_indx.htm'\)), are written to all rows occupied by the data cluster of the database table. If the addition FROM wa is not specified within classes, no data transport takes place in these database fields. If the addition FROM wa is not specified outside of classes, but the statement [TABLES](javascript:call_link\('abaptables.htm'\)) is used to declare a [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") for the export/import table dbtab, the current values of the corresponding components of the table work area dbtab are written to the rows of the DDIC database table in the export.

If the export/import table dbtab is client-dependent, a flat character-like field cl can be specified after the addition CLIENT. This field contains a [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry"). If the addition is not specified, the current client is used. The column MANDT of every row in the database table occupied by the data cluster is filled by this client ID in the export.

Hints

-   The statement EXPORT TO DATABASE sets a [database lock](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry") until the next database commit or rollback. If used incorrectly, this can produce a [deadlock](javascript:call_link\('abendeadlock_glosry.htm'\) "Glossary Entry").

-   Data clusters in databases are not converted when migrating from a non-Unicode database to a [Unicode system](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"). In a Unicode system, therefore, data clusters may sometimes exist that contain non-Unicode characters. These characters are automatically converted to Unicode characters in each import. When data is exported in Unicode systems, any Unicode characters in the stored data objects are saved in accordance with the relevant platform.

-   It is still possible to use a table work area implicitly (instead of using FROM wa explicitly). This should be considered an [obsolete short form](javascript:call_link\('abapexport_import_tables_area.htm'\)), however.

-   Since each client represents a self-contained unit, the addition CLIENT must not be used in application programs.
    

Example

Exports an internal table itab with the name scarr\_tab and the ID SCARR to the range SC of the DDIC database table DEMO\_INDX\_BLOB. Here, the freely definable components are filled from the structure wa.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(itab).
DATA(wa) = VALUE demo\_indx\_blob(
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

If SHARED MEMORY or SHARED BUFFER is specified, the data cluster is stored in [cross-transaction application buffers](javascript:call_link\('abencrosstrans_app_buffer_glosry.htm'\) "Glossary Entry") of the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") on of the current [AS instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry"). All programs of the same AS instance have access to these buffers.

The two application buffers differ in respect to how the system behaves when reaching the memory limit. Both application buffers can be filled to an internal maximum limit, which can be adjusted using the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rsdb/esm/buffersize\_kb (SHARED MEMORY) and rsdb/obj/buffersize (SHARED BUFFER).

-   Before the maximum limit of the SHARED MEMORY buffer is reached, space must be freed using the statement [DELETE FROM SHARED MEMORY](javascript:call_link\('abapdelete_cluster.htm'\)); otherwise a catchable exception is raised.

-   The buffer of SHARED BUFFER is cleared automatically by a displacement when it reaches the maximum limit. This procedure deletes the least used data objects from the buffer.

When storing the data, the system creates a memory table in the application buffer. The row structure of this table is defined using dbtab. For dbtab, a database table from ABAP Dictionary must be specified that has the same [structure](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) as an [export/import table](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry"). The row area ar, the work area wa, the optional client cl, and the ID id have the same significance for the memory table as if saved in a database table, with the exception that the length of the ID in id is limited to 59 or 62 characters depending on whether the addition CLIENT is specified or not.

Hints

-   When storing data in the shared memory, reference is made to an export/import table, even if the data is not stored in the table itself, but in an appropriately structured memory table.
    

-   The length of the key fields of the addressed export/import table between the columns [RELID](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) and [SRTF2](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) cannot exceed 59 or 62 characters, depending on whether a client column exists.
    

-   When data is exported, any data clusters that have the same client cl, row area ar, and ID id are overwritten. If an existing data cluster is to be overwritten by a bigger one when using SHARED MEMORY, and this would exceed the memory limit, this only deletes the existing data cluster.
    

-   Instead of saving data clusters in the shared memory, it is best to use [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry"). Shared objects make it possible to store objects with complex dependencies, can be processed like normal objects, and enable multiple users to access the shared memory without any copying effort.

Example

Exports an internal table itab with the name scarr\_tab and the ID SCARR to the cross-transaction application buffer. The row structure of the memory table is the same as the export/import table DEMO\_INDX\_BLOB.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(itab).
DATA(wa) = VALUE demo\_indx\_blob(
  timestamp = CONV #( sy-datum && sy-uzeit )
  userid    = sy-uname ).
EXPORT scarr\_tab = itab
  TO SHARED BUFFER demo\_indx\_blob(sc)
  FROM wa
  ID 'SCARR'.