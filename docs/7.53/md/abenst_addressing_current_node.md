  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_st.htm) →  [ST - Addressing ABAP Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_addressing.htm) →  [ST - Addressing Data Nodes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_addressing_nodes.htm) → 

ST - Addressing the Current Node

In all ST commands in which the name of a node can be specified, the [current node](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_ref.htm) can be addressed explicitly with $ref. An alias name can be also be defined for $ref in [tt:loop loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_loop.htm) where internal tables are transformed. If specification of the node is optional, ST commands use the current node by default.

Note

If the current node is undefined, it cannot be addressed using $ref and ST commands that work implicitly with the current node cannot be executed.

Example

The following ST program can be used to serialize a nested ABAP structure:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <X tt:ref="ROOT">
      <X1 tt:ref="$ref.COL1">
        <tt:value ref="$ref" />
      </X1>
      <X2 tt:ref="$ref.COL2">
        <tt:value ref="$ref" />
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

In the example, subnodes COL1 and COL2 are set as the current node in the surrounding elements of the tt:value commands with ROOT and STRUC2, respectively. In the first two elements, the current node is addressed explicitly using $ref for demonstration purposes. The current node is also specified using $ref in the first two tt:value commands, while specification is implicit in the other two tt:value commands.

Also see the example for calling a transformation in the [tt:value, Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_value_structure.htm) section.