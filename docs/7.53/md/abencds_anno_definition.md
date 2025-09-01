  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations.htm) → 

ABAP CDS - Definition of Annotations

The [CDS annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_source_code_glosry.htm "Glossary Entry") that can be specified in [CDS source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm "Glossary Entry") can be dictated by [CDS annotation definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"). A CDS annotation definition defines a [CDS annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm "Glossary Entry") as a [CDS object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_object_glosry.htm "Glossary Entry"). It describes how this annotation is intended to be used in [CDS source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_source_code_glosry.htm "Glossary Entry"). The description covers the following:

-   The name of a [main annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_annotation_glosry.htm "Glossary Entry")

-   The possible [annotation values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenannotation_value_glosry.htm "Glossary Entry")

-   Whether it can be structured using [subannotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensub_annotation_glosry.htm "Glossary Entry")

-   Whether [annotation arrays](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenannotation_array_glosry.htm "Glossary Entry") can be specified

An annotation is defined in a separate piece of [DDLA source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddla_source_code_glosry.htm "Glossary Entry") and is transported with this code. DDLA source code for annotation definitions can define precisely one identically named [CDS annotation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddla_syntax.htm) using the CDS DDL statement [DEFINE ANNOTATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_annotation.htm) (this annotation can, however, be the main annotation of subannotations). DDLA source code of this type can only be edited in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadt_glosry.htm "Glossary Entry") DDLA source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

Notes

-   The annotations defined as CDS objects are used by the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadt_glosry.htm "Glossary Entry") for source code coloring and Code Completion when [annotations are specified](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_anno_usage.htm).

-   The syntax check for the definition of a CDS entity in [DDL source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_source_code_glosry.htm "Glossary Entry") for [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") does not yet evaluate the annotation definitions. It only checks the correctness of the [annotation syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_syntax_glosry.htm "Glossary Entry").

-   Customers and partners cannot currently define their own annotations. Only [SAP annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_annotation_glosry.htm "Glossary Entry") should currently be used.

-   [SAP Annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_sap.htm) lists all DDLA source code delivered by SAP.

Continue
[ABAP CDS - DDL for Annotation Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddla_syntax.htm)