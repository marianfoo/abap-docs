  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Addressing ABAP Data](javascript:call_link\('abenst_addressing.htm'\)) →  [ST - Addressing Data Nodes](javascript:call_link\('abenst_addressing_nodes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - Addressing the Data Roots, ABENST_ADDRESSING_ROOT_NODE, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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