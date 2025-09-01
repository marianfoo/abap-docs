  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Internal Tables - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_oview.htm) →  [Table Keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key.htm) →  [Secondary Table Key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_secondary.htm) → 

Using Secondary Keys

Notes on Using Secondary Table Keys

-   The standard scenario for sensibly using secondary table keys relates to a very large internal table that is created in the memory and whose content is changed very infrequently. [Costs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_memory.htm) for administrating the secondary keys are then only incurred when setting up the internal table.

-   As a matter of principle, secondary hash keys should not have too many components, since otherwise the system has to deal with a high system load for the additional hash management. Sorted keys are preferable for secondary keys with a large number of components.

-   For an index table with secondary keys, the primary index of the table is updated immediately when rows are inserted or deleted using a secondary key. Note deleting a row from a standard table using a secondary key cannot be optimized because the index entry to be deleted must be searched linearly.

-   Secondary keys might be useful for small internal tables in some circumstances because they ensure unique table entries in relation to particular components. Primary keys do not allow this, especially in the case of standard tables.

-   In the case of read-only reads (where ensuring unique table entries is not relevant), non-unique secondary keys are usually sufficient. Performing reads here is almost as quick as for unique keys, while the update following a table modification is quicker and is performed using a lazy update.

-   Secondary table keys should not be used in the following situations:

-   For small internal tables (less than 50 rows), the performance benefits in the case of reads are far outweighed by the increased memory and administration costs.

-   In tables where a large number of changes are made, the load incurred by updating the secondary keys outweighs the performance benefits in the case of reads. In delayed updates and lazy updates in particular, the update load can actually be incurred by the read for which the optimization was actually required.

-   Unless the uniqueness of table entries is of absolute importance, it is better to avoid using secondary hash keys.

Example

The program DEMO\_SECONDARY\_KEYS demonstrates how a secondary table key is specified and the resulting performance gain.