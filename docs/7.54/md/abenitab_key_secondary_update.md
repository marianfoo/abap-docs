  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Internal Tables - Overview](javascript:call_link\('abenitab_oview.htm'\)) →  [Table Keys](javascript:call_link\('abenitab_key.htm'\)) →  [Secondary Table Key](javascript:call_link\('abenitab_key_secondary.htm'\)) → 

Updating Secondary Keys

For all statements that change the content and structure of an internal table, the internal administration of the secondary keys is updated automatically as follows:

-   For all operations that insert rows into tables or delete rows from tables, the secondary key administration for unique keys is updated immediately. This means that a unique secondary key is up-to-date immediately after the operation ([direct update](javascript:call_link\('abendirect_update_glosry.htm'\) "Glossary Entry")). Non-unique secondary table keys are not updated immediately. Instead, they are updated when the secondary key is next used explicitly using USING KEY or WITH KEY ... COMPONENTS ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")). If updating the administration causes a secondary key uniqueness violation, a [handled exception or runtime error occurs](javascript:call_link\('abenitab_key_duplicates.htm'\)).

Inserting operations include table statements such as [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) and [APPEND](javascript:call_link\('abapappend.htm'\)) and block operations for which the entire body of the table is filled at once, like for statements between internal tables, passing parameters to procedures, filling internal tables with SELECT, importing with [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)), and so on. The operation for deleting table rows is the table statement [DELETE](javascript:call_link\('abapdelete_itab.htm'\)).

-   For operations that change the components of secondary table keys in existing rows, the secondary key administration is either updated directly or when a specified synchronization point is reached.

-   If [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)) is used to modify individual rows, any unique secondary keys are updated directly ([direct update](javascript:call_link\('abendirect_update_glosry.htm'\) "Glossary Entry")). If the modification produces duplicate entries, a non-handleable exception is raised.

-   If field symbols or data references are used to modify individual rows, and these symbols or references point to table rows, any unique secondary keys are updated the next time the internal table is accessed ([delayed update](javascript:call_link\('abendelayed_update_glosry.htm'\) "Glossary Entry")). The uniqueness check also waits until the synchronization point is reached. An internal table can therefore be in an inconsistent state with respect to the secondary key following a modification to existing rows using field symbols or data references. The corresponding [exception](javascript:call_link\('abenitab_key_duplicates.htm'\)) is only raised when the table is next used.

In both cases, a non-unique key not updated until the secondary table key is next used explicitly ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")).

The methods FLUSH\_ITAB\_KEY and FLUSH\_ITAB\_KEYS of the class CL\_ABAP\_ITAB\_UTILITIES can be used to update individual secondary keys or all secondary keys of an internal table explicitly in exceptional circumstances. These methods can be used for analysis and test purposes. It might also make sense to use them after making changes if the next access does not take place immediately afterwards to handle possible exceptions there and then.

Executable Example

The example of [Deletion Using Table Keys](javascript:call_link\('abendelete_itab_using_key_abexa.htm'\)) demonstrates the runtimes that are required to create the secondary key and when they occur.