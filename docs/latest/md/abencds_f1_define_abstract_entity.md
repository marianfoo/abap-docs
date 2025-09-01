  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Abstract Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20ABSTRACT%20ENTITY%2C%20ABENCDS_F1_DEFINE_ABSTRACT_ENTITY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

CDS DDL - DEFINE ABSTRACT ENTITY

Syntax

*\[*[@entity\_annot1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm)*\]*
*\[*[@entity\_annot2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm)*\]*
...
*\[*DEFINE*\]* *\[*ROOT*\]* ABSTRACT ENTITY abstract\_entity
         *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_parameter_list.htm)*\]*
          [element\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_element_list.htm)*\[*;*\]*

Effect

Defines an [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") abstract\_entity in [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry"). When a CDS abstract entity is activated, its metadata is created but no other object instances are created on the database or in AS ABAP. The name abstract\_entity must comply with the naming conventions for [dictionary types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) and can have a maximum of 30 characters.

-   [@entity\_annot](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm) can be used to specify optional [annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry") for the CDS abstract entity.
-   [parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_parameter_list.htm) is used to declare a list of optional input parameters for the CDS abstract entity.
-   [element\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_element_list.htm) is used to declare elements, CDS associations, CDS to-child associations, and CDS-to-parent associations of the CDS abstract entity.

A CDS abstract entity can be used as a global structured type in ABAP programs. The entity is located in the namespace of all [global types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP. The elements of the CDS abstract entity define the components of the global structured type that can be referenced in ABAP programs using TYPE. As is the case for any CDS entity, the annotations of a CDS abstract entity can be [evaluated](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_semantics_annotation_abexa.htm).

In ABAP CDS, the keyword ROOT is used to define the CDS abstract entity abstract\_entity as a [root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenroot_entity_glosry.htm "Glossary Entry") of the hierarchy of a [business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbusiness_object_glosry.htm "Glossary Entry"). The following applies to the root entity:

-   There is exactly one root entity in the structure of a business object.
-   A root entity can have [child entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchild_entity_glosry.htm "Glossary Entry") defined by means of [to-child associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abento_child_association_glosry.htm "Glossary Entry") using the keyword [COMPOSITION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_absent_composition.htm), but this is not mandatory. A root entity can also be a [leaf entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleaf_entity_glosry.htm "Glossary Entry").
-   A root entity does not have a [parent entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenparent_entity_glosry.htm "Glossary Entry"). [To-parent](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_absent_to_parent_assoc.htm) associations are not allowed in root entities.

Hints

-   A CDS abstract entity cannot be used as a data source in other CDS entities or in ABAP SQL.
-   The [DDL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of a CDS abstract entity must have the same name as this entity.
-   No ABAP Dictionary [DDIC structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) visible in the [tools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm) for structures is created for a CDS abstract entity.

Example

The following DDL source code shows a CDS abstract entity:

@EndUserText.label: 'Abstract CDS Entity'
@Metadata.allowExtensions: false
define abstract entity demo\_cds\_abstract\_entity
  {
    key col1 : abap.char(3);
        col2 : abap.int4;
        col3 : abap.string;
        col4 : DEMO\_BT\_CHAR\_TEXT;
  }

The class CL\_DEMO\_CDS\_ABSTRACT\_ENTITY demonstrates the following:

-   The structure of the CDS abstract entity can be evaluated using [RTTI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") methods.
-   The annotations of the CDS abstract entity can be [evaluated](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_analysis.htm) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.
-   The structure of the CDS abstract entity can be used as a data type in the ABAP program.

Continue
[CDS DDL - DEFINE ABSTRACT ENTITY, parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_parameter_list.htm)
[CDS DDL - DEFINE ABSTRACT ENTITY, element\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_absent_element_list.htm)