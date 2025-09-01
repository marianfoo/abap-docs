---
title: "ST - Data Nodes in Conditions"
description: |
  For addressing data nodes in logical expressions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_cond.htm), a special rule applies. Data nodes as dnode operands of preconditions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_using.htm), assertions(https:
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_addressing_nodes_in_cond.htm"
abapFile: "abenst_addressing_nodes_in_cond.htm"
keywords: ["do", "if", "data", "abenst", "addressing", "nodes", "cond"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_st.htm) →  [ST - Addressing ABAP Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_addressing.htm) →  [ST - Addressing Data Nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_addressing_nodes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Data%20Nodes%20in%20Conditions%2C%20ABENST_ADDRESSING_NODES_IN_COND%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

ST - Data Nodes in Conditions

For addressing data nodes in [logical expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_cond.htm), a special rule applies. Data nodes as dnode operands of [preconditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_using.htm), [assertions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_data.htm), or [conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_check.htm) can be specified as follows:

-   If the name node, specified in accordance with the preceding addressing rules, contains a letter or an underscore in its first place and only letters, digits, hyphens, or underscores in the remaining positions, it can be specified directly.
-   The special names $ref and $alias can also be specified directly.
-   All other names must be specified in the form ref('node'). This particularly applies to the specification of a data root using .root.