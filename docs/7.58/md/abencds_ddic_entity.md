---
title: "ABAP CDS - DDIC-Based Entities (Obsolete)"
description: |
  It is still possible, but not recommended, to create DDIC-based entities. SAP recommends creating CDS view entities instead of CDS DDIC-based views. A CDS DDIC-based entity(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_based_entity_glosry.htm 'Glossary Entry') is a CDS e
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_entity.htm"
abapFile: "abencds_ddic_entity.htm"
keywords: ["select", "delete", "do", "if", "try", "class", "data", "abencds", "ddic", "entity"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20DDIC-Based%20Entities%20%28Obsolete%29%2C%20ABENCDS_DDIC_ENTITY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

ABAP CDS - DDIC-Based Entities (Obsolete)

It is still possible, but not recommended, to create DDIC-based entities. SAP recommends creating CDS view entities instead of CDS DDIC-based views.

A [CDS DDIC-based entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_based_entity_glosry.htm "Glossary Entry") is a [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") for which a [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") is created in the ABAP Dictionary alongside the CDS entity upon activation. Therefore, [DDIC-based entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_based_entity_glosry.htm "Glossary Entry") are not exclusively CDS entities, but also DDIC artefacts (see image below). There is only one kind of DDIC-based entity available, namely [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry").

![Figure](abdoc_ddic_view_2.png)

A [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry") is defined using the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_v1.htm). This kind of [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") was first released with release 7.40, SP05 and it was for many years the only available kind of CDS view.

Since release 7.55, [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") are available. They are defined using the statement DEFINE VIEW ENTITY. They have evolved from [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), serve the same purpose and have the same structure as their predecessor. But they offer several advantages over the classic [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"):

-   No additional DDIC view is created upon activation
-   Improved performance during view activation
-   Optimization and simplification of syntax
-   Stricter syntax checks indicate problematic situations more explicitly (for example, annotation checks)

A complete and exhaustive list of new features, improvements, and differences is provided in the following blog series: [CDS view entities are feature complete. Overview of new features, improvements, and differences](https://blogs.sap.com/2022/05/06/cds-view-entities-are-feature-complete.-overview-of-new-features-improvements-and-differences/).

For these reasons, it is recommended that [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") are created instead of [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry") when a new CDS view is required. [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry") are still supported to ensure downward compatibility.

![Figure](abdoc_v1_v2.png)

Migration   

The documented ABAP program RUTDDLS\_MIGRATION\_CANDIDATES can be used to evaluate whether a migration from a CDS DDIC-based view (obsolete) to a CDS view entity is possible. This can be done, for example, as part of a manual migration.

The documented ABAP program RUTDDLSV2MIGRATION automates many steps required for migrating CDS DDIC-based views (obsolete) to CDS view entities.

The ABAP program RUT\_WHERE\_USE\_SQLVIEW lists all [repository objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_object_glosry.htm "Glossary Entry") that use [CDS-managed DDIC views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"). Using CDS-managed DDIC views has been declared [obsolete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_obsolete.htm) and this tool helps in adjusting coding. This is useful, for example, when CDS views are migrated to CDS view entities and the CDS-managed DDIC-view is deleted as part of the migration.

Details on migration and the available tools are described in the following blog post: [A new generation of CDS views: how to migrate your CDS views to CDS view entities](https://blogs.sap.com/2021/10/16/a-new-generation-of-cds-views-how-to-migrate-your-cds-views-to-cds-view-entities/),

Example

-   The CDS view DEMO\_CDS\_SCARR\_SPFLI shown below is a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry").
-   The second view shown below, DEMO\_CDS\_SCARR\_SPFLI\_2, is a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") and it uses the new syntax DEFINE VIEW ENTITY.
-   The syntax differs slightly: the second view does not have the annotation @AbapCatalog.sqlViewName, because it does not have any DDIC view (the SQL view of the database is derived directly from the definition). Moreover, name lists are not supported and the element names are specified with the keyword AS instead.
-   The class CL\_DEMO\_CDS\_DDIC\_VS\_VIEW\_ENTTY uses SELECT to access both views. The result is exactly the same.
    
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
[ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_views.htm)