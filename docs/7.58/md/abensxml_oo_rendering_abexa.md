  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib.htm) →  [sXML - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sXML%20-%20Object-Oriented%20Rendering%2C%20ABENSXML_OO_RENDERING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sXML - Object-Oriented Rendering

[Object-oriented](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib_render_oo.htm) writing of simple XML data.

Source Code   

\* Public class definition
CLASS cl\_demo\_sxml\_oo\_writer DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sxml\_oo\_writer IMPLEMENTATION.
  METHOD main.
    FINAL(writer) =
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
      CATCH cx\_sxml\_state\_error INTO FINAL(error).
        out->write\_text( error->get\_text( ) ).
        RETURN.
    ENDTRY.
    FINAL(xml) =
      CAST cl\_sxml\_string\_writer( writer )->get\_output(  ).
    out->write\_xml( xml ).
  ENDMETHOD.
ENDCLASS.

Description   

This example shows how XML data can be created using the methods for the object-oriented rendering of the interface IF\_SXML\_WRITER.