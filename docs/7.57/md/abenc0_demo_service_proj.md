  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for CDS Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Example: C0 Released Service Projection, Design and Consumption, ABENC0_DEMO_SERVICE_
PROJ, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Example: C0 Released Service Projection, Design and Consumption

This topic provides an example for the design of a C0 released service projection. It also shows an example for an extension to this released API from the [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") [ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry").

Service projection as C0 released API

The following CDS projection behavior definition DEMO\_RAP\_PROJ\_EXT\_BEH is based on the CDS projection view DEMO\_RAP\_PROJ\_EXT\_BEH and it fulfills all requirements for C0 release:

-   It uses [strict mode 2](javascript:call_link\('abenbdl_strict_2.htm'\)).
-   It is declared as extensible.

Note: This projection BDEF demonstrates the design of a released API, but it is not actually released for C0, since it is not intended to serve as released API.

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