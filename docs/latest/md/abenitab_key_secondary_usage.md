  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendobj_itab.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key.htm) →  [itab - Secondary Table Key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key_secondary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Using%20Secondary%20Keys%2C%20ABENITAB_KEY_SECONDARY_USAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Using Secondary Keys

Notes on Using Secondary Table Keys

-   The standard scenario for profitable use of secondary table keys is a very large internal table that is constructed once in the memory and whose content is then changed very infrequently. [Costs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key_memory.htm) for the administration of the secondary keys are then only incurred during the construction of the internal table.
-   As a matter of principle, secondary hash keys should not have too many components to avoid overloading the system with the additional hash management. Sorted keys are preferable for secondary keys with a large number of components.
-   For an index table with secondary keys, the primary index of the table is updated immediately when lines are inserted or deleted using a secondary key. It should be noted that deleting a line from a standard table using a secondary key cannot be optimized because the index entry to be deleted must be searched for linearly.
-   Secondary keys might be useful for small internal tables in some circumstances because they ensure unique table entries in relation to certain components. Primary keys do not allow this, especially in the case of standard tables.
-   For read-only access, where ensuring unique table entries is not as important, non-unique secondary keys are usually sufficient. Read access here is almost as fast as for unique keys, whereas updating after a table modification is faster and is performed using a lazy update.
-   Secondary table keys should not be used in the following situations:
    -   For small internal tables (less than 50 lines), the performance benefits for read accesses are far outweighed by the increased memory and administration costs.
    -   In tables where a large number of changes are made, the costs incurred by updating the secondary keys outweighs the performance benefits in the case of reads. In delayed updates and lazy updates in particular, the update costs can actually be incurred by the read access for which the optimization was intended.
    -   Unless the uniqueness of table entries is of absolute importance, it is better to avoid using secondary hash keys.

Example

The program DEMO\_SECONDARY\_KEYS demonstrates how a secondary table key is specified and the resulting performance gain.