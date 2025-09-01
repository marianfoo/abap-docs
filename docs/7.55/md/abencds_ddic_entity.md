  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) → 

ABAP CDS - DDIC-Based Entities

A [CDS DDIC-based entity](javascript:call_link\('abencds_ddic_based_entity_glosry.htm'\) "Glossary Entry") is a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for which a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") is created in the ABAP Dictionary alongside the CDS entity upon activation. Therefore, [DDIC-based entities](javascript:call_link\('abencds_ddic_based_entity_glosry.htm'\) "Glossary Entry") are not exclusively CDS entities, but also DDIC artefacts (see image below). There is only one kind of DDIC-based entity available, namely [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").

![Figure](abdoc_ddic_view_2.png)

A [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") is defined using the statement [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)). This kind of [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") was first released with release 7.40, SP05 and it was for many years the only available kind of CDS view.

Since release 7.55, [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") are available. They are defined using the statement DEFINE VIEW ENTITY. They have evolved from [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), serve the same purpose and have the same structure as their predecessor. But they offer several advantages over the "classic" [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"):

-   No additional ABAP Dictionary view is created upon activation

-   Improved performance during view activation

-   Optimization and simplification of syntax

-   Stricter syntax checks indicate problematic situations more explicitly (for example, annotation checks)

For these reasons, it is recommended to create [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") instead of [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") when a new CDS view is required. [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") are still supported to ensure downward compatibility.

![Figure](abdoc_v1_v2.png)

Example

-   The CDS view DEMO\_CDS\_SCARR\_SPFLI shown below is a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").

-   The second view shown below, DEMO\_CDS\_SCARR\_SPFLI\_2, is a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") and it uses the new syntax DEFINE VIEW ENTITY.

-   The syntax differs slightly: the second view does not have the annotation @AbapCatalog.sqlViewName, because it doesn't have any DDIC view. Moreover, name lists are not supported and the element names are specified with the keyword AS instead.

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
  as select from
           spfli
      join scarr on
        scarr.carrid = spfli.carrid
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
[ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\))