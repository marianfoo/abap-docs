---
title: "IMPORT, medium"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_shortref.htm) Syntax ...  DATA BUFFER xstr    INTERNAL TABLE itab    MEMORY ID id    DATABASE      dbtab(ar) TO wa CLIENT cl ID id    SHARED MEMORY dbtab(ar)
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_medium.htm"
abapFile: "abapimport_medium.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abapimport", "medium"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster.htm) →  [IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IMPORT%2C%20medium%2C%20ABAPIMPORT_MEDIUM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IMPORT, medium

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_shortref.htm)

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

The [data cluster](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry") to be imported can be taken from an elementary data object xstr or an internal table itab, the [ABAP Memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_memory_glosry.htm "Glossary Entry"), a database table dbtab, or a cross-program memory area (SHARED MEMORY or BUFFER specified).

Alternative 1   

... DATA BUFFER xstr

Effect

If DATA BUFFER is specified, the data cluster is taken from the elementary data object xstr, which must be of the type xstring. The data object must contain a data cluster that was created using the DATA BUFFER addition of the [EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) statement. Otherwise, a [runtime error](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrabax_import_from_database.htm) occurs. The data object must not be initial.

Example

See the example for the addition [DATA BUFFER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) of the statement EXPORT.

Alternative 2   

... INTERNAL TABLE itab

Effect

If INTERNAL TABLE is specified, the data cluster is taken from the internal table itab. The first column of itab must have the data type [s](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm) or [i](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm) and the second column must have the type [x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_byte.htm). The only table category allowed for itab are [standard tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_table_glosry.htm "Glossary Entry") without [secondary table keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The internal table must contain a data cluster created using the INTERNAL TABLE addition of the [EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) statement; otherwise, a [runtime error](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrabax_import_from_database.htm) occurs. The internal table must not be empty.

Example

See the example for the addition [INTERNAL TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) of the statement EXPORT.

Alternative 3   

... MEMORY ID id

Effect

If MEMORY is specified, the data cluster that was written to the [ABAP Memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_memory_glosry.htm "Glossary Entry") under the ID specified in id by the statement [EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) is imported. id expects a [flat](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenflat_glosry.htm "Glossary Entry") [character-like data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharlike_data_object_glosry.htm "Glossary Entry"). This object contains the ID of the data cluster, which is case-sensitive.

Hint

Outside of classes, an [obsolete short form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_import_mem_id_obsolete.htm) exists, in which the addition ID can be omitted. This reads the data cluster stored using the statement [EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) without specifying an ID.

Example

See the example for the addition [MEMORY ID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) of the statement EXPORT.

Alternative 4   

... DATABASE dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id

Effect

If DATABASE is specified, the data cluster that was written to the [export/import table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_import_table_glosry.htm "Glossary Entry") dbtab in the area ar and under the ID specified in id using the statement [EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) is imported. The export/import table dbtab must be [structured](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm) as described in the EXPORT statement. id expects a flat, character-like data object that contains the ID of the data cluster, which is case-sensitive. The two-character area ar must be specified directly.

After TO, a work area wa that has the same data type as the database table dbtab can be specified. When imported, the values of the database fields that are between the fields SRTF2 and CLUSTR are assigned to the components of wa with the same name. If the addition TO wa is not specified within classes, no data transport takes place in these components. If the addition TO wa is not specified outside of classes, but the statement [TABLES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptables.htm) is used to declare a [table work area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_work_area_glosry.htm "Glossary Entry") for the export/import table dbtab, the values of these database fields are assigned to the components of the table work area dbtab with the same names during the import.

If the export/import table dbtab is client-dependent, a flat character-like field cl can be specified after the addition CLIENT. This field contains a [client ID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_identifier_glosry.htm "Glossary Entry"). If the addition is not specified, the current client is used.

Hints

-   Since each client represents a self-contained unit, the addition CLIENT should not be used in application programs.
-   It is still possible to use a table work area implicitly outside of classes instead of using TO wa explicitly. This should be considered an [obsolete short form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_import_tables_area.htm), however.
-   Only outside of classes can id still be replaced by the obsolete specification [obs\_id](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_obsolete_id.htm).
-   The statement IMPORT ... FROM DATABASE does not support [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry").

Example

Reading of the table exported under the name scarr\_tab and the ID SCARR into the area SC of the database table DEMO\_INDX\_BLOB (see the example for the addition [DATABASE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) of the statement EXPORT) into the internal table itab. Here, the freely selectable components are assigned to the structure wa.

DATA:
  wa   TYPE demo\_indx\_blob,
  itab TYPE table OF scarr with EMPTY KEY.
IMPORT scarr\_tab = itab
  FROM DATABASE demo\_indx\_blob(sc)
  TO  wa
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

If SHARED MEMORY or SHARED BUFFER is specified, the data cluster is imported that was written to the relevant application buffer of the [shared memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_memory_glosry.htm "Glossary Entry") using the statement [EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) in the area ar and using the ID specified in id. The system accesses a memory table of the application buffer whose row structure is defined by an export/import table dbtab. The [setup](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm) of this table is described in the statement EXPORT. id expects a [flat](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object that contains the ID of the data cluster. The two-character area ar must be specified directly.

For the optional specification of the work area wa and client cl, the same applies as to imports from a database table.

Hints

-   The length of the key fields of the export/import table defined between the columns [RELID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm) and [SRTF2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm) must not exceed 59 or 62 characters, depending on whether a client column exists.
-   Instead of using data clusters in the shared memory, it is best to use [shared objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_objects_glosry.htm "Glossary Entry"). Shared objects make it possible to store objects with complex dependencies, can be processed like regular objects, and enable multiple users to access the shared memory without any copying effort.

Example

Reading of the table exported under the name scarr\_tab and the ID SCARR into the area SC of the cross-transaction application buffer (see the example for the addition [SHARED BUFFER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) of the statement EXPORT) into the internal table itab. Here, the freely selectable components are assigned to the structure wa.

DATA:
  wa   TYPE demo\_indx\_blob,
  itab TYPE table OF scarr with EMPTY KEY.
IMPORT scarr\_tab = itab
  FROM SHARED BUFFER demo\_indx\_blob(sc)
  TO  wa
  ID 'SCARR'.
cl\_demo\_output=>new(
)->write\_data( wa-timestamp
)->write\_data( wa-userid
)->display( itab ).