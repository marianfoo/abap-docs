  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_serial_deserial.htm) → 

ST - tt:attribute, Non-Literal Attributes

Syntax

<tt:attribute name="attr" *\[*ref="node"*\]*\>
  ...
</tt:attribute>

Effect

You define the non-literal attributes of an ST program using the statement tt:attribute. A non-literal attribute is assigned to an attribute of an XML element of the XML data. In serializations, the content of the non-literal attribute sets the value of the attribute in the XML data; in deserializations, the value of the attribute in the XML data is read and processed.

You can specify this statement one or more times within a literal XML element before its subelements. Each statement defines a non-literal attribute of the current XML element with the name attr specified in name. The optional attribute ref sets the [current node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_ref.htm) node for the context of the non-literal attribute attr.

Serializing Non-Literal Attributes

During serialization, the name attr of the attribute is written together with \=" or \=' into the definition of the current XML element. After that, the content of tt:attribute is serialized and the result is written after attr=" or attr=' . The result of the serialization must not be structured, which means that it must not contain subelements. Finally, the attribute is completed with " or '.

Hint

In valid XML data, the names of the attributes of an XML element must be unique. For performance reasons, this is not checked in serializations of non-literal attributes; the application developers themselves are responsible.

Deserializing Non-Literal Attributes

In deserializations, the name of the attribute is compared to the attributes of the current XML element in the source XML data. The order of the attributes is not relevant. The deserialization fails if the attribute does not exist in the inbound stream. After that, the value of the attribute is deserialized according to the content of tt:attribute and the closing character is compared. The deserialization fails if not the entire content of the attribute is deserialized. Surplus attributes of the inbound stream are ignored.

Special Form of Non-Literal Attributes

Syntax

<tt:attribute name="attr" value-ref="node"
                         *\[*map=...*\]* />

Effect

This special form of non-literal attributes combines the tt:value statement with the general syntax shown above.

This special form is a short form of:

<tt:attribute name="attr">
  <tt:value ref="node" *\[*map=...*\]* />
</tt:attribute>

This allows the simple formulation of the frequent situation where an elementary value is expressed as the content of an attribute.

Example

In the ST program below, the values of the data roots ROOT1 and ROOT2 are serialized as values of the attributes attr1 and attr2 of element X or are deserialized from them, respectively.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:template>
    <X>
      <tt:attribute name="attr1" value-ref="ROOT1" />
      <tt:attribute name="attr2" value-ref="ROOT2" />
      <Y>...</Y>
    </X>
  </tt:template>
</tt:transform>

If the values "Text1" and "Text2" are passed to ROOT1 and ROOT2, the result of a serialization is:

<X attr1="Text1" attr2="Text2">
  <Y>...</Y>
</X>

To deserialize the above result again, you can use the ST program below, even though the sequence of the attributes is different.

tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:template>
    <X>
      <tt:attribute name="attr2" value-ref="ROOT2" />
      <tt:attribute name="attr1" value-ref="ROOT1" />
      <Y>...</Y>
    </X>
  </tt:template>
</tt:transform>