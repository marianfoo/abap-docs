---
title: "ABAP CDS - DEFINE ABSTRACT ENTITY"
description: |
  Syntax @entity_annot1(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_annotations.htm) @entity_annot2(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_annotations.htm) ... DEFINE ABSTRACT ENTITY cds_entity p
version: "7.53"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_abstract_entity.htm"
abapFile: "abencds_f1_define_abstract_entity.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abencds", "define", "abstract", "entity"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - DEFINE ABSTRACT ENTITY

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_annotations.htm)*\]*
...
*\[*DEFINE*\]* ABSTRACT ENTITY cds\_entity
         *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_parameter_list.htm)*\]*
          [element\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_element_list.htm)*\[*;*\]*

Effect

Defines an [abstract CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabstract_entity_glosry.htm "Glossary Entry") cds\_entity in [CDS DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_ddl_glosry.htm "Glossary Entry"). When an abstract CDS entity is activated, its metadata is created but no other object instances are created on the database or in AS ABAP. The name cds\_entity must comply with the naming conventions for [dictionary types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_types.htm) and can have a maximum of 30 characters.

-   [@entity\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_annotations.htm) can be used to specify optional [annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotation_glosry.htm "Glossary Entry") for the abstract CDS entity.

-   [parameter\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_parameter_list.htm) is used to declare a list of optional input parameters for the abstract CDS entity.

-   [element\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_element_list.htm) is used to declare elements and associations of the abstract CDS entity.

An abstract CDS entity can be used as a global structured type in ABAP programs. The entity is located in the namespace of the [data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_types.htm) in ABAP Dictionary and in the namespace of the global [object types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_type_glosry.htm "Glossary Entry") in the [class library](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_library_glosry.htm "Glossary Entry"). The elements of the abstract CDS entity define the components of the global structured type that can be referenced in ABAP programs using TYPE. As is the case for any CDS entity, the annotations of an abstract CDS entity can be [evaluated](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_semantics_annotation_abexa.htm).

Notes

-   An abstract CDS entity cannot be used as a data source in other CDS entities or in ABAP SQL.

-   The [DDL source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of an abstract CDS entity must have the same name as this entity.

-   No classic ABAP Dictionary [structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures.htm) visible in the [tools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm) for classic structures is created for an abstract CDS entity.

Example

The following DDL source code shows an abstract CDS entity:

@EndUserText.label: 'Abstract CDS Entity'
@DemoAnno.vAnnot1:  'Some annotation'
define abstract entity demo\_cds\_abstract\_entity
  {
    key col1 : abap.char(3);
        col2 : abap.int4;
        col3 : abap.string;
        col4 : demo\_char\_text;
  }

The program DEMO\_CDS\_ABSTRACT\_ENTITY demonstrates the following:

-   The structure of the abstract CDS entity can be evaluated using [RTTI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") methods.

-   The annotations of the abstract CDS entity can be [evaluated](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_annotations_analysis.htm) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.

-   The structure of the abstract CDS entity can be used as a data type in the ABAP program.

Continue
[ABAP CDS - DEFINE ABSTRACT ENTITY, parameter\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_entity_parameter_list.htm)
[ABAP CDS - DEFINE ABSTRACT ENTITY, element\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_element_list.htm)