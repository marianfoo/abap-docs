  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Class Libraries for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_libs.htm) →  [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm) →  [sXML Library, Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_abexas.htm) → 

sXML Library, Namespace Declarations in Token-Based Rendering

Namespace declarations in [token-based rendering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib_render_token.htm).

Source Code

REPORT demo\_sxml\_token\_writer\_nsuri.
CLASS sxml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS sxml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(writer) =
      CAST if\_sxml\_writer( cl\_sxml\_string\_writer=>create(  ) ).
    DATA(nsuri1) = \`http://www.sap.com/abapdemos\`.
    DATA(nsuri2) = \`http://www.sap.com/abapdemos/sub\`.
    writer->open\_element( name = 'texts'
                          nsuri = nsuri1
                          prefix = 'demo' ).
    writer->write\_namespace\_declaration( nsuri = nsuri2
                          prefix = 'sub' ).
    writer->open\_element( name = 'text'
                          nsuri = nsuri2 ).
    writer->write\_value( 'aaaa' ).
    writer->close\_element( ).
    writer->open\_element( name = 'text'
                          nsuri = nsuri2 ).
    writer->write\_value( 'bbbb' ).
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

The examples shows how the parameters NSURI and PREFIX of the token-based rendering methods of the interface IF\_SXML\_WRITER can be created.