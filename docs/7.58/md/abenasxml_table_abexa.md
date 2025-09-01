  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Canonical XML Representation (asXML)](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Examples of Mappings](javascript:call_link\('abenasxml_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asXML%20-%20Mapping%20of%20Tables%2C%20ABENASXML_TABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

asXML - Mapping of Tables

This example demonstrates the mapping of internal tables.

Source Code   

\* Public class definition
CLASS cl\_demo\_asxml\_table DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_asxml\_table IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE TABLE OF i.
    itab = VALUE #( FOR j = 1 UNTIL j > 3 ( j ) ).
    CALL TRANSFORMATION id
                        SOURCE table = itab
                        RESULT XML FINAL(xmlstr).
    out->write\_xml( xmlstr ).
  ENDMETHOD.
ENDCLASS.

Description   

Every line of the internal table itab is mapped to a subelement item of the table.