  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Line-Based%20Administration%20Costs%2C%20ABENITAB_KEY_MEMORY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Line-Based Administration Costs

In addition to the basic memory requirement specified in [Memory Requirement for Deep Data Objects](javascript:call_link\('abenmemory_consumption_1.htm'\)), which is created to administrate internal tables in table headers, additional memory is required for administrating each individual line, so allowing optimized access to the individual lines. This internal administration of individual lines has two variants:

-   A [table index](javascript:call_link\('abentable_index_glosry.htm'\) "Glossary Entry") administrates the logical order of table lines. The additional memory requirement is 6 bytes per table line on average. Exception: If the logical order matches the physical order in the table body, no additional memory is required for the index.
-   [Hash administration](javascript:call_link\('abenhash_algorithm_glosry.htm'\) "Glossary Entry") is used to access table lines to be accessed by hashing the associated key components. The additional memory requirement is 18 bytes per table line on average, as long as the table is not accessed using the [DELETE](javascript:call_link\('abapdelete_itab.htm'\)) or [SORT](javascript:call_link\('abapsort_itab.htm'\)) statements. Following this type of access, an average of 30 bytes is required per table line.

How a table line is administrated depends on the [table category](javascript:call_link\('abentable_category_glosry.htm'\) "Glossary Entry") and any existing [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). The table category determines the basic administration of the lines of an internal table (table index for [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry"), hash administration for [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry")). Each additional secondary table key introduces additional line administration (table index for [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry"), hash administration for [hash keys](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry")).

Indexes are therefore created in the following cases:

-   As the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") of a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") for managing the order created by index operations. However, the order in the index has no relation to the content of the table lines. The index is only for the optimization of index accesses. Content searches cannot be optimized and always lead to a linear search across all table lines.
-   As the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") of a sorted table or as the [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") of a sorted secondary table of any table for managing the order of table lines in accordance with the sorted primary or secondary table key. The order of table lines is determined by the view of the table lines defined by the sorted table keys. This defines an order for the lines of the table that can be used for optimized access by the binary search.

Hash administrations are created in the following cases:

-   For the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") of a hashed table or for a secondary [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") of any other table. They do not allow index access. They can only be used for optimized access with a completely specified table key.

If secondary table keys are used, additional memory costs may be incurred.

-   An internal table with at least one ambiguous sorted secondary key needs an additional 8 bytes per table line for the basic costs to administrate possible duplicates. These additional basic costs are incurred only once and not for each table key.
-   Additional memory costs are incurred if a secondary key must be updated following a change to the content of the internal table. These vary in size from a few bytes per table line and depend heavily on the number of changes made.

Examples

-   A standard table with a secondary hash key that is exclusively filled with [APPEND](javascript:call_link\('abapappend.htm'\)) requires:
    
    -   No additional memory for the primary index since the logical and physical orders are the same
    -   18 bytes per line for the hash administration of the secondary key
    
    Following an access using [DELETE](javascript:call_link\('abapdelete_itab.htm'\)) or [SORT](javascript:call_link\('abapsort_itab.htm'\)), the memory requirement per line increases to 6 bytes for the primary index and 30 bytes for the hash administration.
    
-   A sorted table with a secondary hash key and two non-unique sorted secondary keys requires:
    -   6 bytes per line for the primary index
    -   18 or 30 bytes per line for the hash administration of the secondary hash key
    -   6 bytes per line and key for the sorted secondary key from the moment from which it is used
    -   8 bytes per line because there is at least one non-unique sorted secondary key.