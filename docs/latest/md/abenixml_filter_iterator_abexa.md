  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Class Libraries](javascript:call_link\('abenabap_xml_libs.htm'\)) →  [iXML Library](javascript:call_link\('abenabap_ixml_lib.htm'\)) →  [iXML - Examples](javascript:call_link\('abenabap_ixml_lib_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Iterator%20Filters%2C%20ABENIXML_FILTER_ITERATOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

iXML - Iterator Filters

Filtered access to nodes in DOM using an iterator.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_filter\_iterator DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_filter\_iterator IMPLEMENTATION.
  METHOD main.
    DATA source\_tab TYPE TABLE OF i.
    source\_tab = VALUE #( FOR j = 1 UNTIL j > 10
                        ( ipow( base = 2 exp = j ) ) ).
    FINAL(ixml) = cl\_ixml=>create( ).
    FINAL(document) = ixml->create\_document( ).
    CALL TRANSFORMATION id SOURCE text = \`Powers of 2\`
                                  numbers = source\_tab
                           RESULT XML document.
    FINAL(iterator) = document->create\_iterator\_filtered(
                      document->create\_filter\_and(
                        filter1 = document->create\_filter\_node\_type(
                          node\_types = if\_ixml\_node=>co\_node\_element )
                        filter2 = document->create\_filter\_name\_ns(
                          name = 'item' ) ) ).
    DATA target\_tab LIKE source\_tab.
    DO.
      FINAL(node) = iterator->get\_next( ).
      IF node IS INITIAL.
        EXIT.
      ENDIF.
      APPEND node->get\_value( ) TO target\_tab.
    ENDDO.
    out->write( target\_tab ).
  ENDMETHOD.
ENDCLASS.

Description   

XML data is created in asXML format using the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") and written directly to an XML document in DOM representation. An iterator is created for the entire document that is linked with a filter. The filter is an and join between two filters and selects by node type and name. The iterator only returns the selected nodes.