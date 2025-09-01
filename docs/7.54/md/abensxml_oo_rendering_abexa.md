  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib.htm) →  [sXML Library, Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_abexas.htm) → 

sXML Library, Object-Oriented Rendering

[Object-oriented](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_render_oo.htm) writing of simple XML data.

Source Code

REPORT demo\_sxml\_oo\_writer.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(writer) =
      CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create(  ) ).
    DATA open\_element TYPE REF TO if\_sxml\_open\_element.
    DATA value TYPE REF TO if\_sxml\_value\_node.
    TRY.
        open\_element = writer->new\_open\_element(
                         name = 'texts'
                         nsuri = 'http://www.sap.com/abapdemos'
                         prefix = 'demo' ).
        writer->write\_node( open\_element ).
        open\_element = writer->new\_open\_element(
                         name = 'text'
                         nsuri = 'http://www.sap.com/abapdemos' ).
        open\_element->set\_attribute( name = 'format'
                                     value = 'bold' ).
        open\_element->set\_attribute( name = 'level'
                                     value = '1' ).
        writer->write\_node( open\_element ).
        value = writer->new\_value( ).
        value->set\_value( 'aaaa' ).
        writer->write\_node( value ).
        writer->write\_node( writer->new\_close\_element( ) ).
        open\_element = writer->new\_open\_element(
                         name = 'text'
                         nsuri = 'http://www.sap.com/abapdemos' ).
        open\_element->set\_attribute( name = 'format'
                                     value = 'italic' ).
        open\_element->set\_attribute( name = 'level'
                                     value = '2' ).
        writer->write\_node( open\_element ).
        value = writer->new\_value( ).
        value->set\_value( 'bbbb' ).
        writer->write\_node( value ).
        writer->write\_node( writer->new\_close\_element( ) ).
        writer->write\_node( writer->new\_close\_element( ) ).
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

This example shows how XML data can be created using the methods for the object-oriented rendering of the interface IF\_SXML\_WRITER.