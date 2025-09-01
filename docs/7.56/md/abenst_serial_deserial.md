  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) → 

ST - Serialization and Deserialization

Serialization and deserialization are primarily based on following schema:

-   During serialization, the literal elements of templates are passed to the target XML data unchanged and the ST statements specified in between are executed.
-   In deserializations, the source XML data is handled as an inbound stream and compared to the template element by element. Identically named elements (or attributes or texts) of the inbound stream are consumed if they are at the same position in the ST program or if there is a statement there that can process the element. After the successful comparison or consumption of the element, the comparison of the subsequent element starts.

Serializations and deserializations can be divided into the following topics:

-   [Literal Template Content](javascript:call_link\('abenst_literals.htm'\))
-   [Non-Literal Attributes](javascript:call_link\('abenst_tt_attribute.htm'\))
-   [Namespaces](javascript:call_link\('abenst_tt_namespace.htm'\))
-   [Transformation of ABAP Values](javascript:call_link\('abenst_abap_values.htm'\))
-   [Value Assignments](javascript:call_link\('abenst_assignments.htm'\))
-   [Reading and Writing Variables](javascript:call_link\('abenst_variable_transformations.htm'\))
-   [Flow Control](javascript:call_link\('abenst_tt_cond.htm'\))

When a Simple Transformation is defined, it must be noted whether the serializations and deserializations are [symmetric](javascript:call_link\('abenst_symmetry.htm'\)).

Hints

-   In serializations and deserializations, the XML data is processed in the form of writer streams and reader streams. When ABAP methods are called from Simple Transformations, [processing these XML streams](javascript:call_link\('abenst_tt_call-method_writerreader.htm'\)) is possible.
-   Serializations and deserializations are subject to the general restriction that the content of a [data root](javascript:call_link\('abenst_tt_root.htm'\)) cannot be modified by serialization and only writes are possible to a data root in deserializations.

Continue
[ST - Literal Template Content](javascript:call_link\('abenst_literals.htm'\))
[ST - tt:attribute, Non-Literal Attributes](javascript:call_link\('abenst_tt_attribute.htm'\))
[ST - tt:namespace, Namespaces](javascript:call_link\('abenst_tt_namespace.htm'\))
[ST - Transformation of ABAP Values](javascript:call_link\('abenst_abap_values.htm'\))
[ST - Value Assignments](javascript:call_link\('abenst_assignments.htm'\))
[ST - Reading and Writing Variables](javascript:call_link\('abenst_variable_transformations.htm'\))
[ST - Flow Control](javascript:call_link\('abenst_flow_control.htm'\))
[ST - Symmetry of Serialization and Deserialization](javascript:call_link\('abenst_symmetry.htm'\))
[ST - Representation of ABAP Values](javascript:call_link\('abenst_abap_representation.htm'\))