  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) → 

Simple Transformations (ST)

Simple Transformations (ST) is an SAP programming language for describing transformations between ABAP data and [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry") formats. ST is restricted to the two modes of [serialization](javascript:call_link\('abenserialization_glosry.htm'\) "Glossary Entry") (ABAP to XML) and [deserialization](javascript:call_link\('abendeserialization_glosry.htm'\) "Glossary Entry") (XML to ABAP) of ABAP data, which are most important for data integration. Transformations from ABAP to ABAP and XML to XML are not possible in ST as is the case for more general [XSLT](javascript:call_link\('abenxslt_glosry.htm'\) "Glossary Entry").

Simple Transformations are created as [ST programs](javascript:call_link\('abenst_programs_structure.htm'\)). ST programs can be edited using the [Transformation Editor](javascript:call_link\('abentransformation_editor_glosry.htm'\) "Glossary Entry"). This is called either directly with transaction STRANS or by choosing Edit Object → More → Transformation followed by Simple Transformation in the Object Navigator in the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"). Existing ST programs can be called using the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)). The associated ST processor is integrated into the ABAP runtime framework.

In contrast to [XSLT](javascript:call_link\('abenabap_xslt.htm'\)), the main advantages of ST programs are as follows:

-   ST programs are declarative and thus easier to read.
-   ST programs only have serial access to the XML data and are therefore very efficient even with large data volumes. The nodes in XML data, however, cannot be accessed in an arbitrary order.
-   ST programs describe serialization and deserialization simultaneously, that is, ABAP data serialized in XML with ST can also be deserialized with the same ST program.
-   Objects can be created from ABAP Objects and their methods called in ST programs.
-   ST programs are restricted to the transformation of elementary and structured ABAP data, along with internal tables. The transformation of reference variables and referenced objects is not currently supported.

The following topics describe ST:

-   [ST - Structure of ST Programs](javascript:call_link\('abenst_programs_structure.htm'\))
-   [ST - Addressing ABAP Data](javascript:call_link\('abenst_addressing.htm'\))
-   [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\))
-   [ST - Modularization with Subtemplates](javascript:call_link\('abenst_modularization.htm'\))
-   [ST - Reusing ST Programs](javascript:call_link\('abenst_reuse.htm'\))
-   [ST - Access to ABAP Objects from ST](javascript:call_link\('abenst_abap_objects.htm'\))
-   [ST - Overview of Statements](javascript:call_link\('abenst_statements.htm'\))
-   [ST - Examples](javascript:call_link\('abenst_abexas.htm'\))

Continue
[ST - Structure of ST Programs](javascript:call_link\('abenst_programs_structure.htm'\))
[ST - Addressing ABAP Data](javascript:call_link\('abenst_addressing.htm'\))
[ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\))
[ST - Modularization with Subtemplates](javascript:call_link\('abenst_modularization.htm'\))
[ST - Reusing ST Programs](javascript:call_link\('abenst_reuse.htm'\))
[ST - Access to ABAP Objects from ST](javascript:call_link\('abenst_abap_objects.htm'\))
[ST - Overview of Statements](javascript:call_link\('abenst_statements.htm'\))
[ST - Examples](javascript:call_link\('abenst_abexas.htm'\))