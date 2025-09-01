  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXPORT%2C%20ABAPEXPORT_DATA_CLUSTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXPORT

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_shortref.htm)

Syntax

EXPORT [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_param.htm) TO [medium](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) *\[*COMPRESSION *{*ON*|*OFF*}**\]*.

Addition:

[... COMPRESSION *{*ON*|*OFF*}*](#!ABAP_ONE_ADD@1@)

Effect

This statement stores a [data cluster](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_glosry.htm "Glossary Entry") defined using [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_param.htm) in a memory medium [medium](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm). The addition COMPRESSION can be used to control whether the data is stored in the cluster in compressed form. A data cluster can be read from the memory medium using the statement [IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm) and deleted using [DELETE FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_cluster.htm).

All data objects are archived according to the current [byte order](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_order_glosry.htm "Glossary Entry") (endian) and character-like data objects according to the [character format](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchar_representation_glosry.htm "Glossary Entry") of the current [text environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_glosry.htm "Glossary Entry"). The ID of the data cluster indicates which byte order and character format have been used during the export. When the data cluster is imported using the IMPORT statement, this ID is evaluated, and the data is converted to the current byte order and character representation.

A data cluster can have a maximum of 2 GB. Any attempts to export more than 2 GB raise a catchable exception of the class CX\_SY\_COMPRESSION\_ERROR. If a different resource bottleneck occurs earlier, however, its related exception can be raised first.

Hint

See also [Classes for Data Clusters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_expimp.htm).

Example

Export of an internal table to a [suitable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm) DDIC database table DEMO\_INDX\_BLOB and import of the content from the data cluster to another internal table.

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

This addition determines whether the data in the data cluster is compressed. By default, compression is deactivated for all memory media [medium](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm), except database tables. If compression is required, it must be switched on using ON. If stored in a database table, compression is switched on by default and is only switched off if OFF is specified.

Hints

-   When a data cluster is imported using [IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm), the system automatically recognizes whether or not the data is compressed.
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
[EXPORT, parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_param.htm)
[EXPORT, medium](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm)
[Export/Import Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_data_cluster_indx.htm)
[EXPORT, Internal Additions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_internal.htm)
[Exceptions in EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrabax_export_to_database.htm)