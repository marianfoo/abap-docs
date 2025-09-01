  

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