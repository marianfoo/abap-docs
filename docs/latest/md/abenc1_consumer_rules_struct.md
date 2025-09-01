  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C1 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_rules.htm) →  [C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_consumer_rules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Consuming%20Structures%2C%20ABENC1_CONSUMER_RULES_STRUCT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

C1 Contract Rules for Consuming Structures

API providers can add or change non-key elements in global types as structured [DDIC types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_ddic.htm) or [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_provider_rules_cds.htm). These types can be released APIs themselves or can be used for typing attributes or method parameters of released classes or interfaces. Also the position of non-key elements can be changed. This impacts all operations with APIs that rely on a certain number of components of a structure and on their position. Main examples are:

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

Include a released structure only by renaming its components with [suffixes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_include_structure.htm).

Assignments and Comparisons   

Assignments and comparisons between data objects that are typed with the released structured type and data objects that are typed otherwise can occur for:

-   [Logical Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm)
-   [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm)
-   [Working with internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm)
-   [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm)
-   [Working with data clusters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm)

Possible Problems

Depending on the change all kinds of errors might occur. The following allowed changes in particular can affect the rules for processing structures fundamentally:

-   Adding numeric components to a formerly character-like structure.
-   Adding [deep](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeep_glosry.htm "Glossary Entry") components to a formerly [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") structure.
-   Shifting the positions of numeric or deep components to formerly character-like sections.

Mitigation

No assignments or comparisons between released structures and data objects that are typed otherwise. No usage of otherwise defined structures in ABAP SQL. The various CORRESPONDING mechanisms can be used to mitigate the problem, but they are not failsafe in all situations.

Unstructured Access   

Processing the content of a released structure without addressing single components as for example:

-   [Offset/Length Specifications](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm)
-   [String processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) (on complete structure)

Possible Problems

Depending on the change (see above) all kinds of errors might occur.

Mitigation

No processing of released structures without accessing single components.

Field Symbols   

Addressing released structures with [field symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_symbol_glosry.htm "Glossary Entry") by using:

-   [ASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign.htm)
-   ASSIGNING addition when [working with internal tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm)

Possible Problems

When the addition [CASTING](abapassign_casting.htm#!ABAP_ALTERNATIVE_2@2@) is used, deep components must appear with exactly the same type and position in the assigned structure.

Mitigation

No casting assignment of released structures to field symbols.

RFC   

Passing released structures to remote [RFMs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfm_glosry.htm "Glossary Entry").

Possible Problems

Deep components are not supported in RFC.

Mitigation

No passing of released structures to remote RFMs.