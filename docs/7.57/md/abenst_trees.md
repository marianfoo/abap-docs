  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) →  [ST - Addressing ABAP Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_addressing.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - Tree Structure of the Data Nodes, ABENST_TREES, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

ST - Tree Structure of the Data Nodes

The starting points of any addressing of ABAP data in an ST program are the data roots of the [main template](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_root.htm) declared with [tt:ro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_root.htm) at transformation level. These data roots are the interfaces from the ST program to the calling ABAP program. When a Simple Transformation is called, any ABAP data object (reference variables or data objects that have reference variables as components are currently excluded) can be bound to any data root.

Each data root has its own tree structure, which can be used to address the components of the bound data object. Addressing subnodes of a data root is equivalent to referring to the components of the data object bound to the data root. The tree structures of the individual data roots are independent of one another.

The addressing of data nodes in the individual tree structures always starts at the data roots.

Note

Each template uses its own tree structures. Only the main template uses the data roots declared at transformation level that are bound directly to the ABAP data objects during transformation. When [subtemplates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_template_sub.htm) are called, local data roots are bound to current data nodes of the caller.