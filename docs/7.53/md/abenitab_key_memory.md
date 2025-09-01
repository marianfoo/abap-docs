  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_oview.htm) → 

Row-Based Administration Costs of Internal Tables

In addition to the basic memory requirement described in [Memory requirement for deep data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmemory_consumption_1.htm) required to administrate internal tables in table headers, additional memory is required to administrate each individual row, so permitting optimized access to the individual rows. This internal administration of individual rows has two variants:

-   A [table index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_index_glosry.htm "Glossary Entry") administrates the logical order of table rows. The additional memory requirement is 6 bytes per table row on average. Exception: If the logical order matches the physical order in the table body, no additional memory is required for the index.

-   [Hash administration](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhash_algorithm_glosry.htm "Glossary Entry") allows table rows to be accessed by hashing the corresponding key components. The additional memory requirement is 18 bytes per table row on average as long as the table is not accessed using the [DELETE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab.htm) or [SORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm) statements. Following access of this type, an average of 30 bytes is required per table row.

How a table row is administrated depends on the [table category](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_category_glosry.htm "Glossary Entry") and any existing [secondary table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The table category determines the basic administration of the rows of an internal table (table index for [index tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenindex_table_glosry.htm "Glossary Entry"), hash administration for [hashed tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry")). Each additional secondary table key introduces additional row administration (table index for [sorted keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_key_glosry.htm "Glossary Entry"), hash administration for [hash keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhash_key_glosry.htm "Glossary Entry")).

Indexes are therefore created in the following cases:

-   As the [primary table index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") of a [standard table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") for managing the order arising from index operations. However, the order in the index has no relation to the content of the table rows. The index is only for the optimization of index accesses. Content searches cannot be optimized and always produce a linear search of all table rows.

-   As the [primary table index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") of a sorted table or as the [secondary table index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") of a sorted secondary table of any other table for managing the order of table rows in accordance with the sorted primary or secondary table key. The order of table rows is determined by the view of the table rows defined by the sorted table keys. This defines an order for the rows of the table that can be used for optimized access by the binary search.

Hash administrations are created in the following cases:

-   For the [primary table key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of a hashed table or for a secondary [hash key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhash_key_glosry.htm "Glossary Entry") of any other table. They do not permit index access. They can only be used for optimized access with a fully specified table key.

If secondary table keys are used, additional memory costs may be incurred.

-   An internal table with at least one ambiguous sorted secondary key needs an additional 8 bytes per table row for the basic costs of administrating possible duplicates. These additional basic costs are incurred only once and not for each table key.

-   Additional memory costs are incurred if a secondary key needs to be updated following a change to the content of the internal table. Again, this costs a few bytes per table row but varies greatly depending on the number of changes made.

Examples

-   A standard table with a secondary hash key that is exclusively filled with [APPEND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapappend.htm) requires:

-   No additional memory for the primary index since the logical and physical orders are the same

-   18 bytes per row for the hash administration of the secondary key

Following an access using [DELETE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab.htm) or [SORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm), the memory requirement per row jumps to 6 bytes for the primary index and 30 bytes for the hash administration.

-   A sorted table with a secondary hash key and two non-unique sorted secondary keys requires:

-   6 bytes per row for the primary index

-   18 or 30 bytes per row for the hash administration of the secondary hash key

-   6 bytes per row and key for the sorted secondary key from the moment from which it is used

-   8 bytes per row because there is at least one non-unique sorted secondary key