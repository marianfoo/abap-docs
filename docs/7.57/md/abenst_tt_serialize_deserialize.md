---
title: "Syntax"
description: |
  <tt:serialize> ... </tt:serialize> <tt:deserialize> ... </tt:deserialize> Effect These ST statements can be used to limit parts of templates for execution in serializations or deserializations: All template elements specified within the tt:serialize element are only respected in serializations. All
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_serialize_deserialize.htm"
abapFile: "abenst_tt_serialize_deserialize.htm"
keywords: ["loop", "do", "if", "data", "internal-table", "abenst", "serialize", "deserialize"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_serial_deserial.htm) →  [ST - Flow Control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_flow_control.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - tt:serialize, tt:deserialize, Transformation Direction, ABENST_TT_SERIALIZE_DESE
RIALIZE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ST - tt:serialize, tt:deserialize, Transformation Direction

Syntax

<tt:serialize>
  ...
</tt:serialize>
<tt:deserialize>
  ...
</tt:deserialize>

Effect

These ST statements can be used to limit parts of templates for execution in serializations or deserializations:

All template elements specified within the tt:serialize element are only respected in serializations. All the template elements specified within the tt:deserialize element are only respected in deserializations.

Example

The following Simple Transformation serializes a structure and deserializes to an internal table:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:template>
    <X>
      <tt:serialize>
        <Y>
          <tt:value ref=".ROOT1.COL1" />
        </Y>
        <Y>
          <tt:value ref=".ROOT1.COL2" />
        </Y>
        <Y>
          <tt:value ref=".ROOT1.COL3" />
        </Y>
      </tt:serialize>
      <tt:deserialize>
        <tt:loop ref=".ROOT2">
          <Y>
            <tt:value/>
          </Y>
        </tt:loop>
      </tt:deserialize>
    </X>
  </tt:template>
</tt:transform>

The following ABAP program can call the transformation:

DATA xml\_string TYPE string.
DATA: BEGIN OF struc,
        col1 TYPE i VALUE 1,
        col2     TYPE i VALUE 2,
        col3 TYPE i VALUE 3,
      END OF struc.
DATA itab TYPE TABLE OF i.
CALL TRANSFORMATION ...
  SOURCE root1 = struc
  RESULT XML xml\_string.
CALL TRANSFORMATION ...
  SOURCE XML xml\_string
  RESULT root2 = itab.

After deserialization, the internal table contains three lines with the values of the structure components.