---
title: "ABAP EML - MODIFY ENTITIES"
description: |
  Syntax MODIFY ENTITIES OF root_name ENTITY entity_1_name CREATE FROM it_instance CREATE BY assoc_name FROM it_instance_cba UPDATE FROM it_instance_u DELETE FROM it_instance_d EXECUTE action_name FROM it_instance_a RESULT it_result_a  DATA(it_result_a) ENTITY entity_2
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_modify_entities.htm"
abapFile: "abeneml_modify_entities.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "data", "types", "abeneml", "modify", "entities"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Entity Manipulation Language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) → 

ABAP EML - MODIFY ENTITIES

Syntax

MODIFY ENTITIES OF root\_name
  ENTITY entity\_1\_name
    CREATE FROM it\_instance
    CREATE BY \\assoc\_name FROM it\_instance\_cba
    UPDATE FROM it\_instance\_u
    DELETE FROM it\_instance\_d
    EXECUTE action\_name FROM it\_instance\_a
      *\[*RESULT it\_result\_a *|* DATA(it\_result\_a)*\]*
  ENTITY entity\_2\_name
    ...
  *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
  *\[*MAPPED   it\_mapped *|* DATA(it\_mapped)*\]*
  *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The [EML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) statement MODIFY ENTITIES enables change operations to be made to the [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry"). It can have a long, short, or dynamic form.

-   The long form, MODIFY ENTITIES, makes it possible to group multiple operations in multiple entities of a business object.

-   The short form [MODIFY ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_modify_entity.htm) is intended for the special case where only a single entity is operated on.

-   The dynamic form [MODIFY ENTITIES OPERATIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_modify_entities_op.htm) makes it possible to merge operations in multiple business objects in one MODIFY statement. There is no dynamic short form.

The following points apply for the syntax of the statement MODIFY ENTITIES:

-   The name of the business object (the same as the name of the [root entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_entity_glosry.htm "Glossary Entry")) root\_name is specified after OF. This is followed by a list of the operations, grouped by the entity (the schema):
    ENTITY entity\_name operation *\[*operation ...*\]*

-   Grouping operations by entity is not mandatory, since ENTITY entity\_name can be repeated. The same combination of entity\_name and operation, however, cannot occur more than once.

-   The [alias](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_alias.htm) of the entity should be used as entity\_name, if one is defined in the behavior definition . The original name of the entity can also be used instead of the alias, but this produces a warning.

-   The input of each operation is a table of instances (or a table from [%CID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm) in the case of static actions) specified after FROM.

-   For [actions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_action.htm) that produce a result (in accordance with the [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm)), RESULT ... can be used to specify a target variable it\_result\_a or declare it inline (for example, RESULT DATA(it\_result\_a)).

The following applies for the response variables:

-   The response variables are structures with n components (one component per entity in the business object) that are specified for the derived type of the [output parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_export_parameters.htm).

-   They must either have the matching type (for example, FAILED it\_failed) or be declared inline (for example, FAILED DATA(it\_failed)).

-   Up to three response variables can be specified to hold response information: FAILED, MAPPED, and REPORTED.

-   These are the early response types (without the addition [LATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_late_numbering.htm)). The instances are identified using the keys valid in the modifying phase.

Continue
[ABAP EML - MODIFY ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_modify_entity.htm)
[ABAP EML - MODIFY ENTITIES OPERATIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_modify_entities_op.htm)