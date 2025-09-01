  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) → 

ABAP CDS - Abstract Entities

An abstract CDS entity is defined in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools (ADT)](javascript:call_link\('abencds.htm'\)) using the statement [DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Core Data Services (CDS)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). DCL source code in an abstract CDS entity can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

An abstract CDS entity represents all type attributes of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"):

-   Metadata defined using [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry")

-   A structured type defined using an element list

-   A parameter interface defined using input parameters (if applicable)

-   [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) in the element list (if applicable)

An instance of an abstract CDS entity is not created as a database object and client handling is not defined. An abstract CDS entity can be used as follows:

-   ABAP CDS

-   An abstract CDS entity can be specified as a target data source of an [association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"). An association of this type can be [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) only and cannot be created as an instance of a join expression.

-   An abstract CDS entity cannot be used as a data source of [SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) statements or used by [CDS path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)) in other CDS entities.

-   ABAP Programs

-   The structured type of the abstract CDS entity is known in ABAP programs. Like the type of any CDS entity, it can be used after the addition TYPE. The attributes of the structured type can be evaluated using [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry").

-   An abstract CDS entity cannot be used as a data source of [SELECT](javascript:call_link\('abapselect.htm'\)) statements or used by [path expressions](javascript:call_link\('abenopen_sql_path.htm'\)) in ABAP SQL.

-   The statement [ANNOTATE ENTITY](javascript:call_link\('abencds_f1_annotate_view.htm'\)) can be used to add [CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") to the [annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") of an abstract CDS entity.

-   Frameworks

-   The [annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") of an abstract CDS entity can be [evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

-   The parameters and the associations of abstract CDS entities can be evaluated by frameworks such as [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry").

Notes

Abstract CDS entities can be employed in the following cases:

-   They can be used as data types whose type attributes go beyond the regular [structures](javascript:call_link\('abenddic_structures.htm'\)) found in ABAP Dictionary. The ABAP RESTful Programming Model is one example of how they are used in this way.

-   They can be used as prototype definitions of data models without being created as instances of data objects.