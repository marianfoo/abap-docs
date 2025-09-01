---
title: "ST - Data Nodes in Conditions"
description: |
  For addressing data nodes in logical expressions(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cond.htm), a special rule applies. Data nodes as dnode operands of preconditions(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_using.htm), assertions(https:
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_addressing_nodes_in_cond.htm"
abapFile: "abenst_addressing_nodes_in_cond.htm"
keywords: ["do", "if", "data", "abenst", "addressing", "nodes", "cond"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_st.htm) →  [ST - Addressing ABAP Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_addressing.htm) →  [ST - Addressing Data Nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_addressing_nodes.htm) → 

ST - Data Nodes in Conditions

For addressing data nodes in [logical expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_tt_cond.htm), a special rule applies. Data nodes as dnode operands of [preconditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_using.htm), [assertions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_data.htm), or [conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_check.htm) can be specified as follows:

-   If the name node (specified in accordance with the preceding addressing rules) has a letter or underscore in its first place and only letters, digits, hyphens, or underscores in all other places, it can be specified directly.

-   The special names $ref and $alias can also be specified directly.

-   All other names must be specified in the form ref('node'). This particularly applies to the specification of a data root using .root.