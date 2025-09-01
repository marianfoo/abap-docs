  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Class Libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML Library, Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

iXML Library, Parse to DOM

Parses simple XML data to a DOM representation.

Source Code

REPORT demo\_ixml\_parsing.
CLASS ixml\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS
      main.
  PRIVATE SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS:
      process\_errors
        IMPORTING parser TYPE REF TO if\_ixml\_parser,
      process\_dom
        IMPORTING document TYPE REF TO if\_ixml\_node.
ENDCLASS.
CLASS ixml\_demo IMPLEMENTATION.
  METHOD main.
    DATA(ixml) = cl\_ixml=>create( ).
    DATA(stream\_factory) = ixml->create\_stream\_factory( ).
    DATA(document) = ixml->create\_document( ).
    DATA(parser) = ixml->create\_parser(
      document = document
      stream\_factory = stream\_factory
      istream = stream\_factory->create\_istream\_string( string =
        \`<?xml version="1.0"?>\` &&
        \`<order number="4711">\` &&
        \` <head>\` &&
        \` <status>confirmed</status>\` &&
        \` <date format="mm-dd-yyyy">07-19-2012</date>\` &&
        \` </head>\` &&
        \` <body>\` &&
        \` <item units="2" price="17.00">Part No. 0110</item>\` &&
        \` <item units="1" price="10.50">Part No. 1609</item>\` &&
        \` <item units="5" price="12.30">Part No. 1710</item>\` &&
        \` </body>\` &&
        \`</order>\` ) ).
    IF parser->parse( ) <> 0.
      process\_errors( parser ).
    ELSE.
      process\_dom( document ).
    ENDIF.
    out->display( ).
  ENDMETHOD.
  METHOD process\_dom.
    IF document IS INITIAL.
      RETURN.
    ENDIF.
    out = cl\_demo\_output=>new(
      )->begin\_section( 'DOM Tree' ).
    DATA(iterator) = document->create\_iterator( ).
    DATA(node) = iterator->get\_next( ).
    WHILE NOT node IS INITIAL.
      DATA(indent) = node->get\_height( ) \* 2.
      CASE node->get\_type( ).
        WHEN if\_ixml\_node=>co\_node\_element.
          DATA(attributes) = node->get\_attributes( ).
          out->write( |Element:{ repeat( val = \` \`
                                         occ = indent + 2  )
                              }{ node->get\_name( ) }| ).
          IF NOT attributes IS INITIAL.
            DO attributes->get\_length( ) TIMES.
              DATA(attr) = attributes->get\_item( sy-index - 1 ).
              out->write( |Attribute:{ repeat( val = \` \`
                                               occ = indent )
                                     }{ attr->get\_name( ) } = {
                                        attr->get\_value( ) } | ).
            ENDDO.
          ENDIF.
        WHEN if\_ixml\_node=>co\_node\_text OR
        if\_ixml\_node=>co\_node\_cdata\_section.
          out->write( |Text:{ repeat( val = \` \` occ = indent + 5 )
                           }{ node->get\_value( ) }| ).
      ENDCASE.
      node = iterator->get\_next( ).
    ENDWHILE.
  ENDMETHOD.
  METHOD process\_errors.
    DO parser->num\_errors(
         min\_severity = if\_ixml\_parse\_error=>co\_warning ) TIMES.
      IF parser->get\_error(
           index = sy-index - 1
           min\_severity =  if\_ixml\_parse\_error=>co\_warning
             )->get\_severity( ) = if\_ixml\_parse\_error=>co\_warning.
        out->write\_text( parser->get\_error(
          index = sy-index - 1
          min\_severity = if\_ixml\_parse\_error=>co\_warning
            )->get\_reason( ) ).
      ELSE.
        out->write\_text( parser->get\_error(
          index = sy-index - 1
          min\_severity = if\_ixml\_parse\_error=>co\_warning
            )->get\_reason( ) ).
      ENDIF.
    ENDDO.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  ixml\_demo=>main( ).

Description

XML data is first transformed to an input stream object and the object is then imported into a DOM object using a parser object. If parsed successfully, the nodes of the DOM object are compiled as output texts in the method process\_dom.

An [iterator](javascript:call_link\('abenabap_ixml_lib_dom_iterat_read.htm'\)) is used to access the nodes. Each element is [checked](javascript:call_link\('abenabap_ixml_lib_dom_direct_read.htm'\)) to see whether it has attributes. Existing attributes are then read.

If the XML data has errors, for example because a closing tag was renamed, the method process\_errors is executed and the appropriate error message is displayed.