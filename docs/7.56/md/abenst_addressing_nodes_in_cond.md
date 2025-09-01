  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Addressing ABAP Data](javascript:call_link\('abenst_addressing.htm'\)) →  [ST - Addressing Data Nodes](javascript:call_link\('abenst_addressing_nodes.htm'\)) → 

ST - Data Nodes in Conditions

For addressing data nodes in [logical expressions](javascript:call_link\('abenst_tt_cond.htm'\)), a special rule applies. Data nodes as dnode operands of [preconditions](javascript:call_link\('abenst_using.htm'\)), [assertions](javascript:call_link\('abenst_data.htm'\)), or [conditions](javascript:call_link\('abenst_check.htm'\)) can be specified as follows:

-   If the name node, specified in accordance with the preceding addressing rules, contains a letter or an underscore in its first place and only letters, digits, hyphens, or underscores in the remaining positions, it can be specified directly.
-   The special names $ref and $alias can also be specified directly.
-   All other names must be specified in the form ref('node'). This particularly applies to the specification of a data root using .root.