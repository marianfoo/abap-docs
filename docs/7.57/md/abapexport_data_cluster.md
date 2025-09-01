  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXPORT, ABAPEXPORT_DATA_CLUSTER, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

EXPORT

[Short Reference](javascript:call_link\('abapexport_shortref.htm'\))

Syntax

EXPORT [parameter\_list](javascript:call_link\('abapexport_data_cluster_param.htm'\)) TO [medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) *\[*COMPRESSION *{*ON*|*OFF*}**\]*.

Addition:

[... COMPRESSION *{*ON*|*OFF*}*](#!ABAP_ONE_ADD@1@)

Effect

This statement stores a [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") defined using [parameter\_list](javascript:call_link\('abapexport_data_cluster_param.htm'\)) in a memory medium [medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\)). The addition COMPRESSION can be used to control whether the data is stored in the cluster in compressed form. A data cluster can be read from the memory medium using the statement [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) and deleted using [DELETE FROM](javascript:call_link\('abapdelete_cluster.htm'\)).

All data objects are archived according to the current [byte order](javascript:call_link\('abenbyte_order_glosry.htm'\) "Glossary Entry") (endian) and character-like data objects according to the [character format](javascript:call_link\('abenchar_representation_glosry.htm'\) "Glossary Entry") of the current [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). The ID of the data cluster indicates which byte order and character format have been used during the export. When the data cluster is imported using the IMPORT statement, this ID is evaluated, and the data is converted to the current byte order and character representation.

A data cluster can have a maximum of 2 GB. Any attempts to export more than 2 GB raise a catchable exception of the class CX\_SY\_COMPRESSION\_ERROR. If a different resource bottleneck occurs earlier, however, its related exception can be raised first.

Hint

See also [Classes for Data Clusters](javascript:call_link\('abencl_abap_expimp.htm'\)).

Example

Export of an internal table to a [suitable](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) DDIC database table DEMO\_INDX\_BLOB and import of the content from the data cluster to another internal table.

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

This addition determines whether the data in the data cluster is compressed. By default, compression is deactivated for all memory media [medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\)), except database tables. If compression is required, it must be switched on using ON. If stored in a database table, compression is switched on by default and is only switched off if OFF is specified.

Hints

-   When a data cluster is imported using [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)), the system automatically recognizes whether or not the data is compressed.
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
[EXPORT, parameter\_list](javascript:call_link\('abapexport_data_cluster_param.htm'\))
[EXPORT, medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\))
[Export/Import Tables](javascript:call_link\('abenexport_data_cluster_indx.htm'\))
[EXPORT, Internal Additions](javascript:call_link\('abapexport_internal.htm'\))
[Exceptions in EXPORT](javascript:call_link\('abenrabax_export_to_database.htm'\))