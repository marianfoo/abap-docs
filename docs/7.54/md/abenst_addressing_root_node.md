  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Addressing ABAP Data](javascript:call_link\('abenst_addressing.htm'\)) →  [ST - Addressing Data Nodes](javascript:call_link\('abenst_addressing_nodes.htm'\)) → 

ST - Addressing the Data Roots

The [data roots](javascript:call_link\('abenst_tt_root.htm'\)) declared at the highest hierarchy level of an ST program are the root nodes of the [tree structures](javascript:call_link\('abenst_trees.htm'\)) of the data nodes of the [main template](javascript:call_link\('abenst_tt_template_main.htm'\)). Addressing a data root during the execution of an ST program means referring to the bound ABAP data object.

Addressing When the Current Node is Undefined

As long as a data root is not obscured by the definition of a [current node](javascript:call_link\('abenst_tt_ref.htm'\)), it can be addressed directly using

root

where root is the symbolic name declared after [tt:root](javascript:call_link\('abenst_tt_root.htm'\)).

Addressing When the Current Node is Defined

A data root root can be addressed in any position of the main template using

.root

where the period (.) bypasses cases where the root is obscured by a current node.

Note

In [subtemplates](javascript:call_link\('abenst_tt_template_sub.htm'\)), the rules for the root nodes of their tree structures apply.