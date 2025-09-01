---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_ixml_parsing DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. PRIVATE SECTION. METHODS: process_errors IMPORTING parser TYPE REF TO if_ixml_parser, process_dom IMPORTING document TYPE REF TO
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenixml_parsing_abexa.htm"
abapFile: "abenixml_parsing_abexa.htm"
keywords: ["do", "while", "if", "case", "method", "class", "data", "abenixml", "parsing", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Parse%20to%20DOM%2C%20ABENIXML_PARSING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Parse to DOM

Parses simple XML data to a DOM representation.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_parsing DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS:
      process\_errors
        IMPORTING parser TYPE REF TO if\_ixml\_parser,
      process\_dom
        IMPORTING document TYPE REF TO if\_ixml\_node.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_parsing IMPLEMENTATION.
  METHOD main.
    FINAL(ixml) = cl\_ixml=>create( ).
    FINAL(stream\_factory) = ixml->create\_stream\_factory( ).
    FINAL(document) = ixml->create\_document( ).
    FINAL(parser) = ixml->create\_parser(
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
  ENDMETHOD.
  METHOD process\_dom.
    IF document IS INITIAL.
      RETURN.
    ENDIF.
    out->begin\_section( 'DOM Tree' ).
    FINAL(iterator) = document->create\_iterator( ).
    DATA(node) = iterator->get\_next( ).
    WHILE NOT node IS INITIAL.
      FINAL(indent) = node->get\_height( ) \* 2.
      CASE node->get\_type( ).
        WHEN if\_ixml\_node=>co\_node\_element.
          FINAL(attributes) = node->get\_attributes( ).
          out->write( |Element:{ repeat( val = \` \`
                                         occ = indent + 2  )
                              }{ node->get\_name( ) }| ).
          IF NOT attributes IS INITIAL.
            DO attributes->get\_length( ) TIMES.
              FINAL(attr) = attributes->get\_item( sy-index - 1 ).
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

Description   

XML data is first transformed to an input stream object and then imported into a DOM object using a parser object. If parsed successfully, the nodes of the DOM object are compiled as output texts in the method process\_dom.

An [iterator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_dom_iterat_read.htm) is used to access the nodes. Each element is [checked](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_dom_direct_read.htm) to see whether it has attributes. Existing attributes are then read.

If the XML data has errors, for example because a closing tag was renamed, the method process\_errors is executed, and the appropriate error message is displayed.