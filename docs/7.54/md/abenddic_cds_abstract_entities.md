---
title: "ABAP CDS - Abstract Entities"
description: |
  An abstract CDS entity is defined in the DDL source code(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm 'Glossary Entry') of a CDS data definition(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_data_definition_glosry.htm 'Glossary En
version: "7.54"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_abstract_entities.htm"
abapFile: "abenddic_cds_abstract_entities.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abenddic", "cds", "abstract", "entities"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) → 

ABAP CDS - Abstract Entities

An abstract CDS entity is defined in the [DDL source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a [CDS data definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_data_definition_glosry.htm "Glossary Entry") in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) using the statement [DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_abstract_entity.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the [ABAP Core Data Services (CDS)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry"). DCL source code in an abstract CDS entity can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

An abstract CDS entity represents all type attributes of a [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   Metadata defined using [CDS annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry")

-   A structured type defined using an element list

-   A parameter interface defined using input parameters (if applicable)

-   [CDS associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_association_glosry.htm "Glossary Entry") [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) in the element list (if applicable)

An instance of an abstract CDS entity is not created as a database object and client handling is not defined. An abstract CDS entity can be used as follows:

-   ABAP CDS

-   An abstract CDS entity can be specified as a target data source of a [CDS association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_association_glosry.htm "Glossary Entry"). A CDS association of this type can be published only and cannot be created as an instance of a join expression.

-   An abstract CDS entity cannot be used as a data source of [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) statements or used by [SQL path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) in other CDS entities.

-   ABAP Programs

-   The structured type of the abstract CDS entity is known in ABAP programs. Like the type of any CDS entity, it can be used after the addition TYPE. The attributes of the structured type can be evaluated using [RTTI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry").

-   An abstract CDS entity cannot be used as a data source of [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statements or used by [path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_path.htm) in ABAP SQL.

-   The statement [ANNOTATE ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_annotate_view.htm) can be used to add [CDS metadata extensions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_metadata_extension_glosry.htm "Glossary Entry") to the [annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") of an abstract CDS entity.

-   Frameworks

-   The [annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") of an abstract CDS entity can be [evaluated](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_analysis.htm) using the methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

-   The parameters and the CDS associations of abstract CDS entities can be evaluated by frameworks such as [SADL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensadl_glosry.htm "Glossary Entry").

Notes

Abstract CDS entities can be employed in the following cases:

-   They can be used as data types whose type attributes go beyond the regular [structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) found in ABAP Dictionary. One example of this use case can be found in the [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenr_a_p_glosry.htm "Glossary Entry").

-   They can be used as prototype definitions of data models without being created as instances of data objects.