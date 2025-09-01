  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Class Libraries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_libs.htm) →  [iXML Library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib.htm) →  [iXML - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ixml_lib_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20iXML%20-%20Iterator%20for%20Element%20List%2C%20ABENIXML_NAME_LIST_ITERATOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

iXML - Iterator for Element List

Accesses the nodes in an element list in DOM using an iterator.

Source Code   

\* Public class definition
CLASS cl\_demo\_ixml\_name\_list\_itrtr DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_ixml\_name\_list\_itrtr IMPLEMENTATION.
  METHOD main.
    DATA source\_tab TYPE TABLE OF i.
    source\_tab = VALUE #( FOR j = 1 UNTIL j > 10
                        ( ipow( base = 2 exp = j ) ) ).
    FINAL(ixml) = cl\_ixml=>create( ).
    FINAL(document) = ixml->create\_document( ).
    CALL TRANSFORMATION id SOURCE text = \`Powers of 2\`
                                  numbers = source\_tab
                           RESULT XML document.
    FINAL(elements) =
      document->get\_elements\_by\_tag\_name( name = 'item' ).
    FINAL(iterator) = elements->create\_iterator( ).
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

XML data is created in asXML format using the [identity transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenid_trafo_glosry.htm "Glossary Entry") and written directly to an XML document in DOM representation. An element list for all elements of the name item is created from this representation and an iterator is created for this list. The elements are read using the iterator.