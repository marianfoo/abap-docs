  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_st.htm) →  [ST - Addressing ABAP Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_addressing.htm) →  [ST - Addressing Data Nodes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_addressing_nodes.htm) → 

ST - Addressing the Data Roots

The [data roots](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_root.htm) declared at the highest hierarchy level of an ST program are the root nodes of the [tree structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_trees.htm) of the data nodes of the [main template](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_template_main.htm). Addressing a data root during the execution of an ST program means referring to the bound ABAP data object.

Addressing When the Current Node is Undefined

As long as a data root is not obscured by the definition of a [current node](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_ref.htm), it can be addressed directly using

root

where root is the symbolic name declared after [tt:root](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_root.htm).

Addressing When the Current Node is Defined

A data root root can be addressed in any position of the main template using

.root

where the period (.) bypasses cases where the root is obscured by a current node.

Note

In [subtemplates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_template_sub.htm), the rules for the root nodes of their tree structures apply.