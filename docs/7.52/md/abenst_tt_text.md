---
title: "Syntax"
description: |
  ...>literal<... ...><tt:text>literal</tt:text><... Effect Here, literal stands for literal text. Each piece of content of a template that is not an element (in other words, not positioned between < >), is literal text. This includes line breaks and blanks that are combined under the term whitespace.
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_text.htm"
abapFile: "abenst_tt_text.htm"
keywords: ["do", "if", "data", "abenst", "text"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_serial_deserial.htm) →  [ST - Literal Template Content](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_literals.htm) → 

ST - tt:text, Literal Text

Syntax

...>literal<...

...><tt:text>literal</tt:text><...

Effect

Here, literal stands for literal text. Each piece of content of a template that is not an element (in other words, not positioned between < >), is literal text. This includes line breaks and blanks that are combined under the term whitespace.

The first line above shows unmarked literal text. In ST programs, literal text can also be marked using the ST command tt:text, indicated in the second line. The difference between these variants is that an unmarked literal text literal is ignored in serializations and deserializations if it contains nothing but blanks. A marked text is never ignored.

Serializing Literal Text

If a literal text is respected, all its characters are written to the target XML data. This includes any whitespace. No characters are written if a text is ignored.

Deserializing Literal Text

The literal text of the XML source document is compared character by character (including blanks and line breaks) to the ST program and consumed. This means that at every position in the inbound stream at which there is literal text, the same text must appear in the ST program and must also be respected there.

Note

Literal texts with other characters (except whitespace) should be used sparingly; always identified with tt:text, and should not span multiple lines because line breaks and indents are potential sources of errors in deserializations. The only intended use of unmarked texts is to format the ST program with line breaks and blanks (indents). To avoid problems in deserializations of literal texts, they can be skipped using [tt:skip](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_skip.htm).

Example

The following ST program contains four elements, X1 to X4, with literal text.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:template>
    <X0>
      <X1> a b c </X1>
      <X2><tt:text> d e f </tt:text></X2>
      <X3>     </X3>
      <X4><tt:text>     </tt:text></X4>
    </X0>
  </tt:template>
</tt:transform>

The result of a serialization is as follows, with the blanks in X3 being ignored:

<X0><X1> a b c </X1><X2> d e f </X2><X3/><X4> </X4></X0>

This XML data can itself be deserialized again by the above ST program. The ST program below raises the exception CX\_ST\_MATCH\_ELEMENT, because no blanks exist in the ST program for the blanks in the inbound stream within X4, due to the missing tt:text marking.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:template>
    <X0>
      <X1>a b c</X1>
      <X2><tt:text>d e f</tt:text></X2>
      <X3>     </X3>
      <X4>     </X4>
    </X0>
  </tt:template>
</tt:transform>

The ST program below cannot deserialize the XML data either, because it expects line breaks in X1 and more blanks due to the indent.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:template>
    <X0>
      <X1>
        a b c
      </X1>
      <X2><tt:text>d e f</tt:text></X2>
      <X3>     </X3>
      <X4>     </X4>
    </X0>
  </tt:template>
</tt:transform>

The ST program below can deserialize the XML data; all elements are skipped using [tt:skip](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_skip.htm).

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:template>
    <X0>
      <X1><tt:skip /></X1>
      <X2><tt:skip /></X2>
      <X3><tt:skip /></X3>
      <X4><tt:skip /></X4>
    </X0>
  </tt:template>
</tt:transform>