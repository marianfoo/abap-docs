---
title: "ST - Literal XML Elements and Attributes"
description: |
  Literal XML elements are XML elements that are not ST statements or that are not in the namespace http://www.sap.com/transformation-templates (namespace prefix tt). Attributes of literal XML elements that are not in this namespace are called literal attributes. During serialization, literal XML elem
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_xml_literals.htm"
abapFile: "abenst_xml_literals.htm"
keywords: ["do", "if", "case", "data", "abenst", "xml", "literals"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_serial_deserial.htm) →  [ST - Literal Template Content](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_literals.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Literal%20XML%20Elements%20and%20Attributes%2C%20ABENST_XML_LITERALS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

ST - Literal XML Elements and Attributes

Literal XML elements are XML elements that are not ST statements or that are not in the namespace http://www.sap.com/transformation-templates (namespace prefix tt). Attributes of literal XML elements that are not in this namespace are called literal attributes.

During serialization, literal XML elements and their literal attributes are passed to the target XML document unchanged. In deserializations they are compared with the XML source document word by word. In addition to the literal attributes, literal XML elements can also contain certain attributes with the namespace prefix tt, that is, ST-specific attributes, to set the current node and to control behavior during deserialization.

General Literal XML Elements   

Syntax

<element *\[*attr*\]* *\[*tt:ref="node">*\]*
                *\[*tt:lax=...*\]*
                *\[*tt:extensible=...*\]*\>
  ...
</element>

Effect

Here, element is the name of the element and attr is a set of optional literal attributes with any name. The optional ST-specific attribute [tt:ref](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_ref.htm) sets the current node node for the context of the literal element.

The optional ST-specific attributes [tt:lax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_lax.htm) and [tt:extensible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_extensible.htm) only have an effect during deserialization. tt:lax determines whether the element name element may differ during deserialization. tt:extensible specifies whether the content of the element can be extended by unspecified elements.

Serializing Literal XML Elements   

In serializations, the element beginning <element *\[*attr*\]*\> and its literal attributes attr are passed to the target XML data, the content of the element is serialized, and then the element ending </element> is passed. If there are multiple identically named literal attributes, only the last one is passed.

Hint

For information about handling namespaces, see [tt.namespace, Namespaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_namespace.htm).

Deserializing Literal XML Elements   

In deserializations, the beginning of the element is compared with the current position of the outbound XML data. By default, the source XML data must contain an identically named element with all literal attributes attr of the same content. The order of the literal attributes is of no importance. Superfluous literal attributes of the element in the source document are always ignored. If there are multiple identically named literal attributes, only the last one is respected.

After a successful comparison of the element beginning, the element content is deserialized and then the element ending is consumed.

Special Form of Literal XML Elements   

A special form of literal XML attributes combines the [tt:value statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_value_elementary.htm) with the above syntax.

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

This makes it easy to formulate the frequent use case of expressing an elementary value as the content of an XML element.

The attribute tt:extensible cannot be specified together with tt:value-ref.

Example

The following ST program DEMO\_ST\_XML\_LITERALS1 can be used to serialize an elementary data object:

<?sap.transform simple?>
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

It should be noted that literal text that contains nothing but blank spaces (blanks and line breaks) is irrelevant in ST programs by default. For this reason, the serialization does not produce the following, for example:

<X my\_attr="attr">
  abc
</X>

If the results of serializations with indents and line breaks are shown in examples, they are usually used for clarification and are not actually part of the result.

The following ST program DEMO\_ST\_XML\_LITERALS2 can deserialize the result, whereby the literal attribute my\_attr is ignored:

<?sap.transform simple?>
<tt:transform
   xmlns:tt="http://www.sap.com/transformation-templates">
   <tt:root name="ROOT"/>
   <tt:template>
    <X>
       <tt:value ref="ROOT"/>
     </X>
  </tt:template>
</tt:transform>

The following ST program DEMO\_ST\_XML\_LITERALS3 shows the equivalent short form to the program above:

<?sap.transform simple?>
<tt:transform
   xmlns:tt="http://www.sap.com/transformation-templates">
   <tt:root name="ROOT"/>
   <tt:template>
    <X tt:value-ref="ROOT" />
  </tt:template>
</tt:transform>

The following ST program DEMO\_ST\_XML\_LITERALS4 raises the exception CX\_ST\_MATCH\_ELEMENT, because an element X is returned instead of element Y.

<?sap.transform simple?>
<tt:transform
   xmlns:tt="http://www.sap.com/transformation-templates">
   <tt:root name="ROOT"/>
   <tt:template>
    <Y>
       <tt:value ref="ROOT"/>
     </Y>
  </tt:template>
</tt:transform>

The following ST program DEMO\_ST\_XML\_LITERALS5 raises the exception CX\_ST\_MATCH\_ATTRIBUTE despite identical element names because the expected literal attribute my\_value does not exist in the source document.

<?sap.transform simple?>
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
[ST - tt:lax, Name Comparisons of Literal XML Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_lax.htm)
[ST - tt:extensible, Extensibility of Literal XML Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_extensible.htm)