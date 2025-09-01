---
title: "ABAP CDS - Cyclical Dependencies"
description: |
  In ABAP CDS, CDS entities(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm 'Glossary Entry') can be defined with mutual dependencies. For example, a CDS view(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm 'Glossary Entry') a
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cycle_problems.htm"
abapFile: "abencds_cycle_problems.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abencds", "cycle", "problems"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) → 

ABAP CDS - Cyclical Dependencies

In ABAP CDS, [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") can be defined with mutual dependencies. For example, a [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") accesses a different CDS view CDS entity as a data source or exposes a CDS view in a [CDS association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry"). A CDS entity that consumes another CDS entity is dependent on the consumed entity. A distinction should be made between the following:

-   Technical dependencies
    
    CDS entities have a technical dependency on each other when the database entities created by their activation are also dependent on each other.
    
-   Semantic dependencies
    
    CDS entities have a semantic dependency on each other when the dependency is produced by metadata not reflected in the database entities in question.
    

A cyclical dependency (or cycle) is produced if a chain of dependencies starting from one CDS entity leads back to the same CDS entity. Two categories of cyclical dependencies can be distinguished:

-   Cycle of technical dependencies
    
    Once the entities in question are activated, the technical dependencies would also incur a cyclical dependency between the generated database entities. It is not possible to characterize a cyclical dependency between entities on the database and a set of entities joined in this way cannot be activated. Examples:
    
    -   CDS views in which a CDS entity is used as a direct data source and the CDS view is directly or indirectly dependent on this source. CDS entities of this type can usually be detected by syntax errors, since the consumed entities cannot exist in active versions.
    -   A CDS view consumes a CDS association from another view in a path expression and a cyclical dependency is detected when the path expression is transformed to a join expression in the database. Usually, the error does not occur until the entity is activated.
-   Cycle caused by semantic dependencies
    
    If a cycle contains semantic dependencies and removing the semantic dependencies would remove the cyclical dependency, activating the entities in question does not produce a cyclical dependency between the associated database entities. This can be the case when CDS views are joined using CDS associations, but not all CDS associations are characterized by consuming path expressions. Sets of entities that have dependencies like this can be activated.
    

A set of CDS entities that exists for a semantic cycle cannot be activated in a single step:

-   In mass activations, an attempt is made to activate the set in multiple steps (if possible). It first attempts an activation without the semantic relationships and then with them. This function does not yet, however, work in all situations.
-   If it is not possible to resolve a semantic cyclical dependency using step-by-step activations, a cycle problem exists and it can only be solved by intervening manually. Here, CDS source code must be modified manually before individual activation steps to remove the semantic dependencies temporarily.

When solving a cycle problem manually in a system, it should be remembered that CDS entities in a cyclical dependency have the same problems after a transport into a target system. This requires consecutive transports of subsets of objects. If this is not possible (if cycle problems cannot be solved manually), the cyclical dependencies in question must be removed from the data model. For example, consumed CDS associations can be replaced by explicit join expressions, which then only produce dependencies where they actually exist.

Hints

-   To avoid activation problems, cyclical dependencies should be kept to a minimum, even if the CDS entities in question could in principle be activated. The data model should enable a hierarchical view of the data and in this way remove the need for cyclical dependencies, even if they are not characterized on the database.
-   A solution for full resolution of semantic cyclical dependencies using step-by-step activation in mass activation of CDS entities is currently being developed and will be shipped in a future release.
-   [Dictionary objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendictionary_object_glosry.htm "Glossary Entry") can have semantic dependencies on each other but no technical dependencies. DDIC table views, for example, cannot contain other views as data sources. Semantic references, however, are possible, for example using foreign key relationships or value tables. Mass activations of dictionary objects resolve any semantic cyclical dependencies using step-by-step activation.

Example

The following CDS views associated using [CDS-managed DDIC views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") consume each other as data sources, which creates a technical cycle. Both of the views have incorrect syntax and cannot be activated as long as the other view does not exist in an active version. One option is to remove the dependency on the other view from one of the views and then activate both views. If the dependency is then applied again, the view has correct syntax but still cannot be activated. This is because the associated [CDS-managed DDIC views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") cannot have cyclical dependencies on each other.

@AbapCatalog.sqlViewName: 'TEST1'
define view test\_view1 as
       select from
       test\_view2
       { \* }

@AbapCatalog.sqlViewName: 'TEST2'
define view test\_view2 as
          select from
          test\_view1
          { \* }

Example

The cyclical dependency of the following views is produced by [CDS associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_glosry.htm "Glossary Entry") and has a semantic background.

-   The view test\_view1 defines and exposes a CDS association \_assoc1 with the view test\_view2.
-   The view test\_view2 defines and exposes a CDS association \_assoc2 with the view test\_view3.
-   The view test\_view3 consumes test\_view1 as a data source and consumes its CDS association \_assoc1 in a specified path.

This means that test\_view2 makes test\_view1 dependent on test\_view3, which itself is dependent on test\_view1. The views, however, do not contain any path expressions that characterize the dependencies between test\_view1 and test\_view2 and between test\_view2 and test\_view3 as join expressions on the database, which means there is no technical cycle and they can be activated in principle. Mass activations of all the views, however, is not currently possible. Situations of this type do not usually arise only after transports into target systems and not during the development phase. In this case, activations are only possible manually. This is done by removing the dependency of the view test\_view3 on test\_view2 (by deleting the CDS association \_assoc2 in test\_view2) and applying the dependency again after the three views are activated. This would have to be done in every target system of a transport.

@AbapCatalog.sqlViewName: 'TEST1'
define view test\_view1 as
       select from
       table1
       association to test\_view2 as \_assoc1
                      on table1.field =  \_assoc1.field
       { \_assoc1,
         field }
@AbapCatalog.sqlViewName: 'TEST2'
define view test\_view2 as
       select from
       table2
       association to test\_view3 as \_assoc2
                      on table2.field =  \_assoc2.field
       { \_assoc2,
         field }
@AbapCatalog.sqlViewName: 'TEST3'
define view test\_view3 as
       select from
       test\_view1
       { \_assoc1.field }