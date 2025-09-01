  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [Internal Tables](javascript:call_link\('abendobj_itab.htm'\)) →  [itab - Table Key](javascript:call_link\('abenitab_key.htm'\)) →  [itab - Secondary Table Key](javascript:call_link\('abenitab_key_secondary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Updating%20Secondary%20Table%20Keys%2C%20ABENITAB_KEY_SECONDARY_UPDATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

itab - Updating Secondary Table Keys

For all statements that change the content and structure of an internal table, the internal administration of the secondary keys is updated automatically as follows:

-   For all operations that insert lines into tables or delete lines from tables, the secondary key administration for unique keys is updated immediately, that is, a unique secondary key is up-to-date immediately after the operation ([direct update](javascript:call_link\('abendirect_update_glosry.htm'\) "Glossary Entry")). Non-unique secondary table keys are not updated immediately and only when the secondary key is next used explicitly using USING KEY or WITH KEY ... COMPONENTS ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")). If an update violates secondary key uniqueness, a [catchable exception or runtime error occurs](javascript:call_link\('abenitab_key_duplicates.htm'\)).
    
    Inserting operations include table statements such as [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) and [APPEND](javascript:call_link\('abapappend.htm'\)) and block operations in which the entire body of the table is filled at once, like for statements between internal tables, passing parameters to procedures, filling internal tables with SELECT, importing with [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)), and so on. The operation for deleting table lines is the table statement [DELETE](javascript:call_link\('abapdelete_itab.htm'\)).
    
-   For operations that change the components of secondary table keys in existing lines, the secondary key administration is either updated directly or only at a specified synchronization time.
    
    -   If [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)) is used to modify individual lines, any unique secondary keys are updated directly ([direct update](javascript:call_link\('abendirect_update_glosry.htm'\) "Glossary Entry")). If the modification produces duplicate entries, an uncatchable exception is raised.
    -   If field symbols or data references that point to table lines are used to modify individual lines, any unique secondary keys are updated the next time the internal table is accessed ([delayed update](javascript:call_link\('abendelayed_update_glosry.htm'\) "Glossary Entry")). The uniqueness check also only takes place at the time of synchronization. An internal table can therefore be in an inconsistent state with respect to the secondary key following a modification to existing lines using field symbols or data references. The corresponding [exception](javascript:call_link\('abenitab_key_duplicates.htm'\)) is only raised when the table is next used.
    
    In both cases, a non-unique key not updated until the secondary table key is next used explicitly ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")).
    

The methods FLUSH\_ITAB\_KEY and FLUSH\_ITAB\_KEYS of the class CL\_ABAP\_ITAB\_UTILITIES can be used to update individual secondary keys or all secondary keys of an internal table explicitly in exceptional circumstances. These methods can be used for analysis and test purposes. It might also make sense to use them after making changes if the next access does not take place immediately afterwards to handle possible exceptions there and then.

Executable Example

The example for [Deletion Using Table Keys](javascript:call_link\('abendelete_itab_using_key_abexa.htm'\)) demonstrates the runtimes that are required to create the secondary key and when they occur.