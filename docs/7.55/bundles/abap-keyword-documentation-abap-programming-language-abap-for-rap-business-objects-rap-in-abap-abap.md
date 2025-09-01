# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP for RAP Business Objects / RAP in ABAP / ABAP Entity Manipulation Language

Included pages: 21



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abeneml.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm)
- [abeneml_modify_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entities.htm)
- [abeneml_modify_entity.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entity.htm)
- [abeneml_modify_entities_op.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entities_op.htm)
- [abenread_behavior.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenread_behavior.htm)
- [abeneml_read_entity.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_read_entity.htm)
- [abeneml_read_entities_op.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_read_entities_op.htm)
- [abeneml_commit_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_entities.htm)
- [abeneml_commit_dynamic.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_dynamic.htm)
- [abeneml_commit_block.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_block.htm)
- [abenconvert_key.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconvert_key.htm)
- [abeneml_rollback_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_rollback_entities.htm)
- [abeneml_set_locks.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_set_locks.htm)
- [abeneml_set_locks_dyn.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_set_locks_dyn.htm)
- [abeneml_get_features.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_get_features.htm)
- [abeneml_get_features_dyn.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_get_features_dyn.htm)

**Bundle Contains**: 16 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.719Z

---

### abeneml.htm

> **📖 Official SAP Documentation**: [abeneml.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) → 

ABAP Entity Manipulation Language

\* Work in progress \*

Entity Manipulation Language (or EML for short) is a set of ABAP statements for manipulating the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") that are granted a behavior by the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). EML statements allow:

-   Modifying operations on CDS entities.
    For this purpose, the statement MODIFY ENTITIES is available in different variants, which reference one or more entities of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"), statically or dynamically: [MODIFY ENTITIES](javascript:call_link\('abeneml_modify_entities.htm'\)), [MODIFY ENTITY](javascript:call_link\('abeneml_modify_entity.htm'\)) and [MODIFY ENTITIES OPERATIONS](javascript:call_link\('abeneml_modify_entities_op.htm'\)).

-   Read operations on CDS entities.
    For this purpose, the statement READ ENTITIES is available in different variants, which reference one or more entities of a business object, statically or dynamically: [READ ENTITIES](javascript:call_link\('abenread_behavior.htm'\)), [READ ENTITY](javascript:call_link\('abeneml_read_entity.htm'\)) and [READ ENTITIES OPERATIONS](javascript:call_link\('abeneml_read_entities_op.htm'\)).

-   Triggering the saver sequence.
    For this purpose the statement [COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\)) is available in different variants: COMMIT ENTITIES and COMMIT ENTITIES RESPONSES.

-   Handling the result of the [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) method.
    For this purpose there is the block-constructing variant of COMMIT ENTITIES and the [CONVERT KEY](javascript:call_link\('abenconvert_key.htm'\)) statement.

-   Rolling back all changes since the last COMMIT.
    For this purpose there is the [ROLLBACK ENTITIES](javascript:call_link\('abeneml_rollback_entities.htm'\)) statement.

-   Explicit locking of instances for a following modification.
    For this purpose the statement [SET LOCKS](javascript:call_link\('abeneml_set_locks.htm'\)) is available in different variants: SET LOCKS OF and SET LOCKS ENTITY.

If the IMPORT table is empty, the method is not called.

Continue
[ABAP EML - MODIFY ENTITIES](javascript:call_link\('abeneml_modify_entities.htm'\))
[ABAP EML - READ ENTITIES](javascript:call_link\('abenread_behavior.htm'\))
[ABAP EML - COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\))
[ABAP EML - CONVERT KEY](javascript:call_link\('abenconvert_key.htm'\))
[ABAP EML - ROLLBACK ENTITIES](javascript:call_link\('abeneml_rollback_entities.htm'\))
[ABAP EML - SET LOCKS](javascript:call_link\('abeneml_set_locks.htm'\))
[ABAP EML - GET FEATURES](javascript:call_link\('abeneml_get_features.htm'\))



**📖 Source**: [abeneml.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm)

### abeneml_modify_entities.htm

> **📖 Official SAP Documentation**: [abeneml_modify_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entities.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - MODIFY ENTITIES

\* Work in progress \*

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

EML is ABAP.

The [EML](javascript:call_link\('abeneml.htm'\)) statement MODIFY ENTITIES enables change operations to be made to the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). It can have a long, short, or dynamic form.

-   The long form, MODIFY ENTITIES, makes it possible to group multiple operations in multiple entities of a business object.

-   The short form [MODIFY ENTITY](javascript:call_link\('abeneml_modify_entity.htm'\)) is intended for the special case where only a single entity is operated on.

-   The dynamic form [MODIFY ENTITIES OPERATIONS](javascript:call_link\('abeneml_modify_entities_op.htm'\)) makes it possible to merge operations in multiple business objects in one MODIFY statement. There is no dynamic short form.

The following points apply for the syntax of the statement MODIFY ENTITIES:

-   The name of the business object (the same as the name of the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry")) root\_name is specified after OF. This is followed by a list of the operations, grouped by the entity (the schema):
    ENTITY entity\_name operation *\[*operation ...*\]*

-   Grouping operations by entity is not mandatory, since ENTITY entity\_name can be repeated. The same combination of entity\_name and operation, however, cannot occur more than once.

-   The [alias](javascript:call_link\('abenbdl_alias.htm'\)) of the entity should be used as entity\_name, if one is defined in the behavior definition . The original name of the entity can also be used instead of the alias, but this produces a warning.

-   The input of each operation is a table of instances (or a table from [%CID](javascript:call_link\('abencomponents_derived_types.htm'\)) in the case of static actions) specified after FROM.

-   For [actions](javascript:call_link\('abenbdl_action.htm'\)) that produce a result (in accordance with the [behavior definition](javascript:call_link\('abencds_behavior_definitions.htm'\))), RESULT ... can be used to specify a target variable it\_result\_a or declare it inline (for example, RESULT DATA(it\_result\_a)).

The following applies to the response variables:

-   The response variables are structures with n components (one component per entity in the business object) that are specified for the derived type of the [output parameter](javascript:call_link\('abenrpm_export_parameters.htm'\)).

-   They must either have the matching type (for example, FAILED it\_failed) or be declared inline (for example, FAILED DATA(it\_failed)).

-   Up to three response variables can be specified to hold response information: FAILED, MAPPED, and REPORTED.

-   These are the early response types (without the addition [LATE](javascript:call_link\('abenbdl_late_numbering.htm'\))). The instances are identified using the keys valid in the modifying phase.

Continue
[ABAP EML - MODIFY ENTITY](javascript:call_link\('abeneml_modify_entity.htm'\))
[ABAP EML - MODIFY ENTITIES OPERATIONS](javascript:call_link\('abeneml_modify_entities_op.htm'\))



**📖 Source**: [abeneml_modify_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entities.htm)

### abeneml_modify_entity.htm

> **📖 Official SAP Documentation**: [abeneml_modify_entity.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entity.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - MODIFY ENTITIES](javascript:call_link\('abeneml_modify_entities.htm'\)) → 

ABAP EML - MODIFY ENTITY

\* Work in progress \*

Syntax

MODIFY
  ENTITY entity\_name
    CREATE FROM instance\_create
    CREATE BY \\assoc\_name FROM it\_instance\_cba
    UPDATE FROM it\_instance\_u
    DELETE FROM it\_instance\_d
    EXECUTE action\_name FROM it\_instance\_a
      *\[*RESULT it\_result\_a *|* DATA(result\_action)*\]*
  *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
  *\[*MAPPED   it\_mapped *|* DATA(it\_mapped)*\]*
  *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The short form MODIFY ENTITY is intended for the special case where only a single entity is operated on. In this case, access via the [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") (the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") root\_name) is not necessary.

The following points apply for the syntax of the statement MODIFY ENTITY:

-   The ENTITY entity\_name is specified once.

-   An alias of the entity cannot be used since no context of the business object is known.

-   This is followed by a list of the change operations, grouped by entity (schema):
        MODIFY ENTITY entity\_name
           operation
          *\[*operation ...*\]*

For more information on syntax elements, see [MODIFY ENTITIES](javascript:call_link\('abeneml_modify_entities.htm'\)).



**📖 Source**: [abeneml_modify_entity.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entity.htm)

### abeneml_modify_entities_op.htm

> **📖 Official SAP Documentation**: [abeneml_modify_entities_op.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entities_op.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - MODIFY ENTITIES](javascript:call_link\('abeneml_modify_entities.htm'\)) → 

ABAP EML - MODIFY ENTITIES OPERATIONS

\* Work in progress \*

Syntax

MODIFY ENTITIES
    OPERATIONS operation
   *\[*FAILED   it\_failed   *|* DATA(it\_failed)*\]*
   *\[*MAPPED   it\_mapped   *|* DATA(it\_mapped)*\]*
   *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The dynamic form MODIFY ENTITIES OPERATIONS does not specify an introductory name of the [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") (OF root\_name). It allows to merge operations on multiple business objects in a statement.

The line type of an operation operation has the type ABP\_BEHV\_CHANGES\_TAB and consists of following fields:

-   OP             Type  ABP\_BEHV\_OP\_MODIFY
    Operation: IF\_ABAP\_BEHV=>OP-M-CREATE*|*UPDATE*|*DELETE*|*EXECUTE

-   ENTITY\_NAME    Type  ABP\_ENTITY\_NAME

-   SUB\_NAME       Type  C  Length  30
    Contains the function or association name (for create-by-association); is empty otherwise.

-   INSTANCES      Type  REF  TO  DATA
    Contains the derived table type for the operation.

-   RESULTS        Type  REF  TO  DATA
    Contains the derived type for the results of an action; is empty otherwise.

The response structures FAILED, MAPPED and REPORTED must either have the matching type or be declared inline (for example REPORTED DATA(ls\_repd)). The line type of the response structures has the type ABP\_BEHV\_RESPONSE\_TAB and consists of the following fields:

-   ROOT\_NAME    Type  ABP\_ROOT\_ENTITY\_NAME

-   ENTITY\_NAME  Type  ABP\_ENTITY\_NAME

-   ENTRIES      Type  REF TO DATA
    Contains the derived table type for FAILED*|*MAPPED*|*REPORTED
    REF TO DATA contains the same derived types during runtime as in static cases.



**📖 Source**: [abeneml_modify_entities_op.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entities_op.htm)

### abeneml_modify_entities.htm

> **📖 Official SAP Documentation**: [abeneml_modify_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entities.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - MODIFY ENTITIES

\* Work in progress \*

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

EML is ABAP.

The [EML](javascript:call_link\('abeneml.htm'\)) statement MODIFY ENTITIES enables change operations to be made to the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). It can have a long, short, or dynamic form.

-   The long form, MODIFY ENTITIES, makes it possible to group multiple operations in multiple entities of a business object.

-   The short form [MODIFY ENTITY](javascript:call_link\('abeneml_modify_entity.htm'\)) is intended for the special case where only a single entity is operated on.

-   The dynamic form [MODIFY ENTITIES OPERATIONS](javascript:call_link\('abeneml_modify_entities_op.htm'\)) makes it possible to merge operations in multiple business objects in one MODIFY statement. There is no dynamic short form.

The following points apply for the syntax of the statement MODIFY ENTITIES:

-   The name of the business object (the same as the name of the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry")) root\_name is specified after OF. This is followed by a list of the operations, grouped by the entity (the schema):
    ENTITY entity\_name operation *\[*operation ...*\]*

-   Grouping operations by entity is not mandatory, since ENTITY entity\_name can be repeated. The same combination of entity\_name and operation, however, cannot occur more than once.

-   The [alias](javascript:call_link\('abenbdl_alias.htm'\)) of the entity should be used as entity\_name, if one is defined in the behavior definition . The original name of the entity can also be used instead of the alias, but this produces a warning.

-   The input of each operation is a table of instances (or a table from [%CID](javascript:call_link\('abencomponents_derived_types.htm'\)) in the case of static actions) specified after FROM.

-   For [actions](javascript:call_link\('abenbdl_action.htm'\)) that produce a result (in accordance with the [behavior definition](javascript:call_link\('abencds_behavior_definitions.htm'\))), RESULT ... can be used to specify a target variable it\_result\_a or declare it inline (for example, RESULT DATA(it\_result\_a)).

The following applies to the response variables:

-   The response variables are structures with n components (one component per entity in the business object) that are specified for the derived type of the [output parameter](javascript:call_link\('abenrpm_export_parameters.htm'\)).

-   They must either have the matching type (for example, FAILED it\_failed) or be declared inline (for example, FAILED DATA(it\_failed)).

-   Up to three response variables can be specified to hold response information: FAILED, MAPPED, and REPORTED.

-   These are the early response types (without the addition [LATE](javascript:call_link\('abenbdl_late_numbering.htm'\))). The instances are identified using the keys valid in the modifying phase.

Continue
[ABAP EML - MODIFY ENTITY](javascript:call_link\('abeneml_modify_entity.htm'\))
[ABAP EML - MODIFY ENTITIES OPERATIONS](javascript:call_link\('abeneml_modify_entities_op.htm'\))



**📖 Source**: [abeneml_modify_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_modify_entities.htm)

### abenread_behavior.htm

> **📖 Official SAP Documentation**: [abenread_behavior.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenread_behavior.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - READ ENTITIES

\* Work in progress \*

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

The [EML](javascript:call_link\('abeneml.htm'\)) statement READ ENTITIES enables read operations to be made to the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). It can have a long, short, or dynamic form.

-   The long form, READ ENTITIES, makes it possible to group multiple operations in multiple entities of a business object.

-   The short form [READ ENTITY](javascript:call_link\('abeneml_read_entity.htm'\)) is intended for the special case where only a single entity is operated on.

-   The dynamic form [READ ENTITIES OPERATIONS](javascript:call_link\('abeneml_read_entities_op.htm'\)) makes it possible to merge operations in multiple [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in one statement. There is no dynamic short form.

The following points apply for the syntax of the statement READ ENTITIES:

-   The name of the business object (the same as the name of the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry")) root\_name is specified after OF.

-   This is followed by the list of the operations, grouped by entity (schema):
        ENTITY entity\_name
           operation
          *\[*operation ...*\]*
    Grouping operations by entity is not mandatory, since ENTITY entity\_name can be repeated. The same combination of entity\_name and operation, however, cannot occur more than once.

-   The [alias](javascript:call_link\('abenbdl_alias.htm'\)) of the entity should be used as entity\_name, if one is defined in the [behavior definition](javascript:call_link\('abencds_behavior_definitions.htm'\)). The original name of the entity can also be used instead of the alias, but this produces a warning.

-   The simple READ ENTITIES statement does not have its own keyword (such as CREATE in [MODIFY ENTITIES](javascript:call_link\('abeneml_modify_entities.htm'\))), rather it starts directly with FROM it\_instance.

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
[ABAP EML - READ ENTITY](javascript:call_link\('abeneml_read_entity.htm'\))
[ABAP EML - READ ENTITIES OPERATIONS](javascript:call_link\('abeneml_read_entities_op.htm'\))



**📖 Source**: [abenread_behavior.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenread_behavior.htm)

### abeneml_read_entity.htm

> **📖 Official SAP Documentation**: [abeneml_read_entity.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_read_entity.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - READ ENTITIES](javascript:call_link\('abenread_behavior.htm'\)) → 

ABAP EML - READ ENTITY

\* Work in progress \*

Syntax

READ
  ENTITY entity\_name
     FROM it\_instance
       RESULT it\_result *|* DATA(it\_result)
     BY \\assoc\_name FROM it\_instance\_rba
       RESULT it\_result\_rba *|* DATA(it\_result\_rba)
       LINK   it\_link\_rba *|* DATA(it\_link\_rba)
     EXECUTE action\_name FROM it\_instance\_a
       RESULT it\_result\_a *|* DATA(it\_result\_a)
       LINK   it\_link\_a *|* DATA(it\_link\_a)
    *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
    *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The short form READ ENTITY is intended for the special case where only a single entity is operated on. In this case, access using the [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") (the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") root\_name) would not be necessary.

The following points apply for the syntax of the statement READ ENTITY:

-   The ENTITY entity\_name is specified once.

-   An [alias](javascript:call_link\('abenbdl_alias.htm'\)) of the entity cannot be used since no context of the business object is known.

-   This is followed by a list of operations on the entity according to the schema:
        ENTITY entity\_name
            operation
           *\[*operation ...*\]*

For more information on syntax elements, see [READ ENTITIES](javascript:call_link\('abenread_behavior.htm'\)).



**📖 Source**: [abeneml_read_entity.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_read_entity.htm)

### abeneml_read_entities_op.htm

> **📖 Official SAP Documentation**: [abeneml_read_entities_op.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_read_entities_op.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - READ ENTITIES](javascript:call_link\('abenread_behavior.htm'\)) → 

ABAP EML - READ ENTITIES OPERATIONS

\* Work in progress \*

Syntax

READ ENTITIES
    OPERATIONS operations
   *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
   *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The dynamic form READ ENTITIES OPERATIONS does not specify an introductory name of the [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") (OF root\_name). It allows to merge operations on multiple business objects in a statement.

The table type of an operation operation has the type ABP\_BEHV\_RETRIEVALS\_TAB and consists of following fields:

-   OP            Type  ABP\_BEHV\_OP\_MODIFY
    Operation: IF\_ABAP\_BEHV=>R\_OP-READ|READ\_BA

-   ENTITY\_NAME   Type  ABP\_ENTITY\_NAME

-   SUB\_NAME      Type  C  Length  30
    Contains the function or association name (for read-by-association), is empty otherwise.

-   INSTANCES     Type  REF  TO  DATA
    Contains the derived table type for the operation.

-   FULL          Type  C  Length 1
    Flag: Retrieve target instances (not just links)

-   RESULTS       Type  REF  TO  DATA
    Contains the derived table type for the target entity.

-   LINKS                       Type  REF  TO  DATA
    Contains the derived table type for the relationships between source-and target key.

The line type of the response structures FAILED and REPORTED has the type ABP\_BEHV\_RESPONSE\_TAB and consists of the following fields:

-   ROOT\_NAME     Type  ABP\_ROOT\_ENTITY\_NAME

-   ENTITY\_NAME   Type  ABP\_ENTITY\_NAME

-   ENTRIES       Type  REF TO DATA
    Contains the derived table type for FAILED*|*REPORTED

During runtime, REF TO DATA contain the same derived types as in static cases.



**📖 Source**: [abeneml_read_entities_op.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_read_entities_op.htm)

### abenread_behavior.htm

> **📖 Official SAP Documentation**: [abenread_behavior.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenread_behavior.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - READ ENTITIES

\* Work in progress \*

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

The [EML](javascript:call_link\('abeneml.htm'\)) statement READ ENTITIES enables read operations to be made to the [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). It can have a long, short, or dynamic form.

-   The long form, READ ENTITIES, makes it possible to group multiple operations in multiple entities of a business object.

-   The short form [READ ENTITY](javascript:call_link\('abeneml_read_entity.htm'\)) is intended for the special case where only a single entity is operated on.

-   The dynamic form [READ ENTITIES OPERATIONS](javascript:call_link\('abeneml_read_entities_op.htm'\)) makes it possible to merge operations in multiple [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in one statement. There is no dynamic short form.

The following points apply for the syntax of the statement READ ENTITIES:

-   The name of the business object (the same as the name of the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry")) root\_name is specified after OF.

-   This is followed by the list of the operations, grouped by entity (schema):
        ENTITY entity\_name
           operation
          *\[*operation ...*\]*
    Grouping operations by entity is not mandatory, since ENTITY entity\_name can be repeated. The same combination of entity\_name and operation, however, cannot occur more than once.

-   The [alias](javascript:call_link\('abenbdl_alias.htm'\)) of the entity should be used as entity\_name, if one is defined in the [behavior definition](javascript:call_link\('abencds_behavior_definitions.htm'\)). The original name of the entity can also be used instead of the alias, but this produces a warning.

-   The simple READ ENTITIES statement does not have its own keyword (such as CREATE in [MODIFY ENTITIES](javascript:call_link\('abeneml_modify_entities.htm'\))), rather it starts directly with FROM it\_instance.

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
[ABAP EML - READ ENTITY](javascript:call_link\('abeneml_read_entity.htm'\))
[ABAP EML - READ ENTITIES OPERATIONS](javascript:call_link\('abeneml_read_entities_op.htm'\))



**📖 Source**: [abenread_behavior.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenread_behavior.htm)

### abeneml_commit_entities.htm

> **📖 Official SAP Documentation**: [abeneml_commit_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_entities.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - COMMIT ENTITIES

\* Work in progress \*

Syntax

COMMIT ENTITIES
  *\[*RESPONSE OF root\_name\_1
    *\[*FAILED    it\_failed   *|* DATA(it\_failed)*\]*
    *\[*REPORTED  it\_reported *|* DATA(it\_reported)*\]**\]*
  *\[*RESPONSE OF root\_name\_2
    *\[*FAILED    it\_failed   *|* DATA(it\_failed)*\]*
    *\[*REPORTED  it\_reported *|* DATA(it\_reported)*\]**\]*.

Effect

If MODIFY statements are not executed within a [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") and are executed by an ABAP report instead, they would be ignored by the database at first. This is because they are applied only to the transactional buffer (by definition) and the buffer content disappears at the end of the ABAP session. This means the save sequence must be triggered in this scenario. The statement COMMIT ENTITIES is used to do this.

The statement COMMIT ENTITIES saves all [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that are changed within the [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry").

In its simplest form, the statement COMMIT ENTITIES does not have any parameters.

RESPONSE can be used to obtain the response information of one or more business objects manipulated previously using [MODIFY](javascript:call_link\('abeneml_modify_entities.htm'\)). A RESPONSE clause is then created for each root entity involved (root\_name\_1, root\_name\_2, ...):

The response variables are structures with n component (one component for each entity in the business object). Up to two variables can be specified for holding the response information for each [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") in question. FAILED and REPORTED. There are no key assignments in the statement COMMIT, which is why the response structure MAPPED is not used. The response variables must either have the matching type (for example, FAILED it\_failed) or be declared inline (for example, FAILED DATA(it\_failed)). These are the late response types: Instances are identified using the keys valid in the save phase.

The line type of the response structures FAILED and REPORTED has the type ABP\_BEHV\_RESPONSE\_TAB and consists of the following fields:

-   ROOT\_NAME     Type  ABP\_ROOT\_ENTITY\_NAME

-   ENTITY\_NAME   Type  ABP\_ENTITY\_NAME

-   ENTRIES       Type  REF TO DATA
    Contains the derived table type for FAILED*|*REPORTED

Statement successful if sy-subrc is 0. It is not enough to evaluate the result of FAILED.

Note

Within a [behavior implementation](javascript:call_link\('abenabap_behavior_pools.htm'\)), COMMIT ENTITIES is one of the forbidden statements. This restriction is also checked dynamically. If violated, the runtime error BEHAVIOR\_ILLEGAL\_STATEMENT occurs.

Continue
[ABAP EML - COMMIT ENTITIES RESPONSES](javascript:call_link\('abeneml_commit_dynamic.htm'\))
[ABAP EML - COMMIT ENTITIES BLOCK](javascript:call_link\('abeneml_commit_block.htm'\))



**📖 Source**: [abeneml_commit_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_entities.htm)

### abeneml_commit_dynamic.htm

> **📖 Official SAP Documentation**: [abeneml_commit_dynamic.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_dynamic.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\)) → 

ABAP EML - COMMIT ENTITIES RESPONSES

\* Work in progress \*

Syntax

COMMIT ENTITIES
  RESPONSES *\[*OF root\_names*\]*
    *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
    *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The statement COMMIT ENTITIES RESPONSES is a dynamic form of the COMMIT statement. The table root\_names can be used to restrict which business objects are given the response information in FAILED and REPORTED. If not used, all information accumulated in the save phase is passed.

More information about COMMIT ENTITIES can be found under [COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\)).



**📖 Source**: [abeneml_commit_dynamic.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_dynamic.htm)

### abeneml_commit_block.htm

> **📖 Official SAP Documentation**: [abeneml_commit_block.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_block.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\)) → 

ABAP EML - COMMIT ENTITIES BLOCK

\* Work in progress \*

Syntax

COMMIT ENTITIES BEGIN
  *\[*RESPONSES *\[*OF root\_names*\]**\]*
  *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
  *\[*REPORTED it\_reported *|*DATA(it\_reported)*\]*.
  ...
COMMIT ENTITIES END.

Effect

In the context of the statement [COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\)), the runtime of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry") holds its key registry to respond to queries from the statement [CONVERT KEY](javascript:call_link\('abenconvert_key.htm'\)). In the statement COMMIT ENTITIES END, this information is then deleted.



**📖 Source**: [abeneml_commit_block.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_block.htm)

### abeneml_commit_entities.htm

> **📖 Official SAP Documentation**: [abeneml_commit_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_entities.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - COMMIT ENTITIES

\* Work in progress \*

Syntax

COMMIT ENTITIES
  *\[*RESPONSE OF root\_name\_1
    *\[*FAILED    it\_failed   *|* DATA(it\_failed)*\]*
    *\[*REPORTED  it\_reported *|* DATA(it\_reported)*\]**\]*
  *\[*RESPONSE OF root\_name\_2
    *\[*FAILED    it\_failed   *|* DATA(it\_failed)*\]*
    *\[*REPORTED  it\_reported *|* DATA(it\_reported)*\]**\]*.

Effect

If MODIFY statements are not executed within a [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") and are executed by an ABAP report instead, they would be ignored by the database at first. This is because they are applied only to the transactional buffer (by definition) and the buffer content disappears at the end of the ABAP session. This means the save sequence must be triggered in this scenario. The statement COMMIT ENTITIES is used to do this.

The statement COMMIT ENTITIES saves all [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that are changed within the [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry").

In its simplest form, the statement COMMIT ENTITIES does not have any parameters.

RESPONSE can be used to obtain the response information of one or more business objects manipulated previously using [MODIFY](javascript:call_link\('abeneml_modify_entities.htm'\)). A RESPONSE clause is then created for each root entity involved (root\_name\_1, root\_name\_2, ...):

The response variables are structures with n component (one component for each entity in the business object). Up to two variables can be specified for holding the response information for each [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") in question. FAILED and REPORTED. There are no key assignments in the statement COMMIT, which is why the response structure MAPPED is not used. The response variables must either have the matching type (for example, FAILED it\_failed) or be declared inline (for example, FAILED DATA(it\_failed)). These are the late response types: Instances are identified using the keys valid in the save phase.

The line type of the response structures FAILED and REPORTED has the type ABP\_BEHV\_RESPONSE\_TAB and consists of the following fields:

-   ROOT\_NAME     Type  ABP\_ROOT\_ENTITY\_NAME

-   ENTITY\_NAME   Type  ABP\_ENTITY\_NAME

-   ENTRIES       Type  REF TO DATA
    Contains the derived table type for FAILED*|*REPORTED

Statement successful if sy-subrc is 0. It is not enough to evaluate the result of FAILED.

Note

Within a [behavior implementation](javascript:call_link\('abenabap_behavior_pools.htm'\)), COMMIT ENTITIES is one of the forbidden statements. This restriction is also checked dynamically. If violated, the runtime error BEHAVIOR\_ILLEGAL\_STATEMENT occurs.

Continue
[ABAP EML - COMMIT ENTITIES RESPONSES](javascript:call_link\('abeneml_commit_dynamic.htm'\))
[ABAP EML - COMMIT ENTITIES BLOCK](javascript:call_link\('abeneml_commit_block.htm'\))



**📖 Source**: [abeneml_commit_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_commit_entities.htm)

### abenconvert_key.htm

> **📖 Official SAP Documentation**: [abenconvert_key.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconvert_key.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - CONVERT KEY

\* Work in progress \*

Syntax

COMMIT ENTITIES BEGIN
  ...
  CONVERT KEY OF entity\_name
  FROM pre\_key
  TO   key.
COMMIT ENTITIES END.

Effect

For entities with [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)), the statement [MODIFY](javascript:call_link\('abenhandler_method_modify.htm'\)) provides only temporary keys. For these temporary keys, a successful save method draws finalized keys. If, for example, the keys of new instances are passed to a HTTP response, they must be the finalized values and not the temporary values from the MODIFY phase. The statement CONVERT KEY is used for this.

The statement CONVERT KEY may only be used in the context of a block-constructing variant of the statement [COMMIT ENTITIES](javascript:call_link\('abeneml_commit_block.htm'\)) to determine the finalized value of a temporary key. In the context of the statement COMMIT ENTITIES, the runtime of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry") holds its key registry to respond to queries from the statement CONVERT KEY. In the statement COMMIT ENTITIES END, this information is then deleted.

In its dynamic form, the statement CONVERT KEY is passed the name of the entity and does not perform a static type check.

Remarks

-   Unlike the other [EML](javascript:call_link\('abeneml.htm'\)) statements, CONVERT KEY does not operate on tables. This is because the consumer typically iterates across the consumer's own data and needs to fill specific columns. The preceding extraction of all pre\_key, following by a mass conversion and insertion of keys in the target table would be more time-consuming and use more resources than repeating the direct individual operation.

-   Within a [behavior implementation](javascript:call_link\('abenabap_behavior_pools.htm'\)), the statement CONVERT KEY is allowed only in the [SAVE](javascript:call_link\('abensaver_method_save.htm'\)) method. If this rule is violated, the runtime error BEHAVIOR\_ILLEGAL\_STATEMENT occurs.



**📖 Source**: [abenconvert_key.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconvert_key.htm)

### abeneml_rollback_entities.htm

> **📖 Official SAP Documentation**: [abeneml_rollback_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_rollback_entities.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - ROLLBACK ENTITIES

\* Work in progress \*

Syntax

ROLLBACK ENTITIES.

Effect

The statement ROLLBACK ENTITIES rolls back all changes since the last COMMIT and resets the transactional buffer..

Using the statement ROLLBACK ENTITIES is prohibited in the [behavior implementation methods](javascript:call_link\('abenabap_behavior_pools.htm'\)). If violated, a runtime error occurs.



**📖 Source**: [abeneml_rollback_entities.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_rollback_entities.htm)

### abeneml_set_locks.htm

> **📖 Official SAP Documentation**: [abeneml_set_locks.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_set_locks.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - SET LOCKS

\* Work in progress \*

Syntax

SET LOCKS OF root\_name
   ENTITY entity\_1\_name FROM lt1
  *\[*ENTITY entity\_2\_name FROM lt2 ...*\]*
  *\[*FAILED   it\_failed*\]*
  *\[*REPORTED it\_reported*\]*.
SET LOCKS
   ENTITY entity\_name FROM lt
  *\[*FAILED it\_failed*\]*
  *\[*REPORTED it\_reported*\]*.

Effect

The explicit locking of instances for a following modification is not necessary since the framework automatically locks instances contained in the method [MODIFY](javascript:call_link\('abenhandler_method_modify.htm'\)). However, if the application knows that instances will be needed (that need to be protected so that users cannot change the same data simultaneously), the SET LOCKS statement can be used.

Two types of the statement SET LOCKS are available:

-   a long form SET LOCKS OF root\_name

-   a short form SET LOCKS.

The table types required here can be declared statically using the syntax TYPE ... TABLE FOR LOCK OF (see [Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\))).

Continue
[ABAP EML - SET LOCKS DYN](javascript:call_link\('abeneml_set_locks_dyn.htm'\))



**📖 Source**: [abeneml_set_locks.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_set_locks.htm)

### abeneml_set_locks_dyn.htm

> **📖 Official SAP Documentation**: [abeneml_set_locks_dyn.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_set_locks_dyn.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - SET LOCKS](javascript:call_link\('abeneml_set_locks.htm'\)) → 

ABAP EML - SET LOCKS DYN

\* Work in progress \*



**📖 Source**: [abeneml_set_locks_dyn.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_set_locks_dyn.htm)

### abeneml_set_locks.htm

> **📖 Official SAP Documentation**: [abeneml_set_locks.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_set_locks.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - SET LOCKS

\* Work in progress \*

Syntax

SET LOCKS OF root\_name
   ENTITY entity\_1\_name FROM lt1
  *\[*ENTITY entity\_2\_name FROM lt2 ...*\]*
  *\[*FAILED   it\_failed*\]*
  *\[*REPORTED it\_reported*\]*.
SET LOCKS
   ENTITY entity\_name FROM lt
  *\[*FAILED it\_failed*\]*
  *\[*REPORTED it\_reported*\]*.

Effect

The explicit locking of instances for a following modification is not necessary since the framework automatically locks instances contained in the method [MODIFY](javascript:call_link\('abenhandler_method_modify.htm'\)). However, if the application knows that instances will be needed (that need to be protected so that users cannot change the same data simultaneously), the SET LOCKS statement can be used.

Two types of the statement SET LOCKS are available:

-   a long form SET LOCKS OF root\_name

-   a short form SET LOCKS.

The table types required here can be declared statically using the syntax TYPE ... TABLE FOR LOCK OF (see [Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\))).

Continue
[ABAP EML - SET LOCKS DYN](javascript:call_link\('abeneml_set_locks_dyn.htm'\))



**📖 Source**: [abeneml_set_locks.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_set_locks.htm)

### abeneml_get_features.htm

> **📖 Official SAP Documentation**: [abeneml_get_features.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_get_features.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - GET FEATURES

\* Work in progress \*

Continue
[ABAP EML - GET FEATURES DYN](javascript:call_link\('abeneml_get_features_dyn.htm'\))



**📖 Source**: [abeneml_get_features.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_get_features.htm)

### abeneml_get_features_dyn.htm

> **📖 Official SAP Documentation**: [abeneml_get_features_dyn.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_get_features_dyn.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - GET FEATURES](javascript:call_link\('abeneml_get_features.htm'\)) → 

ABAP EML - GET FEATURES DYN

\* Work in progress \*



**📖 Source**: [abeneml_get_features_dyn.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_get_features_dyn.htm)

### abeneml_get_features.htm

> **📖 Official SAP Documentation**: [abeneml_get_features.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_get_features.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abeneml_get_features.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml_get_features.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - GET FEATURES

\* Work in progress \*

Continue
[ABAP EML - GET FEATURES DYN](javascript:call_link\('abeneml_get_features_dyn.htm'\))
