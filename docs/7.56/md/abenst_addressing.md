---
title: "ST - Addressing ABAP Data"
description: |
  Simple transformations are used to serialize ABAP data or deserialize XML documents to ABAP data objects. Accordingly, it must be possible to address the bound ABAP data in the ST programs. Serializations only allow reads on ABAP data, while deserializations allow only writes. In an ST program, all
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_addressing.htm"
abapFile: "abenst_addressing.htm"
keywords: ["do", "while", "if", "method", "data", "abenst", "addressing"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_st.htm) → 

ST - Addressing ABAP Data

Simple transformations are used to serialize ABAP data or deserialize XML documents to ABAP data objects. Accordingly, it must be possible to address the bound ABAP data in the ST programs. Serializations only allow reads on ABAP data, while deserializations allow only writes.

In an ST program, all data bound to ABAP data objects is considered as data nodes, that is, nodes in tree structures, spread from the data roots. To address the ABAP data, either the data roots are accessed or the current node. At any position of an ST program, exactly one node of the tree structure spreading from the data root can be defined as the current node. The data roots or the current node can be accessed directly and, from that position, the subnodes.

-   [Tree Structure of the Data Nodes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_trees.htm)
-   [Current Node](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_ref.htm)
-   [Addressing Data Nodes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_addressing_nodes.htm)

Hint

No reference variables can currently be serialized and deserialized in ST programs. ABAP reference variables can, however, be bound to data roots. This means that these data roots cannot be specified in ST serialization and deserialization statements. Object reference variables can, however, be used to call instance methods and all reference variables can be passed to appropriate interface parameters of called ABAP methods.

Continue
[ST - Tree Structure of the Data Nodes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_trees.htm)
[ST - tt:ref, Current Node](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_tt_ref.htm)
[ST - Addressing Data Nodes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenst_addressing_nodes.htm)