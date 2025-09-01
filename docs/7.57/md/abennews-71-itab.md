  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-70_ehps.htm) →  [News for Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-71.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Internal Tables in Release 7.0, EhP2, ABENNEWS-71-ITAB, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Internal Tables in Release 7.0, EhP2

[1\. Dynamic WHERE Condition](#!ABAP_MODIFICATION_1@1@)
[2\. Definition of Secondary Table Keys](#!ABAP_MODIFICATION_2@2@)
[3\. Using Secondary Keys](#!ABAP_MODIFICATION_3@3@)
[4\. Updating Secondary Keys](#!ABAP_MODIFICATION_4@4@)
[5\. Streaming for Internal Tables](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Dynamic WHERE Condition

From Release 7.0, EhP2, the statements [LOOP AT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm), [MODIFY itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab.htm), and [DELETE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab.htm) make it possible to specify the [WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm) condition in a cond\_syntax data object dynamically.

Modification 2   

Definition of Secondary Table Keys

Previously, each internal table had just one [table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_key_glosry.htm "Glossary Entry"). Any search key could be entered when accessing internal tables, but this was not very efficient. Also, standard tables were always searched linearly during key access. To be able to efficiently access an internal table with different keys, and to also allow efficient key access to standard tables, secondary table keys were introduced.

From Release 7.0, EhP2, [secondary table keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") can be defined for internal tables with [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_keydef.htm) and [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_keydef.htm) as well as in ABAP Dictionary. An internal table can have up to 15 secondary table keys with different names. At the same time, what was previously the table key became the primary table key, and a predefined name for it, primary\_key, was introduced. This can be replaced with an alias name in the [enhanced definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_primary_key.htm) of the primary table key in Release 7.0, EhP2.

Secondary table keys can be [hash keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhash_key_glosry.htm "Glossary Entry") or [sorted keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensorted_key_glosry.htm "Glossary Entry"). A [secondary table index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") is created for each sorted secondary key of an internal table. The previous table index, which exists only for index tables, becomes the [primary table index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_table_index_glosry.htm "Glossary Entry").

Secondary table keys are part of the [technical type properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry") of an internal table. Secondary keys can be specified generically for standalone table types.

Modification 3   

Using Secondary Keys

The following additions have been introduced for statements that access lines of internal tables:

-   WITH *\[*TABLE*\]* KEY keyname COMPONENTS ...
-   USING KEY keyname

keyname can be used to specify the name of the key to be used statically or dynamically.

At the same time, statements that previously only accessed the primary key have been enhanced so that access to secondary keys is also possible. The table index used can now also be specified explicitly using a table key when indexes are specified. The system field sy-tabix is now filled with reference to the table index used. It is set to 0 for access using a hash key.

The enhanced statements are:

-   [READ TABLE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm)
    
    The lines to be read can be specified using a secondary key.
    
-   [LOOP AT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm)
    
    The processing sequence and conditions can be controlled using a secondary table key.
    
-   [INSERT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab.htm)
    
    Only a secondary key for the source table can be specified here, from which multiple lines are copied. The position they are inserted at is determined solely using the primary key and the primary index.
    
-   [APPEND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend.htm)
    
    Only a secondary key for the source table can be specified here, onto which multiple lines are appended.
    
-   [MODIFY itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab.htm)
    
    The lines to be modified can be specified using a secondary key.
    
-   [DELETE itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab.htm)
    
    The lines to be deleted can be specified using a secondary key.
    

In statements where these additions have not been introduced, such as [SORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm), [COLLECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcollect.htm), or [PROVIDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprovide.htm), secondary keys are not explicitly supported.

Modification 4   

Updating Secondary Keys

In all statements that change the content or structure of an internal table, the internal administration of the secondary table key (hash administration or secondary table index) is updated automatically as follows:

-   In inserting operations, such as INSERT or APPEND, and in change operations using MODIFY, the secondary table key administration of unique keys is updated immediately ([direct update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendirect_update_glosry.htm "Glossary Entry")), while for non-unique table keys it is updated upon the next explicit use of the secondary table key ([lazy update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlazy_update_glosry.htm "Glossary Entry")). If an update infringes the uniqueness of a secondary key, an exception is raised immediately.
-   For block operations, such as statements between internal tables, or when internal tables are filled using SELECT, the behavior is the same as with inserting operations.
-   When individual lines are modified using field symbols or data references that point to table lines, the secondary key administration of unique keys is updated upon the next access to the internal table ([delayed update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendelayed_update_glosry.htm "Glossary Entry")), and the secondary key administration of non-unique keys is updated upon the next explicit use of the secondary table key ([lazy update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlazy_update_glosry.htm "Glossary Entry")). A uniqueness check is also run when the update is made. An internal table might therefore be in an inconsistent state with respect to the secondary key after individual lines are modified. An exception is not raised until the table is next used.

Class CL\_ABAP\_ITAB\_UTILITIES contains methods that can be used to update single secondary keys or all secondary keys for an internal table in exceptional situations.

Modification 5   

Streaming for Internal Tables

The new [streaming](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstreaming_glosry.htm "Glossary Entry") concept supports [internal tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_streams.htm).