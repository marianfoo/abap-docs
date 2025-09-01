# ABAP - Keyword Documentation / ABAP - Programming Language / Processing External Data / Data Cluster / EXPORT

Included pages: 8


### abapexport_data_cluster.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXPORT, ABAPEXPORT_DATA_CLUSTER, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

EXPORT

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_shortref.htm)

Syntax

EXPORT [parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_param.htm) TO [medium](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_medium.htm) *\[*COMPRESSION *{*ON*|*OFF*}**\]*.

Addition:

[... COMPRESSION *{*ON*|*OFF*}*](#!ABAP_ONE_ADD@1@)

Effect

This statement stores a [data cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") defined using [parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_param.htm) in a memory medium [medium](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_medium.htm). The addition COMPRESSION can be used to control whether the data is stored in the cluster in compressed form. A data cluster can be read from the memory medium using the statement [IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm) and deleted using [DELETE FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_cluster.htm).

All data objects are archived according to the current [byte order](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbyte_order_glosry.htm "Glossary Entry") (endian) and character-like data objects according to the [character format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchar_representation_glosry.htm "Glossary Entry") of the current [text environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment_glosry.htm "Glossary Entry"). The ID of the data cluster indicates which byte order and character format have been used during the export. When the data cluster is imported using the IMPORT statement, this ID is evaluated, and the data is converted to the current byte order and character representation.

A data cluster can have a maximum of 2 GB. Any attempts to export more than 2 GB raise a catchable exception of the class CX\_SY\_COMPRESSION\_ERROR. If a different resource bottleneck occurs earlier, however, its related exception can be raised first.

Hint

See also [Classes for Data Clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_expimp.htm).

Example

Export of an internal table to a [suitable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) DDIC database table DEMO\_INDX\_BLOB and import of the content from the data cluster to another internal table.

SELECT \*
       FROM scarr
       INTO TABLE @FINAL(itab).
EXPORT scarr = itab TO DATABASE demo\_indx\_blob(sc) ID 'DEMO'.
...
DATA jtab LIKE itab.
IMPORT scarr = jtab FROM DATABASE demo\_indx\_blob(sc) ID 'DEMO'.
cl\_demo\_output=>display( jtab ).

Addition   

... COMPRESSION *{*ON*|*OFF*}*

Effect

This addition determines whether the data in the data cluster is compressed. By default, compression is deactivated for all memory media [medium](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_medium.htm), except database tables. If compression is required, it must be switched on using ON. If stored in a database table, compression is switched on by default and is only switched off if OFF is specified.

Hints

-   When a data cluster is imported using [IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm), the system automatically recognizes whether or not the data is compressed.
-   Compression saves space, but it is more time-consuming.

Example

Export of the compressed result of an XML serialization of an object to the ABAP memory and then importing it.

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

Example

The program DEMO\_DATA\_CLUSTER demonstrates how the size of the data cluster is affected by a compression.

Continue
[EXPORT, parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_param.htm)
[EXPORT, medium](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_medium.htm)
[Export/Import Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm)
[EXPORT, Internal Additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_internal.htm)
[Exceptions in EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrabax_export_to_database.htm)


### abapexport_data_cluster_param.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXPORT, parameter_list, ABAPEXPORT_DATA_CLUSTER_PARAM, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

EXPORT, parameter\_list

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_shortref.htm)

Syntax

... *{*p1 = dobj1 p2 = dobj2 ...*}*
  *|* *{*p1 FROM dobj1 p2 FROM dobj2 ...*}*
  *|* (ptab) ...

Additions:

[1\. ... p1 = dobj1 p2 = dobj2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... p1 FROM dobj1 p2 FROM dobj2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... (ptab)](#!ABAP_ADDITION_3@3@)

Effect

A [data cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") can be defined statically by a parameter list in the form p1 = dobj1 p2 = dobj2 ... or p1 FROM dobj1  p2 FROM dobj2 ... and dynamically by specifying a parenthesized internal table ptab. Here the system searches for the data stored in the data cluster under the names p1, p2, .... The case of the names in the data clusters depends on how they are specified in the ABAP runtime framework. If specified statically (b1, b2, ...), uppercase is used. If specified dynamically in rtab, the case used there is used.

If the data cluster is too big for the memory, an exception is raised.

Addition 1   

... p1 = dobj1 p2 = dobj2 ...

Addition 2   

... p1 FROM dobj1 p2 FROM dobj2 ...

Effect

In static cases, the content of the data objects dobj is stored under the names p1, p2, ... in the cluster. The name of a parameter p1, p2, ... is converted to uppercase letters and can have a maximum of 255 characters. The specifications p1 = dobj1 p2 = dobj2 ... and p1 FROM dobj1  p2 FROM dobj2 ... have the same meaning. All data types can be used for the data object dobj, except reference types or data types that contain reference types as components. If a data object dobj is an internal table with a [header line](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheader_line_glosry.htm "Glossary Entry"), the [table body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_body_glosry.htm "Glossary Entry") is addressed instead of the header line. When an [enumerated object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_object_glosry.htm "Glossary Entry") is used, the enumerated value is flagged as an enumerated type and saved in the basic type.

Programming Guideline

[Alternative Language Constructs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalternative_langu_guidl.htm "Guideline")

Hints

-   The use of \= is recommended rather than FROM, since \= is also used by other ABAP statements to pass data.
-   To export objects referenced by reference variables, these can first be serialized using the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm) and then exported. In instances of classes, the class must implement the interface IF\_SERIALIZABLE\_OBJECT.
-   Outside of classes, and if the name does not contain a specified addressing such as an [instance component selector](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_comp_selector_glosry.htm "Glossary Entry") or an [offset/length specification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry"), the [obsolete short form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_import_obsolete.htm) dobj1 dobj2... can be used in the static variant. Here, all data objects are implicitly stored under their name in the data cluster.

Example

Export of three numbers to a data cluster of the DDIC database table DEMO\_INDX\_BLOB and import of the same three numbers to the components of a structure.

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

In the dynamic case, the parameter list is specified in an index table ptab with two columns. These columns can have any name and must be of the type "character". The first column in ptab must contain the names of the parameters, and the second must list the data objects in any case. The names of the data objects are used exactly as specified in the first column of ptab. If the second column is initial, the name of the parameter in the first column must match the name of a data object. The data object is then stored under its name in the cluster. If the first column of ptab is initial, an uncatchable exception is raised.

Hints

-   Data objects whose names contain lowercase letters in the data cluster cannot be read using the static variant of the [specified parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_parameterlist.htm) of the statement IMPORT.
-   Outside of classes, a single-column internal table for parameter\_list can also be used. This is the dynamic variant of the [obsolete short form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_import_obsolete.htm) used to store the data objects listed in the table to the data cluster implicitly under their names.

Example

Dynamic export of data to a data cluster on the DDIC database table DEMO\_INDX\_BLOB. The names in the first column of ptab contain lowercase letters, which means that the data can only be imported by being specified dynamically. The second column, on the other hand, is not case-sensitive.

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


### abapexport_data_cluster_medium.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXPORT, medium, ABAPEXPORT_DATA_CLUSTER_MEDIUM, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

EXPORT, medium

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_shortref.htm)

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

The exported [data cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") can be stored in a byte string xstr, in an internal table itab, in the [ABAP memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_memory_glosry.htm "Glossary Entry"), in a database table dbtab, or in a shared memory area (SHARED MEMORY or BUFFER specified).

Hint

For optimization reasons, the binary content of the data cluster can depend on the way it is stored. When reconstructed, a data cluster stored in multiple parts is not necessarily the same as a data cluster stored as a single cluster. This means that a data cluster can usually only be imported using an [IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm) statement that matches the storage method. Especially, a data cluster stored in a structure for [export/import tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) in multiple rows cannot necessarily be concatenated into a byte string that can be imported with FROM DATA BUFFER. Even data clusters stored in multiple rows can differ between storage methods. That means a data cluster stored with INTERNAL TABLE can differ from a data cluster for the same data in export/import tables, especially, if they were stored in different releases or for different [code pages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencodepage_glosry.htm "Glossary Entry").

Example

The program DEMO\_DATA\_CLUSTER demonstrates that the size of the data cluster is mostly independent of the way it is stored.

Alternative 1   

... DATA BUFFER xstr

Effect

If DATA BUFFER is specified, the data cluster is written to the elementary data object xstr, which must be of the type xstring. The previous content of xstr is overwritten completely.

Hints

-   A data object xstr filled by EXPORT TO DATA BUFFER contains exactly one data cluster.
-   A common application of the addition DATA BUFFER is to store the new data cluster in a field of a DDIC database table with the corresponding data type. In this case, compressing the data cluster using the addition [COMPRESSION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) should be considered, since, by default, compression as a medium is only activated if DATABASE is specified directly.
-   The content of a data object filled by EXPORT TO DATA BUFFER can only be evaluated using IMPORT FROM DATA BUFFER. In other evaluations, for example when comparing data clusters, the result is undefined. For example, the undefined content of [alignment gaps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalignment_gap_glosry.htm "Glossary Entry") in structures can produce different data clusters with structures that otherwise have the same content.

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

The first column of itab must have the data type [s](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_numeric.htm) or [i](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_numeric.htm) and the second column must have the type x. Depending on the width of the second column, the data is stored across multiple table lines if necessary. The first column contains the length occupied in the second column. The only table category allowed for itab are [standard tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry") without [secondary table keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_key_glosry.htm "Glossary Entry").

Hints

-   An internal table itab filled by EXPORT TO INTERNAL TABLE contains exactly one data cluster.
-   The content of an internal table filled by EXPORT TO INTERNAL TABLE can only be evaluated using IMPORT FROM INTERNAL TABLE for the same reasons as for EXPORT TO DATA BUFFER.
-   The variant EXPORT TO DATA BUFFER is preferred over the variant EXPORT TO INTERNAL TABLE because it is easier to handle. An export to an internal table is beneficial only for very large data clusters and if the available [memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_consumption_2.htm) is almost used up. This is because its memory is requested block by block, while the memory for a string must always be available in one piece.

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

If MEMORY is specified, the data cluster is written into the [ABAP Memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_memory_glosry.htm "Glossary Entry") with the ID specified in id. id expects a [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") [character-like data object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") containing a case-sensitive ID with a maximum of 60 characters. Any existing data clusters with the same ID id are completely overwritten. The ID in id identifies a data cluster in the repository and can be read again using the same ID.

Hints

-   A data cluster in the ABAP memory is available to all programs within a [call sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_sequence_glosry.htm "Glossary Entry"), which makes it possible to pass data to called programs.
-   Outside of classes, an [obsolete short form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_import_mem_id_obsolete.htm) exists, in which the addition ID can be omitted. However, this is prone to errors, since all EXPORT statements without ID overwrite the same data cluster.

Example

Export of two text strings labeled P1 and P2 into the ABAP memory. After the statement [IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm) is executed, the content of the fields text1 and text2 is swapped.

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

If DATABASE is specified, the data cluster is stored under the ID id in the DDIC database table dbtab and committed by the next [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm "Glossary Entry"). The DDIC database table must be an [export/import table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_import_table_glosry.htm "Glossary Entry") with a predefined [structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm). id expects a [flat](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenflat_glosry.htm "Glossary Entry") [character-like data object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") containing an ID no longer than the key fields of the export/import table defined between the columns [RELID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) and [SRTF2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm). The ID is case-sensitive.

The two-character area ar, which must be specified directly, divides the rows of the database table into multiple areas, so that data clusters with the same ID id can occur more than once in the DDIC database table.

After FROM, a work area wa can be specified that must have the same data type as the export/import table dbtab. In an export, the current values of the components of wa, which are located between the fields [SRTF2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) and [CLUSTR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm), are written to all rows of the database table occupied by the data cluster. If the addition FROM wa is not specified within classes, no data transport takes place to these database fields. If the addition FROM wa is not specified outside of classes, but the statement [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm) is used to declare a [table work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_work_area_glosry.htm "Glossary Entry") for the export/import table dbtab, the current values of the corresponding components of the table work area dbtab are written to the rows of the DDIC database table in the export.

If the export/import table dbtab is client-dependent, a flat character-like field cl can be specified after the addition CLIENT. This field contains a [client ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_identifier_glosry.htm "Glossary Entry"). If the addition is not specified, the current client is used. The column MANDT of every row in the database table occupied by the data cluster is filled by this client ID in the export.

Hints

-   The statement EXPORT ... TO DATABASE sets a [database lock](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_lock_glosry.htm "Glossary Entry") until the next database commit or rollback. If used incorrectly, this can produce a [deadlock](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeadlock_glosry.htm "Glossary Entry").
-   Data clusters in databases are not converted when migrating from a non-Unicode database to a [Unicode system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_system_glosry.htm "Glossary Entry"). In a Unicode system, therefore, data clusters may sometimes exist that contain non-Unicode characters. These characters are automatically converted to Unicode characters in each import. When data is exported in Unicode systems, any Unicode characters in the stored data objects are stored in accordance with the relevant platform.
-   The statement EXPORT ... TO DATABASE does not support [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry").
-   It is still possible to use a table work area implicitly (instead of using FROM wa explicitly). This should be considered an [obsolete short form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_import_tables_area.htm), however.
-   Since each client represents a self-contained unit, the addition CLIENT must not be used in application programs.

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

If SHARED MEMORY or SHARED BUFFER is specified, the data cluster is stored in [cross-transaction application buffers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") of the [shared memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm "Glossary Entry") on of the current [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry"). All programs of the same AS instance have access to these buffers.

The two application buffers differ in how the system behaves when reaching the memory limit. Both application buffers can be filled to an internal maximum limit, which can be adjusted using the [profile parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rsdb/esm/buffersize\_kb (SHARED MEMORY) and rsdb/obj/buffersize (SHARED BUFFER).

-   Before the maximum limit of the SHARED MEMORY buffer is reached, space must be freed using the statement [DELETE FROM SHARED MEMORY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_cluster.htm); otherwise a catchable exception is raised.
-   The buffer of SHARED BUFFER is emptied automatically by a displacement when it reaches the maximum limit. This procedure deletes the least used data objects from the buffer.

When storing the data, the system creates a memory table in the application buffer. The row structure of this table is defined using dbtab. For dbtab, a database table from the ABAP Dictionary must be specified that has the [structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) of an [export/import table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_import_table_glosry.htm "Glossary Entry"). The row area ar, the work area wa, the optional client cl, and the ID id have the same significance for the memory table as when stored in a database table, with the exception that the length of the ID in id is limited to 59 or 62 characters depending on whether the addition CLIENT is specified or not.

Hints

-   When storing data in the shared memory, a reference is made to an export/import table, even if the data is not stored in the table itself, but in an appropriately structured memory table.
-   The length of the key fields of the addressed export/import table between the columns [RELID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) and [SRTF2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) cannot exceed 59 or 62 characters, depending on whether a client column exists.
-   When data is exported, any data clusters that have the same client cl, row area ar, and ID id are overwritten. If an existing data cluster is to be overwritten by a bigger one when using SHARED MEMORY, and this would exceed the memory limit, this only deletes the existing data cluster.
-   Instead of storing data clusters in the shared memory, it is best to use [shared objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects_glosry.htm "Glossary Entry"). Shared objects make it possible to store objects with complex dependencies, can be processed like regular objects, and enable multiple users to access the shared memory without any copying effort.

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


### abenexport_data_cluster_indx.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Export/Import Tables, ABENEXPORT_DATA_CLUSTER_INDX, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Export/Import Tables

When storing [data clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") in database tables and application buffers of the [shared memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm "Glossary Entry"), database tables with one of the following structures must be specified: These database tables are referred to as [export/import tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_import_table_glosry.htm "Glossary Entry").

-   [Structure for Data Clusters in One Row](#@@ITOC@@ABENEXPORT_DATA_CLUSTER_INDX_1)
-   [Structure for Data Clusters in Multiple Rows](#@@ITOC@@ABENEXPORT_DATA_CLUSTER_INDX_2)

Hints

-   The structure for data clusters in a row is the newer variant and is recommended for new database tables.
-   Status information about the actual data cluster, such as date, user, or language, can be stored in freely definable fields.
-   For information about processing [export/import tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_import_table_glosry.htm "Glossary Entry") using SQL, see [SQL Access to Export/Import Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenindx_type_table_and_sql.htm).
-   When accessing data clusters in export/import tables using the statements [EXPORT ... TO DATABASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) and [IMPORT ... FROM DATABASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm), [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") is not supported.

Structure for Data Clusters in One Row   

In export/import table structures like this, the data cluster is stored in a single row in a column CLUSTD of the type [RAWSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) ([BLOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenblob_glosry.htm "Glossary Entry")).

-   If the data objects are to be stored as client-dependent objects, the first field must be a key field with the name MANDT of type CLNT for the client. This component is not required for client-independent storage.
-   The next field must be a key field with the name RELID of type CHAR and with length 2. The specification of the area ar is stored here.
-   This must be followed by at least one key field of type CHAR with any name. The identifier specified in id within the length of the key field is stored here. If more than one key field is defined, the identifier is divided among them according to the respective length of the key fields. If the total length of the key fields is not sufficient for the identifier, it is truncated on the right.
-   Any number of fields with freely selectable name and type can follow, which are filled with values by specifying FROM wa. The addition TO wa of the statement IMPORT reads these fields again.
-   The final field must be called CLUSTD and linked with the data element INDX\_CLUST\_BLOB with the dictionary type [RAWSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm). This column is given the actual data cluster.

Hint

The total length of all [key fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm), that is the total length of MANDT, RELID, and the key fields for the ID, and SRTF2, is limited to 900 bytes, like every AS ABAP [database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) defined in the ABAP Dictionary. If the table content is to be transported by specifying a key, a limit of 120 bytes is required here.

Example

The database table DEMO\_INDX\_BLOB is an example of how data clusters are stored in a single row.

Structure for Data Clusters in Multiple Rows   

In export/import table structures like this, the data cluster is stored in a column CLUSTD of the type [LRAW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and can be split multiple rows. The structure requires the additional columns SRTF2 and CLUSTR to manage this repository.

-   The structure starts with the same key fields as in the structure above for data clusters in a single row.
-   The next field must be a further key field with the name SRTF2 of type INT4. It contains the row numbers of the data cluster stored in the field CLUSTD. This cluster can span multiple rows and is filled automatically by the system. If more rows are required than allowed by the value range of SRTF2, an uncatchable exception is raised.
-   Any number of fields with custom names and types can follow. The same applies to these fields as to the structure above for data clusters in a single row.
-   The last two components must be called CLUSTR and CLUSTD and have the types [INT2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and [LRAW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) of any length. The current length of the field CLUSTD of each row is stored in CLUSTR, while CLUSTD contains the actual data cluster, which can span multiple rows.

Hints

-   When a data cluster is split across multiple rows, the associated administration data must be stored for each row. In each row, the content of the custom fields are stored redundantly.
-   The additional key field SRTF2 is part of the total length of all [key fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm). When table content is transported by specifying a key, the key field SRTF2 does not usually need to be specified since only transports of all rows in a data cluster are feasible.
-   A database table INDX, delivered by SAP, has the layout for a data cluster in multiple rows and can be used as a template for creating custom database tables or for test purposes. In production programs, however, it is strongly recommended that separate [export/import tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_import_table_glosry.htm "Glossary Entry") are used:
    -   When data is stored in the table INDX, data is at risk of being overwritten or deleted unintentionally by other programs.
    -   The custom fields between SRTF2 and CLUSTR do not usually match their own application.
    -   The table INDX has the [delivery class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_delivery.htm) A and is client-dependent. The delivery class L may be better suited for storing temporary data. If the data needs to be client-independent data, the table used should not contain a client column. This prevents redundant data from being stored.
    -   New export/import tables should be created with a [BLOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenblob_glosry.htm "Glossary Entry") column CLUSTD.
-   Old export/import tables can also occur, however, where the column SRTF2 has the data type INT1 or INT2. In these tables, a data cluster cannot cover more rows than allowed by the value range of these types.

Example

The database table DEMO\_INDX\_TABLE is an example of how data clusters are stored in multiple rows.

Continue
[SQL Access to Export/Import Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenindx_type_table_and_sql.htm)


### abenindx_type_table_and_sql.htm

  

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


### abenexport_data_cluster_indx.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Export/Import Tables, ABENEXPORT_DATA_CLUSTER_INDX, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Export/Import Tables

When storing [data clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") in database tables and application buffers of the [shared memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm "Glossary Entry"), database tables with one of the following structures must be specified: These database tables are referred to as [export/import tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_import_table_glosry.htm "Glossary Entry").

-   [Structure for Data Clusters in One Row](#@@ITOC@@ABENEXPORT_DATA_CLUSTER_INDX_1)
-   [Structure for Data Clusters in Multiple Rows](#@@ITOC@@ABENEXPORT_DATA_CLUSTER_INDX_2)

Hints

-   The structure for data clusters in a row is the newer variant and is recommended for new database tables.
-   Status information about the actual data cluster, such as date, user, or language, can be stored in freely definable fields.
-   For information about processing [export/import tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_import_table_glosry.htm "Glossary Entry") using SQL, see [SQL Access to Export/Import Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenindx_type_table_and_sql.htm).
-   When accessing data clusters in export/import tables using the statements [EXPORT ... TO DATABASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) and [IMPORT ... FROM DATABASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm), [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") is not supported.

Structure for Data Clusters in One Row   

In export/import table structures like this, the data cluster is stored in a single row in a column CLUSTD of the type [RAWSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) ([BLOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenblob_glosry.htm "Glossary Entry")).

-   If the data objects are to be stored as client-dependent objects, the first field must be a key field with the name MANDT of type CLNT for the client. This component is not required for client-independent storage.
-   The next field must be a key field with the name RELID of type CHAR and with length 2. The specification of the area ar is stored here.
-   This must be followed by at least one key field of type CHAR with any name. The identifier specified in id within the length of the key field is stored here. If more than one key field is defined, the identifier is divided among them according to the respective length of the key fields. If the total length of the key fields is not sufficient for the identifier, it is truncated on the right.
-   Any number of fields with freely selectable name and type can follow, which are filled with values by specifying FROM wa. The addition TO wa of the statement IMPORT reads these fields again.
-   The final field must be called CLUSTD and linked with the data element INDX\_CLUST\_BLOB with the dictionary type [RAWSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm). This column is given the actual data cluster.

Hint

The total length of all [key fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm), that is the total length of MANDT, RELID, and the key fields for the ID, and SRTF2, is limited to 900 bytes, like every AS ABAP [database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) defined in the ABAP Dictionary. If the table content is to be transported by specifying a key, a limit of 120 bytes is required here.

Example

The database table DEMO\_INDX\_BLOB is an example of how data clusters are stored in a single row.

Structure for Data Clusters in Multiple Rows   

In export/import table structures like this, the data cluster is stored in a column CLUSTD of the type [LRAW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and can be split multiple rows. The structure requires the additional columns SRTF2 and CLUSTR to manage this repository.

-   The structure starts with the same key fields as in the structure above for data clusters in a single row.
-   The next field must be a further key field with the name SRTF2 of type INT4. It contains the row numbers of the data cluster stored in the field CLUSTD. This cluster can span multiple rows and is filled automatically by the system. If more rows are required than allowed by the value range of SRTF2, an uncatchable exception is raised.
-   Any number of fields with custom names and types can follow. The same applies to these fields as to the structure above for data clusters in a single row.
-   The last two components must be called CLUSTR and CLUSTD and have the types [INT2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and [LRAW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) of any length. The current length of the field CLUSTD of each row is stored in CLUSTR, while CLUSTD contains the actual data cluster, which can span multiple rows.

Hints

-   When a data cluster is split across multiple rows, the associated administration data must be stored for each row. In each row, the content of the custom fields are stored redundantly.
-   The additional key field SRTF2 is part of the total length of all [key fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm). When table content is transported by specifying a key, the key field SRTF2 does not usually need to be specified since only transports of all rows in a data cluster are feasible.
-   A database table INDX, delivered by SAP, has the layout for a data cluster in multiple rows and can be used as a template for creating custom database tables or for test purposes. In production programs, however, it is strongly recommended that separate [export/import tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_import_table_glosry.htm "Glossary Entry") are used:
    -   When data is stored in the table INDX, data is at risk of being overwritten or deleted unintentionally by other programs.
    -   The custom fields between SRTF2 and CLUSTR do not usually match their own application.
    -   The table INDX has the [delivery class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_delivery.htm) A and is client-dependent. The delivery class L may be better suited for storing temporary data. If the data needs to be client-independent data, the table used should not contain a client column. This prevents redundant data from being stored.
    -   New export/import tables should be created with a [BLOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenblob_glosry.htm "Glossary Entry") column CLUSTD.
-   Old export/import tables can also occur, however, where the column SRTF2 has the data type INT1 or INT2. In these tables, a data cluster cannot cover more rows than allowed by the value range of these types.

Example

The database table DEMO\_INDX\_TABLE is an example of how data clusters are stored in multiple rows.

Continue
[SQL Access to Export/Import Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenindx_type_table_and_sql.htm)


### abapexport_internal.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXPORT, Internal Additions, ABAPEXPORT_INTERNAL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

EXPORT, Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Additions:

[1\. ... CODE PAGE HINT cp](#!ABAP_ADDITION_1@1@)
[2\. ... USING subr*\[*(prog)*\]*](#!ABAP_ADDITION_2@2@)

Addition 1   

... CODE PAGE HINT cp

Effect

In cp, a [code page](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencodepage_glosry.htm "Glossary Entry") from database table TCP00 can be specified that overwrites the automatically stored ID.

Addition 2   

... USING subr*\[*(prog)*\]*

Effect

This addition can be specified for [EXPORT TO DATABASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_medium.htm) if a table work area dbtab is declared for the relevant database table using [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm). The addition FROM wa is not allowed. The data is not exported to the database table. Instead, the subroutine subr is called for each row that would be written to the database without this addition. In the subroutine, the data can be accessed that would otherwise be written to the database table in the table work area dbtab.

The subroutine must either be defined in the same program or in a program, prog, specified explicitly. Its name must be prefixed with the name of the database table (dbtab). The subroutine must have a USING parameter of type any, but this is currently not supplied.

Hints

-   For external use, TO INTERNAL TABLE is provided instead of TO DATABASE ... USING.
-   Specifying an external program prog is the same as the obsolete variant of [PERFORM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapperform_obsolete.htm).
-   The tables used as the [export/import tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) must have structures for data clusters in multiple rows, since TABLES cannot be used for deep structures.

Example

See [IMPORT - Internal Additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_internal.htm)


### abenrabax_export_to_database.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exceptions in EXPORT, ABENRABAX_EXPORT_TO_DATABASE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Exceptions in EXPORT

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_COMPRESSION\_ERROR

-   Cause: More than 2 GB of data is to be exported.
    Runtime error: EXPORT\_TOO\_MUCH\_DATA

CX\_SY\_EXPIMP\_DB\_SQL\_ERROR

-   Cause: SQL error in export to the database.
    Runtime error: [DBIF\_...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_exceptions.htm)

CX\_SY\_EXPORT\_BUFFER\_NO\_MEMORY

-   Cause: The size of the data cluster exceeds a quarter of the total size of the associated application buffer.
    Runtime error: EXPORT\_BUFFER\_NO\_MEMORY

CX\_SY\_EXPORT\_NO\_SHARED\_MEMORY

-   Cause: Data cluster is too large for the associated application buffer. This buffer is almost completely filled.
    Runtime error: EXPORT\_NO\_SHARED\_MEMORY

Uncatchable Exceptions

-   Cause: More rows are required when storing in an export/import table than allowed by the value range of the column SRTF2.
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
-   Cause: Table unknown to the database
    Runtime error: EXPORT\_TABLE\_UNKNOWN
-   Cause: Table key must start at the beginning
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
