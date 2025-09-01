---
title: "ABAP EML - READ ENTITIES"
description: |
  Syntax READ ENTITIES OF root_name ENTITY entity_1_name FROM it_instance RESULT it_result  DATA(it_result) BY assoc_name FROM it_instance_rba RESULT it_result_rba  DATA(it_result_rba) LINK   it_link_rba  DATA(it_link_rba) EXECUTE action_name FROM it_instance_a RESULT it
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenread_behavior.htm"
abapFile: "abenread_behavior.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenread", "behavior"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Entity Manipulation Language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) → 

ABAP EML - READ ENTITIES

Syntax

READ ENTITIES OF root\_name
   ENTITY entity\_1\_name
     FROM it\_instance
       RESULT it\_result *|* DATA(it\_result)
     BY \\assoc\_name FROM it\_instance\_rba
       RESULT it\_result\_rba *|* DATA(it\_result\_rba)
       LINK   it\_link\_rba *|* DATA(it\_link\_rba)
     EXECUTE action\_name FROM it\_instance\_a
       RESULT it\_result\_a *|* DATA(it\_result\_a)
       LINK   it\_link\_a *|* DATA(it\_link\_a)
   ENTITY entity\_name\_2
   ...
  *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
  *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The [EML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) statement READ ENTITIES enables read operations to be made to the [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry"). It can have a long, short, or dynamic form.

-   The long form, READ ENTITIES, makes it possible to group multiple operations in multiple entities of a business object.

-   The short form [READ ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_read_entity.htm) is intended for the special case where only a single entity is operated on.

-   The dynamic form [READ ENTITIES OPERATIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_read_entities_op.htm) makes it possible to merge operations in multiple [business objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbusiness_object_glosry.htm "Glossary Entry") in one statement. There is no dynamic short form.

The following points apply for the syntax of the statement READ ENTITIES:

-   The name of the business object (the same as the name of the [root entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_entity_glosry.htm "Glossary Entry")) root\_name is specified after OF.

-   This is followed by the list of the operations, grouped by entity (schema):
        ENTITY entity\_name
           operation
          *\[*operation ...*\]*
    Grouping operations by entity is not mandatory, since ENTITY entity\_name can be repeated. The same combination of entity\_name and operation, however, cannot occur more than once.

-   The [alias](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_alias.htm) of the entity should be used as entity\_name, if one is defined in the [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm). The original name of the entity can also be used instead of the alias, but this produces a warning.

-   The simple READ ENTITIES statement does not have its own keyword (such as CREATE in [MODIFY ENTITIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_modify_entities.htm)), rather it starts directly with FROM it\_instance.

-   READ ENTITIES statements always have the addition RESULT, since the result of the read must be specified.

-   Two parameters are bound for each operation (source and target variable); in read-by-association, on the other hand, up to three variables (source and target variable and link) can be bound.

-   Read-by-Association has the following form:
        READ BY \\association\_name FROM instances
           RESULT results
           LINK   links
    Here, at least one of the target variables (results or links) must be specified. The variable results contains the target instances with all fields, whereas the variable links contains only a list of key pairs: Source key, target key. Target variables must have the appropriate type (for example, RESULT it\_result\_a) or can be declared inline (for example, RESULT DATA(it\_result\_a)).

The following applies for the response variables:

-   The response variables are structures with n component (one component for each entity of the business object).

-   Up to two variables can be specified to hold response information: FAILED and REPORTED. There are no key assignments in the statement READ ENTITIES, which is why the response structure MAPPED is not used.

-   The response variables must either have the matching type or be declared inline (for example, FAILED DATA(it\_failed)). These are the early response types (without the addition LATE). The instances are identified using the keys valid in the interaction phase.

Continue
[ABAP EML - READ ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_read_entity.htm)
[ABAP EML - READ ENTITIES OPERATIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_read_entities_op.htm)