  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_oview.htm) →  [itab - Table Key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_key.htm) →  [itab - Secondary Table Key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_key_secondary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Using Secondary Keys, ABENITAB_KEY_SECONDARY_USAGE, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Using Secondary Keys

Notes on Using Secondary Table Keys

-   The standard scenario for profitable use of secondary table keys is a very large internal table that is constructed once in the memory and whose content is then changed very infrequently. [Costs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_key_memory.htm) for the administration of the secondary keys are then only incurred during the construction of the internal table.
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