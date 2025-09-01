---
title: "Syntax"
description: |
  ... tt:lax='on''off''deep-on''deep-off' ... Effect When deserializing literal XML elements, the optional attribute tt:lax can be used to control whether the name of an element is respected. -   If tt:lax is specified with the value off, the inbound XML stream must contain an identically nam
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_lax.htm"
abapFile: "abenst_tt_lax.htm"
keywords: ["do", "if", "data", "abenst", "lax"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_serial_deserial.htm) →  [ST - Literal Template Content](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_literals.htm) →  [ST - Literal XML Elements and Attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_xml_literals.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Alax%2C%20Name%20Comparisons%20of%20Literal%20XML%20Elements%2C%20ABENST_TT_LAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ST - tt:lax, Name Comparisons of Literal XML Elements

Syntax

... tt:lax="on"*|*"off"*|*"deep-on"*|*"deep-off" ...

Effect

When deserializing literal XML elements, the optional attribute tt:lax can be used to control whether the name of an element is respected.

-   If tt:lax is specified with the value off, the inbound XML stream must contain an identically named element with all literal attributes attr of the same content.
-   If tt:lax is specified with the value on, the element in the inbound XML stream can have any name, but the expected attributes must still match.
-   The values deep-on and deep-off for tt:lax are used to set the setting on and off for all subelements of the current element; however, they can be overwritten locally there.

If tt:lax is not specified, the setting depends on the surrounding context. By default, a template has the setting deep-off.

Example

The following XML fragment is to be assumed:

<X my\_attr="attr">abc</X>

Due to tt:lax="on", the ST program DEMO\_ST\_LAX below can still deserialize this fragment despite different element names:

<?sap.transform simple?>
<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
<tt:root name="ROOT"/>
  <tt:template>
     <Y tt:lax="on">
       <tt:value ref="ROOT" />
     </Y>
   </tt:template>
</tt:transform>