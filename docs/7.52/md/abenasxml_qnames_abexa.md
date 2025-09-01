  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [asXML - Canonical XML Representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm) →  [asXML, Examples of Mappings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_abexas.htm) → 

asXML, Mapping of Qualified Names

This example demonstrates the mapping of XML schema data types for qualified names.

Source Code

REPORT demo\_asxml\_qname.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: name1  TYPE string,
          name2  TYPE string,
          qname1 TYPE xsdqname,
          qname2 TYPE xsdqname.
    DATA xmlstring TYPE string.
    name1 = qname1 = '{test\_uri}Value1'.
    name2 = qname2 = '{test\_uri}Value2'.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Serialization of Strings' ).
    CALL TRANSFORMATION id SOURCE test1 = name1
                                  test2 = name2
                           RESULT XML xmlstring.
    out->write\_xml( xmlstring ).
    out->next\_section( 'Serialization of XSDQNAME' ).
    CALL TRANSFORMATION id SOURCE test1 = qname1
                                  test2 = qname2
                           RESULT XML xmlstring.
    out->write\_xml( xmlstring ).
    out->next\_section( 'Source for Deserialization' ).
    xmlstring =
    \`<?xml version="1.0" encoding="utf-8" ?>\`   &&
    \`<asx:abap \`                                &&
      \`xmlns:asx="http://www.sap.com/abapxml" \` &&
      \`xmlns:demox="my\_uri"  version="1.0">\`    &&
    \`<asx:values >\`                             &&
    \`<TEST1>demox:Value1</TEST1>\`               &&
    \`<TEST2>Value2</TEST2>\`                     &&
    \`</asx:values>\`                             &&
    \`</asx:abap>\`.
    out->write\_xml( xmlstring ).
    out->next\_section( 'Deserialization' ).
    CALL TRANSFORMATION id SOURCE XML xmlstring
                           RESULT test1 = name1
                                  test2 = name2.
    CALL TRANSFORMATION id SOURCE XML xmlstring
                           RESULT test1 = qname1
                                  test2 = qname2.
    out->display(
      |{ name1  WIDTH = 20 }{ name2  WIDTH = 20 }| & |\\n| &
      |{ qname1 WIDTH = 20 }{ qname2 WIDTH = 20 }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, only two serializations of ABAP data objects are performed to asXML format. Their content corresponds to "{URI}name" format. In the first serialization, the data objects have the type string; in the second they have the type XSDQNAME. In the first case, the content is passed unchanged, but in the second case it is interpreted as a qualified name and the associated namespace declarations are created.

Next, XML data is created, which contains one element with a namespace prefix and one without a namespace prefix. This data is deserialized to ABAP data objects with the type string and the type XSDQNAME. The element with a namespace prefix is deserialized to the data object with the type string without being changed. However, when deserializing to the data object of the type XSDQNAME, a conversion to the format "{URI}name" takes place. The element with no namespace prefix is deserialized without being changed in both cases, since only the empty standard namespace exists.