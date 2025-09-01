# ABAP - Keyword Documentation / ABAP - Programming Language / Processing External Data / Data Cluster / EXPORT

Included pages: 8



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abapexport_data_cluster.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster.htm)
- [abapexport_data_cluster_param.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_param.htm)
- [abapexport_data_cluster_medium.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_medium.htm)
- [abenexport_data_cluster_indx.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexport_data_cluster_indx.htm)
- [abenindx_type_table_and_sql.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenindx_type_table_and_sql.htm)
- [abapexport_internal.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_internal.htm)
- [abenrabax_export_to_database.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrabax_export_to_database.htm)

**Bundle Contains**: 7 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.749Z

---

### abapexport_data_cluster.htm

> **📖 Official SAP Documentation**: [abapexport_data_cluster.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) → 

EXPORT

[Short Reference](javascript:call_link\('abapexport_shortref.htm'\))

Syntax

EXPORT [parameter\_list](javascript:call_link\('abapexport_data_cluster_param.htm'\)) TO [medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) *\[*COMPRESSION *{*ON*|*OFF*}**\]*.

Addition:

[... COMPRESSION *{*ON*|*OFF*}*](#!ABAP_ONE_ADD@1@)

Effect

This statement saves a [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") defined using [parameter\_list](javascript:call_link\('abapexport_data_cluster_param.htm'\)) in a memory medium [medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\)). The addition COMPRESSION can be used to specify whether the data is stored in the cluster in compressed form. A data cluster can be retrieved from the memory medium using the statement [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) and deleted using [DELETE FROM](javascript:call_link\('abapdelete_cluster.htm'\)).

All data objects are archived according to the current [byte order](javascript:call_link\('abenbyte_order_glosry.htm'\) "Glossary Entry") (endian) and character-like data objects according to the [character format](javascript:call_link\('abenchar_representation_glosry.htm'\) "Glossary Entry") of the current [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). The ID of the data cluster indicates which byte order and character format have been used during the export. When the data cluster is imported using the IMPORT statement, this ID is evaluated and the data is converted to the current byte order and character format.

A data cluster can have a maximum of 2 GB. Any attempts to export more than 2 GB raise a catchable exception of the class CX\_SY\_COMPRESSION\_ERROR. If a different resource bottleneck occurs earlier, however, its related exception can be raised first.

Hint

See also [Classes for Data Clusters](javascript:call_link\('abencl_abap_expimp.htm'\)).

Example

Exports an internal table to a [suitable](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) DDIC database table DEMO\_INDX\_BLOB and imports the content from the data cluster to another internal table.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(itab).
EXPORT scarr = itab TO DATABASE demo\_indx\_blob(sc) ID 'DEMO'.
...
DATA jtab LIKE itab.
IMPORT scarr = jtab FROM DATABASE demo\_indx\_blob(sc) ID 'DEMO'.
cl\_demo\_output=>display( jtab ).

Addition

... COMPRESSION *{*ON*|*OFF*}*

Effect

This addition specifies whether or not the data in the data cluster is compressed. By default, compression is deactivated for all memory media apart from [medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) database tables. If compression is required, it must be switched on using ON. If stored in a database table, compression is switched on by default and is only switched off if OFF is specified.

Hints

-   When a data cluster is imported using [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)), the system automatically recognizes whether or not the data is compressed.

-   Compression saves space, but is more time-consuming.

Example

Exports the compressed result of an XML serialization of an object to the ABAP memory and then imports it.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_serializable\_object.
    DATA attr TYPE i.
    METHODS constructor IMPORTING p TYPE i.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD constructor.
    attr = p.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(oref) = NEW cls( 123 ).
  CALL TRANSFORMATION id SOURCE oref = oref
                         RESULT XML DATA(xml).
  EXPORT xml = xml TO MEMORY ID 'DEMO' COMPRESSION ON.
  ...
  CLEAR oref.
  IMPORT xml = xml FROM MEMORY ID 'DEMO'.
  CALL TRANSFORMATION id SOURCE XML xml
                         RESULT oref = oref.
  cl\_demo\_output=>display( oref->attr ).

Continue
[EXPORT, parameter\_list](javascript:call_link\('abapexport_data_cluster_param.htm'\))
[EXPORT, medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\))
[Export/Import Tables](javascript:call_link\('abenexport_data_cluster_indx.htm'\))
[EXPORT, Internal Additions](javascript:call_link\('abapexport_internal.htm'\))
[Exceptions in EXPORT](javascript:call_link\('abenrabax_export_to_database.htm'\))



**📖 Source**: [abapexport_data_cluster.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster.htm)

### abapexport_data_cluster_param.htm

> **📖 Official SAP Documentation**: [abapexport_data_cluster_param.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_param.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) →  [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) → 

EXPORT, parameter\_list

[Short Reference](javascript:call_link\('abapexport_shortref.htm'\))

Syntax

... *{*p1 = dobj1 p2 = dobj2 ...*}*
  *|* *{*p1 FROM dobj1 p2 FROM dobj2 ...*}*
  *|* (ptab) ...

Additions:

[1\. ... p1 = dobj1 p2 = dobj2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... p1 FROM dobj1 p2 FROM dobj2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... (ptab)](#!ABAP_ADDITION_3@3@)

Effect

A [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") can be defined statically by a list in the form p1 = dobj1 p2 = dobj2 ... or p1 FROM dobj1  p2 FROM dobj2 ... and dynamically by specifying a parenthesized internal table ptab. Here the system searches for the data saved in the data cluster under the names p1, p2, ... and so on. The case of the names in the data clusters depends on how they are specified in the ABAP runtime environment. If specified statically (b1, b2, ...), uppercase is used; if specified dynamically in rtab, the case used there is used.

If the data cluster is too big for the memory, an exception is raised.

Addition 1

... p1 = dobj1 p2 = dobj2 ...

Addition 2

... p1 FROM dobj1 p2 FROM dobj2 ...

Effect

In static cases, the content of the data objects dobj is stored under the names p1, p2, ... in the cluster. The name of a parameter p1, p2, ... is transformed to uppercase and can have a maximum of 255 characters. If specified, p1 = dobj1 p2 = dobj2 ... and p1 FROM dobj1  p2 FROM dobj2 ... have the same meaning. All data types can be used except reference types for the data object dobj or data types that contain reference types as components. If a data object dobj is an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), not the header line, but the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") is addressed. When an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") is used, the enumerated value is flagged as an enumerated type and saved in the basic type.

Programming Guideline

[Alternative Language Constructs](javascript:call_link\('abenalternative_langu_guidl.htm'\) "Guideline")

Hints

-   The use of \= is recommended rather than FROM, since \= is also used by other ABAP statements to pass data.

-   Objects referenced by reference variables can first be serialized using the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) and then exported. In instances of classes, the class must implement the interface IF\_SERIALIZABLE\_OBJECT here.

-   Outside of classes, and if the name does not contain a specified addressing such as an [instance component selector](javascript:call_link\('abeninstance_comp_selector_glosry.htm'\) "Glossary Entry") or an [offset/length specification](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry"), the [obsolete short form](javascript:call_link\('abapexport_import_obsolete.htm'\)) dobj1 dobj2... can be used in the static variant. Here, all data objects are implicitly stored under their name in the data cluster.
    

Example

Exports three numbers to a data cluster of the DDIC database table DEMO\_INDX\_BLOB and imports the same three numbers to the components of a structure.

EXPORT num1 = 1 num2 = 2 num3 = 3
       TO DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
...
DATA:
  BEGIN OF wa,
    num1 TYPE i,
    num2 TYPE i,
    num3 TYPE i,
  END OF wa.
IMPORT num1 = wa-num1 num2 = wa-num2 num3 = wa-num3
  FROM DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
cl\_demo\_output=>display( wa ).

Addition 3

... (ptab)

Effect

In the dynamic case, the parameter list is specified in an index table ptab with two columns. These columns can have any name and have to be of the type "character". The first column in ptab must contain the names of the parameters, and the second must contain the data objects (not case-sensitive). The names of the data objects are used exactly as specified in the first column of ptab. If the second column is initial, then the name of the parameter in the first column has to match the name of a data object. The data object is then stored under its name in the cluster. If the first column of ptab is initial, an uncatchable exception is raised.

Hints

-   Data objects whose names contain lowercase letters in the data cluster cannot be read using the static variant of the [specified parameters](javascript:call_link\('abapimport_parameterlist.htm'\)) of the statement IMPORT.

-   Outside of classes, a single-column internal table for parameter\_list can also be used. This is the dynamic variant of the [obsolete short form](javascript:call_link\('abapexport_import_obsolete.htm'\)) used to save the data objects listed in the table to the data cluster (implicitly using their names).

Example

Exports data dynamically to a data cluster on the DDIC database table DEMO\_INDX\_BLOB. The names in the first column of ptab contain lowercase letters, which means that the data can only be imported by being specified dynamically. The second column, on the other hand, is not case-sensitive.

TYPES:
  BEGIN OF pline,
    name TYPE string,
    dobj TYPE string,
  END OF pline,
  ptab TYPE TABLE OF pline WITH EMPTY KEY.
DATA:
  num1 TYPE i VALUE 1,
  num2 TYPE i VALUE 2,
  num3 TYPE i VALUE 3.
DATA(ptab) = VALUE ptab(
  ( name = \`Num1\` dobj = \`NUM1\` )
  ( name = \`Num2\` dobj = \`NUM2\` )
  ( name = \`Num3\` dobj = \`NUM3\` ) ).
EXPORT (ptab)
       TO DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
...
DATA:
  BEGIN OF wa,
    num1 TYPE i,
    num2 TYPE i,
    num3 TYPE i,
  END OF wa.
ptab = VALUE ptab(
  ( name = \`Num1\` dobj = \`wa-num1\` )
  ( name = \`Num2\` dobj = \`wa-num2\` )
  ( name = \`Num3\` dobj = \`wa-num3\` ) ).
IMPORT (ptab)
  FROM DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
cl\_demo\_output=>display( wa ).



**📖 Source**: [abapexport_data_cluster_param.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_param.htm)

### abapexport_data_cluster_medium.htm

> **📖 Official SAP Documentation**: [abapexport_data_cluster_medium.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_medium.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abapexport_data_cluster_medium.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_medium.htm)

### abenexport_data_cluster_indx.htm

> **📖 Official SAP Documentation**: [abenexport_data_cluster_indx.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexport_data_cluster_indx.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) →  [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) → 

Export/Import Tables

When storing [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") in database tables and application buffers of the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"), database tables with one of the following structures must be specified: These database tables are known as [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry").

-   [Structure for Data Clusters in One Row](#abenexport-data-cluster-indx-1--------structure-for-data-clusters-in-multiple-rows---@ITOC@@ABENEXPORT_DATA_CLUSTER_INDX_2)

Hints

-   The structure for data clusters in a single row is the newer variant and is recommended for new database tables.

-   Status information about the actual data cluster, such as date, user, or language, can be saved in custom fields.

-   Notes about how to process [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") using SQL can be found under [SQL Access to Export/Import Tables](javascript:call_link\('abenindx_type_table_and_sql.htm'\)).

Structure for Data Clusters in One Row

In export/import table structures like this, the data cluster is saved in a single row in a column CLUSTD of the type [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) ([BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")).

-   If the data objects are saved as client-dependent objects, the first field must be a key field with the name MANDT of type CLNT for the client. This component does not apply if objects are saved as client-independent objects.

-   The next field must be a key field with the name RELID of type CHAR and with length 2. The area saved here is specified as ar.

-   This must be followed by at least one key field of type CHAR with any name. The identifier specified in id in the length of the key field is saved here. If more than one key field is defined, the identifier is divided among them according to the respective length of the key fields. If the total length of the key fields is not sufficient for the identifier, it is truncated on the right side.

-   Any number of fields with any name and type can follow, which are filled with values by specifying FROM wa. The addition TO wa of the statement IMPORT reads these fields again.

-   The final field must be called CLUSTD and associated with the data element INDX\_CLUST\_BLOB with the dictionary type [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)). This column is given the actual data cluster.

Hint

The total length of all [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) (meaning the total length of MANDT, RELID, the key fields for the ID, and SRTF2) is limited to 900 bytes, like every AS ABAP [database](javascript:call_link\('abenddic_database_tables.htm'\)) defined in ABAP Dictionary. If the table content is transported by specifying a key, a limit of 120 bytes is required here too.

Example

The database table DEMO\_INDX\_BLOB is an example of how data clusters are saved in a single row.

Structure for Data Clusters in Multiple Rows

In export/import table structures like this, the data cluster is saved in a column CLUSTD of the type [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) and can span multiple rows. The structure needs the additional columns SRTF2 and CLUSTR to manage this repository.

-   The structure starts with the same key fields as in the structure above for data clusters in a single row.

-   The next field must be a further key field with the name SRTF2 of type INT4. It contains the row numbers of the data cluster saved in the field CLUSTD. This cluster can span multiple rows and is filled automatically by the system. If more rows are required than allowed by the value range of SRTF2, an uncatchable exception is raised.

-   Any number of fields with custom names and types can follow. The same applies to these fields as to the structure above for data clusters in a single row.

-   The last two components must be called CLUSTR and CLUSTD and have the types [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)) and [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) of any length. The current length of the field CLUSTD of each row is saved in CLUSTR, while CLUSTD contains the actual data cluster (which can span multiple rows).

Hints

-   When a data cluster is split across multiple rows, the associated administration data must be saved for each row. In each row, the content of the custom fields are saved redundantly.

-   The additional key field SRTF2 is part of the total length of all [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)). When table content is transported by specifying a key, the key field SRTF2 does not usually need to be specified since only transports of all rows in a data cluster are feasible.

-   A database table INDX, delivered by SAP, has the layout for a data cluster in multiple rows and can be used as a template for creating custom database tables or for test purposes. In production programs, however, it is strongly recommended that separate [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") are used:

-   When data is saved in the table INDX, data is at risk of being overwritten or deleted by other programs.

-   The custom fields between SRTF2 and CLUSTR do not usually match their own application.

-   The table INDX has the [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)) A and is client-dependent. The delivery class L may be better suited for saving temporary data. If the data needs to be client-independent data, the table used should not contain a client column. This prevents redundant data from being saved.

-   New export/import tables should be created using a [BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry") column CLUSTD.

-   Old export/import tables can also occur, however, where the column SRTF2 has the data type INT1 or INT2. In these tables, a data cluster cannot cover more rows than allowed by the value range of these types.

Example

The database table DEMO\_INDX\_TABLE is an example of how data clusters are saved in multiple rows.

Continue
[SQL access to export/import tables](javascript:call_link\('abenindx_type_table_and_sql.htm'\))



**📖 Source**: [abenexport_data_cluster_indx.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexport_data_cluster_indx.htm)

### abenindx_type_table_and_sql.htm

> **📖 Official SAP Documentation**: [abenindx_type_table_and_sql.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenindx_type_table_and_sql.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

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



**📖 Source**: [abenindx_type_table_and_sql.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenindx_type_table_and_sql.htm)

### abenexport_data_cluster_indx.htm

> **📖 Official SAP Documentation**: [abenexport_data_cluster_indx.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexport_data_cluster_indx.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) →  [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) → 

Export/Import Tables

When storing [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") in database tables and application buffers of the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"), database tables with one of the following structures must be specified: These database tables are known as [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry").

-   [Structure for Data Clusters in One Row](#abenexport-data-cluster-indx-1--------structure-for-data-clusters-in-multiple-rows---@ITOC@@ABENEXPORT_DATA_CLUSTER_INDX_2)

Hints

-   The structure for data clusters in a single row is the newer variant and is recommended for new database tables.

-   Status information about the actual data cluster, such as date, user, or language, can be saved in custom fields.

-   Notes about how to process [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") using SQL can be found under [SQL Access to Export/Import Tables](javascript:call_link\('abenindx_type_table_and_sql.htm'\)).

Structure for Data Clusters in One Row

In export/import table structures like this, the data cluster is saved in a single row in a column CLUSTD of the type [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) ([BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")).

-   If the data objects are saved as client-dependent objects, the first field must be a key field with the name MANDT of type CLNT for the client. This component does not apply if objects are saved as client-independent objects.

-   The next field must be a key field with the name RELID of type CHAR and with length 2. The area saved here is specified as ar.

-   This must be followed by at least one key field of type CHAR with any name. The identifier specified in id in the length of the key field is saved here. If more than one key field is defined, the identifier is divided among them according to the respective length of the key fields. If the total length of the key fields is not sufficient for the identifier, it is truncated on the right side.

-   Any number of fields with any name and type can follow, which are filled with values by specifying FROM wa. The addition TO wa of the statement IMPORT reads these fields again.

-   The final field must be called CLUSTD and associated with the data element INDX\_CLUST\_BLOB with the dictionary type [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)). This column is given the actual data cluster.

Hint

The total length of all [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) (meaning the total length of MANDT, RELID, the key fields for the ID, and SRTF2) is limited to 900 bytes, like every AS ABAP [database](javascript:call_link\('abenddic_database_tables.htm'\)) defined in ABAP Dictionary. If the table content is transported by specifying a key, a limit of 120 bytes is required here too.

Example

The database table DEMO\_INDX\_BLOB is an example of how data clusters are saved in a single row.

Structure for Data Clusters in Multiple Rows

In export/import table structures like this, the data cluster is saved in a column CLUSTD of the type [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) and can span multiple rows. The structure needs the additional columns SRTF2 and CLUSTR to manage this repository.

-   The structure starts with the same key fields as in the structure above for data clusters in a single row.

-   The next field must be a further key field with the name SRTF2 of type INT4. It contains the row numbers of the data cluster saved in the field CLUSTD. This cluster can span multiple rows and is filled automatically by the system. If more rows are required than allowed by the value range of SRTF2, an uncatchable exception is raised.

-   Any number of fields with custom names and types can follow. The same applies to these fields as to the structure above for data clusters in a single row.

-   The last two components must be called CLUSTR and CLUSTD and have the types [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)) and [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) of any length. The current length of the field CLUSTD of each row is saved in CLUSTR, while CLUSTD contains the actual data cluster (which can span multiple rows).

Hints

-   When a data cluster is split across multiple rows, the associated administration data must be saved for each row. In each row, the content of the custom fields are saved redundantly.

-   The additional key field SRTF2 is part of the total length of all [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)). When table content is transported by specifying a key, the key field SRTF2 does not usually need to be specified since only transports of all rows in a data cluster are feasible.

-   A database table INDX, delivered by SAP, has the layout for a data cluster in multiple rows and can be used as a template for creating custom database tables or for test purposes. In production programs, however, it is strongly recommended that separate [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") are used:

-   When data is saved in the table INDX, data is at risk of being overwritten or deleted by other programs.

-   The custom fields between SRTF2 and CLUSTR do not usually match their own application.

-   The table INDX has the [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)) A and is client-dependent. The delivery class L may be better suited for saving temporary data. If the data needs to be client-independent data, the table used should not contain a client column. This prevents redundant data from being saved.

-   New export/import tables should be created using a [BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry") column CLUSTD.

-   Old export/import tables can also occur, however, where the column SRTF2 has the data type INT1 or INT2. In these tables, a data cluster cannot cover more rows than allowed by the value range of these types.

Example

The database table DEMO\_INDX\_TABLE is an example of how data clusters are saved in multiple rows.

Continue
[SQL access to export/import tables](javascript:call_link\('abenindx_type_table_and_sql.htm'\))



**📖 Source**: [abenexport_data_cluster_indx.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexport_data_cluster_indx.htm)

### abapexport_internal.htm

> **📖 Official SAP Documentation**: [abapexport_internal.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_internal.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) →  [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) → 

EXPORT, Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Additions:

[1\. ... CODE PAGE HINT cp](#!ABAP_ADDITION_1@1@)
[2\. ... USING subr*\[*(prog)*\]*](#!ABAP_ADDITION_2@2@)

Addition 1

... CODE PAGE HINT cp

Effect

In cp, a [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") from database table TCP00 can be specified that overwrites the ID saved automatically.

Addition 2

... USING subr*\[*(prog)*\]*

Effect

This addition can be specified for [EXPORT TO DATABASE](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) if a table work area dbtab is declared for the relevant database table using [TABLES](javascript:call_link\('abaptables.htm'\)). The addition FROM wa is not allowed. The data is not exported to the database table. Instead, the subroutine subr is called for each row that would be written to the database without this addition. In the subroutine, the data can be accessed that would otherwise be written to the database table in the table work area dbtab.

The subroutine must either be defined in the same program or in a program, prog, specified explicitly. Its name must be prefixed with the name of the database table ("dbtab"). The subroutine must have a USING parameter of type any, which is currently not supplied.

Hints

-   For external use, TO INTERNAL TABLE is provided instead of TO DATABASE ... USING.

-   Specifying an external program prog is the same as the obsolete variant of [PERFORM](javascript:call_link\('abapperform_obsolete.htm'\)).

-   The tables used as the [export/import tables](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) must have structures for data clusters in multiple rows, since TABLES cannot be used for deep structures.
    

Example

See [IMPORT - Internal Additions](javascript:call_link\('abapimport_internal.htm'\))



**📖 Source**: [abapexport_internal.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_internal.htm)

### abenrabax_export_to_database.htm

> **📖 Official SAP Documentation**: [abenrabax_export_to_database.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrabax_export_to_database.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenrabax_export_to_database.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrabax_export_to_database.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) →  [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) → 

Exceptions in EXPORT

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_COMPRESSION\_ERROR

-   Cause: More than 2 GB of data is exported.
    Runtime error: EXPORT\_TOO\_MUCH\_DATA

CX\_SY\_EXPIMP\_DB\_SQL\_ERROR

-   Cause: SQL error in export to the database.
    Runtime error: [DBIF\_...](javascript:call_link\('abenopensql_exceptions.htm'\))

CX\_SY\_EXPORT\_BUFFER\_NO\_MEMORY

-   Cause: The size of the data cluster exceeds a quarter of the total size of the associated application buffer.
    Runtime error: EXPORT\_BUFFER\_NO\_MEMORY

CX\_SY\_EXPORT\_NO\_SHARED\_MEMORY

-   Cause: Data cluster is too large for the associated application buffer. This buffer is almost completely filled.
    Runtime error: EXPORT\_NO\_SHARED\_MEMORY

Uncatchable Exceptions

-   Cause: More rows are required when saving to an export/import table than allowed by the value range of the column SRTF2.
    Runtime error: EXPORT\_TOO\_MUCH\_DATA

-   Cause: Data field too short
    Runtime error: EXPORT\_TABLE\_CLUSTD\_TOO\_SHORT

-   Cause: Data field has incorrect type
    Runtime error: EXPORT\_TABLE\_CLUSTD\_WRONG\_TYPE

-   Cause: Length field has incorrect type
    Runtime error: EXPORT\_TABLE\_CLUSTR\_WRONG\_TYPE

-   Cause: Client field must be first
    Runtime error: EXPORT\_TABLE\_MANDT\_NOT\_FIRST

-   Cause: Field RELID missing
    Runtime error: EXPORT\_TABLE\_NO\_RELID

-   Cause: No user key in structure
    Runtime error: EXPORT\_TABLE\_NO\_USER\_KEY

-   Cause: Counter field has incorrect type
    Runtime error: EXPORT\_TABLE\_SRTF2\_WRONG\_TYPE

-   Cause: Table has incorrect structure
    Runtime error: EXPORT\_TABLE\_TOO\_FEW\_FIELDS

-   Cause: Table unknown in database
    Runtime error: EXPORT\_TABLE\_UNKNOWN

-   Cause: Table key must be first
    Runtime error: EXPORT\_TABLE\_WRONG\_KEY\_POS

-   Cause: Problem when changing the data in the database table
    Runtime error: EXPORT\_TABLE\_UPDATE\_CONFLICT

-   Cause: Database table has wrong length
    Runtime error: EXPORT\_TABLE\_WRONG\_LENGTH

-   Cause: No memory available for compression
    Runtime error: EXPORT\_COMPRESS\_ALLOC\_FAILED

-   Cause: The database table is not an export/import table.
    Runtime error: EXPORT\_INCL\_TABLE\_STRUCTURE

-   Cause: No more paging area available
    Runtime error: EXPORT\_NO\_CONTAINER

-   Cause: Error when exporting the transactional application buffer
    Runtime error: EXPORT\_BUFFER\_FAILED
    Runtime error: EXPORT\_BUFFER\_EXTERNAL\_ERROR
    Runtime error: EXPORT\_BUFFER\_INTERNAL\_ERROR
