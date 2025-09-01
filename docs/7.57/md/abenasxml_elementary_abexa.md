  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml.htm) →  [asXML - Examples of Mappings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: asXML - Mapping of Elementary Data Types, ABENASXML_ELEMENTARY_ABEXA, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

asXML - Mapping of Elementary Data Types

The example demonstrates the mapping of elementary data types.

Source Code   

REPORT demo\_asxml\_elementary.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      i          TYPE i            VALUE -123,
      int8       TYPE int8         VALUE -123,
      p          TYPE p DECIMALS 2 VALUE \`-1.23\`,
      decfloat16 TYPE decfloat16   VALUE \`123E+1\`,
      decfloat34 TYPE decfloat34   VALUE \`-3.140000E+02\`,
      f          TYPE f            VALUE \`-3.140000E+02\`,
      c          TYPE c LENGTH 3   VALUE \` Hi\`,
      string     TYPE string       VALUE \` Hello \`,
      n          TYPE n LENGTH 6   VALUE \`001234\`,
      x          TYPE x LENGTH 3   VALUE \`ABCDEF\`,
      xstring    TYPE xstring      VALUE \`456789AB\`,
      d          TYPE d            VALUE \`20020204\`,
      t          TYPE t            VALUE \`201501\`,
      utclong    TYPE utclong      VALUE \`2002-02-04T20:15:01,1234567\`.
    DATA stab TYPE abap\_trans\_srcbind\_tab.
    stab = VALUE #(
      ( name = 'I'          value = REF #( i ) )
      ( name = 'INT8'       value = REF #( int8 ) )
      ( name = 'P'          value = REF #( p ) )
      ( name = 'DECFLOAT16' value = REF #( decfloat16 ) )
      ( name = 'DECFLOAT34' value = REF #( decfloat34 ) )
      ( name = 'F'          value = REF #( f ) )
      ( name = 'C'          value = REF #( c ) )
      ( name = 'STRING'     value = REF #( string ) )
      ( name = 'N'          value = REF #( n ) )
      ( name = 'X'          value = REF #( x ) )
      ( name = 'XSTRING'    value = REF #( xstring ) )
      ( name = 'D'          value = REF #( d ) )
      ( name = 'T'          value = REF #( t ) )
      ( name = 'UTCLONG'    value = REF #( utclong ) ) ) .
    CALL TRANSFORMATION id SOURCE (stab)
                           RESULT XML FINAL(xmlstr).
    cl\_demo\_output=>display\_xml( xmlstr ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The statement CALL TRANSFORMATION binds the data objects of all elementary ABAP types to elements. The values subelement contains these elements. The content of these elements is determined by mapping the bound elementary ABAP data objects.