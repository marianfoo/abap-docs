---
title: "ST - Addressing Subnodes"
description: |
  When addressing subnodes, it is important to distinguish between a defined and undefined current node(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_ref.htm). Subnodes When the Current Node is Undefined If the current node is undefined, the subnodes of the data root of the te
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_addressing_subnodes.htm"
abapFile: "abenst_addressing_subnodes.htm"
keywords: ["do", "if", "data", "abenst", "addressing", "subnodes"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_st.htm) →  [ST - Addressing ABAP Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_addressing.htm) →  [ST - Addressing Data Nodes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_addressing_nodes.htm) → 

ST - Addressing Subnodes

When addressing subnodes, it is important to distinguish between a defined and undefined [current node](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_ref.htm).

Subnodes When the Current Node is Undefined

If the current node is undefined, the subnodes of the data root of the template can be addressed as follows:

name.node1.node2. ...

Here, name is the symbolic name of a [data root](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_root.htm) and node1, node2, ... are the actual names of components of the hierarchy levels 1, 2, ... When the transformation is executed, the ABAP data object bound to the data root must have a structured type with the corresponding components.

Hint

If the current node is undefined, the first name of a chain is always interpreted as the name of a data root. In particular, name is used for the data root itself.

Subnodes When the Current Node is Defined

-   The subnodes of the current node can be addressed as follows:
    
    node1.node2. ...
    
    Here, node1, node2, ... are the actual names of components of the hierarchy levels 1, 2, ... below the current node. If the current node is defined, the first name of a chain is always interpreted as the name of a component of the current node. The chain above therefore has the same meaning as
    
    $ref.node1.node2. ...
    
    where $ref is the current node.
    
-   The subnodes of the data root of the template can be addressed as follows:
    
    .name.node1.node2. ...
    
    Here, name is the symbolic name of a data root and node1, node2, ... are the actual names of components of the hierarchy levels 1, 3.... The period (.) bypasses the hiding of the root by the current node.
    

When the transformation is executed, the ABAP data object bound to the current node or to the data root must have a structured type with the corresponding components.

Hint

If the current node is defined, the first name of a chain is always interpreted as the name of a subcomponent of the current node. In particular, node does not stand for a data root, but for a direct subcomponent of the current node.

Example

The following ST program can be used to serialize a nested ABAP structure:

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <X>
      <X1>
        <tt:value ref="ROOT.COL1" />
      </X1>
      <X2>
        <tt:value ref="ROOT.COL2" />
      </X2>
      <X3>
        <X1>
          <tt:value ref="ROOT.STRUC2.COL1" />
        </X1>
        <X2>
          <tt:value ref="ROOT.STRUC2.COL2" />
        </X2>
      </X3>
    </X>
  </tt:template>
</tt:transform>

For each tt:value statement, the current node is set individually to a subnode of the data root. Otherwise the current node is undefined, and the data root ROOT can be addressed using its name. Also see the example for calling a transformation in the [tt:value, Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_value_structure.htm) section.