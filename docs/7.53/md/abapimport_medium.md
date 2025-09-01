  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) →  [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) → 

IMPORT - medium

[Quick Reference](javascript:call_link\('abapimport_shortref.htm'\))

Syntax

... *{* DATA BUFFER xstr *}*
  *|* *{* INTERNAL TABLE itab *}*
  *|* *{* MEMORY ID id *}*
  *|* *{* DATABASE      dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id *}*
  *|* *{* SHARED MEMORY dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id *}*
  *|* *{* SHARED BUFFER dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id *}* ...

Alternatives:

[1\. ... DATA BUFFER xstr](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INTERNAL TABLE itab](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... MEMORY ID id](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... DATABASE dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... SHARED MEMORY dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id](#!ABAP_ALTERNATIVE_5@5@)
[6\. ... SHARED BUFFER dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id](#!ABAP_ALTERNATIVE_6@6@)

Effect

The [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") to import can be taken from an elementary data object xstr or an internal table itab , the [ABAP Memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry"), a database table dbtab, or a cross-program memory area (if SHARED MEMORY or BUFFER is specified) .

Alternative 1

... DATA BUFFER xstr

Effect

If DATA BUFFER is specified, the data cluster is taken from the elementary data object xstr, which must be of the type xstring. The data object must contain a data cluster which was created using the DATA BUFFER addition of the [EXPORT](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) statement. Otherwise, a [runtime error](javascript:call_link\('abenrabax_import_from_database.htm'\)) occurs. Note that the data object cannot be initial.

Example

See the example for the addition [DATA BUFFER](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) of the statement EXPORT.

Alternative 2

... INTERNAL TABLE itab

Effect

If INTERNAL TABLE is specified, the data cluster is taken from the internal table itab. The first column of itab must have the data type [s](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) or [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) and the second column must have the type x. The only table category allowed for itab are [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") without [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). The internal table must contain a data cluster created using the INTERNAL TABLE addition of the [EXPORT](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) statement; otherwise, a [runtime error](javascript:call_link\('abenrabax_import_from_database.htm'\)) occurs. Note that the internal table cannot be empty.

Example

See the example for the addition [INTERNAL TABLE](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) of the statement EXPORT.

Alternative 3

... MEMORY ID id

Effect

If MEMORY is specified, the data cluster that was written to the [ABAP Memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") under the ID specified in id by the statement [EXPORT](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) is imported. id expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") [character-like data object](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry"). This object contains the ID of the data cluster, which is case-sensitive.

Note

Outside of classes, an [obsolete short form](javascript:call_link\('abapexport_import_mem_id_obsolete.htm'\)) exists, in which the addition ID can be omitted. This reads the data cluster saved by the statement [EXPORT](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) without an ID being specified.

Example

See the example for the addition [MEMORY ID](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) of the statement EXPORT.

Alternative 4

... DATABASE dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id

Effect

If DATABASE is specified, the data cluster that was written to the [export/import table](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") dbtab in the area ar and under the ID specified in id using the statement [EXPORT](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) is imported. The export/import table dbtab must be [set up](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) in the same way as described for the EXPORT statement. id expects a flat, character-like data object that contains the ID of the data cluster, which is case-sensitive. The two-character area ar must be specified directly.

After TO, a work area wa that has the same data type as the database table dbtab can be specified. When imported, the values of the database fields that are between the fields SRTF2 and CLUSTR are assigned to the components of wa with the same name. If the addition TO wa is not specified within classes, no data transport takes place in these components. If the addition TO wa is not specified outside of classes, but the statement [TABLES](javascript:call_link\('abaptables.htm'\)) is used to declare a [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") for the export/import table dbtab, the values of these database fields are assigned, when imported, to the components of the table work area dbtab with the same names.

If the export/import table dbtab is client-specific, a flat character-like field cl can be specified after the addition CLIENT. This field contains a [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry"). If the addition is not specified, the current client is used.

Notes

-   Since each client represents a self-contained unit, the addition CLIENT must not be used in application programs.
    
-   It is still possible to use a table work area implicitly outside of classes (instead of using TO wa explicitly). This should be considered an [obsolete short form](javascript:call_link\('abapexport_import_tables_area.htm'\)), however.
    
-   Only outside of classes can id still be replaced by the obsolete [obs\_id](javascript:call_link\('abapimport_obsolete_id.htm'\)).
    

Example

Reads the table exported under the name scarr\_tab and the ID SCARR into the area SC of the database table DEMO\_INDX\_BLOB (see the example for the addition [DATABASE](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) of the statement EXPORT) into the internal table itab. Here, those components that can be selected are assigned to the structure wa.

DATA:
  wa   TYPE demo\_indx\_blob,
  itab TYPE table OF scarr with EMPTY KEY.
IMPORT scarr\_tab = itab
  FROM DATABASE demo\_indx\_blob(sc)
  TO wa
  ID 'SCARR'.
cl\_demo\_output=>new(
)->write\_data( wa-timestamp
)->write\_data( wa-userid
)->display( itab ).

Alternative 5

... SHARED MEMORY dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id

Alternative 6

... SHARED BUFFER dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id

Effect

If SHARED MEMORY or SHARED BUFFER is specified, the data cluster is imported that was written (by the statement [EXPORT](javascript:call_link\('abapexport_data_cluster_medium.htm'\))) to the relevant application buffer of the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") in the area ar and using the ID specified in id. The system accesses a memory table of the application buffer whose row structure is defined by an export/import table dbtab. The [setup](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) of this table is described in the statement EXPORT. id expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like data object that contains the ID of the data cluster. The two-character area ar must be specified directly.

For the optional work area wa and client cl, the same applies as for imports from a database table.

Notes

-   The length of the key fields of the export/import table specified between the columns [RELID](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) and [SRTF2](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) cannot exceed 59 or 62 characters, depending on whether a client column exists.
    
-   Instead of using data clusters in the shared memory, it is best to use [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry"). Shared objects make it possible to store objects with complex dependencies, can be processed like normal objects, and enable multiple users to access the shared memory without any copying effort.
    

Example

Reads the table exported under the name scarr\_tab and the ID SCARR into the area SC of the cross-transaction application buffer (see the example for the addition [SHARED BUFFER](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) of the statement EXPORT) into the internal table itab. Here, those components that can be selected are assigned to the structure wa.

DATA:
  wa   TYPE demo\_indx\_blob,
  itab TYPE table OF scarr with EMPTY KEY.
IMPORT scarr\_tab = itab
  FROM SHARED BUFFER demo\_indx\_blob(sc)
  TO wa
  ID 'SCARR'.
cl\_demo\_output=>new(
)->write\_data( wa-timestamp
)->write\_data( wa-userid
)->display( itab ).