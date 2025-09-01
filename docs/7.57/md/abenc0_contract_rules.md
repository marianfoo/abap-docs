  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C0 Contract Rules, ABENC0_CONTRACT_RULES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

C0 Contract Rules

The [C0 contract](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry") is the [release contract](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry") that is crucial for extending APIs. It ensures stability at dedicated extension points to allow for a certain extensibility of repository objects by using enhancement tools. Contract C0 is relevant for repository objects that are enhanced by enhancement tools, e.g. of the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") or [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). The following topics list the most important rules that must be obeyed by API providers and API consumers.

-   [C0 Contract Rules for CDS Entities](javascript:call_link\('abenc0_contract_rules_cds.htm'\))
-   [C0 Contract Rules for CDS Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\))

Hints

-   A list of all transportable released APIs can be found in topic [Released APIs](javascript:call_link\('abenreleased_apis.htm'\)).
-   You can configure your ADT to display a folder with C0 released APIs as follows:
    -   Right-click the respective project and click New > ABAP Repository Tree.
    -   On the Create Tree screen, choose Blank and click Next.
    -   On the next screen, enter a tree name in field Tree Name and insert the following property filter: api: Extend\_in\_cloud\_development.
    -   Click Finish.

Continue
[C0 Contract Rules for CDS Entities](javascript:call_link\('abenc0_contract_rules_cds.htm'\))
[C0 Contract Rules for CDS Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\))