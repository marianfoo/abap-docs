  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_trafos.htm) → 

Simple Transformations (ST)

Simple Transformations (ST) is an SAP programming language for describing transformations between ABAP data and [XML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxml_glosry.htm "Glossary Entry") formats. ST is restricted to the two modes of [serialization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenserialization_glosry.htm "Glossary Entry") (ABAP to XML) and [deserialization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeserialization_glosry.htm "Glossary Entry") (XML to ABAP) of ABAP data, which are most important for data integration. Transformations from ABAP to ABAP and XML to XML (like in the more general [XSLT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxslt_glosry.htm "Glossary Entry")) are not possible in ST.

Simple Transformations are created as [ST programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_programs_structure.htm). ST programs can be edited using [Transformation Editor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransformation_editor_glosry.htm "Glossary Entry"). This is called up either with transaction STRANS or by choosing Edit Object → More → Transformation followed by Simple Transformation in Object Navigator in [ABAP Workbench](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). Existing ST programs can be called using the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transformation.htm). The associated ST processor is integrated into the ABAP runtime environment.

In comparison with [XSLT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xslt.htm), the main advantages of ST programs are as follows:

-   ST programs are declarative and thus easier to read.

-   ST programs only have serial access to the XML data and are therefore very efficient even with large data volumes. The nodes in XML data, however, cannot be accessed in an arbitrary order.

-   ST programs describe serialization and deserialization simultaneously, that is ABAP data serialized in XML with ST can also be deserialized with the same ST program.

-   Objects can be created from ABAP Objects and their methods called in ST programs.

-   ST programs are restricted to the transformation of elementary and structured ABAP data, along with internal tables. The transformation of reference variables and referenced objects is not currently supported.

Continue
[ST - Structure of ST Programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_programs_structure.htm)
[ST - Addressing ABAP Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_addressing.htm)
[ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_serial_deserial.htm)
[ST - Modularization with Subtemplates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_modularization.htm)
[ST - Reusing ST Programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_reuse.htm)
[ST - Access to ABAP Objects from ST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_abap_objects.htm)
[ST - Overview of Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_statements.htm)
[ST - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenst_abexas.htm)