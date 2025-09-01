  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Addressing ABAP Data](javascript:call_link\('abenst_addressing.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Tree%20Structure%20of%20the%20Data%20Nodes%2C%20ABENST_TREES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - Tree Structure of the Data Nodes

The starting points of any addressing of ABAP data in an ST program are the data roots of the [main template](javascript:call_link\('abenst_tt_root.htm'\)) declared with [tt:ro](javascript:call_link\('abenst_tt_root.htm'\)) at transformation level. These data roots are the interfaces from the ST program to the calling ABAP program. When a Simple Transformation is called, any ABAP data object (reference variables or data objects that have reference variables as components are currently excluded) can be bound to any data root.

Each data root has its own tree structure, which can be used to address the components of the bound data object. Addressing subnodes of a data root is equivalent to referring to the components of the data object bound to the data root. The tree structures of the individual data roots are independent of one another.

The addressing of data nodes in the individual tree structures always starts at the data roots.

Note

Each template uses its own tree structures. Only the main template uses the data roots declared at transformation level that are bound directly to the ABAP data objects during transformation. When [subtemplates](javascript:call_link\('abenst_tt_template_sub.htm'\)) are called, local data roots are bound to current data nodes of the caller.