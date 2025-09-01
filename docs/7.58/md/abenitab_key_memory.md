  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_objects.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendobj_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Line-Based%20Administration%20Costs%2C%20ABENITAB_KEY_MEMORY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Line-Based Administration Costs

In addition to the basic memory requirement specified in [Memory Requirement for Deep Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_consumption_1.htm), which is created to administrate internal tables in table headers, additional memory is required for administrating each individual line, so allowing optimized access to the individual lines. This internal administration of individual lines has two variants:

-   A [table index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_index_glosry.htm "Glossary Entry") administrates the logical order of table lines. The additional memory requirement is 6 bytes per table line on average. Exception: If the logical order matches the physical order in the table body, no additional memory is required for the index.
-   [Hash administration](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhash_algorithm_glosry.htm "Glossary Entry") is used to access table lines to be accessed by hashing the associated key components. The additional memory requirement is 18 bytes per table line on average, as long as the table is not accessed using the [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab.htm) or [SORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm) statements. Following this type of access, an average of 30 bytes is required per table line.

How a table line is administrated depends on the [table category](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_category_glosry.htm "Glossary Entry") and any existing [secondary table keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The table category determines the basic administration of the lines of an internal table (table index for [index tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenindex_table_glosry.htm "Glossary Entry"), hash administration for [hashed tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhashed_table_glosry.htm "Glossary Entry")). Each additional secondary table key introduces additional line administration (table index for [sorted keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensorted_key_glosry.htm "Glossary Entry"), hash administration for [hash keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhash_key_glosry.htm "Glossary Entry")).

Indexes are therefore created in the following cases:

-   As the [primary table index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") of a [standard table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_table_glosry.htm "Glossary Entry") for managing the order created by index operations. However, the order in the index has no relation to the content of the table lines. The index is only for the optimization of index accesses. Content searches cannot be optimized and always lead to a linear search across all table lines.
-   As the [primary table index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") of a sorted table or as the [secondary table index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") of a sorted secondary table of any table for managing the order of table lines in accordance with the sorted primary or secondary table key. The order of table lines is determined by the view of the table lines defined by the sorted table keys. This defines an order for the lines of the table that can be used for optimized access by the binary search.

Hash administrations are created in the following cases:

-   For the [primary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of a hashed table or for a secondary [hash key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhash_key_glosry.htm "Glossary Entry") of any other table. They do not allow index access. They can only be used for optimized access with a completely specified table key.

If secondary table keys are used, additional memory costs may be incurred.

-   An internal table with at least one ambiguous sorted secondary key needs an additional 8 bytes per table line for the basic costs to administrate possible duplicates. These additional basic costs are incurred only once and not for each table key.
-   Additional memory costs are incurred if a secondary key must be updated following a change to the content of the internal table. These vary in size from a few bytes per table line and depend heavily on the number of changes made.

Examples

-   A standard table with a secondary hash key that is exclusively filled with [APPEND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapappend.htm) requires:
    
    -   No additional memory for the primary index since the logical and physical orders are the same
    -   18 bytes per line for the hash administration of the secondary key
    
    Following an access using [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_itab.htm) or [SORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm), the memory requirement per line increases to 6 bytes for the primary index and 30 bytes for the hash administration.
    
-   A sorted table with a secondary hash key and two non-unique sorted secondary keys requires:
    -   6 bytes per line for the primary index
    -   18 or 30 bytes per line for the hash administration of the secondary hash key
    -   6 bytes per line and key for the sorted secondary key from the moment from which it is used
    -   8 bytes per line because there is at least one non-unique sorted secondary key.