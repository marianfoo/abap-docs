  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

ABAP CDS in Release 7.55

[1\. Defining associations in CDS projection views](#!ABAP_MODIFICATION_1@1@)
[2\. CDS view entities](#!ABAP_MODIFICATION_2@2@)

Modification 1

Defining associations in CDS projection views

It is now possible to define new associations to external data sources in [CDS projection views](javascript:call_link\('abencds_define_view_as_projection.htm'\)).

Modification 2

CDS view entities

A new kind of CDS view is available: the [CDS view entity](javascript:call_link\('abencds_v2_views.htm'\)). CDS view entities represent an improved version of [CDS DDIC-based views](javascript:call_link\('abencds_v1_views.htm'\)) (DEFINE VIEW). They serve the same purpose and have the same structure as CDS DDIC-based views, but offer many advantages. CDS view entities are planned to replace CDS DDIC-based views in the future. A CDS view entity is defined with the statement DEFINE VIEW ENTITY.