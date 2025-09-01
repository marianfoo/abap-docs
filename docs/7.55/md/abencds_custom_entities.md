  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) → 

ABAP CDS - Custom Entities

A CDS custom entity is defined in the [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS data definition](javascript:call_link\('abencds_data_definition_glosry.htm'\) "Glossary Entry") using the statement [DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)). DCL source code in a CDS custom entity can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

CDS custom entities are used for data models whose runtime is implemented manually. They make it possible to provide data in AS ABAP using classes. The use of CDS custom entities also makes it possible to split the signature and implementation of the CDS entity. It is no longer possible to change the type of the implementation once the CDS custom entity is transported.

A CDS custom entity represents all type attributes of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"):

-   Metadata defined using [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry")

-   A structured type defined using an [element list](javascript:call_link\('abencds_f1_custom_element_list.htm'\))

-   Optionally, a parameter interface defined using [input parameters](javascript:call_link\('abencds_f1_custom_parameter_list.htm'\))

-   Any [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry"), [CDS compositions](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry"), or [CDS to-parent associations](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") exposed in the element list

Continue
[CDS DDL - DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\))