  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Canonical XML Representation (asXML)](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Examples of Mappings](javascript:call_link\('abenasxml_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: asXML - Mapping of Objects, ABENASXML_OBJECT_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

asXML - Mapping of Objects

This example demonstrates the mapping of referenced objects.

Source Code   

REPORT demo\_asxml\_object.
CLASS serializable DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_serializable\_object.
    DATA attr TYPE string VALUE \`Attribute\`.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: oref TYPE REF TO serializable,
          xmlstr TYPE xstring.
    CREATE OBJECT oref.
    CALL TRANSFORMATION id
                        SOURCE object = oref
                        RESULT XML xmlstr.
    cl\_demo\_output=>display\_xml( xmlstr ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The attributes of the object referenced by oref are mapped to subelements of the heap element. The association between the reference variables in the values element and the object in heap takes place using an XML reference mechanism.