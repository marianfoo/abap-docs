---
title: "Syntax"
description: |
  ... tt:extensible='on''deep-static''deep-dynamic''off''deep-off'  ... Effect In deserializations, XML elements in the input stream that are not specified in the ST program normally produce an error. If the processed XML format is to be extensible, elements that are not specified explicit
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_extensible.htm"
abapFile: "abenst_tt_extensible.htm"
keywords: ["do", "if", "case", "class", "data", "abenst", "extensible"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_serial_deserial.htm) →  [ST - Literal Template Content](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_literals.htm) →  [ST - Literal XML Elements and Attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_xml_literals.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Aextensible%2C%20Extensibility%20of%20Literal%20XML%20Elements%2C%20ABENST_TT_EXTENSIBLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion%20for%20improvement:)

ST - tt:extensible, Extensibility of Literal XML Elements

Syntax

... tt:extensible="on"*|*"deep-static"*|*"deep-dynamic"*|*"off"*|*"deep-off"  ...

Effect

In deserializations, XML elements in the input stream that are not specified in the ST program normally produce an error. If the processed XML format is to be extensible, elements that are not specified explicitly can be skipped without further processing through specification of the optional attribute tt:extensible. The attribute can have the following values:

-   The value on states that the current element may have direct subelements that are not explicitly specified. This is the standard setting.
-   Values deep-static and deep-dynamic state that the current element and its subelements can be enhanced. The value off deactivates extensibility for the current element but not its subelements. In other words, direct subelements cannot be added to the element but its (specified) subelements can be.
-   The value deep-off deactivates extensibility for the current element and its subelements. These settings can be overwritten locally in individual subelements.

The values deep-static and deep-dynamic have different areas of validity:

-   deep-static only has an effect within the part of the program in which it is set.
-   deep-dynamic is effective across template calls using [tt:apply](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_apply.htm) and [tt:call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_call.htm).

The deep extensibility that is configured using deep-static and deep-dynamic also takes effect in case distinctions with [tt:switch](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_switch.htm) and groupings with [tt:group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_group.htm) by skipping unexpected elements that are not covered by a case.

Example

The transformation DEMO\_ST\_EXTENSIBLE\_1 shows that extensibility together with optional elements (such as elements that are only deserialized when a condition occurs) causes problems, since extensibility generally means that such optional elements are not found.

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="A"/>
  <tt:root name="B"/>
  <tt:template>
    <r tt:extensible="on">
      <tt:cond>
        <a tt:value-ref="A"/>
      </tt:cond>
      <b tt:value-ref="B"/>
    </r>
  </tt:template>
</tt:transform>

Passing an input stream

<r><x/><a>1</a><b>2</b></r>

does not produce the deserialization A=1 since the unexpected element x sets the condition for a to false. Both x and a are skipped as extension elements and only the mandatory element b is deserialized as B=2. The problem can be solved by using [tt:group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_group.htm), although this also resolves the order of a and b:

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="A"/>
  <tt:root name="B"/>
  <tt:template>
    <r tt:extensible="on">
      <tt:group>
        <tt:cond frq="?">
          <a tt:value-ref="A"/>
        </tt:cond>
        <tt:cond>
          <b tt:value-ref="B"/>
        </tt:cond>
      </tt:group>
    </r>
  </tt:template>
</tt:transform>

The class CL\_DEMO\_ST\_EXTENSIBLE calls both transformations with the XML data shown above and displays the results.