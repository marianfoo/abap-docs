---
title: "ST - Addressing the Current Node"
description: |
  In all ST statements in which the name of a node can be specified, the current node(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_ref.htm) can be addressed explicitly with $ref. An alias name can be also be defined for $ref in tt:loop loops(https://help.sap.com/doc/ab
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_addressing_current_node.htm"
abapFile: "abenst_addressing_current_node.htm"
keywords: ["loop", "do", "while", "if", "data", "internal-table", "abenst", "addressing", "current", "node"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Addressing ABAP Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_addressing.htm) →  [ST - Addressing Data Nodes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_addressing_nodes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Addressing%20the%20Current%20Node%2C%20ABENST_ADDRESSING_CURRENT_NODE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

ST - Addressing the Current Node

In all ST statements in which the name of a node can be specified, the [current node](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_ref.htm) can be addressed explicitly with $ref. An alias name can be also be defined for $ref in [tt:loop loops](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_loop.htm) where internal tables are transformed. If specifying the node is optional, ST statements use the current node by default.

Hint

If the current node is undefined, it cannot be addressed using $ref and ST statements that work implicitly with the current node cannot be executed.

Example

The following ST program DEMO\_ST\_CURRENT\_NODE can be used to serialize a nested ABAP structure:

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <X tt:ref="ROOT">
      <X1 tt:ref="$ref.COL1">
        <tt:value ref="$ref"/>
      </X1>
      <X2 tt:ref="$ref.COL2">
        <tt:value ref="$ref"/>
      </X2>
      <X3 tt:ref="STRUC2">
        <X1 tt:ref="COL1">
          <tt:value/>
        </X1>
        <X2 tt:ref="COL2">
          <tt:value/>
        </X2>
      </X3>
    </X>
  </tt:template>
</tt:transform>

In this example, subnodes COL1 and COL2 are set as the current node in the surrounding elements of the tt:value statements with ROOT and STRUC2, respectively. In the first two elements, the current node is addressed explicitly using $ref for demonstration purposes. The current node is also specified using $ref in the first two tt:value statements, while specification is implicit in the other two tt:value statements.

Also see the example for calling a transformation in the [tt:value, Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_value_structure.htm) section.