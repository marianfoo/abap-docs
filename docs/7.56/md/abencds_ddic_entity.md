---
title: "ABAP CDS - DDIC-Based Entities"
description: |
  A CDS DDIC-based entity(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_based_entity_glosry.htm 'Glossary Entry') is a CDS entity(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm 'Glossary Entry') for which a CDS-managed DDIC view(htt
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm"
abapFile: "abencds_ddic_entity.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abencds", "ddic", "entity"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) → 

ABAP CDS - DDIC-Based Entities

A [CDS DDIC-based entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_based_entity_glosry.htm "Glossary Entry") is a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") for which a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") is created in the ABAP Dictionary alongside the CDS entity upon activation. Therefore, [DDIC-based entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_based_entity_glosry.htm "Glossary Entry") are not exclusively CDS entities, but also DDIC artefacts (see image below). There is only one kind of DDIC-based entity available, namely [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry").

![Figure](bdoc_ddic_view_2.png)

A [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry") is defined using the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm). This kind of [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") was first released with release 7.40, SP05 and it was for many years the only available kind of CDS view.

Since release 7.55, [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") are available. They are defined using the statement DEFINE VIEW ENTITY. They have evolved from [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), serve the same purpose and have the same structure as their predecessor. But they offer several advantages over the "classic" [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"):

-   No additional DDIC view is created upon activation
-   Improved performance during view activation
-   Optimization and simplification of syntax
-   Stricter syntax checks indicate problematic situations more explicitly (for example, annotation checks)

For these reasons, it is recommended to create [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") instead of [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry") when a new CDS view is required. [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry") are still supported to ensure downward compatibility.

![Figure](bdoc_v1_v2.png)

Migration

The documented ABAP program RUTDDLS\_MIGRATION\_CANDIDATES can be used to evaluate whether a migration from a CDS DDIC-based view to a CDS view entity is possible. This can be done, for example, as part of a manual migration.

The documented ABAP program RUTDDLSV2MIGRATION automates many steps required for migrating CDS DDIC-based views to CDS view entities.

Example

-   The CDS view DEMO\_CDS\_SCARR\_SPFLI shown below is a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry").
-   The second view shown below, DEMO\_CDS\_SCARR\_SPFLI\_2, is a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry") and it uses the new syntax DEFINE VIEW ENTITY.
-   The syntax differs slightly: the second view does not have the annotation @AbapCatalog.sqlViewName, because it doesn't have any DDIC view (the SQL view of the database is derived directly from the definition). Moreover, name lists are not supported and the element names are specified with the keyword AS instead.
-   The program DEMO\_CDS\_DDIC\_VS\_VIEW\_ENTITY uses SELECT to access both views. The result is exactly the same.
    
    @AbapCatalog.sqlViewName: 'DEMO\_CDS\_JOIN'
    @AccessControl.authorizationCheck: #NOT\_ALLOWED
    define view demo\_cds\_scarr\_spfli(
        id,
        carrier,
        flight,
        departure,
        destination
      )
      as select from spfli
        join         scarr on scarr.carrid = spfli.carrid
    {
      key spfli.carrid,
      key scarr.carrname,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }
    
    @AccessControl.authorizationCheck: #NOT\_ALLOWED
    define view entity DEMO\_CDS\_SCARR\_SPFLI\_2
      as select from spfli
          join scarr
            on scarr.carrid = spfli.carrid
        {
          key spfli.carrid   as id,
          key scarr.carrname as carrier,
          key spfli.connid   as flight,
              spfli.cityfrom as departure,
              spfli.cityto   as destination
        }
    

Continue
[ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm)