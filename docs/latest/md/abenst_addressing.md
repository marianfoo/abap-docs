  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Addressing%20ABAP%20Data%2C%20ABENST_ADDRESSING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - Addressing ABAP Data

Simple transformations are used to serialize ABAP data or deserialize XML documents to ABAP data objects. Accordingly, it must be possible to address the bound ABAP data in the ST programs. Serializations only allow reads on ABAP data, while deserializations allow only writes.

In an ST program, all data bound to ABAP data objects is considered as data nodes, that is, nodes in tree structures, spread from the data roots. To address the ABAP data, either the data roots are accessed or the current node. At any position of an ST program, exactly one node of the tree structure spreading from the data root can be defined as the current node. The data roots or the current node can be accessed directly and, from that position, the subnodes.

-   [Tree Structure of the Data Nodes](javascript:call_link\('abenst_trees.htm'\))
-   [Current Node](javascript:call_link\('abenst_tt_ref.htm'\))
-   [Addressing Data Nodes](javascript:call_link\('abenst_addressing_nodes.htm'\))

Hint

No reference variables can currently be serialized and deserialized in ST programs. ABAP reference variables can, however, be bound to data roots. This means that these data roots cannot be specified in ST serialization and deserialization statements. Object reference variables can, however, be used to call instance methods and all reference variables can be passed to appropriate interface parameters of called ABAP methods.

Continue
[ST - Tree Structure of the Data Nodes](javascript:call_link\('abenst_trees.htm'\))
[ST - tt:ref, Current Node](javascript:call_link\('abenst_tt_ref.htm'\))
[ST - Addressing Data Nodes](javascript:call_link\('abenst_addressing_nodes.htm'\))