  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Annotations](javascript:call_link\('abencds_annotations.htm'\)) → 

ABAP CDS - Definition of Annotations

The [CDS annotations](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry") that can be specified in [CDS source code](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") can be dictated by [CDS annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"). A CDS annotation definition defines a [CDS annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") as a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). It describes how this annotation is intended to be used in [CDS source code](javascript:call_link\('abencds_source_code_glosry.htm'\) "Glossary Entry"). The description covers the following:

-   The name of a [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry")

-   The possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry")

-   Whether it can be structured using [subannotations](javascript:call_link\('abensub_annotation_glosry.htm'\) "Glossary Entry")

-   Whether [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") can be specified

An annotation is defined in a separate piece of [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") and is transported with this code. DDLA source code for annotation definitions can define exactly one identically named [CDS annotation](javascript:call_link\('abencds_f1_ddla_syntax.htm'\)) using the CDS DDL statement [DEFINE ANNOTATION](javascript:call_link\('abencds_f1_define_annotation.htm'\)) (this annotation can, however, be the main annotation of subannotations). DDLA source code of this type can only be edited in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). DDLA source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

Hints

-   The annotations defined as CDS objects are used by the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") for source code coloring and Code Completion when [annotations are specified](javascript:call_link\('abencds_anno_usage.htm'\)).

-   The syntax check for the definition of a CDS entity in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") for [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") does not yet evaluate the annotation definitions. It only checks the correctness of the [annotation syntax](javascript:call_link\('abencds_annotation_syntax_glosry.htm'\) "Glossary Entry").

-   Customers and partners cannot currently define their own annotations. Only [SAP annotations](javascript:call_link\('abensap_annotation_glosry.htm'\) "Glossary Entry") should currently be used.

-   [SAP Annotations](javascript:call_link\('abencds_annotations_sap.htm'\)) lists all DDLA source code delivered by SAP.

Continue
[ABAP CDS - DDL for Annotation Definitions](javascript:call_link\('abencds_f1_ddla_syntax.htm'\))