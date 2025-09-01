---
title: "Syntax"
description: |
  <tt:copy ref='node' /> Effect Command tt:copy is used to serialize in and deserialize from the asXML format(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml.htm). It can be used on all data objects with the exception of reference variables or objects containin
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_copy.htm"
abapFile: "abenst_tt_copy.htm"
keywords: ["insert", "loop", "do", "if", "try", "data", "internal-table", "abenst", "copy"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_abap_values.htm) → 

ST - tt:copy, asXML Format

Syntax

<tt:copy *\[*ref="node"*\]* />

Effect

Command tt:copy is used to serialize in and deserialize from the [asXML format](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml.htm). It can be used on all data objects with the exception of reference variables or objects containing reference variables as components.

The optional attribute ref can be used to define the [current node](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_ref.htm) for the command. If ref is not specified, the current node of the surrounding element is used.

Serialization

In serializations, the entire ABAP data object that is bound to the current node, along with all its components, is recursively transformed to [asXML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml.htm) format and used in the XML data in place of the command.

Deserialization

In deserializations, the XML data stream is interpreted as [asXML format](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml.htm) and its values are passed to the ABAP data object that is bound to the current node.

Note

In serializations of data objects using tt:copy, it is important to note that a node will not be automatically inserted for the asXML format created. To get valid XML data, the node must be explicitly specified in the template. If not, the XML data cannot be deserialized. The only exceptions are structures with a single component or internal tables with a single row. However, these do not generally have any practical use.

Example

The following simple transformation serializes the ABAP data object that is bound to data root ROOT under the node <node> into the asXML format. If the node <node> is not specified, the transformation would not produce valid XML data and deserialization would raise an exception.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <node>
      <tt:copy  ref="ROOT" />
    </node>
  </tt:template>
</tt:transform>

When the ABAP program from the example in section [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_loop.htm) calls this transformation, the serialization process has the following result:

<node>
  <item>
    <KEY>2</KEY>
    <VALUES>
      <item>4</item>
      <item>8</item>
      <item>16</item>
    </VALUES>
  </item>
  <item>
    <KEY>3</KEY>
    <VALUES>
      <item>9</item>
      <item>27</item>
      <item>81</item>
    </VALUES>
  </item>
  <item>
    <KEY>4</KEY>
    <VALUES>
      <item>16</item>
      <item>64</item>
      <item>256</item>
    </VALUES>
  </item>
</node>

The simple transformation is [symmetrical](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_symmetry.htm).