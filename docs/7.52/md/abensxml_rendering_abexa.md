  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [sXML Library](javascript:call_link\('abenabap_sxml_lib.htm'\)) →  [sXML Library, Examples](javascript:call_link\('abenabap_sxml_lib_abexas.htm'\)) → 

sXML Library, Token-Based Rendering

[Token-based](javascript:call_link\('abenabap_sxml_lib_render_token.htm'\)) writing of simple XML data.

Source Code

REPORT demo\_sxml\_token\_writer.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(writer) =
      CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create(  ) ).
    TRY.
        writer->open\_element( name = 'texts'
                              nsuri = 'http://www.sap.com/abapdemos'
                              prefix = 'demo' ).
        writer->open\_element( name = 'text'
                              nsuri = 'http://www.sap.com/abapdemos' ).
        writer->write\_attribute( name = 'format' value = 'bold' ).
        writer->write\_attribute( name = 'level'  value = '1' ).
        writer->write\_value( 'aaaa' ).
        writer->close\_element( ).
        writer->open\_element( name = 'text'
                              nsuri = 'http://www.sap.com/abapdemos' ).
        writer->write\_attribute( name = 'format' value = 'italic' ).
        writer->write\_attribute( name = 'level'  value = '2' ).
        writer->write\_value( 'bbbb' ).
        writer->close\_element( ).
        writer->close\_element( ).
      CATCH cx\_sxml\_state\_error INTO DATA(error).
        cl\_demo\_output=>display\_text( error->get\_text( ) ).
        RETURN.
    ENDTRY.
    DATA(xml) =
      CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    cl\_demo\_output=>display\_xml( xml ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  sxml\_demo=>main( ).

Description

This example shows how XML data can be created using the methods OPEN\_ELEMENT, WRITE\_ATTRIBUTE, WRITE\_VALUE, CLOSE\_ELEMENT, of the interface IF\_SXML\_WRITER.