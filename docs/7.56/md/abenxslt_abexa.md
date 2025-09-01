---
title: "XSL - Identity Transformation to asXML Format"
description: |
  This example demonstrates the serialization of ABAP data to the asXML format(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt_asxml.htm). Source Code REPORT demo_xsl_transformation. CLASS c1 DEFINITION. PUBLIC SECTION. INTERFACES if_serializable_object. PROTECTED SECTIO
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxslt_abexa.htm"
abapFile: "abenxslt_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abenxslt", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_trafos.htm) →  [XSL Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt.htm) →  [XSL - Identity Transformation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt_id.htm) → 

XSL - Identity Transformation to asXML Format

This example demonstrates the serialization of ABAP data to the [asXML format](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt_asxml.htm).

Source Code

REPORT demo\_xsl\_transformation.
CLASS c1 DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_serializable\_object.
  PROTECTED SECTION.
    DATA carriers TYPE TABLE OF scarr.
ENDCLASS.
CLASS c2 DEFINITION INHERITING FROM c1.
  PUBLIC SECTION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA lines TYPE i.
    METHODS: serialize\_helper
      EXPORTING count TYPE i,
      deserialize\_helper
        IMPORTING count TYPE i.
ENDCLASS.
CLASS c2 IMPLEMENTATION.
  METHOD constructor.
    super->constructor( ).
    SELECT \* UP TO 2 ROWS
           FROM  scarr
           INTO  TABLE @carriers.
  ENDMETHOD.
  METHOD serialize\_helper.
    count = lines( carriers ).
  ENDMETHOD.
  METHOD deserialize\_helper.
    lines = count.
  ENDMETHOD.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES oref  TYPE REF TO object.
    DATA: dref1 TYPE REF TO oref,
          date  TYPE d,
          time  TYPE t,
          dref2 LIKE dref1.
    dref1    = NEW #( ).
    dref1->\* = NEW c2( ).
    CALL TRANSFORMATION id
                        SOURCE xmldat = sy-datum
                               xmltim = sy-uzeit
                               ref  = dref1
                        RESULT XML DATA(xmlstr).
    EXPORT obj = xmlstr TO DATABASE demo\_indx\_blob(xm)
                        ID 'OBJECT'.
    cl\_demo\_output=>display\_xml( xmlstr ).
    IMPORT obj = xmlstr FROM DATABASE demo\_indx\_blob(xm) ID 'OBJECT'.
    CALL TRANSFORMATION id
                        SOURCE XML xmlstr
                        RESULT xmldat = date
                               xmltim = time
                               ref = dref2.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Serialization of data objects to a string xmlstr using the [Identity Transformation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt_id.htm) ID. A date field date, a time field time, and a data reference variable dref1 are serialized. The data reference variable points to an anonymous object reference variable, which in turn points to an object of the class c2. Objects serialized in this way can be stored persistently, for example in a [data cluster](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_cluster_glosry.htm "Glossary Entry"). After the objects are imported from where they are stored, they are deserialized to other data objects. Following deserialization, dref2 points to another anonymous reference variable, such as dref1. This [anonymous data object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") and the instance of the class c2 to which it points are created during deserialization.

The [XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxml_glosry.htm "Glossary Entry") document created during serialization is in [asXML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasxml_glosry.htm "Glossary Entry") format. It is displayed in a browser and has approximately the content described below. In this description, line breaks and indents have been added. The element values contains the asXML representations of the three passed data objects. In the names X-MLDAT and X-MLTIM, "xml" is replaced by "X-ML". The attribute href of the element REF uses the key "d1" to refer to the representation of the associated [anonymous data object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") in the element heap. This uses the key "o3" to refer to the representation of the instance of the class c2, which is also in the element heap. This representation is divided into the object parts for the classes c1 and c2. The object part for c1 contains the representation of the double-row structured internal table carriers. The object part for c2 contains the representation for the output parameter count of the method SERIALIZE\_HELPER.

<?xml version="1.0" encoding="iso-8859-1" ?>
<asx:abap xmlns:asx="http://www.sap.com/abapxml" version="1.0">
  <asx:values>
    <X-MLDAT>2003-04-15</X-MLDAT>
    <X-MLTIM>14:57:53</X-MLTIM>
    <REF href="#d1" />
  </asx:values>
  <asx:heap
       xmlns:xsd="http://www.w3.org/2001/XMLSchema"
       xmlns:abap="http://www.sap.com/abapxml/types/built-in"
       xmlns:cls="http://www.sap.com/abapxml/classes/global"
       xmlns:dic="http://www.sap.com/abapxml/types/dictionary">
    <abap:refObject href="#o3" id="d1" />
    <prg:C2
      xmlns:prg="http://www.sap.com/abapxml/classes/program/XMLTST"
      id="o3">
      <local.C1>
        <CARRIERS>
          <SCARR>
            <MANDT>000</MANDT>
            <CARRID>AA</CARRID>
            <CARRNAME>American Airlines</CARRNAME>
            <CURRCODE>USD</CURRCODE>
            <URL>http://www.aa.com</URL>
          </SCARR>
          <SCARR>
            <MANDT>000</MANDT>
            <CARRID>AB</CARRID>
            <CARRNAME>Air Berlin</CARRNAME>
            <CURRCODE>DEM</CURRCODE>
            <URL>http://www.airberlin.de</URL>
          </SCARR>
        </CARRIERS>
      </local.C1>
      <local.C2>
        <COUNT>2</COUNT>
      </local.C2>
    </prg:C2>
  </asx:heap>
</asx:abap>

For further executable examples, see [asXML, Examples of Mappings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasxml_abexas.htm)