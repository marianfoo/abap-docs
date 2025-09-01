  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for RAP Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%3A%20C0%20Released%20Projection%20BDEF%2C%20Design%20and%20Consumption%2C%20ABENC0_DEMO_SERVICE_PROJ%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion%20for%20improvement:)

Example: C0 Released Projection BDEF, Design and Consumption

This topic provides an example for the design of a C0 released projection BDEF. It also shows an example for an extension to this released API from the [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") [ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry").

Projection BDEF as C0 released API

The following projection BDEF DEMO\_RAP\_PROJ\_EXT\_BEH is based on the CDS projection view DEMO\_RAP\_PROJ\_EXT\_BEH and it fulfills all requirements for C0 release:

-   It uses BDEF strict mode, version 2.
-   It is enabled for RAP extensibility.

Note: This projection BDEF shows how to create a released API. It meets all the requirements for C0 release. However, it is not released under the C0 contract, extend, because it is not intended to be used as an API.

projection;
strict(2);
extensible;
define behavior for demo\_rap\_proj\_ext\_beh alias Root
extensible
{
  use create;
  use update;
  use delete;
}

BDEF projection extension to a C0 released API

The following BDEF projection extension DEMO\_RAP\_PROJ\_EXT\_BEH\_1 extends the projection BDEF displayed above and it obeys the naming rules.

extension for projection;
extend behavior for Root
authorization (global)
{
  use association \_child {create;}
  use action setValue;
  mapping for demo\_rap\_struc corresponding;
}
define behavior for DEMO\_RAP\_PROJ\_EXT\_BEH\_CH alias Child
{
  use association \_parent;
  use action ActionExt;
  field ( readonly ) int\_field3;
}