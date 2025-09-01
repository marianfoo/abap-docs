  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Canonical XML Representation (asXML)](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Examples of Mappings](javascript:call_link\('abenasxml_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asXML%20-%20Mapping%20of%20Anonymous%20Data%20Objects%2C%20ABENASXML_DATA_OBJECT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

asXML - Mapping of Anonymous Data Objects

The example demonstrates the mapping of anonymous data objects.

Source Code   

\* CCDEF
CLASS serializable DEFINITION.
  PUBLIC SECTION.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_asxml\_data\_object DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_asxml\_data\_object IMPLEMENTATION.
  METHOD main.
    DATA dref   TYPE REF TO decfloat34.
    DATA xmlstr TYPE xstring.
    CREATE DATA dref.
    dref->\* = '1.23456'.
    CALL TRANSFORMATION id SOURCE dref = dref
                           RESULT XML xmlstr.
    out->write\_xml( xmlstr ).
  ENDMETHOD.
ENDCLASS.

Description   

The anonymous data object referenced by dref is mapped to a subelement of the element heap. An XML reference mechanism is used to associate this subelement with the reference variables in the element values. The element name is the XML schema type name precisionDecimal of the built-in ABAP type decfloat34 from the namespace abap="http://www.sap.com/abapxml/types/built-in".