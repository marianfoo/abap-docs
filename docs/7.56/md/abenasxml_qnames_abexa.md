  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Canonical XML Representation (asXML)](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Examples of Mappings](javascript:call_link\('abenasxml_abexas.htm'\)) → 

asXML - Mapping of Qualified Names

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

In this example, only two serializations of ABAP data objects are performed to asXML format whose content corresponds to the "{URI}name" format. In the first serialization, the data objects have the type string. In the second they have the type XSDQNAME. In the first case, the content is passed unchanged, but in the second case it is interpreted as a qualified name and the associated namespace declarations are created.

Next, XML data is created, which contains one element with a namespace prefix and one without a namespace prefix. This data is deserialized to ABAP data objects with the type string and the type XSDQNAME. The element with a namespace prefix is deserialized to the data object with the type string unchanged. However, when deserializing to the data object of the type XSDQNAME, a conversion to the format "{URI}name" takes place. The element with no namespace prefix is deserialized unchanged in both cases, since only the empty standard namespace exists.