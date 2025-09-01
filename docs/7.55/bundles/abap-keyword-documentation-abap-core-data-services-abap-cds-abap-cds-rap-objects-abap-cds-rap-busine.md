# ABAP - Keyword Documentation / ABAP - Core Data Services (ABAP CDS) / ABAP CDS - RAP Objects / ABAP CDS - RAP Business Objects (BO) / ABAP CDS - Behavior Definitions / ABAP CDS - BDL for Behavior Definitions / CDS BDL / CDS BDL - DEFINE BEHAVIOR

Included pages: 10


### abenbdl_define_behavior.htm

---
title: "CDS BDL - DEFINE BEHAVIOR"
description: |
  Work in progress  Syntax define behavior for CDSEntityName alias AliasName implementation in class ClassName unique late numbering in place etag fieldAncestorEntity~Field ( LocalField = MasterField ) lock masterdependent ( LocalField = MasterFie
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm"
abapFile: "abenbdl_define_behavior.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "data", "abenbdl", "define", "behavior"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) → 

CDS BDL - DEFINE BEHAVIOR

\* Work in progress \*

Syntax

define behavior for CDSEntityName *\[*alias AliasName*\]*
  *\[*implementation in class ClassName unique*\]*
  *\[*late numbering *\[*in place*\]**\]*
  *\[*etag field*|*AncestorEntity~Field ( LocalField = MasterField )*\]*
  *\[*lock master*|*dependent ( LocalField = MasterField )*\]*
  {
    *\[*field(read only *|* mandatory) field1*\[*, field2, ...*\]*;*\]*
    *\[*internal*\]* create;
    *\[*internal*\]* update;
    *\[*internal*\]* delete;
    *\[*internal*\]* *\[*static*\]* action ActionName
        *\[*external LongName*\]*
        *\[*parameter InputParameterEntity*|*$self*\]*
        *\[*result cardinality OutputParameterEntity*|*$self*\]*;
    *\[*internal*\]* association AssociationName
        *\[*abbreviation AbbreviationName*\]* {*\[**\[*internal*\]*create;*\]*};
  }

Effect

Similarly to CDS entities, the [behavior](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_behavior_glosry.htm "Glossary Entry") for an entity can be divided into a part for once-only specifications (implementation, late numbering, etag, and lock), followed by a part of multiple specifications (field, standard operations, actions, and associations) enclosed in {...}.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
late numbering
lock master
etag LastChangedAt
{
  field (read only) Travel\_ID;
  field (mandatory) Agency\_ID, Customer\_ID, Begin\_Date, End\_Date;
  create;
  update;
  delete;
  action set\_status\_booked result \[1\] $self;
  association \_Booking { create; }
}

Continue
[CDS BDL - DEFINE BEHAVIOR, alias](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_alias.htm)
[CDS BDL - DEFINE BEHAVIOR, in class unique](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_in_class_unique.htm)
[CDS BDL - DEFINE BEHAVIOR, late numbering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_late_numbering.htm)
[CDS BDL - DEFINE BEHAVIOR, etag](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_etag.htm)
[CDS BDL - DEFINE BEHAVIOR, lock](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_lock.htm)
[CDS BDL - DEFINE BEHAVIOR, field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_field.htm)
[CDS BDL - DEFINE BEHAVIOR, Standard Operations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_standard_operations.htm)
[CDS BDL - DEFINE BEHAVIOR, action](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm)
[CDS BDL - DEFINE BEHAVIOR, association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_association.htm)


### abenbdl_alias.htm

---
title: "CDS BDL - DEFINE BEHAVIOR, alias"
description: |
  Work in progress  Syntax ... alias AliasName Effect Behavior Definition Language (CDS BDL(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_bdl_glosry.htm 'Glossary Entry')) makes it possible to define an alias name AliasName for a CDS entity. A BDL alias for an entity makes
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_alias.htm"
abapFile: "abenbdl_alias.htm"
keywords: ["update", "delete", "do", "try", "method", "data", "types", "abenbdl", "alias"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) → 

CDS BDL - DEFINE BEHAVIOR, alias

\* Work in progress \*

Syntax

... alias AliasName

Effect

Behavior Definition Language ([CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_bdl_glosry.htm "Glossary Entry")) makes it possible to define an alias name AliasName for a CDS entity.

A BDL alias for an entity makes it possible to introduce a alias name for a CDS entity. This name can be clearer than the entity name itself, since it does not need to be uniquely global in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary_glosry.htm "Glossary Entry").

The alias name is visible in the method syntax of the [behavior implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm) of the business object and in the [derived types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_derived_types.htm).

The length of an alias name AliasName is restricted to 20 characters.

Example

In the following example, the data from the ABAP flight data reference scenario (short: flight data scenario) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing air travel. The underlying data is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel. The business object whose CDS data model is represented by the root entity /DMO/I\_Travel can be given an alias, in this instance Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
{
  create;
  update;
  delete;
}


### abenbdl_in_class_unique.htm

---
title: "CDS BDL - DEFINE BEHAVIOR, in class unique"
description: |
  Work in progress  Syntax ... implementation in class ClassName unique Effect A behavior definition can specify one or more global classes(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_global_class.htm) that allow the behavior implementation of a business object. T
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_in_class_unique.htm"
abapFile: "abenbdl_in_class_unique.htm"
keywords: ["do", "if", "try", "class", "data", "abenbdl", "unique"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) → 

CDS BDL - DEFINE BEHAVIOR, in class unique

\* Work in progress \*

Syntax

... *\[*implementation*\]* in class ClassName unique

Effect

A behavior definition can specify one or more [global classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_global_class.htm) that allow the behavior implementation of a business object. This can be specified in two places:

-   In the header of the business object behavior definition.

implementation unmanaged*|*managed in class ClassName unique;
  define behavior for CDSEntityName alias AliasName
        ...
or

-   In the behavior definition of each CDS entity.

implementation unmanaged*|*managed;
  define behavior for CDSEntityName alias AliasName
    implementation in class ClassName unique
        ...

A specification for each business object applies to all entities that do not have their own specification for define behavior (that is, a definition for a single entity overwrites the definition for each business object).

Effect of specifying in class ClassName unique:

-   Behavior for the entity in question can only be implemented in a [behavior pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") with the specified name ClassName. Any other class that attempts this raises an ABAP Compiler error.

-   An operation (a [standard operation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_standard_operations.htm) or an [action](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm)) must not be implemented multiple times in different [handler classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_handler_class.htm). Each operation on an entity can be implemented no more than once


### abenbdl_late_numbering.htm

---
title: "CDS BDL - DEFINE BEHAVIOR, late numbering"
description: |
  Work in progress  Syntax ... late numbering in place Effect Late numbering is a concept for gapless assignments of unique keys when creating new entity instances. New entity instances are given their final key shortly before the RAP business object(https://help.sap.com/doc/abapdocu_75
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_late_numbering.htm"
abapFile: "abenbdl_late_numbering.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "abenbdl", "late", "numbering"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) → 

CDS BDL - DEFINE BEHAVIOR, late numbering

\* Work in progress \*

Syntax

... late numbering *\[*in place*\]*

Effect

Late numbering is a concept for gapless assignments of unique keys when creating new entity instances. New entity instances are given their final key shortly before the [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry") is saved. Until this moment, the application logic uses a temporary key that has to be replaced when the business object data is saved.

The addition in place indicates that a CDS entity uses its own key fields for late numbering. These key fields are written to the special values, which are identified as temporary. This means that the [derived types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_derived_types.htm) for the entity do not contain an additional field [%PID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomponents_derived_types.htm). The task when assigning the keys (TYPE TABLE FOR MAPPED) therefore is to map from a temporary key to the final key and not to map from a %PID to the final key. This means that the mapped structure contains the entity key fields twice, once as a component %TMP and once as a component [%KEY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomponents_derived_types.htm).

Late numbering must be applied by implementing the method [adjust\_numbers()](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_adjust_numbers.htm) of the local [saver class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_saver_class.htm) that is part of the [behavior implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbehavior_implement_glosry.htm "Glossary Entry"). When declared in the [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") of the entity, late numbering causes the runtime to call the method adjust\_numbers() at the time in question. This implementation is then responsible for assigning the final keys and passing them to the method parameter mapped.

Remarks

-   The parameter mapped is used to pass the final keys to the framework and hence replace the temporary keys. Ideally, this replacement action is decoupled from the actual saving of the data but many legacy applications determine their keys when the data is saved. In these cases, it is best to implement the save logic in adjust\_numbers() and leave the method [save](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_method_save.htm) itself empty.

-   Late numbering modifies the derived types: The tables mapped, reported, and failed are given the additional field %PID to hold a temporary key.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
late numbering
{
  create;
  update;
  delete;
  action set\_status\_booked result \[1\] $self;
}


### abenbdl_etag.htm

---
title: "CDS BDL - DEFINE BEHAVIOR, etag"
description: |
  Work in progress  Syntax ... etag fieldAncestorEntity~Field ( LocalField = MasterField ) Effect The etag field field of an entity is used for locks in the OData protocol. It references either the entity itself or the parent entity AncestorEntity for which a foreign key relationship LocalField
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_etag.htm"
abapFile: "abenbdl_etag.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "abenbdl", "etag"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) → 

CDS BDL - DEFINE BEHAVIOR, etag

\* Work in progress \*

Syntax

... etag field|AncestorEntity~Field ( LocalField = MasterField )

Effect

The etag field field of an entity is used for locks in the OData protocol. It references either the entity itself or the parent entity AncestorEntity for which a foreign key relationship LocalField = MasterField must be specified.

A field flagged as an entity tag (ETag) field field is typically used to describe, uniquely, the state of a requested resource (for example a specific entity instance). Any changes made to the requested resource update the etag field. Often fields containing time stamps, check sums, or version numbers are used for this.

In the [behavior implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbehavior_implement_glosry.htm "Glossary Entry"), the method [read](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhandler_method_read.htm) of the [handler class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_handler_class.htm) is called, which then requests the current ETag for the resource as shown in the following example. The process flow is as follows:

-   If an entity has an ETag field in its [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"), a write operation (such as update) passes an if match header with the value of the ETag in the query and hence informs the framework of the expected state.

-   The method read then checks whether the requested resource exists in a buffered state or, if not, whether it needs to be read from the database.

-   The value of the ETag is then passed to the framework using the output parameters of the read method.

-   The framework checks both values and calls the write operation only if they match.

Note

An ETag can be used for optimistic locks in shared OData protocol access, where it prevents simultaneous updates on a resource from overwriting each other.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
etag LastChangedAt
{
  create;
  update;
  delete;
  action set\_status\_booked result \[1\] $self;
}


### abenbdl_lock.htm

---
title: "CDS BDL - DEFINE BEHAVIOR, lock"
description: |
  Work in progress  Syntax ... lock masterdependent ( LocalField = MasterField ) Effect A behavior definition can specify the following for an entity: -   The entity supports direct locks (by specifying the entity property lock master) or -   the entity is dependent on the lock status of a par
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_lock.htm"
abapFile: "abenbdl_lock.htm"
keywords: ["update", "delete", "do", "if", "try", "data", "abenbdl", "lock"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) → 

CDS BDL - DEFINE BEHAVIOR, lock

\* Work in progress \*

Syntax

... lock master*|*dependent ( LocalField = MasterField )

Effect

A behavior definition can specify the following for an entity:

-   The entity supports direct locks (by specifying the entity property lock master)
    or

-   the entity is dependent on the lock status of a parent entity or root entity (by specifying the entity property lock dependent).

A foreign key relationship must be defined for any lock dependencies. This relationship describes which field in the child entity references which field in the parent entity, expressed using LocalField = MasterField in BDL syntax.

Remarks [ABAP RAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_rap_glosry.htm "Glossary Entry") supports lock master for root nodes of the [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry") only.

-   The lock property is only relevant for those entities that provide change operations (such as update).

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
lock master
{
  create;
  update;
  delete;
  action set\_status\_booked result \[1\] $self;
}


### abenbdl_field.htm

---
title: "CDS BDL - DEFINE BEHAVIOR, field"
description: |
  Work in progress  Syntax ... field(read only  mandatory) field, field, ...; Effect Some fields of a CDS entity can be specified to which certain access restrictions apply: -   field(read only) FieldName; The field FieldName cannot be modified by the operations create and update. -
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_field.htm"
abapFile: "abenbdl_field.htm"
keywords: ["update", "delete", "do", "if", "class", "data", "abenbdl", "field"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) → 

CDS BDL - DEFINE BEHAVIOR, field

\* Work in progress \*

Syntax

... field(read only *|* mandatory) field*\[*, field, ...*\]*;

Effect

Some fields of a CDS entity can be specified to which certain access restrictions apply:

-   field(read only) FieldName;
    The field FieldName cannot be modified by the operations create and update.

-   field(mandatory) FieldName;
    The field FieldName must be given a value in create operations. In update operations, it must not be given the null value.

Note

Commas can be used to classify multiple fields, Field1, Field2, Field3, ... in the same way:

field(read only) Field1, Field2, Field3;

field(mandatory) Field4, Field5;

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
late numbering
lock master
{
  field (read only) Travel\_ID;
  field (mandatory) Agency\_ID, Customer\_ID, Begin\_Date, End\_Date;
  create;
  update;
  delete;
}


### abenbdl_standard_operations.htm

---
title: "CDS BDL - DEFINE BEHAVIOR, Standard Operations"
description: |
  Work in progress  Syntax ... internal create; internal update; internal delete; Effect The standard operations create, update, and delete (known as the CRUD operations) are the most important operations for the transactional behavior of a RAP business object(https://he
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_standard_operations.htm"
abapFile: "abenbdl_standard_operations.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "abenbdl", "standard", "operations"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) → 

CDS BDL - DEFINE BEHAVIOR, Standard Operations

\* Work in progress \*

Syntax

... *\[*internal*\]* create;
    *\[*internal*\]* update;
    *\[*internal*\]* delete;

Effect

The standard operations create, update, and delete (known as the CRUD operations) are the most important operations for the transactional behavior of a [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry"). The operations create, update, and delete must be declared appropriately in the [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") for an entity whenever an entity is created, updated, or deleted.

A standard operation can be given the addition internal. This makes it possible to implement the action without making it consumable from outside. Example: internal update;

CRUD operations can be made available for an entity simply by declaring them in the body of the entity in question.

The [behavior](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_behavior_glosry.htm "Glossary Entry") for the operations create, update, and delete is implemented in the method [FOR MODIFY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhandler_method_modify.htm) of the [handler class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_handler_class.htm).

Note

The [FOR LOCK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhandler_method_lock.htm) method of the handler class is called automatically before a change operation (such as update) is triggered. However, the corresponding entity must have the lock property in its behavior definition.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
lock master
{
  create;
  update;
  delete;
}

The transactional behavior of the business object is defined by the standard operations create, update, and delete. These operations are [implemented](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm) in the association [behavior pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").


### abenbdl_action.htm

---
title: "CDS BDL - DEFINE BEHAVIOR, action"
description: |
  Work in progress  Syntax ... internal static action ActionName external LongName parameter InputParameterEntity$self result cardinality OutputParameterEntity$self; Effect In behavior definitions, actions can be specified as application-specific oper
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm"
abapFile: "abenbdl_action.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "data", "types", "abenbdl", "action"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) → 

CDS BDL - DEFINE BEHAVIOR, action

\* Work in progress \*

Syntax

... *\[*internal*\]* *\[*static*\]* action ActionName
               *\[*external LongName*\]*
               *\[*parameter InputParameterEntity*|*$self*\]*
               *\[*result cardinality OutputParameterEntity*|*$self*\]*;

Effect

In behavior definitions, actions can be specified as application-specific operations. Actions can either reference an instance (the default case, without the keyword static) or they can be static (with the keyword static).

An action can also be given the keyword internal. This makes it possible to implement the action without making it consumable from outside.

Input and output parameters are optional. Actions can pass CDS entities as input parameters (InputParameterEntity) and as output parameters (OutputParameterEntity). The CDS entity can be a regular CDS view or a CDS abstract entity. If InputParameterEntity and OutputParameterEntity are also the entity for which the action is executed, only the predefined keyword $self is required. In this case, the keyword stands for the type of the entity itself.

InputParameterEntity can be any type defined in ABAP Dictionary or ABAP CDS. OData accepts structured types only. EML can also handle elementary types.

An instance action is always multi-instance-enabled. The result [cardinality](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencardinality_glosry.htm "Glossary Entry") in instance actions specifies whether an input instance points to 0..1, 1, 0..n, or 1..n instances. The potential cardinality values are therefore as follows: \[0..1\], \[1\], \[0..\*\] or \[1..\*\].

An action can also be given an external name. Here is one example:

action ActionName external 'AVeryLongExternalActionName'
     result \[0..1\] OutputParameter;

The external name can be up to 128 characters long. It will only be exposed in the OData metadata. It is ignored within ABAP, for example the action cannot be addressed in [Entity Manipulation Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeneml.htm) using the external name.

Note

The BDL syntax specifies that a maximum of one input parameter and a maximum of one output parameter can be specified. If an action requires more than one input or output, a CDS structure type or an abstract entity can be used with components for each input or output.

Example

In the following example, the data from the ABAP flight data reference scenario (short: flight data scenario) is used. It models a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing air travel.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
{
  create;
  update;
  delete;
  action set\_status\_booked result \[1\] $self;
}

The transactional [behavior](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_behavior_glosry.htm "Glossary Entry") of the [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry") travel is defined by the [standard operations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_standard_operations.htm) create, update, and delete plus one action. The end user can use the action set\_status\_booked to set the status of a trip to booked. The action set\_status\_booked is bound to an instance of the type travel, which in this case is also returned by the action. This means the cardinality equals \[1\] and $self is set as the type of the output parameter.


### abenbdl_association.htm

---
title: "CDS BDL - DEFINE BEHAVIOR, association"
description: |
  Work in progress  Syntax ... internal association AssociationName abbreviation AbbreviationName internalcreate;; Effect An important behavior part of an entity is the transactional enabling of its associations. This affects both reads (Read-By-Association) and
version: "7.55"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_association.htm"
abapFile: "abenbdl_association.htm"
keywords: ["update", "delete", "do", "if", "try", "data", "abenbdl", "association"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm) →  [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) →  [CDS BDL - DEFINE BEHAVIOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_define_behavior.htm) → 

CDS BDL - DEFINE BEHAVIOR, association

\* Work in progress \*

Syntax

... *\[*internal*\]* association AssociationName
         *\[*abbreviation AbbreviationName*\]* {*\[**\[*internal*\]*create;*\]*};

Effect

An important behavior part of an entity is the transactional enabling of its associations. This affects both reads (Read-By-Association) and creates (Create-By-Association) along CDS associations. Here, the associations in question must be specified explicitly in the behavior definition.

To activate reads for an association, either the statement association AssociationName; or association AssociationName {} can be used.

The keyword {create;} is used to declare that instances of the associated entity can be created along the association. Example: association \_Booking { create; }

An association can be given the addition internal. This makes it possible to implement the action without making it consumable from outside. This affects both read and create actions along CDS associations. Example: internal association \_Booking { create; }

If the create action is internally activated (it can be implemented but is not consumable), the operation create can be given the addition internal. Example: association \_Booking { internal create; }

The addition abbreviation defines an alternative name, in a similar way to alias for entities. AbbreviationName is not an alias, however, which is why a different keyword is used here. Associations are in the namespace of their root entity, which is why their names are usually easy to read and no more than 30 characters long. This is too long for [ABAP RAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_rap_glosry.htm "Glossary Entry"), since certain component names are created by concatenating association names and default suffixes. This why an abbreviation AbbreviationName must be defined if the name of the association in the CDS view exceeds the length of 11 characters.

Example

In the following example, the data from the ABAP flight data reference scenario (short: flight data scenario) is used. It represents a legacy business logic that can be used to create and process flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing air travel. The underlying data is described in CDS BDL - Example.

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
{
  create;
  update;
  delete;
  association \_Booking { create; }
}

The association \_Booking specifies that new instances of the child entity Booking can be created for a specific instance of the entity Travel only. The keyword { create; } indicates that this assignment is activated for the standard operation create. Therefore, booking instances can only be created using a travel instance Travel.
