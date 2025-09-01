  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_ixml_lib_abexas.htm) → 

iXML - Access Using Node List

Accesses subnodes of a DOM using a node list.

Source Code

REPORT demo\_ixml\_access\_node\_list.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(ixml)           = cl\_ixml=>create( ).
    DATA(stream\_factory) = ixml->create\_stream\_factory( ).
    DATA(istream)        = stream\_factory->create\_istream\_string(
      \`<texts>\`                              &&
      \`  <text1 format="bold">aaa</text1>\`   &&
      \`  <text2 format="italic">bbb</text2>\` &&
      \`</texts>\` ).
    DATA(document)       = ixml->create\_document( ).
    DATA(parser)         = ixml->create\_parser(
                             stream\_factory = stream\_factory
                             istream        = istream
                             document       = document ).
    DATA(rc) = parser->parse( ).
    IF rc <> ixml\_mr\_parser\_ok.
      ... "Error handling
      RETURN.
    ENDIF.
    DATA(element) = document->get\_root\_element( ).
    cl\_demo\_output=>write\_text( |{ element->get\_name( ) }| ).
    DATA(nodes) = element->get\_children( ).
    DO nodes->get\_length( ) TIMES.
      DATA(child) = nodes->get\_item( sy-index - 1 ).
      cl\_demo\_output=>write\_text( |{ child->get\_name( ) } | &&
                                  |{ child->get\_value( ) }| ).
    ENDDO.
    cl\_demo\_output=>display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is first transformed to an input stream object and the object is then imported into a DOM object using a parser object. If parsed successfully, the root node and a list of its subnodes are extracted. All subnodes are then extracted by a loop across the node list.