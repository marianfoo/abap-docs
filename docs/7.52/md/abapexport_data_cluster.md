  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Clusters](javascript:call_link\('abendata_cluster.htm'\)) → 

EXPORT

[Quick Reference](javascript:call_link\('abapexport_shortref.htm'\))

Syntax

EXPORT [parameter\_list](javascript:call_link\('abapexport_data_cluster_param.htm'\)) TO [medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) *\[*COMPRESSION *{*ON*|*OFF*}**\]*.

Addition:

[... COMPRESSION *{*ON*|*OFF*}*](#!ABAP_ONE_ADD@1@)

Effect

This statement saves a [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") defined using [parameter\_list](javascript:call_link\('abapexport_data_cluster_param.htm'\)) in a memory medium [medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\)). The addition COMPRESSION can be used to specify whether the data is stored in the cluster in compressed form. A data cluster can be retrieved from the memory medium using the statement [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) and deleted using [DELETE FROM](javascript:call_link\('abapdelete_cluster.htm'\)).

All data objects are archived according to the current [byte order](javascript:call_link\('abenbyte_order_glosry.htm'\) "Glossary Entry") (endian) and character-like data objects according to the [character format](javascript:call_link\('abenchar_representation_glosry.htm'\) "Glossary Entry") of the current [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). The ID of the data cluster indicates which byte order and character format have been used during the export. When the data cluster is imported using the IMPORT statement, this ID is evaluated and the data is converted to the current byte order and character format.

A data cluster can have a maximum of 2 GB. Any attempts to export more than 2 GB raise a handleable exception of the class CX\_SY\_COMPRESSION\_ERROR. If a different resource bottleneck occurs earlier, however, its related exception can be raised first.

Note

See also [Classes for Data Clusters](javascript:call_link\('abencl_abap_expimp.htm'\)).

Example

Exports an internal table to a [suitable](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) database table DEMO\_INDX\_BLOB and imports the content from the data cluster to another internal table.

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

Notes

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
[EXPORT - parameter\_list](javascript:call_link\('abapexport_data_cluster_param.htm'\))
[EXPORT - medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\))
[Export/Import Tables](javascript:call_link\('abenexport_data_cluster_indx.htm'\))
[EXPORT - Internal Additions](javascript:call_link\('abapexport_internal.htm'\))
[Exceptions in EXPORT](javascript:call_link\('abenrabax_export_to_database.htm'\))