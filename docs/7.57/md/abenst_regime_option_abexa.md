---
title: "ST - Option for Regime"
description: |
  The example demonstrates the representation of ABAP types when using regimes. Source Code REPORT demo_st_regime_option. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, call_transformation CHANGING writer TYPE REF TO cl_sxml_string_writer. CLASS-DATA: time    TYPE t, boolean TYPE x
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_regime_option_abexa.htm"
abapFile: "abenst_regime_option_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenst", "regime", "option", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_abap_values.htm) →  [ST - tt:value, Elementary Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_value_elementary.htm) →  [ST - option, Mapping Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option.htm) →  [ST - option, Mapping Rules for Elementary Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option_format.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - Option for Regime, ABENST_REGIME_OPTION_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ST - Option for Regime

The example demonstrates the representation of ABAP types when using regimes.

Source Code   

REPORT demo\_st\_regime\_option.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      call\_transformation
        CHANGING writer TYPE REF TO cl\_sxml\_string\_writer.
    CLASS-DATA:
      time    TYPE t,
      boolean TYPE xsdboolean,
      numtext TYPE n LENGTH 3.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    time = sy-timlo.
    boolean = abap\_true.
    numtext = '255'.
    FINAL(out) = cl\_demo\_output=>new( )->next\_section( 'XML' ).
    DATA(writer) = cl\_sxml\_string\_writer=>create(
            type = if\_sxml=>co\_xt\_xml10 ).
    call\_transformation( CHANGING writer = writer ).
    DATA(result) = writer->get\_output( ).
    out->write\_xml( result
       )->next\_section( 'JSON' ).
    writer = cl\_sxml\_string\_writer=>create(
      type = if\_sxml=>co\_xt\_json ).
    call\_transformation( CHANGING writer = writer ).
    result = writer->get\_output( ).
    out->write\_json( result
      )->display( ).  ENDMETHOD.
  METHOD call\_transformation.
    CALL TRANSFORMATION demo\_st\_regime\_option
      SOURCE time    = time
             boolean = boolean
             numtext = numtext
    result xml writer.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example passes various types of ABAP data to the transformation DEMO\_ST\_REGIME\_OPTION and represents the result for XML and [JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json.htm). The transformation applies the option [regime](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option_format.htm) to the ABAP data:

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="TIME"/>
  <tt:root name="BOOLEAN"/>
  <tt:root name="NUMTEXT"/>
  <tt:template>
    <array>
      <object>
        <str name="TIME">
          <tt:value ref="TIME"/>
        </str>
        <str name="regime(num) for TIME">
          <tt:value option="regime(num)"
                    ref="TIME"/>
        </str>
        <str name="regime(num),decimals(2) for TIME">
          <tt:value option="regime(num),decimals(2)"
                    ref="TIME"/>
        </str>
        <str name="BOOLEAN">
          <tt:value ref="BOOLEAN"/>
        </str>
        <str name="regime(char) for BOOLEAN">
          <tt:value option="regime(char)"
                    ref="BOOLEAN"/>
        </str>
        <str name="regime(char),format(boolean) for BOOLEAN">
          <tt:value option="regime(char),format(boolean)"
                    ref="BOOLEAN"/>
        </str>
        <str name="NUMTEXT">
          <tt:value ref="NUMTEXT"/>
        </str>
        <str name="regime(bin) for NUMTEXT">
          <tt:value option="regime(bin)"
                    ref="NUMTEXT"/>
        </str>
        <str name="regime(bin),format(uri1) for NUMTEXT">
          <tt:value option="regime(bin),format(uri1)"
                    ref="NUMTEXT"/>
        </str>
      </object>
    </array>
  </tt:template>
</tt:transform>

The transformation creates [JSON-XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_xml_glosry.htm "Glossary Entry") to represent both XML and JSON. The example shows the following:

-   Source Field of Type t
    -   Normal [asXML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_elementary.htm) representation according to the XML schema type xsd:time.
    -   Applying regime(num) gives the number of days since 01.01.0001.
    -   Applying regime(num),decimals(2) appends two decimal places.
-   Source field with reference to the special domain XSDBOOLEAN
    -   Special representation of the value X in the XML schema type xsd:boolean as true.
    -   Applying regime(char) removes the effect of the domain and X is represented according to the XML schema type xsd:string.
    -   Applying regime(char),format(boolean) restores the representation true.
-   Source field of type n with length 3
    -   Normal [asXML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_elementary.htm) representation according to the XML schema type xsd:string (pattern \[0-9\]+).
    -   Applying regime(bin) converts the number in the source field to its binary representation and represents it in the XML schema type xsd:base64Binary.
    -   Applying regime(bin),format(uri1) represents the binary value hexadecimally and adds quotation marks and a prefix.