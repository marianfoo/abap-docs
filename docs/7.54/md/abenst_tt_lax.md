---
title: "Syntax"
description: |
  ... tt:lax='on''off''deep-on''deep-off' ... Effect When deserializing literal XML elements, the optional attribute tt:lax can be used to control whether the name of an element is respected. -   If tt:lax is specified with the value ″off″, the inbound XML stream must contain an element of th
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_lax.htm"
abapFile: "abenst_tt_lax.htm"
keywords: ["do", "if", "data", "abenst", "lax"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_serial_deserial.htm) →  [ST - Literal Template Content](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_literals.htm) →  [ST - Literal XML Elements and Attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_xml_literals.htm) → 

ST - tt:lax, Name Comparisons of Literal XML Elements

Syntax

... tt:lax="on"*|*"off"*|*"deep-on"*|*"deep-off" ...

Effect

When deserializing literal XML elements, the optional attribute tt:lax can be used to control whether the name of an element is respected.

-   If tt:lax is specified with the value ″off″, the inbound XML stream must contain an element of the same name with all literal attributes attr of the same content.

-   If tt:lax is specified with the value ″on″, the element in the inbound XML stream can have any name, but the expected attributes must still match.

-   The values ″deep-on″ and "deep-off″ for tt:lax are used to set the setting ″on″ and ″off″ for all subelements of the current element; however, they can be overwritten locally there.

If tt:lax is not specified, the setting complies with the surrounding context. By default, a template has the setting "deep-off".

Example

We have the following XML fragment:

<X my\_attr="attr">abc</X>

Due to tt:lax="on", the ST program below can still deserialize this fragment despite the element names being different:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
<tt:root name="ROOT"/>
  <tt:template>
     <Y tt:lax="on">
       <tt:value ref="ROOT" />
     </Y>
   </tt:template>
</tt:transform>