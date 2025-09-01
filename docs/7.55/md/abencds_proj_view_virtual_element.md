  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Projection Views](javascript:call_link\('abencds_proj_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION](javascript:call_link\('abencds_define_view_as_projection.htm'\)) →  [CDS DDL - projection\_view, element\_list](javascript:call_link\('abencds_proj_view_element_list.htm'\)) → 

CDS DDL - projection\_view, VIRTUAL

Syntax

... VIRTUAL elem\_name : [typing](javascript:call_link\('abencds_typing.htm'\))

Effect

Defines a [virtual element](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry") in an [element list](javascript:call_link\('abencds_proj_view_element_list.htm'\)) of a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry"). Virtual elements are read-only elements of a CDS projection view which are not part of the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). Reading the virtual elements of a projection view with ABAP SQL delivers initial values. In order to fill and analyze the virtual elements of projection view, special frameworks like [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry") have to be involved.

In [RAP](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"), for example, a virtual element can be connected to an ABAP class that implements a special virtual element interface by using the [framework-specific](javascript:call_link\('abenfrmwrk_annotation_glosry.htm'\) "Glossary Entry") annotation ObjectModel.virtualElement.CalculatedBy. In that case the value of the virtual element is calculated during runtime by the [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry") framework. For more information, see Using Virtual Elements in CDS Projection Views.

Example

The projection view DEMO\_SALES\_PV\_SO\_EXP is based on the CDS view DEMO\_SALES\_CDS\_SO. It contains a virtual element expiry\_date that is bound to ABAP class CL\_DEMO\_SALES\_VIRT\_ELEM\_EXIT that calculates the expiry date of an item during runtime if the view is accessed by the SADL framework.

@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Exposure of SO Projection View'
define root view entity DEMO\_SALES\_PV\_SO\_EXP
  as projection on DEMO\_SALES\_CDS\_SO
  {
    key     so\_key,
            id,
            lifecycle\_status as LifecycleStatus,
            buyer\_id         as BuyerId,
            created\_by,
            @ObjectModel.virtualElement: true
            @ObjectModel.virtualElementCalculatedBy:
                        'ABAP:CL\_DEMO\_SALES\_VIRT\_ELEM\_EXIT'
    virtual expiry\_date : abap.dats(8),
            \_Buyer : redirected to DEMO\_SALES\_PV\_BUPA\_EXP
  }

Executable Example

The executable example [Calculating a virtual element](javascript:call_link\('abencds_proj_view_virtel_abexa.htm'\)) accesses the CDS projection view shown above and returns the result of the virtual element.

Continue
![Example](exa.gif "Example") [CDS DDL - projection\_view, calculating a virtual element](javascript:call_link\('abencds_proj_view_virtel_abexa.htm'\))