  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) → 

ABAP CDS - Abstract Entities

A CDS abstract entity is defined in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") using the statement [DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)). DCL source code in a CDS abstract entity can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

A CDS abstract entity represents all type attributes of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"):

-   Metadata defined using [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry")

-   A structured type defined using an element list

-   Optionally a parameter interface defined using input parameters

-   Any [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry"), or [CDS to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") exposed in the [element list](javascript:call_link\('abencds_select_list_association_v1.htm'\))

An instance of a CDS abstract entity is not created as a database object and client handling is not defined. A CDS abstract entity can be used as follows:

-   ABAP CDS

-   A CDS abstract entity can be specified as the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry"), or [CDS to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry"). A CDS association, CDS composition, or CDS to-parent association of this type can be [exposed](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) only and cannot be created as an instance of a join expression.

-   A CDS abstract entity cannot be used as a data source of SELECT statements or used by SQL path expressions in other CDS entities, such as [CDS view entities](javascript:call_link\('abencds_v2_views.htm'\)) or [DDIC-based CDS views](javascript:call_link\('abencds_v1_views.htm'\)).

-   ABAP Programs

-   The structured type of the CDS abstract entity is known in ABAP programs. Like the type of any CDS entity, it can be used after the addition TYPE. The attributes of the structured type can be evaluated using [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry").

-   A CDS abstract entity cannot be used as a data source of [SELECT](javascript:call_link\('abapselect.htm'\)) statements or used by [path expressions](javascript:call_link\('abenopen_sql_path.htm'\)) in ABAP SQL.

-   The statement [ANNOTATE ENTITY](javascript:call_link\('abencds_f1_annotate_view.htm'\)) can be used to add [CDS metadata extensions](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry") to the [annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") of a CDS abstract entity.

-   Frameworks

-   The [annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") of a CDS abstract entity can be [evaluated](javascript:call_link\('abencds_annotations_analysis.htm'\)) using the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

-   The parameters and the CDS associations of CDS abstract entities can be evaluated by frameworks such as [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry").

Hints

CDS abstract entities can be employed in the following cases:

-   They can be used as data types whose type attributes go beyond the regular [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)) in the ABAP Dictionary. Examples of this use case can be found in [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry").

-   They can be used as prototype definitions of data models without being created as instances of data objects.

Continue
[CDS DDL - DEFINE ABSTRACT ENTITY](javascript:call_link\('abencds_f1_define_abstract_entity.htm'\))