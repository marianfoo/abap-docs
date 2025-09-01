  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Addressing ABAP Data](javascript:call_link\('abenst_addressing.htm'\)) →  [ST - Addressing Data Nodes](javascript:call_link\('abenst_addressing_nodes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Addressing%20the%20Data%20Roots%2C%20ABENST_ADDRESSING_ROOT_NODE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - Addressing the Data Roots

The [data roots](javascript:call_link\('abenst_tt_root.htm'\)) declared at the highest hierarchy level of an ST program are the root nodes of the [tree structures](javascript:call_link\('abenst_trees.htm'\)) of the data nodes of the [main template](javascript:call_link\('abenst_tt_template_main.htm'\)). Addressing a data root during the execution of an ST program means referring to the bound ABAP data object.

Addressing when the Current Node is Undefined   

If a data root is not hidden by the definition of a [current node](javascript:call_link\('abenst_tt_ref.htm'\)), it can be addressed directly using

root

where root is the symbolic name declared after [tt:root](javascript:call_link\('abenst_tt_root.htm'\)).

Addressing when the Current Node is Defined   

A data root root can be addressed at any position of the main template using

.root

where the period (.) bypasses cases where the root is hidden by a current node.

Hint

In [subtemplates](javascript:call_link\('abenst_tt_template_sub.htm'\)), the rules for the root nodes of their tree structures apply.