  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm) → 

Access to XML using Class Libraries

This example demonstrates parsing and rendering using an example class.

Source Code

REPORT demo\_xml\_access.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    SELECT FROM scarr
           FIELDS \*
           INTO TABLE @DATA(itab).
    CALL TRANSFORMATION id SOURCE itab = itab
                        RESULT XML DATA(xml).
    out->next\_section( 'Original XML' )->write\_xml( xml ).
    TRY.
        DATA(nodes) = cl\_demo\_xml\_access=>parse\_xml( xml ).
        out->next\_section( 'Rendered XML' )->write\_xml(
          cl\_demo\_xml\_access=>render\_xml( nodes ) ).
      CATCH cx\_demo\_xml\_access.
         out->write( 'Exception in parsing or rendering' ).
    ENDTRY.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example class CL\_DEMO\_XML\_ACCESS wraps methods of the [sXML Library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensxml_library_glosry.htm "Glossary Entry").

-   Method PARSE\_XML allows to parse the relevant data of an XML file from a byte string into an internal table whose structure is defined in that class.

-   Method RENDER\_XML allows to render the data from such a node table into an XML file in a byte string.

As an example, an XML file is accessed that results from an transformation of an internal table into [asXML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasxml_glosry.htm "Glossary Entry") format by using the predefined identity transformation [ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xslt_id.htm).