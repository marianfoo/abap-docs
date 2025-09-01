  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Consumers](javascript:call_link\('abenc1_consumer_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Consuming%20Structures%2C%20ABENC1_CONSUMER_RULES_STRUCT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

C1 Contract Rules for Consuming Structures

API providers can add or change non-key elements in global types as structured [DDIC types](javascript:call_link\('abenc1_provider_rules_ddic.htm'\)) or [CDS entities](javascript:call_link\('abenc1_provider_rules_cds.htm'\)). These types can be released APIs themselves or can be used for typing attributes or method parameters of released classes or interfaces. Also the position of non-key elements can be changed. This impacts all operations with APIs that rely on a certain number of components of a structure and on their position. Main examples are:

-   [Includes](#@@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_1)
-   [Assignments and Comparisons](#@@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_2)
-   [Unstructured Access](#@@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_3)
-   [Field Symbols](#@@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_4)
-   [RFC](#@@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_5)

Includes   

Including a released structure into another structure.

Possible Problems

Error, when a component is added that already exists.

Mitigation

Include a released structure only by renaming its components with [suffixes](javascript:call_link\('abenddic_include_structure.htm'\)).

Assignments and Comparisons   

Assignments and comparisons between data objects that are typed with the released structured type and data objects that are typed otherwise can occur for:

-   [Logical Expressions](javascript:call_link\('abenlogexp.htm'\))
-   [Assignments](javascript:call_link\('abenvalue_assignments.htm'\))
-   [Working with internal tables](javascript:call_link\('abenitab.htm'\))
-   [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\))
-   [Working with data clusters](javascript:call_link\('abendata_cluster.htm'\))

Possible Problems

Depending on the change all kinds of errors might occur. The following allowed changes in particular can affect the rules for processing structures fundamentally:

-   Adding numeric components to a formerly character-like structure.
-   Adding [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") components to a formerly [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") structure.
-   Shifting the positions of numeric or deep components to formerly character-like sections.

Mitigation

No assignments or comparisons between released structures and data objects that are typed otherwise. No usage of otherwise defined structures in ABAP SQL. The various CORRESPONDING mechanisms can be used to mitigate the problem, but they are not failsafe in all situations.

Unstructured Access   

Processing the content of a released structure without addressing single components as for example:

-   [Offset/Length Specifications](javascript:call_link\('abenoffset_length.htm'\))
-   [String processing](javascript:call_link\('abenabap_data_string.htm'\)) (on complete structure)

Possible Problems

Depending on the change (see above) all kinds of errors might occur.

Mitigation

No processing of released structures without accessing single components.

Field Symbols   

Addressing released structures with [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") by using:

-   [ASSIGN](javascript:call_link\('abapassign.htm'\))
-   ASSIGNING addition when [working with internal tables](javascript:call_link\('abenitab.htm'\))

Possible Problems

When the addition [CASTING](abapassign_casting.htm#!ABAP_ALTERNATIVE_2@2@) is used, deep components must appear with exactly the same type and position in the assigned structure.

Mitigation

No casting assignment of released structures to field symbols.

RFC   

Passing released structures to remote [RFMs](javascript:call_link\('abenrfm_glosry.htm'\) "Glossary Entry").

Possible Problems

Deep components are not supported in RFC.

Mitigation

No passing of released structures to remote RFMs.