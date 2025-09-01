---
title: "ST - Literal XML Elements and Attributes"
description: |
  Literal XML elements are XML elements that are not ST commands or that do not lie within the namespace http://www.sap.com/transformation-templates (namespace prefix tt). Attributes of literal XML elements that do not lie within this namespace are called literal attributes. During serialization, lite
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_xml_literals.htm"
abapFile: "abenst_xml_literals.htm"
keywords: ["do", "if", "data", "abenst", "xml", "literals"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_serial_deserial.htm) →  [ST - Literal Template Content](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_literals.htm) → 

ST - Literal XML Elements and Attributes

Literal XML elements are XML elements that are not ST commands or that do not lie within the namespace http://www.sap.com/transformation-templates (namespace prefix tt). Attributes of literal XML elements that do not lie within this namespace are called literal attributes.

During serialization, literal XML elements and their literal attributes are passed to the target XML document unchanged; in deserializations they are compared with the XML source document word by word. Besides the literal attributes, literal XML elements can also contain certain attributes with the namespace prefix tt, that is, ST-specific attributes, to set the current node and to control behavior during deserialization.

General Literal XML Elements

Syntax

<element *\[*attr*\]* *\[*tt:ref="node">*\]*
                *\[*tt:lax=...*\]*
                *\[*tt:extensible=...*\]*\>
  ...
</element>

Effect

Here, element is the name of the element and attr is a set of optional literal attributes with any name. The optional ST-specific attribute [tt:ref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_ref.htm) sets the current node node for the context of the literal element.

The optional ST-specific attributes [tt:lax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_lax.htm) and [tt:extensible](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_extensible.htm) only have an effect with deserialization. tt:lax determines whether the element name element may differ during deserialization. tt:extensible specifies whether the element’s content can be extended by unspecified elements.

Serializing Literal XML Elements

In serializations, the element beginning <element *\[*attr*\]*\>, together with its literal attributes attr, is passed to the target XML data, the content of the element is serialized, and then the element ending </element> is passed. If there are multiple literal attributes with the same name, only the last one is passed.

Note

For information about handling namespaces, see [tt.namespace, Namespaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_namespace.htm).

Deserializing Literal XML Elements

In deserializations, the beginning of the element is synchronized with the current position of the source XML data. By default, the source XML data must contain an element with the same name with all literal attributes attr of the same content. The order of the literal attributes is of no importance. Superfluous literal attributes of the element in the source document are always ignored. If there are multiple literal attributes with the same name, only the last one is respected.

After a successful comparison of the element beginning, the element content is deserialized and then the element ending is consumed.

Special Form of Literal XML Elements

A special form of literal XML attributes combines the [tt:value command](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_value_elementary.htm) with the above syntax.

Syntax

<element *\[*attr*\]* tt:value-ref="node"
                *\[*tt:lax=...*\]*
                *\[*tt:map=...*\]*
                *\[*tt:length*|*tt:minLength*|*tt:maxLength="len"*\]* />

This special form is a short form of:

<element *\[*attr*\]* *\[*tt:lax=...*\]*\>
  <tt:value ref="node" *\[*map=...*\]*
                       *\[*length*|*minLength*|*maxLength="len"*\]* />
</element>

This allows you to easily formulate the frequent occurring situation when you need to express an elementary value as the content of an XML element.

Attribute tt:extensible cannot be specified together with tt:value-ref.

Example

The following ST program can be used to serialize an elementary data object:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
     <X my\_attr="attr">
       <tt:value ref="ROOT" />
     </X>
  </tt:template>
</tt:transform>

The result of a serialization is as follows if abc is the value of the ABAP data object bound to ROOT.

<X my\_attr="attr">abc</X>

Note that literal text that does not contain anything but blank space (blanks and line breaks) is irrelevant in ST programs by default. For this reason, the serialization does not produce the following, for example:

<X my\_attr="attr">
  abc
</X>

If the results of serializations with indents and line breaks are shown in examples, they are usually used for clarification and are not actually part of the result.

The following ST program can deserialize the result, whereby the literal attribute my\_attr is ignored:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <X>
      <tt:value ref="ROOT"/>
    </X>
  </tt:template>
</tt:transform>

The following ST program shows the short form identical to the program above:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <X tt:value-ref="ROOT" />
  </tt:template>
</tt:transform>

The following ST program triggers the exception CX\_ST\_MATCH\_ELEMENT, because an element X is passed instead of element Y.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <Y>
      <tt:value ref="ROOT"/>
    </Y>
  </tt:template>
</tt:transform>

The following ST program triggers the exception CX\_ST\_MATCH\_ATTRIBUTE even though the element names match, because the expected literal attribute my\_value does not exist in the source document.

<tt:transform
   xmlns:tt="http://www.sap.com/transformation-templates">
   <tt:root name="ROOT"/>
   <tt:template>
     <X my\_value="value">
       <tt:value ref="ROOT" />
     </X>
   </tt:template>
</tt:transform>

A correct attribute name with an incorrect attribute content raises the exception CX\_ST\_MATCH\_TEXT.

Continue
[ST - tt:lax, Name Comparisons of Literal XML Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_lax.htm)
[ST - tt:extensible, Extensibility of Literal XML Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_extensible.htm)