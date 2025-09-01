  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sxml_lib.htm) →  [sXML Library, Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sxml_lib_abexas.htm) → 

sXML, Transformation to XML Writer

Transformation of ABAP data to an XML writer.

Source Code

REPORT demo\_sxml\_trafo\_into\_writer.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(writer) =
      CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create(  ) ).
    writer->open\_element( name = 'document' ).
    writer->open\_element( name = 'head' ).
    writer->open\_element( name = 'author' ).
    writer->write\_value( conv string( sy-uname ) ).
    writer->close\_element( ).
    writer->open\_element( name = 'date' ).
    writer->write\_value( conv string( sy-datlo ) ).
    writer->close\_element( ).
    writer->close\_element( ).
    writer->open\_element( name = 'body' ).
    DO 10 TIMES.
      CALL TRANSFORMATION id SOURCE number  = sy-index
                             RESULT XML writer.
    ENDDO.
    writer->close\_element( ).
    writer->close\_element( ).
    DATA(xml) =
      CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    cl\_demo\_output=>display\_xml( xml ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  sxml\_demo=>main( ).

Description

An XML writer is filled with XML data split into the parts head and body. The data content of the element body is taken directly from an internal table using the [identity transformation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID.