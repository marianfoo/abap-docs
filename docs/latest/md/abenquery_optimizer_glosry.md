  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20query%20optimizer%2C%20ABENQUERY_OPTIMIZER_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

query optimizer

The query optimizer generates the most efficient query execution plan for a given query and passes it to the executor. In [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry"), there are basically two optimization tasks:

-   Rule-based optimization (declarative): Rewriting of the entire tree by, for example, removing joins. More efficient queries are produced at best.
-   Cost-based optimization (procedural): Discovering the space of access plans of the queries produced during the rule-based optimization and comparing the access plans by cost and size. The cheapest query is used for further processing.