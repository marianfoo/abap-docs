  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20Serialization%20and%20Deserialization%2C%20ABENST_SERIAL_DESERIAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - Serialization and Deserialization

Serialization and deserialization are primarily based on following schema:

-   During serialization, the literal elements of templates are passed to the target XML data unchanged and the ST statements specified in between are executed.
-   In deserializations, the source XML data is handled as an inbound stream and compared to the template element by element. Identically named elements (or attributes or texts) of the inbound stream are consumed if they are at the same position in the ST program or if there is a statement there that can process the element. After the successful comparison or consumption of the element, the comparison of the subsequent element starts.

Serializations and deserializations can be divided into the following topics:

-   [Literal Template Content](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_literals.htm)
-   [Non-Literal Attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_attribute.htm)
-   [Namespaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_namespace.htm)
-   [Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_abap_values.htm)
-   [Value Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_assignments.htm)
-   [Reading and Writing Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_variable_transformations.htm)
-   [Flow Control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_cond.htm)

When a Simple Transformation is defined, it must be noted whether the serializations and deserializations are [symmetric](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_symmetry.htm).

Hints

-   In serializations and deserializations, the XML data is processed in the form of writer streams and reader streams. When ABAP methods are called from Simple Transformations, [processing these XML streams](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_call-method_writerreader.htm) is possible.
-   Serializations and deserializations are subject to the general restriction that the content of a [data root](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_root.htm) cannot be modified by serialization and only writes are possible to a data root in deserializations.

Continue
[ST - Literal Template Content](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_literals.htm)
[ST - tt:attribute, Non-Literal Attributes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_attribute.htm)
[ST - tt:namespace, Namespaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_namespace.htm)
[ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_abap_values.htm)
[ST - Value Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_assignments.htm)
[ST - Reading and Writing Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_variable_transformations.htm)
[ST - Flow Control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_flow_control.htm)
[ST - Symmetry of Serialization and Deserialization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_symmetry.htm)
[ST - Representation of ABAP Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_abap_representation.htm)