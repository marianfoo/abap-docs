  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Consumers](javascript:call_link\('abenc1_consumer_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Consuming%20Structures%2C%20ABENC1_CONSUMER_RULES_STRUCT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

C1 Contract Rules for Consuming Structures

API providers can add or change non-key elements in global types as structured [DDIC types](javascript:call_link\('abenc1_provider_rules_ddic.htm'\)) or [CDS entities](javascript:call_link\('abenc1_provider_rules_cds.htm'\)). These types can be released APIs themselves or can be used for typing attributes or method parameters of released classes or interfaces. Also the position of non-key elements can be changed. This impacts all operations with APIs that rely on a certain number of components of a structure and on their position. Main examples are:

-   [Includes](#abenc1-consumer-rules-struct-1-------assignments-and-comparisons---@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_2)
-   [Unstructured Access](#abenc1-consumer-rules-struct-3-------field-symbols---@ITOC@@ABENC1_CONSUMER_RULES_STRUCT_4)
-   [RFC](#abenc1-consumer-rules-struct-5---includes-----including-a-released-structure-into-another-structure---possible-problems--error--when-a-component-is-added-that-already-exists---mitigation--include-a-released-structure-only-by-renaming-its-components-with--suffixes--javascript-call-link---abenddic-include-structure-htm-------assignments-and-comparisons-----assignments-and-comparisons-between-data-objects-that-are-typed-with-the-released-structured-type-and-data-objects-that-are-typed-otherwise-can-occur-for--------logical-expressions--javascript-call-link---abenlogexp-htm----------assignments--javascript-call-link---abenvalue-assignments-htm----------working-with-internal-tables--javascript-call-link---abenitab-htm----------abap-sql--javascript-call-link---abenabap-sql-htm----------working-with-data-clusters--javascript-call-link---abendata-cluster-htm------possible-problems--depending-on-the-change-all-kinds-of-errors-might-occur--the-following-allowed-changes-in-particular-can-affect-the-rules-for-processing-structures-fundamentally-------adding-numeric-components-to-a-formerly-character-like-structure------adding--deep--javascript-call-link---abendeep-glosry-htm-----glossary-entry---components-to-a-formerly--flat--javascript-call-link---abenflat-glosry-htm-----glossary-entry---structure------shifting-the-positions-of-numeric-or-deep-components-to-formerly-character-like-sections---mitigation--no-assignments-or-comparisons-between-released-structures-and-data-objects-that-are-typed-otherwise--no-usage-of-otherwise-defined-structures-in-abap-sql--the-various-corresponding-mechanisms-can-be-used-to-mitigate-the-problem--but-they-are-not-failsafe-in-all-situations---unstructured-access-----processing-the-content-of-a-released-structure-without-addressing-single-components-as-for-example--------offset-length-specifications--javascript-call-link---abenoffset-length-htm----------string-processing--javascript-call-link---abenabap-data-string-htm------on-complete-structure---possible-problems--depending-on-the-change--see-above--all-kinds-of-errors-might-occur---mitigation--no-processing-of-released-structures-without-accessing-single-components---field-symbols-----addressing-released-structures-with--field-symbols--javascript-call-link---abenfield-symbol-glosry-htm-----glossary-entry---by-using--------assign--javascript-call-link---abapassign-htm---------assigning-addition-when--working-with-internal-tables--javascript-call-link---abenitab-htm------possible-problems--when-the-addition--casting--abapassign-casting-htm--abap-alternative-22@) is used, deep components must appear with exactly the same type and position in the assigned structure.

Mitigation

No casting assignment of released structures to field symbols.

RFC   

Passing released structures to remote [RFMs](javascript:call_link\('abenrfm_glosry.htm'\) "Glossary Entry").

Possible Problems

Deep components are not supported in RFC.

Mitigation

No passing of released structures to remote RFMs.