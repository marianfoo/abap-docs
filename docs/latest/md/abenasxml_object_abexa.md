  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Canonical XML Representation (asXML)](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Examples of Mappings](javascript:call_link\('abenasxml_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asXML%20-%20Mapping%20of%20Objects%2C%20ABENASXML_OBJECT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

asXML - Mapping of Objects

This example demonstrates the mapping of referenced objects.

Source Code   

\* CCDEF
CLASS serializable DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_serializable\_object.
    DATA attr TYPE string VALUE \`Attribute\`.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_asxml\_object DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_asxml\_object IMPLEMENTATION.
  METHOD main.
    DATA: oref   TYPE REF TO serializable,
          xmlstr TYPE xstring.
    CREATE OBJECT oref.
    CALL TRANSFORMATION id
                        SOURCE object = oref
                        RESULT XML xmlstr.
    out->write\_xml( xmlstr ).
  ENDMETHOD.
ENDCLASS.

Description   

The attributes of the object referenced by oref are mapped to subelements of the heap element. The association between the reference variables in the values element and the object in heap takes place using an XML reference mechanism.